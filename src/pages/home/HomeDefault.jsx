import { useEffect, useState } from "react";

// Assets Import
import gambar1 from "../../assets/bg_1.jpg";
import gambar2 from "../../assets/bg_2.jpg";
import room1 from "../../assets/room-1.jpg";
import room2 from "../../assets/room-2.jpg";
import room3 from "../../assets/room-3.jpg";

// Assets Import Facility Icons
import breakfast from "../../assets/facilities_icons/breakfast icon.png";
import electricity from "../../assets/facilities_icons/electricity.png";
import gyms from "../../assets/facilities_icons/gyms icon.png";
import other from "../../assets/facilities_icons/other service icon.png";
import parking from "../../assets/facilities_icons/parking icon.png";
import swimming from "../../assets/facilities_icons/swimming pool icon.png";
import wifi from "../../assets/facilities_icons/wifi icon.png";
import workspace from "../../assets/facilities_icons/workspace icon.png";

// Styling Import
import "./HomeDefault.css";

// Components Import
import { SearchArea } from "../../components/SearchArea";
import { HighlightedRooms } from "../../components/HighlightedRooms";
import { FacilitiesArea } from "../../components/FacilitiesArea";

export const HomeDefaultPage = () => {
  const [rooms, setRooms] = useState([]);
  const [guests, setGuests] = useState([]);
  const [highlighted, setHighlighted] = useState([]);
  const [facilities, setFacilities] = useState([]);

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

    const listFacility = [
        {
            facilityName: 'Private Workspace',
            icon: workspace,
        },
        {
            facilityName: 'Parking Area',
            icon: parking,
        },
        {
            facilityName: 'Breakfast',
            icon: breakfast,
        },
        {
            facilityName: 'Free Wifi',
            icon: wifi,
        },
        {
            facilityName: 'Free Electricity',
            icon: electricity,
        },
        {
            facilityName: 'Swimming Pool',
            icon: swimming,
        },
        {
            facilityName: 'Exercise Space',
            icon: gyms,
        },
        {
            facilityName: 'Other Services',
            icon: other,
        },
    ];

    setRooms(listRoom);
    setGuests(listGuests);
    setHighlighted(highlightedRooms);
    setFacilities(listFacility);
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
        {/* Facilities */}
        <div>
            <FacilitiesArea facilities={facilities}/>
        </div>
      </div>
    </>
  );
};
