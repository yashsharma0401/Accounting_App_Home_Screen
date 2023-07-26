import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';
const Display = () => {
    const [activeButton, setActiveButton] = useState('Gold');
    const [isModalOpen, setModalOpen] = useState(false);
    const [formData, setFormData] = useState({
      name: '',
      phoneNumber: '',
      address: '',
      city: '',
      pincode: '',
      gstin: '',
      panNumber: '',
      aadhar: '',
    });
    const [partyData, setPartyData] = useState([]);

    
    const updatePartyData = (data) => {
      setPartyData((prevData) => [...prevData, data]);
    };
    const handleButtonClick = (content) => {
      setActiveButton(content);
    };
  
    const handleModalOpen = () => {
      setModalOpen(true);
    };
  
    const handleModalClose = () => {
      setModalOpen(false);
      setFormData({
        name: '',
        phoneNumber: '',
        address: '',
        city: '',
        pincode: '',
        gstin: '',
        panNumber: '',
        aadhar: '',
      });
    };
    const handleCancel = () => {
      // Handle the cancel button click here
      setModalOpen(false); // Close the modal if needed
      setFormData({
        name: '',
        phoneNumber: '',
        address: '',
        city: '',
        pincode: '',
        gstin: '',
        panNumber: '',
        aadhar: '',
      });
    };
    const handleInputChange = (event) => {
      
      const { name, value } = event.target;
      console.log(event.target);
      console.log(value);
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
      // console.log(formData);
    };

    const handleSave = () => {
      const newData = {
        name: formData.name,
        phoneNumber: formData.phoneNumber,
        // Add other form fields here as needed
      };
      console.log(newData);
      updatePartyData(newData);
  
      // Close the modal
      setModalOpen(false);
    };
  
    // const handleModalSubmit = (event) => {
    //   event.preventDefault();
    //   // Do something with the form data, e.g., save to state or send to API.
    //   console.log('Form Data:', formData);
    //   handleModalClose();
    // };

  return (
    <div>
      <div style={{
        width: '302px',
        height: '38px',
        flexShrink: 0,
        borderRadius: '15px',
        border: '1px solid #AAA7A7',
        background: '#8E8E8E',
        position: 'absolute',
        top: '48px',
        left: '293px',
      }}>
        <button
          style={{
            width: '103px',
            height: '36px',
            flexShrink: 0,
            borderRadius: '15px',
            border: activeButton === 'Gold' ? '1px solid #484848' : '#8E8E8E',
            background: activeButton === 'Gold' ? '#FFF' : '#8E8E8E',
            color: activeButton === 'Gold' ? '#484848' : '#FFF',
            fontFamily: 'SF Pro',
            fontSize: '24px',
            fontStyle: 'normal',
            fontWeight: 510,
            lineHeight: 'normal',
          }}
          onClick={() => handleButtonClick('Gold')}
        >
          Gold
        </button>
        <button
          style={{
            width: '103px',
            height: '36px',
            flexShrink: 0,
            borderRadius: '15px',
            border: activeButton === 'Silver' ? '1px solid #484848' : '#8E8E8E',
            background: activeButton === 'Silver' ? '#FFF' : '#8E8E8E',
            color: activeButton === 'Silver' ? '#484848' : '#FFF',
            fontFamily: 'SF Pro',
            fontSize: '24px',
            fontStyle: 'normal',
            fontWeight: 510,
            lineHeight: 'normal',
            left: '119px',
          }}
          onClick={() => handleButtonClick('Silver')}
        >
          Silver
        </button>
        <button
          style={{
            width: '92px',
            height: '36px',
            flexShrink: 0,
            borderRadius: '15px',
            border: activeButton === 'Both' ? '1px solid #484848' : '#8E8E8E',
            background: activeButton === 'Both' ? '#FFF' : '#8E8E8E',
            color: activeButton === 'Both' ? '#484848' : '#FFF',
            fontFamily: 'SF Pro',
            fontSize: '24px',
            fontStyle: 'normal',
            fontWeight: 510,
            lineHeight: 'normal',
            left: '200px',
          }}
          onClick={() => handleButtonClick('Both')}
        >
          Both
        </button>
      </div>
      <div style={{
  width: '605px',
  height: '186px',
  flexShrink: 0,
  borderRadius: '10px',
  backgroundColor: '#FFF',
  borderColor: '#E0E4EB', // Corrected border color
  borderStyle: 'solid', // Added border style
  borderWidth: '1px', // Added border width
  position: 'absolute',
  top: '111px',
  left: '298px',
}}>
  <div style={{
    width: '203.28px',
    height: '29.034px',
    flexShrink: 0,
    color: '#4F617D',
    fontFamily: 'SF Pro',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: 590,
    lineHeight: 'normal',
    position: 'absolute',
    top: '26px',
    left: '41.11px',
  }}>
    Party
  </div>
  <button
  style={{
    width: '142px',
    height: '27px',
    flexShrink: 0,
    borderRadius: '10px',
    border: '1px solid #484848',
    background: '#FFF',
    position: 'absolute',
    top: '28px',
    left: '132px',
  }}
  onClick={handleModalOpen}
>
  <svg
    width="16"
    height="15"
    viewBox="0 0 16 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      position: 'absolute',
      top: '6px',
      left: '12.17px',
    }}
  >
    <path
      d="M7.78052 15C3.57867 15 0.172607 11.6423 0.172607 7.5C0.172607 3.35775 3.57867 0 7.78052 0C11.9824 0 15.3884 3.35775 15.3884 7.5C15.3884 11.6423 11.9824 15 7.78052 15ZM7.78052 13.5C9.39472 13.5 10.9428 12.8679 12.0842 11.7426C13.2256 10.6174 13.8669 9.0913 13.8669 7.5C13.8669 5.9087 13.2256 4.38258 12.0842 3.25736C10.9428 2.13214 9.39472 1.5 7.78052 1.5C6.16633 1.5 4.61824 2.13214 3.47684 3.25736C2.33543 4.38258 1.69419 5.9087 1.69419 7.5C1.69419 9.0913 2.33543 10.6174 3.47684 11.7426C4.61824 12.8679 6.16633 13.5 7.78052 13.5ZM8.54131 8.25V11.25C8.54131 11.4489 8.46116 11.6397 8.31848 11.7803C8.17581 11.921 7.9823 12 7.78052 12C7.57875 12 7.38524 11.921 7.24256 11.7803C7.09988 11.6397 7.01973 11.4489 7.01973 11.25V8.25H3.97656C3.77479 8.25 3.58128 8.17098 3.4386 8.03033C3.29593 7.88968 3.21577 7.69891 3.21577 7.5C3.21577 7.30109 3.29593 7.11032 3.4386 6.96967C3.58128 6.82902 3.77479 6.75 3.97656 6.75H7.01973V3.75C7.01973 3.55109 7.09988 3.36032 7.24256 3.21967C7.38524 3.07902 7.57875 3 7.78052 3C7.9823 3 8.17581 3.07902 8.31848 3.21967C8.46116 3.36032 8.54131 3.55109 8.54131 3.75V6.75H11.5845C11.7863 6.75 11.9798 6.82902 12.1224 6.96967C12.2651 7.11032 12.3453 7.30109 12.3453 7.5C12.3453 7.69891 12.2651 7.88968 12.1224 8.03033C11.9798 8.17098 11.7863 8.25 11.5845 8.25H8.54131Z"
      fill="#4F617D"
    />
  </svg>
  <div
    style={{
      width: '75.065px',
      color: '#4F617D',
      fontFamily: 'SF Pro',
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 'normal',
      position: 'absolute',
      top: '4px',
      left: '31.45px',
    }}
  >
    AddParty
  </div>
