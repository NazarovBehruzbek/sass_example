import React from "react";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <ul className="nav-list">
          <li className="nav-item">Main</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Contact</li>
          <li className="nav-item">Service</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
