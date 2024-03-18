// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import LoginPage from './LoginPage';
import './App.css';
import DashboardPage from './DashboardPage';
import PaymentTypesPage from './PayeePage';
import PaymentPage from './PaymentPage';
import BeneficiariesPage from './BeneficiariesPage';
import RegisterTokenPage from './RegisterTokenPage';
import PartyDetailsPage from './PartyDetailsPage';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
      <Route path="/"  Component={LoginPage} />
      <Route path="/dashboard"  Component={DashboardPage} />
      <Route path="/register-token"  Component={RegisterTokenPage} />
      <Route path="/payee-types"  Component={PaymentTypesPage} />
       <Route path="/party-details" Component={PartyDetailsPage}/> 
       <Route path="/payments"  Component={PaymentPage} />
      <Route path="/beneficiaries" Component={BeneficiariesPage} />
      <Route path="/contact" Component={ContactPage} />
    
      </Routes>
    </Router>
  );
};

export default App;

/*
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/