</button>



<Modal
  show={isModalOpen}
  onHide={handleModalClose}
  backdrop="static"
  size="xl"
  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}
>
  <Modal.Body style={{
    width: '1217px',
    height: '800px',
    flexShrink: 0,
    borderRadius: '20px',
    background: '#FFF',
    padding: '20px',
  }}>
    <div style={{
      color: '#484848',
      fontFamily: 'SF Pro',
      fontSize: '24px',
      fontStyle: 'normal',
      fontWeight: 510,
      lineHeight: 'normal',
      position: 'absolute',
      top: '93px',
      left: '130px',
    }}>
      Party Group
    </div>
    
    {/* Dropdown box */}
    <select
      style={{
        width: '296px',
        height: '44px',
        flexShrink: 0,
        borderRadius: '10px',
        border: '1px solid #8E8E8E',
        background: '#FFF',
        position: 'absolute',
        top: '133px',
        left: '130px',
      }}
    >
      {/* Add dropdown options here */}
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </select>
    <div style={{
      color: '#484848',
      fontFamily: 'SF Pro',
      fontSize: '24px',
      fontStyle: 'normal',
      fontWeight: 510,
      lineHeight: 'normal',
      position: 'absolute',
      top: '221px',
      left: '130px',
    }}>
      Name
    </div>

    <input
      type="text"
      placeholder="Enter Name"
      style={{
        width: '296px',
        height: '44px',
        flexShrink: 0,
        borderRadius: '10px',
        border: '1px solid #8E8E8E',
        background: '#FFF',
        color: '#484848',
        fontFamily: 'SF Pro',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 510,
        lineHeight: 'normal',
        position: 'absolute',
        top: '261px',
        left: '130px',
      }}
      name="name"
      value={formData.name}
  onChange={handleInputChange}
    />
    <div style={{
      color: '#484848',
      fontFamily: 'SF Pro',
      fontSize: '24px',
      fontStyle: 'normal',
      fontWeight: 510,
      lineHeight: 'normal',
      position: 'absolute',
      top: '221px',
      left: '496px',
    }}>
      Phone Number
    </div>

    <input
      type="text"
      placeholder="Enter 10 digit number"
      name="phoneNumber"
      style={{
        width: '296px',
        height: '44px',
        flexShrink: 0,
        borderRadius: '10px',
        border: '1px solid #8E8E8E',
        background: '#FFF',
        color: '#484848',
        fontFamily: 'SF Pro',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 510,
        lineHeight: 'normal',
        position: 'absolute',
        top: '261px',
        left: '496px',
      }}
      value={formData.phoneNumber}
  onChange={handleInputChange}
    />
    <div style={{
      color: '#484848',
      fontFamily: 'SF Pro',
      fontSize: '24px',
      fontStyle: 'normal',
      fontWeight: 510,
      lineHeight: 'normal',
      position: 'absolute',
      top: '369px',
      left: '130px',
    }}>
      Address
    </div>

    <input
      type="text"
      placeholder="Enter Address"
      style={{
        width: '296px',
        height: '44px',
        flexShrink: 0,
        borderRadius: '10px',
        border: '1px solid #8E8E8E',
        background: '#FFF',
        color: '#484848',
        fontFamily: 'SF Pro',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 510,
        lineHeight: 'normal',
        position: 'absolute',
        top: '409px',
        left: '130px',
      }}
      name="address"
      value={formData.address}
  onChange={handleInputChange}
    />
    <div style={{
      color: '#484848',
      fontFamily: 'SF Pro',
      fontSize: '24px',
      fontStyle: 'normal',
      fontWeight: 510,
      lineHeight: 'normal',
      position: 'absolute',
      top: '369px',
      left: '496px',
    }}>
      City
    </div>

    <input
      type="text"
      placeholder="Enter City"
      style={{
        width: '296px',
        height: '44px',
        flexShrink: 0,
        borderRadius: '10px',
        border: '1px solid #8E8E8E',
        background: '#FFF',
        color: '#484848',
        fontFamily: 'SF Pro',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 510,
        lineHeight: 'normal',
        position: 'absolute',
        top: '409px',
        left: '496px',
      }}
      name="city"
      value={formData.city}
  onChange={handleInputChange}
    />
    <div style={{
      color: '#484848',
      fontFamily: 'SF Pro',
      fontSize: '24px',
      fontStyle: 'normal',
      fontWeight: 510,
      lineHeight: 'normal',
      position: 'absolute',
      top: '369px',
      left: '864px',
    }}>
      Pincode
    </div>

    <input
      type="text"
      placeholder="Enter Pincode"
      style={{
        width: '296px',
        height: '44px',
        flexShrink: 0,
        borderRadius: '10px',
        border: '1px solid #8E8E8E',
        background: '#FFF',
        color: '#484848',
        fontFamily: 'SF Pro',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 510,
        lineHeight: 'normal',
        position: 'absolute',
        top: '409px',
        left: '864px',
      }}
      name="pincode"
      value={formData.pincode}
  onChange={handleInputChange}
    />
    <div style={{
      color: '#484848',
      fontFamily: 'SF Pro',
      fontSize: '24px',
      fontStyle: 'normal',
      fontWeight: 510,
      lineHeight: 'normal',
      position: 'absolute',
      top: '516px',
      left: '130px',
    }}>
      GSTIN
    </div>

    <input
      type="text"
      placeholder="Enter GSTIN"
      style={{
        width: '296px',
        height: '44px',
        flexShrink: 0,
        borderRadius: '10px',
        border: '1px solid #8E8E8E',
        background: '#FFF',
        color: '#484848',
        fontFamily: 'SF Pro',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 510,
        lineHeight: 'normal',
        position: 'absolute',
        top: '556px',
        left: '130px',
      }}
      name="gstin"
      value={formData.gstin}
  onChange={handleInputChange}
    />
    <div style={{
      color: '#484848',
      fontFamily: 'SF Pro',
      fontSize: '24px',
      fontStyle: 'normal',
      fontWeight: 510,
      lineHeight: 'normal',
      position: 'absolute',
      top: '516px',
      left: '496px',
    }}>
      PAN Number
    </div>

    <input
      type="text"
      placeholder="Enter PAN number"
      style={{
        width: '296px',
        height: '44px',
        flexShrink: 0,
        borderRadius: '10px',
        border: '1px solid #8E8E8E',
        background: '#FFF',
        color: '#484848',
        fontFamily: 'SF Pro',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 510,
        lineHeight: 'normal',
        position: 'absolute',
        top: '556px',
        left: '496px',
      }}
      name="panNumber"
      value={formData.panNumber}
  onChange={handleInputChange}
    />
    <div style={{
      color: '#484848',
      fontFamily: 'SF Pro',
      fontSize: '24px',
      fontStyle: 'normal',
      fontWeight: 510,
      lineHeight: 'normal',
      position: 'absolute',
      top: '516px',
      left: '864px',
    }}>
      Aadhar
    </div>

    <input
      type="text"
      placeholder="Enter 12 digit number"
      style={{
        width: '296px',
        height: '44px',
        flexShrink: 0,
        borderRadius: '10px',
        border: '1px solid #8E8E8E',
        background: '#FFF',
        color: '#484848',
        fontFamily: 'SF Pro',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 510,
        lineHeight: 'normal',
        position: 'absolute',
        top: '556px',
        left: '864px',
      }}
      name="aadhar"
      value={formData.aadhar}
  onChange={handleInputChange}
    />
    <button
      style={{
        width: '123px',
        height: '41px',
        flexShrink: 0,
        borderRadius: '15px',
        border: '1px solid #000',
        boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
        position: 'absolute',
        top: '720px',
        left: '884px',
        fontFamily: 'SF Pro',
        fontSize: '24px',
        fontStyle: 'normal',
        fontWeight: 510,
        lineHeight: 'normal',
      }}
      onClick={handleCancel}
    >
      Cancel
    </button>
    <button
            style={{
              width: '123px',
              height: '41px',
              flexShrink: 0,
              borderRadius: '15px',
              background: '#484848',
              boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
              position: 'absolute',
              top: '720px',
              left: '1037px',
              fontFamily: 'SF Pro',
              fontSize: '24px',
              fontStyle: 'normal',
              fontWeight: 510,
              lineHeight: 'normal',
              color: '#FFF',
            }}
            onClick={handleSave}
          >
            Save
          </button>
  </Modal.Body>
  
