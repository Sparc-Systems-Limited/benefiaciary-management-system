import React from 'react';
import Sidebar from './SideBar';
import Header from './Header';

const DashboardPage: React.FC = () => {
  return (
    <div>
      {/* Sidebar */}
      <Sidebar />

      {/* Page Content */}
      <div style={{ marginLeft: '21%' }}>
      <Header />

        <div className="w3-container">
          <h2>Welcome to Dashboard</h2>
          <p>Account details and other information can be displayed here.</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
