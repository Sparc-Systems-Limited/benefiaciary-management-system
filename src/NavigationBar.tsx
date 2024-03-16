// NavigationBar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './mlogo.png'; // Import your logo image
import userIcon from './userIcon.png'; // Import your user icon image

const NavigationBar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" style={{ width: '100px' }} />
        </Link>
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/payee-types">
                Payment Types
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/beneficiaries">
                Beneficiaries
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/payments">
                Payments
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-nav ml-auto">
          <div className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src={userIcon} alt="User" style={{ width: '30px', marginRight: '5px' }} />
              Username
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <Link className="dropdown-item" to="/profile">
                  Profile
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