</Modal>

<div style={{
  width: '117px',
  height: '85px',
  flexShrink: 0,
  color: '#484848',
  fontFamily: 'SF Pro',
  fontSize: '24px',
  fontStyle: 'normal',
  fontWeight: 274,
  lineHeight: 'normal',
  position: 'absolute',
  top: '80px',
  left: '40px',
}}>
  <div>Silver</div>
  <div style={{ color: '#BC5C5C' }}>14.200 Kg Lena</div>
</div>
<div style={{
  width: '117px',
  height: '85px',
  flexShrink: 0,
  color: '#484848',
  fontFamily: 'SF Pro',
  fontSize: '24px',
  fontStyle: 'normal',
  fontWeight: 274,
  lineHeight: 'normal',
  position: 'absolute',
  top: '80px',
  left: '235px',
}}>
  <div>Gold</div>
  <div style={{ color: '#BC5C5C' }}>14.200 Gm Lena</div>
</div>
<div style={{
  width: '117px',
  height: '85px',
  flexShrink: 0,
  color: '#484848',
  fontFamily: 'SF Pro',
  fontSize: '24px',
  fontStyle: 'normal',
  fontWeight: 274,
  lineHeight: 'normal',
  position: 'absolute',
  top: '80px',
  left: '446px',
}}>
  <div>Amount</div>
  <div style={{ color: '#55A654' }}>₹1,850.00 Dena</div>
