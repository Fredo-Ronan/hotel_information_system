import "./style/SearchArea.css";

export const SearchArea = ({ rooms, guests }) => {
  const submitSearch = (event) => {
    event.preventDefault();

    console.log("SUBMITTED SEARCH ROOM");
  };

  return (
    <form onSubmit={submitSearch}>
      <div className="search-area">
        <div className="d-flex flex-column w-100">
          <label htmlFor="check-in" className="text-dark">
            Check In Date
          </label>
          <input
            type="date"
            id="check-in"
            className="form-control custom-input"
            placeholder="Check-in Date"
          />
        </div>

        <div className="d-flex flex-column w-100">
          <label htmlFor="check-out" className="text-dark">
            Check Out Date
          </label>
          <input
            type="date"
            id="check-out"
            className="form-control custom-input"
            placeholder="Check-out Date"
          />
        </div>

        <div className="w-100">
          <label htmlFor="room" className="text-dark">
            Select Room
          </label>
          <select name="room" id="room" className="form-select custom-input">
            <option value="" defaultValue disabled>
              Rooms
            </option>
            {rooms.map((room, index) => (
              <option value={room} key={index}>
                {room}
              </option>
            ))}
          </select>
        </div>

        <div className="w-100">
          <label htmlFor="guest" className="text-dark">
            Guest
          </label>
          <select name="guest" id="guest" className="form-select custom-input">
            <option value="" defaultValue disabled>
              Guests
            </option>
            {guests.map((guest, index) => (
              <option value={guest} key={index}>
                {guest}
              </option>
            ))}
          </select>
        </div>

        <div className="d-flex flex-end">
          <button
            type="submit"
            className="btn btn-success"
            style={{ width: "200px", fontSize: "20px" }}
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
};
