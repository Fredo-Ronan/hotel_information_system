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

export const RoomPage = () => {

    const [rooms, setRooms] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const roomData = [
            {
                roomName: 'King Room',
                picture: room1,
                roomDescription: 'Ruangan Hotel bak Raja',
                stars: 5,
                availability: 10,
                status: 'Aktif',
                price: 120,
                view: "Beach View",
                size: 45,
                max: 4,
            },
            {
                roomName: 'Bagus',
                picture: room2,
                roomDescription: 'Ruangan Hotel bak Raja',
                stars: 5,
                availability: 10,
                status: 'Aktif',
                price: 120,
                view: "Mountain View",
                size: 30,
                max: 3,
            },
            {
                roomName: 'Bagus',
                picture: room3,
                roomDescription: 'Ruangan Hotel bak Raja',
                stars: 5,
                availability: 10,
                status: 'Aktif',
                price: 120,
                view: "Forest View",
                size: 20,
                max: 2,
            },
            // Tambahkan data ruangan lain disini
        ];

        setRooms(roomData);
    }, []);

    const handleDetailRoom = (room) => {
        console.log(room);
        sessionStorage.setItem("roomDetail", JSON.stringify(room));
        navigate("/user/rooms/detail");
    }

    return (
        <div>
            <HeadPicture gambar={gambarHotel} headlinePage={"Rooms"} description={"This is the list of all available rooms in our Hotel"}/>

            {/* Rooms Section */}
            <div className="rooms-content">
                <h2>Our Rooms</h2>
                <div className="rooms">
                    {rooms.map((room, index) => (
                        <div className="roomcard" onClick={() => handleDetailRoom(room)} key={index}>
                            <RoomCard room={room} key={index}/>
                        </div>
                    ))}
                </div>
            </div>
            <FooterComp/>
        </div>
    )
}