</div>
</div>
<div style={{
  width: '294px',
  height: '41px',
  flexShrink: 0,
  borderRadius: '10px',
  border: '1px solid rgba(80, 79, 79, 0.46)',
  background: '#FFF',
  position: 'absolute',
  top: '325px',
  left: '293px',
}}>
  <input
    type="text"
    placeholder="Search Karigar"
    style={{
      width: '203.28px',
      height: '29.034px',
      flexShrink: 0,
      color: '#BBB',
      fontFamily: 'SF Pro',
      fontSize: '24px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 'normal',
      border: 'none',
      outline: 'none',
      padding: '0 10px',
      position: 'absolute',
      top: '4px',
      left: '27px',
      background: 'transparent',
    }}
  />
</div>
<button
  style={{
    width: '98px',
    height: '38px',
    flexShrink: 0,
    borderRadius: '15px',
    border: '1px solid #484848',
    background: '#FFF',
    boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
    position: 'absolute',
    top: '327px',
    left: '611px',
  }}
>
  <div
    style={{
      width: '67px',
      color: '#484848',
      fontFamily: 'SF Pro',
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 'normal',
      position: 'absolute',
      top: '7px',
      left: '16px',
    }}
  >
    Search
  </div>
</button>
<div
  style={{
    width: '287px',
    height: '145px',
    flexShrink: 0,
    borderRadius: '10px',
    border: '1px solid #4F617D',
    background: '#FFF',
    position: 'absolute',
    top: '187px',
    left: '1112px',
  }}
