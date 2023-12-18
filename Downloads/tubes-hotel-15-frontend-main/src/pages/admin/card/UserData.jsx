
import React from 'react';
import './Card.css';
import { useState } from 'react';

const UserData = ({ data }) => {
  const { firstName, lastName, email, alamat, noTelepon } = data;
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="card col-12 border-bottom ">
      <div className="details" style={{ color: 'black' }}>
      <div className={`custom-checkbox ${isChecked ? 'checked' : ''}`} onClick={handleCheckboxChange}></div>
        <p className="col-1 fs-6">{firstName}</p>
        <p className="col-1 fs-6">{lastName}</p>
        <p className="col-1 fs-6">{email}</p>
        <p className="col-1 fs-6">{alamat}</p>
        <p className="col-1 fs-6">{noTelepon}</p>
      </div>
    </div>
  );
};

export default UserData;
