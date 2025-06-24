import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Agenda", href: "/#agenda" },
    { label: "Speakers", href: "/#Speakers" },
    { label: "Venue", href: "/#Venue" },
    { label: "Grant", href: "/#Grant" },
    { label: "Registration", href: "/#Registration" },
    { label: "Hackathon", href: "/hackathon" },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">
          <a href="/">
            <img src={logo} alt="logo" className="h-16 w-32" />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) =>
            link.href === "Hackathon" ? (
              <Link
                to={link.href}
                className="text-gray-700 hover:text-blue-500 transition"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-500 transition"
              >
                {link.label}
              </a>
            )
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
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
        <div className="md:hidden bg-white px-4 pb-4 shadow-md">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-gray-700 hover:text-blue-500 transition"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
