import React from "react";
import RoomData from "./RoomData";
import "./Card.css";

const CardContainer = () => {
  const room = [
    {
      roomName: "King Room",
      roomDescription: "Ruangan Hotel bak Raja",
      availability: 10,
      status: "Aktif",
      price: 120,
    },
    // Tambahkan data ruangan lain disini
  ];

  return (
    <div className="card-container">
      {room.map((data, index) => (
        <RoomData key={index} room={data} />
      ))}
    </div>
  );
};

export default CardContainer;
