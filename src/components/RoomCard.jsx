import { Card } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import "./style/RoomCard.css";

export const RoomCard = ({ room }) => {
  return (
    <Card className="card-style">
      <Card.Img variant="top" src={room.picture} />
      <Card.Body>
        <Card.Title className="title">{room.nama_kamar}</Card.Title>
        <Card.Text>
          <div className="d-flex justify-content-between">
            ${room.harga} per night
            <div className="d-flex gap-2">
              <div>
                {Array.from({ length: room.stars }, (_, index) => index).map(
                  (_, index) => (
                    <FaStar color="orange" key={index} />
                  )
                )}
              </div>
              <div style={{ marginTop: "2px" }}>{room.stars}</div>
            </div>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
