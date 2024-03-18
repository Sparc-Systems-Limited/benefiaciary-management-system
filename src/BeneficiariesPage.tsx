import React, { useState } from 'react';
import Sidebar from './SideBar';
import Header from './Header';

const BeneficiariesPage: React.FC = () => {
  // Simulated data from API
  const [beneficiaries, setBeneficiaries] = useState([
    { name: 'John Doe', id: '123456789', gender: 'Male', birthdate: '1990-05-15', address: '123 Main St, City, Country', status: 'Not Registered' },
    { name: 'Alice Smith', id: '987654321', gender: 'Female', birthdate: '1985-08-22', address: '456 Elm St, Town, Country', status: 'Registered' },
    // Add more beneficiaries as needed
  ]);

  const handleRegisterToken = (index: number) => {
    // Simulated API call to register token
    // Update the status of the beneficiary
    const updatedBeneficiaries = [...beneficiaries];
    updatedBeneficiaries[index].status = 'Registered';
    setBeneficiaries(updatedBeneficiaries);
  };

  const handleChangePaymentToken = (index: number) => {
    // Simulated API call to change payment token
    // Update the status of the beneficiary
    const updatedBeneficiaries = [...beneficiaries];
    updatedBeneficiaries[index].status = 'Not Registered';
    setBeneficiaries(updatedBeneficiaries);
  };

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
                <th>Token</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {beneficiaries.map((beneficiary, index) => (
                <tr key={index}>
                  <td>{beneficiary.name}</td>
                  <td>{beneficiary.id}</td>
                  <td>{beneficiary.gender}</td>
                  <td>{beneficiary.status}</td>
                  <td>
                    {beneficiary.status === 'Registered' ? (
                      <button onClick={() => handleChangePaymentToken(index)} style={{ backgroundColor: 'green' }}>
                        Change Payment Token
                      </button>
                    ) : (
                      <button onClick={() => handleRegisterToken(index)} style={{ backgroundColor: 'red' }}>
                        Register Token
                      </button>
                    )}
                  </td>
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
