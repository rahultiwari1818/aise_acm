import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { label: "Home", href: "/" },
    // { label: "About", href: "/#about" },
    { label: "Program", href: "/#agenda" },
    { label: "Organizers", href: "/#organizers" },
    { label: "Speakers", href: "/speakers" },
    { label: "Venue", href: "/#Venue" },
    { label: "Registration", href: "/#Registration" },
    { label: "5 MRT", href: "/5mrt" },
    { label: "Grant", href: "/#Grant" },
    { label: "Industry Showcase", href: "/industry-showcase" },
    { label: "Hackathon", href: "/hackathon" },
  ];

  const handleHashNavigation = (href) => {
    const [path, hash] = href.split("#");
    navigate(path || "/");

    setTimeout(() => {
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 100); // slight delay to ensure content is mounted
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">
          <a href="/">
            <img src={logo} alt="logo" className="h-16 w-32" />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          {navLinks.map((link) => {
            if (link.href.includes("#")) {
              return (
                <button
                  key={link.href}
                  onClick={() => {
                    setIsOpen(false);
                    handleHashNavigation(link.href);
                  }}
                  className="text-gray-700 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.01] 
                  transition-all duration-300 hover:border hover:border-b-2 hover:border-blue-500 hover:border-t-1 rounded-2xl p-2"
                >
                  {link.label}
                </button>
              );
            } else if (link.href === "/hackathon" || link.href === "/5mrt" || link.href === "/industry-showcase"|| link.href === "/speakers") {
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.01] 
                  transition-all duration-300 hover:border hover:border-b-2 hover:border-blue-500 hover:border-t-1 rounded-2xl p-2"
                >
                  {link.label}
                </Link>
              );
            } else {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.01] 
                  transition-all duration-300 hover:border hover:border-b-2 hover:border-blue-500 hover:border-t-1 rounded-2xl p-2"
                >
                  {link.label}
                </a>
              );
            }
          })}
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white px-4 pb-4 shadow-md">
          {navLinks.map((link) => {
            if (link.href.includes("#")) {
              return (
                <button
                  key={link.href}
                  onClick={() => {
                    setIsOpen(false);
                    handleHashNavigation(link.href);
                  }}
                  className="block w-full text-left py-2 text-gray-700 hover:text-blue-500 transition"
                >
                  {link.label}
                </button>
              );
            } else if (link.href === "/hackathon" || link.href === "/5mrt" || link.href === "/industry-showcase" || link.href === "/speakers") {
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-gray-700 hover:text-blue-500 transition"
                >
                  {link.label}
                </Link>
              );
            } else {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-gray-700 hover:text-blue-500 transition"
                >
                  {link.label}
                </a>
              );
            }
          })}
        </div>
      )}
    </nav>
  );
}
