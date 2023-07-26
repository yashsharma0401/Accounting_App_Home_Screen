import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar = () => {
  const [activeButton, setActiveButton] = useState('Karigar');

  const handleButtonClick = (content) => {
    setActiveButton(content);
  };

  return (
    <div className="sidebar" style={{ width: '272px', height: '952px', flexShrink: 0, background: '#FFF', boxShadow: '4px 0px 4px 0px rgba(0, 0, 0, 0.25)' }}>
      <div style={{ width: '18px', height: '15px', margin: '0 auto', marginTop: '20px', position: 'absolute', top: '116px', left: '22px' }}>
        <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.2 15V9.70588H10.8V15H15.3V7.94118H18L9 0L0 7.94118H2.7V15H7.2Z" fill="#484848" />
        </svg>
      </div>
      <div style={{ position: 'absolute', top: '136px', left: '47px', color: '#484848', fontFamily: 'SF Pro', fontSize: '24px', fontStyle: 'normal', fontWeight: 590, lineHeight: 'normal' }}>Parties</div>
      <button
        className={`btn btn-link ${activeButton === 'Karigar' ? 'active' : ''}`}
        style={{ width: '272px', height: '30px', position: 'absolute', left: '0px', top: '179px', background: activeButton === 'Karigar' ? '#484848' : 'transparent' }}
        onClick={() => handleButtonClick('Karigar')}
      >
        <div style={{ width: '66px', height: '24px', fontFamily: 'SF Pro', fontSize: '20px', fontWeight: 400, lineHeight: '24px', letterSpacing: '0em', textAlign: 'center', color: activeButton === 'Karigar' ? '#FFF' : '#484848', position: 'absolute', top: '3px', left: '103px' }}>Karigar</div>
      </button>
      <button
        className={`btn btn-link ${activeButton === 'Bullion' ? 'active' : ''}`}
        style={{ width: '272px', height: '30px', position: 'absolute', left: '0px', top: '226px', background: activeButton === 'Bullion' ? '#484848' : 'transparent' }}
        onClick={() => handleButtonClick('Bullion')}
      >
        <div style={{ width: '66px', height: '24px', fontFamily: 'SF Pro', fontSize: '20px', fontWeight: 400, lineHeight: '24px', letterSpacing: '0em', textAlign: 'center', color: activeButton === 'Bullion' ? '#FFF' : '#484848', position: 'absolute', top: '3px', left: '103px' }}>Bullion</div>
      </button>
      <button
        className={`btn btn-link ${activeButton === 'Supplier' ? 'active' : ''}`}
        style={{ width: '272px', height: '30px', position: 'absolute', left: '0px', top: '273px', background: activeButton === 'Supplier' ? '#484848' : 'transparent' }}
        onClick={() => handleButtonClick('Supplier')}
      >
        <div style={{ width: '66px', height: '24px', fontFamily: 'SF Pro', fontSize: '20px', fontWeight: 400, lineHeight: '24px', letterSpacing: '0em', textAlign: 'center', color: activeButton === 'Supplier' ? '#FFF' : '#484848', position: 'absolute', top: '3px', left: '103px' }}>Supplier</div>
      </button>
      <button
        className={`btn btn-link ${activeButton === 'Customer' ? 'active' : ''}`}
        style={{ width: '272px', height: '30px', position: 'absolute', left: '0px', top: '320px', background: activeButton === 'Customer' ? '#484848' : 'transparent' }}
        onClick={() => handleButtonClick('Customer')}
      >
        <div style={{ width: '66px', height: '24px', fontFamily: 'SF Pro', fontSize: '20px', fontWeight: 400, lineHeight: '24px', letterSpacing: '0em', textAlign: 'center', color: activeButton === 'Customer' ? '#FFF' : '#484848', position: 'absolute', top: '3px', left: '103px' }}>Customer</div>
      </button>
    </div>
  );
};

export default Sidebar;
