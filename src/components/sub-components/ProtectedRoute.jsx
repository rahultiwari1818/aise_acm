import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

export default function ProtectedRoute() {
  // null = checking auth, true = authenticated, false = not authenticated
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const token = Cookies.get("adminToken");
    if (token) {
      // Optionally verify token validity here with API call
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  // While checking auth, render nothing or a loader
  if (isAuthenticated === null) {
    return <div>Loading...</div>;  // or null if you want blank
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}
