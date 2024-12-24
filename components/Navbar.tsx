"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link'

interface NavProps {
  title: string;
  links: { link: string; title: string }[];
}

export const Nav: React.FC<NavProps> = ({ title, links }) => {

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-secondary">
      <div className="container">
        <Link href="/">
          {/* <Image src={Logo} alt="Logo" width="36" height="36" className="vertical-align-middle" /> */}
          <div className="navbar-brand">
            <span className="">{title}</span>
          </div>
        </Link>
        <button
          className="custom-toggler navbar-toggler"
          type="button" data-toggle="collapse"
          data-target="#navbarsExample09"
          aria-controls="navbarsExample09"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}
          id="navbarsExample09"
        >
          <div className="navbar-nav">
            {links.map((value, index) => (
              <Link key={index} href={value.link} >
                <div className="nav-link">{value.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
