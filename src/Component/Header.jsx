import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container">
        <img
          src="https://cdn-eonmn.nitrocdn.com/wpSZNPxsgkHJeIIFogNkHqAJeeKlNNmX/assets/images/optimized/rev-b5a100c/fellowstudio.com/wp-content/uploads/2023/08/Netflix-Logo-2006-500x333-1.png"
          alt="Netflix"
          width="100"
        />
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="mx-auto d-flex align-items-center">
            <ul className="navbar-nav me-3">
              <li className="nav-item">
                <NavLink to="/home" className="nav-link text-light" activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/home" className="nav-link text-light" activeClassName="active">
                  Movies
                </NavLink>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
          <button className="btn btn-danger ms-3">Sign In</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
