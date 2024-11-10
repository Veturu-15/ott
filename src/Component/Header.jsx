import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  // State to manage login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Toggle login status (for demonstration)
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
      <div className="container">
        {/* Brand logo */}
        <NavLink to="/" className="navbar-brand">
          <img
            src="https://cdn-eonmn.nitrocdn.com/wpSZNPxsgkHJeIIFogNkHqAJeeKlNNmX/assets/images/optimized/rev-b5a100c/fellowstudio.com/wp-content/uploads/2023/08/Netflix-Logo-2006-500x333-1.png"
            alt="Netflix"
            width="100"
          />
        </NavLink>

        {/* Toggler for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible nav items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Left-aligned menu items */}
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink
                to="/home"
                className={({ isActive }) => isActive ? 'nav-link active text-light' : 'nav-link text-light'}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/telugu"
                className={({ isActive }) => isActive ? 'nav-link active text-light' : 'nav-link text-light'}
              >
                Telugu Movies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/hindi"
                className={({ isActive }) => isActive ? 'nav-link active text-light' : 'nav-link text-light'}
              >
                Hindi Movies
              </NavLink>
            </li>
          </ul>

          {/* Centered search bar */}
          <form className="d-flex mx-auto my-2 my-lg-0">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>

          {/* Conditional Sign In / Logout button */}
          {isLoggedIn ? (
            <button onClick={toggleLogin} className="btn btn-danger ms-3">
              Logout
            </button>
          ) : (
            <button onClick={toggleLogin} className="btn btn-success ms-3">
              Sign In
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
