import "./style/HighlightedRooms.css";
import { RoomCard } from "./RoomCard";
import { useNavigate } from "react-router-dom";

export const HighlightedRooms = ({ highlighted }) => {
  const navigate = useNavigate();

  const handleViewAllRoom = () => {
    navigate("/user/rooms");
  }

  return (
    <>
      <div className="d-flex justify-content-between headline">
        <h2>Our Most Popular Rooms</h2>
        <button type="button" className="btn btn-success" onClick={handleViewAllRoom}>
          View All
        </button>
      </div>
      <div className="highlighted-container">
        {highlighted.map((room, index) => (
          <RoomCard room={room} key={index} />
        ))}
      </div>
    </>
  );
};