>
  <div
    style={{
      color: '#484848',
      fontFamily: 'SF Pro',
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 'normal',
      position: 'absolute',
      top: '9px',
      left: '16px',
    }}
  >
    Excel
  </div>
  <svg
    width="23"
    height="23"
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      width: '23px',
      height: '23px',
      flexShrink: 0,
      position: 'absolute',
      left: '71px',
      top: '9px',
    }}
  >
    <circle cx="11.5" cy="11.5" r="11" fill="white" stroke="#484848" />
  </svg>
  <div
    style={{
      color: '#484848',
      fontFamily: 'SF Pro',
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 'normal',
      position: 'absolute',
      left: '116px',
      top: '9px',
    }}
  >
    PDF
  </div>
  <svg
    width="23"
    height="23"
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      width: '23px',
      height: '23px',
      flexShrink: 0,
      position: 'absolute',
      left: '160px',
      top: '9px',
    }}
  >
    <circle cx="11.5" cy="11.5" r="11" fill="white" stroke="#484848" />
  </svg>
  <div
  style={{
    width: '285px',
    height: '1px',
    flexShrink: 0,
    background: '#4F617D',
    position: 'absolute',
    top: '45px',
  }}
></div>
<div
  style={{
    color: '#4F617D',
    fontFamily: 'SF Pro',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
    position: 'absolute',
    top: '57px',
    left: '16px',
  }}
>
  Detailed
</div>
<button
  style={{
    width: '23px',
    height: '23px',
    flexShrink: 0,
    position: 'absolute',
    top: '57px',
    left: '100px',
    background: 'transparent',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
  }}
>
  <svg
    width="23"
    height="23"
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      width: '23px',
      height: '23px',
      position: 'absolute',
      top: '0',
      left: '0',
    }}
  >
    <circle cx="11.5" cy="11.5" r="11" fill="white" stroke="#4F617D" />
  </svg>
</button>
<div
  style={{
    color: '#4F617D',
    fontFamily: 'SF Pro',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
    position: 'absolute',
    top: '57px',
    left: '139px',
  }}
>
  Summary
