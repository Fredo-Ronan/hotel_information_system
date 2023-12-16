import { Card } from "react-bootstrap";
import "./style/HighlightedRooms.css";
import { FaStar } from "react-icons/fa";

export const HighlightedRooms = ({ highlighted }) => {
  return (
    <>
        <div className="d-flex justify-content-between headline">
            <h2>Our Most Popular Rooms</h2>
            <button type="button" className="btn btn-success">View All</button>
        </div>
      <div className="highlighted-container">
        {highlighted.map((room, index) => (
          <Card className="card-style" key={index}>
            <Card.Img variant="top" src={room.picture} />
            <Card.Body>
              <Card.Title className="title">{room.roomName}</Card.Title>
              <Card.Text>
                <div className="d-flex justify-content-between">
                    ${room.price} per night

                    <div className="d-flex gap-2">
                        <div>
                            {Array.from({ length: room.stars }, (_, index) => index).map((_, index) => (
                                <FaStar color="orange" key={index}/>
                            ))}
                        </div>
                        <div style={{marginTop: "2px"}}>
                            {room.stars}
                        </div>
                    </div>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};
