// HomePage.tsx
import React from 'react';
import logo from './mlogo.png';

const HomePage: React.FC = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="row mb-4">
                <div className="col text-center">
                  <img src={logo} alt="Logo" style={{ width: '100px' }} />
                  <h4 className="mt-2">Beneficiary Management System</h4>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h2>Welcome to Dashboard</h2>
                  <p>Account details and other information can be displayed here.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
