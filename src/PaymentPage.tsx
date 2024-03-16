import React from 'react';
import Sidebar from './SideBar';
import Header from './Header';

const PaymentPage: React.FC = () => {
  // Simulated data from API
  const payments = [
    { type: 'MSISDN', datePaid: '2024-03-01', amountPaid: 100, beneficiaryName: 'John Doe' },
    { type: 'ACCOUNT_NO', datePaid: '2024-02-28', amountPaid: 150, beneficiaryName: 'Alice Smith' },
    { type: 'EMAIL', datePaid: '2024-02-27', amountPaid: 200, beneficiaryName: 'Bob Johnson' },
    { type: 'PERSONAL_ID', datePaid: '2024-02-26', amountPaid: 120, beneficiaryName: 'Jane Miller' },
    { type: 'BUSINESS', datePaid: '2024-02-25', amountPaid: 180, beneficiaryName: 'Sam Brown' },
  ];

  return (
    <div >
      <Sidebar />
      <div style={{ marginLeft: '21%' }}>
        <Header />
        <div className="w3-container w3-card-2">
            <div className="">
          <h2>Payments</h2>
          <table className="w3-table-all w3-card-4 w3-hoverable">
            <thead>
              <tr>
              <th>Beneficiary Name</th>
                <th>Type</th>
                <th>Date Paid</th>
                <th>Amount Paid</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr key={index}>
                     <td>{payment.beneficiaryName}</td>
                  <td>{payment.type}</td>
                  <td>{payment.datePaid}</td>
                  <td>{payment.amountPaid}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
