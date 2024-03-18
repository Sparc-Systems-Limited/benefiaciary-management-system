import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './SideBar';
import Header from './Header';


interface PaymentType {
    type: string;
    name: string;
}

interface KYCData {
    name: string;
    dob: string;
    gender: string;
    address: string;
    email: string;
    phone: string;
    nationality: string;
    passport_number: string;
    issue_date: string;
    expiry_date: string;
    bank_account_number: string;
    bank_name: string;
    employer: string;
    occupation: string;
    income: string;
    marital_status: string;
    dependents: number;
    risk_level: string;
}

interface ResponseData {
    kycInformation: string;
}

const useFetchParties = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleGetParties = useCallback(async (idType: string) => {
        setLoading(true);
        try {
            const apiUrl = `http://localhost:3001/parties/${idType}/tE0F0cbxGJ`;
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const { kycInformation }: ResponseData = await response.json();
            const kycData: KYCData = JSON.parse(kycInformation).data;
            console.log('Serialized KYC data:', kycData);

            navigate(`/party-details?partyData=${JSON.stringify(kycData)}`);
         
        } catch (error) {
            console.error('An error occurred while fetching party details:', error);
            alert('Failed to fetch party details. Please try again later.');
        } finally {
            setLoading(false);
        }
    }, [navigate]);

    return { loading, handleGetParties };
};

const PaymentTypesPage: React.FC = () => {
    const { loading, handleGetParties } = useFetchParties();

    const paymentTypes: PaymentType[] = [
        { type: 'MSISDN', name: 'Mobile Number' },
        { type: 'ACCOUNT_NO', name: 'Account Number' },
        { type: 'EMAIL', name: 'Email' },
        { type: 'PERSONAL_ID', name: 'Personal ID' },
        { type: 'BUSINESS', name: 'Business' },
        { type: 'DEVICE', name: 'Device' },
        { type: 'ACCOUNT_ID', name: 'Account ID' },
        { type: 'IBAN', name: 'IBAN' },
        { type: 'ALIAS', name: 'Alias' }
    ];

    return (
        <div>
            <Sidebar />
            <div style={{ marginLeft: '21%' }}>
                <Header />
                <div className="w3-container w3-card-4">
                    <h2>Payee Types</h2>
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
                                            {loading ? 'Loading...' : 'Get Parties'}
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

export default PaymentTypesPage;
