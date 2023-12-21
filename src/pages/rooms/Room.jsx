import { useEffect, useState } from "react";
import { HeadPicture } from "../../components/HeadPicture";
import gambarHotel from "../../assets/bg_1.jpg";
import { FooterComp } from "../../components/FooterComp";
import { RoomCard } from "../../components/RoomCard";
import room1 from "../../assets/room-1.jpg";
import room2 from "../../assets/room-2.jpg";
import room3 from "../../assets/room-3.jpg";
import "./Room.css";
import { useNavigate } from "react-router-dom";
import { GetKamar } from "../../api/apiKamar";
import { Spinner } from "react-bootstrap";

export const RoomPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    GetKamar()
      .then((res) => {
        const roomsWithPictures = res.data.map((room, index) => {
          // Add a 'picture' property to each room object
          switch (Math.floor(Math.random() * 3)) {
            case 0:
              return { ...room, picture: room1 };
            case 1:
              return { ...room, picture: room2 };
            case 2:
              return { ...room, picture: room3 };
            default:
              return room;
          }
        });

        setRooms(roomsWithPictures);
        setIsLoading(false);
      })
      .catch((err) => {
        // Handle error
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  const handleDetailRoom = (room) => {
    sessionStorage.setItem("roomDetail", JSON.stringify(room));
    navigate("/user/rooms/detail");
  };

  return (
    <div>
      <HeadPicture
        gambar={gambarHotel}
        headlinePage={"Rooms"}
        description={"This is the list of all available rooms in our Hotel"}
      />

      {/* Rooms Section */}
      <div className="rooms-content">
        <h2>Our Rooms</h2>

        {isLoading ? (
          <Spinner animation="border" variant="dark" size="lg" />
        ) : (
          <div className="rooms">
            {rooms.map((room, index) => (
              <div
                className="roomcard"
                onClick={() => handleDetailRoom(room)}
                key={index}
              >
                <RoomCard room={room} key={index} />
              </div>
            ))}
          </div>
        )}
      </div>
      <FooterComp />
    </div>
  );
};
