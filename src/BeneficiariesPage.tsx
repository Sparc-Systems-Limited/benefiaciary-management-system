
import React from 'react';
import Sidebar from './SideBar';
import Header from './Header';

const BeneficiariesPage: React.FC = () => {
  // Simulated data from API
  const beneficiaries = [
    { name: 'John Doe', id: '123456789', gender: 'Male', birthdate: '1990-05-15', address: '123 Main St, City, Country' },
    { name: 'Alice Smith', id: '987654321', gender: 'Female', birthdate: '1985-08-22', address: '456 Elm St, Town, Country' },
    // Add more beneficiaries as needed
  ];

  return (
    <div>
      <Sidebar />
      <div style={{ marginLeft: '21%' }}>
        <Header />
        <div className="w3-container">
          <h2>Beneficiaries</h2>
          <table className="w3-table-all w3-card-4">
            <thead>
              <tr>
                <th>Name</th>
                <th>ID</th>
                <th>Gender</th>
                <th>Birthdate</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {beneficiaries.map((beneficiary, index) => (
                <tr key={index}>
                  <td>{beneficiary.name}</td>
                  <td>{beneficiary.id}</td>
                  <td>{beneficiary.gender}</td>
                  <td>{beneficiary.birthdate}</td>
                  <td>{beneficiary.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BeneficiariesPage;