</div>
<button
  style={{
    width: '23px',
    height: '23px',
    flexShrink: 0,
    position: 'absolute',
    top: '57px',
    left: '245px',
    background: 'transparent',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
  }}
>
  <svg
    width="23"
    height="23"
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      width: '23px',
      height: '23px',
      position: 'absolute',
      top: '0',
      left: '0',
    }}
  >
    <circle cx="11.5" cy="11.5" r="11" fill="white" stroke="#4F617D" />
  </svg>
</button>
<button
  style={{
    width: '86px',
    height: '25px',
    flexShrink: 0,
    borderRadius: '15px',
    border: '1px solid #484848',
    background: '#FFF',
    boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
    position: 'absolute',
    top: '104px',
    left: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    outline: 'none',
  }}
>
  <svg
    width="11"
    height="13"
    viewBox="0 0 11 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      width: '11px',
      height: '13px',
      position: 'absolute',
      top: '5px',
      left: '12px',
    }}
  >
    <path d="M11 6.01882V11.7963C11 12.1156 10.874 12.4217 10.6498 12.6475C10.4256 12.8732 10.1215 13 9.80435 13H1.19565C0.878546 13 0.574427 12.8732 0.350198 12.6475C0.12597 12.4217 0 12.1156 0 11.7963V6.01882C0 5.6996 0.12597 5.39344 0.350198 5.16771C0.574427 4.94199 0.878546 4.81517 1.19565 4.81517H2.63043C2.8207 4.81517 3.00317 4.89126 3.13771 5.0267C3.27224 5.16214 3.34783 5.34583 3.34783 5.53736C3.34783 5.7289 3.27224 5.91259 3.13771 6.04803C3.00317 6.18347 2.8207 6.25955 2.63043 6.25955H1.43478V11.5556H9.56522V6.25955H8.36957C8.1793 6.25955 7.99683 6.18347 7.86229 6.04803C7.72776 5.91259 7.65217 5.7289 7.65217 5.53736C7.65217 5.34583 7.72776 5.16214 7.86229 5.0267C7.99683 4.89126 8.1793 4.81517 8.36957 4.81517H9.80435C10.1215 4.81517 10.4256 4.94199 10.6498 5.16771C10.874 5.39344 11 5.6996 11 6.01882ZM3.61625 3.64101L4.78261 2.46805V7.46321C4.78261 7.65474 4.85819 7.83843 4.99273 7.97387C5.12726 8.10931 5.30974 8.1854 5.5 8.1854C5.69026 8.1854 5.87274 8.10931 6.00727 7.97387C6.14181 7.83843 6.21739 7.65474 6.21739 7.46321V2.46805L7.38375 3.64282C7.45048 3.71 7.5297 3.76328 7.61689 3.79964C7.70408 3.836 7.79753 3.85471 7.8919 3.85471C7.98627 3.85471 8.07972 3.836 8.16691 3.79964C8.2541 3.76328 8.33332 3.71 8.40005 3.64282C8.46679 3.57564 8.51972 3.49589 8.55583 3.40812C8.59195 3.32034 8.61054 3.22627 8.61054 3.13127C8.61054 3.03626 8.59195 2.94219 8.55583 2.85442C8.51972 2.76664 8.46679 2.68689 8.40005 2.61971L6.00875 0.212412C5.9421 0.145085 5.86291 0.0916641 5.77571 0.0552136C5.68851 0.0187632 5.59502 0 5.5006 0C5.40618 0 5.31269 0.0187632 5.22549 0.0552136C5.13829 0.0916641 5.05909 0.145085 4.99245 0.212412L2.60114 2.61971C2.53441 2.68689 2.48148 2.76664 2.44536 2.85442C2.40925 2.94219 2.39066 3.03626 2.39066 3.13127C2.39066 3.32313 2.46637 3.50715 2.60114 3.64282C2.73591 3.77849 2.9187 3.85471 3.10929 3.85471C3.29989 3.85471 3.48268 3.77849 3.61745 3.64282L3.61625 3.64101Z" fill="#484848"/>
  </svg>
  <div
    style={{
      color: '#484848',
      fontFamily: 'SF Pro',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 'normal',
      position: 'absolute',
      top: '4px',
      left: '29px',
    }}
  >
    Export
  </div>
