import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Sidebar from './SideBar';
import Header from './Header';

const generateRandomToken = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const length = 10;
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const registerToken = async (idType: string) => {
  const token = generateRandomToken();
  const apiUrl = 'http://localhost:3000/tokens';
  const requestBody = {
    payeeId: '256784666410',
    payeeIdType: idType,
    paymentToken: token
  };


  try {

    const response = await fetch(apiUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    alert('The token has been registered');

    return token;
  } catch (error) {
    console.error('Error registering token:', error);
    alert('An error occurred while registering the token');
    return null;
  }
};

const useFetchParties = () => {
  const [loading, setLoading] = useState(false);
  const [partyData, setPartyData] = useState<any | null>(null);
  const navigate = useNavigate();

  const handleGetParties = async (idType: string) => {
    const token = await registerToken(idType);
    if (!token) return;

    const apiUrl = `http://localhost:3001/parties/${idType}/${token}`;
    try {
      const response = await axios.get(apiUrl);
      setPartyData(response.data);
     // navigate('/party-details');
    } catch (error) {
      console.error('Error fetching party details:', error);
      alert('An error occurred while fetching party details');
    } finally {
      setLoading(false);
    }
  };

  return { loading, partyData, handleGetParties };
};

const RegisterTokenPage: React.FC = () => {
  const { loading, handleGetParties } = useFetchParties();

  const paymentTypes = [
    { type: 'MSISDN', name: 'Mobile Number' },
    { type: 'ACCOUNT_NO', name: 'Account Number' },
    { type: 'EMAIL', name: 'Email' },
    { type: 'PERSONAL_ID', name: 'Personal ID' },
    { type: 'BUSINESS', name: 'Business' },
    { type: 'DEVICE', name: 'Device' },
    { type: 'ACCOUNT_ID', name: 'Account ID' },
    { type: 'IBAN', name: 'IBAN' },
    { type: 'ALIAS', name: 'Alias' }
    // Add more payment types as needed
  ];

  return (
    <div>
      <Sidebar />
      <div style={{ marginLeft: '21%' }}>
        <Header />
        <div className="w3-container w3-card-4">
          <h2>Token Registration</h2>
          <table className="w3-table-all w3-card-4 w3-hoverable">
            <thead>
              <tr>
                <th>Type</th>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {paymentTypes.map(paymentType => (
                <tr key={paymentType.type}>
                  <td>{paymentType.type}</td>
                  <td>{paymentType.name}</td>
                  <td>
                    <button
                      onClick={() => handleGetParties(paymentType.type)}
                      disabled={loading}
                      className="w3-button w3-blue"
                    >
                      {loading ? 'Loading...' : 'Register Token'}
                    </button>
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

export default RegisterTokenPage;
