import React from 'react';
import logo from './mlogo.png'; // Import your logo image

const LoginPage: React.FC = () =>  {

  const handleLogin = () => {
    // Redirect user to the authorization page
    window.location.href = "https://esignet.collab.mosip.net/authorize?client_id=WMX5pO6dYdCFR3iaVWGclVPNxTNSADDv-kV7VBcnzvY&redirect_uri=https://healthservices-esignet.collab.mosip.net/userprofile&scope=openid%20profile&response_type=code";
  };

  return (
    <div className="container mt-100" style={{marginTop: 150}}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card w3-card-4">
            <div className="card-body text-center">
              <img className='img-responsive' src={logo} alt="Logo" style={{ width: 500 , height: 200}} />
              <h2 className="mt-2">Sign In</h2>
              <button onClick={handleLogin} className="btn btn-block chakra w3-card-4">Sign with e-Signet</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