</button>
<button
  style={{
    width: '86px',
    height: '25px',
    flexShrink: 0,
    borderRadius: '15px',
    border: '1px solid #484848',
    background: '#FFF',
    boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
    position: 'absolute',
    top: '104px',
    left: '116px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    outline: 'none',
  }}
>
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      width: '15px',
      height: '15px',
      position: 'absolute',
      top: '5px',
      left: '9px',
    }}
  >
    <path d="M10 5V3.125H5V5H3.75V1.875H11.25V5H10ZM11.25 7.8125C11.4271 7.8125 11.5756 7.7525 11.6956 7.6325C11.8156 7.5125 11.8754 7.36417 11.875 7.1875C11.875 7.01042 11.815 6.86187 11.695 6.74187C11.575 6.62187 11.4267 6.56208 11.25 6.5625C11.0729 6.5625 10.9244 6.6225 10.8044 6.7425C10.6844 6.8625 10.6246 7.01083 10.625 7.1875C10.625 7.36458 10.685 7.51313 10.805 7.63313C10.925 7.75313 11.0733 7.81292 11.25 7.8125ZM10 11.875V9.375H5V11.875H10ZM11.25 13.125H3.75V10.625H1.25V6.875C1.25 6.34375 1.43229 5.89833 1.79688 5.53875C2.16146 5.17917 2.60417 4.99958 3.125 5H11.875C12.4062 5 12.8517 5.17979 13.2113 5.53937C13.5708 5.89896 13.7504 6.34417 13.75 6.875V10.625H11.25V13.125ZM12.5 9.375V6.875C12.5 6.69792 12.44 6.54937 12.32 6.42937C12.2 6.30937 12.0517 6.24958 11.875 6.25H3.125C2.94792 6.25 2.79938 6.31 2.67938 6.43C2.55938 6.55 2.49958 6.69833 2.5 6.875V9.375H3.75V8.125H11.25V9.375H12.5Z" fill="#484848"/>
  </svg>
  <div
    style={{
      color: '#484848',
      fontFamily: 'SF Pro',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 'normal',
      position: 'absolute',
      top: '4px',
      left: '29px',
    }}
  >
    Print
  </div>
</button>

</div>
<button
  style={{
    width: '119px',
    height: '38px',
    flexShrink: 0,
    borderRadius: '15px',
    border: '1px solid #484848',
    background: '#FFF',
    boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
    position: 'absolute',
    top: '341px',
    left: '1290px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    outline: 'none',
  }}
>
  <svg
    width="14"
    height="17"
    viewBox="0 0 14 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      width: '14px',
      height: '17px',
      position: 'absolute',
      top: '10px',
      left: '13px',
    }}
  >
    <path d="M14 7.87077V15.426C14 15.8434 13.8397 16.2438 13.5543 16.539C13.2689 16.8342 12.8819 17 12.4783 17H1.52174C1.11815 17 0.731089 16.8342 0.445707 16.539C0.160326 16.2438 0 15.8434 0 15.426V7.87077C0 7.45332 0.160326 7.05296 0.445707 6.75778C0.731089 6.4626 1.11815 6.29677 1.52174 6.29677H3.34783C3.58998 6.29677 3.82222 6.39626 3.99345 6.57337C4.16467 6.75048 4.26087 6.9907 4.26087 7.24117C4.26087 7.49164 4.16467 7.73185 3.99345 7.90896C3.82222 8.08607 3.58998 8.18557 3.34783 8.18557H1.82609V15.1112H12.1739V8.18557H10.6522C10.41 8.18557 10.1778 8.08607 10.0066 7.90896C9.83533 7.73185 9.73913 7.49164 9.73913 7.24117C9.73913 6.9907 9.83533 6.75048 10.0066 6.57337C10.1778 6.39626 10.41 6.29677 10.6522 6.29677H12.4783C12.8819 6.29677 13.2689 6.4626 13.5543 6.75778C13.8397 7.05296 14 7.45332 14 7.87077ZM4.6025 4.76132L6.08696 3.22746V9.75958C6.08696 10.01 6.18315 10.2503 6.35438 10.4274C6.52561 10.6045 6.75785 10.704 7 10.704C7.24215 10.704 7.47439 10.6045 7.64562 10.4274C7.81685 10.2503 7.91304 10.01 7.91304 9.75958V3.22746L9.3975 4.76368C9.48243 4.85153 9.58326 4.92122 9.69423 4.96876C9.80519 5.0163 9.92413 5.04077 10.0442 5.04077C10.1643 5.04077 10.2833 5.0163 10.3943 4.96876C10.5052 4.92122 10.606 4.85153 10.691 4.76368C10.7759 4.67584 10.8433 4.57155 10.8892 4.45677C10.9352 4.34199 10.9589 4.21897 10.9589 4.09473C10.9589 3.9705 10.9352 3.84748 10.8892 3.7327C10.8433 3.61792 10.7759 3.51363 10.691 3.42578L7.6475 0.27777C7.56267 0.189726 7.46188 0.119868 7.3509 0.0722024C7.23992 0.0245365 7.12093 0 7.00076 0C6.88059 0 6.7616 0.0245365 6.65062 0.0722024C6.53964 0.119868 6.43885 0.189726 6.35402 0.27777L3.31054 3.42578C3.22561 3.51363 3.15824 3.61792 3.11228 3.7327C3.06631 3.84748 3.04265 3.9705 3.04265 4.09473C3.04265 4.34564 3.13902 4.58627 3.31054 4.76368C3.48207 4.9411 3.71471 5.04077 3.95728 5.04077C4.19986 5.04077 4.4325 4.9411 4.60402 4.76368L4.6025 4.76132Z" fill="#484848"/>
  </svg>
  <div
    style={{
      color: '#484848',
      fontFamily: 'SF Pro',
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 'normal',
      position: 'absolute',
      top: '7px',
      left: '38px',
    }}
  >
    Export
  </div>
