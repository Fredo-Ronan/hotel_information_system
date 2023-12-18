import "./style/HighlightedRooms.css";
import { RoomCard } from "./RoomCard";

export const HighlightedRooms = ({ highlighted }) => {
  return (
    <>
      <div className="d-flex justify-content-between headline">
        <h2>Our Most Popular Rooms</h2>
        <button type="button" className="btn btn-success">
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
