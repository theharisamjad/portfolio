import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export const Nav = ({ title, links }) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const router = useRouter();

  return (
    <nav className="navbar navbar-expand-sm bg-dark border-0">
      <div className="container">
        {/* Toggle Button */}
        <button
          className="navbar-toggler border-0 shadow-none fs-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
          onClick={() => setIsNavCollapsed(!isNavCollapsed)}
        >
          {isNavCollapsed ? "☰" : "✖"}
        </button>

        {/* Navigation Links */}
        <div
          className={`collapse navbar-collapse ${isNavCollapsed ? "" : "show"}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            {links.map((value, index) => (
              <li key={index} className="nav-item">
                <Link
                  className={`nav-link text-white ${
                    router.pathname === value.link
                      ? "border-bottom border-white fw-bold"
                      : ""
                  }`}
                  key={index}
                  href={value.link}
                  onClick={() => setIsNavCollapsed(true)} // Close on click
                >
                  {value.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
