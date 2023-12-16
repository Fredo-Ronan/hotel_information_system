import { useEffect, useState } from "react";
import gambar1 from "../../assets/bg_1.jpg";
import gambar2 from "../../assets/bg_2.jpg";
import "./HomeDefault.css";
import { SearchArea } from "../../components/SearchArea";
import { HighlightedRooms } from "../../components/HighlightedRooms";

import room1 from "../../assets/room-1.jpg";
import room2 from "../../assets/room-2.jpg";
import room3 from "../../assets/room-3.jpg";

export const HomeDefaultPage = () => {
  const [rooms, setRooms] = useState([]);
  const [guests, setGuests] = useState([]);
  const [highlighted, setHighlighted] = useState([]);

  useEffect(() => {
    const listRoom = ["Luxury", "Suiite", "Deluxe", "Single"];

    const listGuests = ["1 Adult", "2 Adult", "3 Adult", "4 Adult", "5 Adult"];

    const highlightedRooms = [
      {
        picture: room1,
        roomName: "Luxury",
        price: 200,
        stars: 5,
      },
      {
        picture: room2,
        roomName: "Deluxe",
        price: 300,
        stars: 5,
      },
      {
        picture: room3,
        roomName: "Suite",
        price: 500,
        stars: 5,
      },
    ];

    setRooms(listRoom);
    setGuests(listGuests);
    setHighlighted(highlightedRooms);
  }, []);

  return (
    <>
      {/* Head */}
      <div className="head">
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner w-100">
            <div
              className="carousel-item carousel-item-overlay carousel-item-img-cover active"
              data-bs-interval="4000"
            >
              <div className="carousel-item-img">
                <img src={gambar1} className="d-block" alt="Gambar" />
              </div>
            </div>
            <div
              className="carousel-item carousel-item-overlay carousel-item-img-cover"
              data-bs-interval="4000"
            >
              <div className="carousel-item-img">
                <img src={gambar2} className="d-block" alt="Gambar" />
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Main Container Content */}
      <div className="main-container">
        {/* Search Area Component */}
        <div>
          <SearchArea rooms={rooms} guests={guests} />
        </div>
        {/* Highlighted Rooms */}
        <div>
          <HighlightedRooms highlighted={highlighted} />
        </div>
      </div>
    </>
  );
};
