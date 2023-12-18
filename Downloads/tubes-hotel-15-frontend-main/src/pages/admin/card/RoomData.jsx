
import React from 'react';
import './Card.css';
import { useState } from 'react';

const RoomData = ({ room }) => {
  const { roomName, roomDescription, availability, status, price } = room;
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="card col-12 border-bottom ">
      <div className="details" style={{ color: 'black' }}>
      <div className={`custom-checkbox ${isChecked ? 'checked' : ''}`} onClick={handleCheckboxChange}></div>
        <p className="col-2">{roomName}</p>
        <p className="col-2">{roomDescription}</p>
        <p className="col-2">{availability}</p>
        <p className="col-2">${price}/night</p>
      </div>
    </div>
  );
};

export default RoomData;