</button>
<div
  style={{
    width: '1309px',
    height: '57px',
    flexShrink: 0,
    borderRadius: '15px 15px 0px 0px',
    border: '1px solid #D1CCF6',
    background: '#F7F6FF',
    position: 'absolute',
    top: '412px',
    left: '293px',
    color: '#484848',
    fontFamily: 'SF Pro',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: 510,
    lineHeight: 'normal',
    textTransform: 'uppercase',
  }}
>
  <span style={{ top: '19px', left: '21px', position: 'absolute' }}>#</span>
  <span style={{ top: '19px', left: '166px', position: 'absolute' }}>Party Name</span>
  <span style={{ top: '19px', left: '441px', position: 'absolute' }}>Mobile Number</span>
  <span style={{ top: '19px', left: '675px', position: 'absolute' }}>Gold</span>
  <span style={{ top: '19px', left: '846px', position: 'absolute' }}>Silver</span>
  <span style={{ top: '19px', left: '1015px', position: 'absolute' }}>Amount</span>
  <span style={{ top: '19px', left: '1179px', position: 'absolute' }}>Actions</span>
</div>
 {partyData.map((data, index) => (
  <div key={index} style={{
    // width: '1309px',
    // height: '57px',
    flexShrink: 0,
    borderRadius: '15px 15px 0px 0px',
    border: '1px solid #D1CCF6',
    background: '#F7F6FF',
    position: 'absolute',
    top: `${412 + 60 * index}px`, // Adjust the top position based on the index
    left: '293px',
    color: '#484848',
    fontFamily: 'SF Pro',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: 510,
    lineHeight: 'normal',
    textTransform: 'uppercase',
  }}>
    <span style={{ top: '139px', left: '21px', position: 'absolute' }}>{index + 1}</span>
    <span style={{ top: '139px', left: '166px', position: 'absolute' }}>{data.name}</span>
    <span style={{ top: '139px', left: '441px', position: 'absolute' }}>{data.phoneNumber}</span>
    <span style={{ top: '139px', left: '675px', position: 'absolute' }}>{data.gold}</span> {/* Populate Gold data here */}
    <span style={{ top: '139px', left: '846px', position: 'absolute' }}>{data.silver}</span> {/* Populate Silver data here */}
    <span style={{ top: '139px', left: '1015px', position: 'absolute' }}>{data.amount}</span> {/* Populate Amount data here */}
    <span style={{ top: '139px', left: '1179px', position: 'absolute' }}>{/* Add Actions data here */}</span>
  </div>
))}

    </div>
  );
};

export default Display;
