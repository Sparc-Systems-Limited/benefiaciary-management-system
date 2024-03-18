import React from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './SideBar';
import Header from './Header';

interface PartyDetailsProps {
  partyData: any;
}

const PartyDetailsPage: React.FC = () => {
  const location = useLocation();
  const partyData = JSON.parse(new URLSearchParams(location.search).get('partyData') || '{}');

  return (
    <div>
      <Sidebar />
      <div style={{ marginLeft: '21%' }}>
        <Header />
        <div className="w3-container w3-card-4">
          <h2>KYC Details</h2>
          <div className='w3-row-padding'>
          <dl>
            {Object.entries(partyData).map(([key, value]) => (
                             <div className='w3-col s12 m6 l4'> 

             <React.Fragment key={key}>
               <dt>{key.replace(/_/g, ' ').toUpperCase()}</dt>
                <dd>{String(value)}</dd> {/* Convert value to string */}
              </React.Fragment>
              </div>
            ))}
          </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartyDetailsPage;


// import React from 'react';
// import Sidebar from './SideBar';
// import Header from './Header';

// interface PartyDetailsProps {
//   partyData: any;
// }

// const PartyDetails: React.FC<PartyDetailsProps> = ({ partyData }) => {
//   return (
//     <div>
//       <Sidebar />
//       <div style={{ marginLeft: '21%' }}>
//         <Header />
//         <div className="w3-container w3-card-4">
//           <h2>Party Details</h2>
//           <table className="w3-table-all w3-card-4 w3-hoverable">
//             <thead>
//               <tr>
//                 <th>Attribute</th>
//                 <th>Value</th>
//               </tr>
//             </thead>
//             <tbody>
//               {Object.entries(partyData).map(([key, value]) => (
//                 <tr key={key}>
//                   <td>{key}</td>
//                   <td>{String(value)}</td> {/* Convert value to string */}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PartyDetails;
