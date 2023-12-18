import React, { Component } from "react";

class AddRoomForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomName: "",
      available: "",
      price: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    alert("A new room was added: " + this.state.roomName);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="mb-3">
          <label
            htmlFor="roomName"
            className="form-label fs-3 justify-content-md-start d-flex"
            style={{ color: "black" }}
          >
            Room Name
          </label>
          <input
            type="text"
            name="roomName"
            className="form-control"
            onChange={this.handleChange}
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="available"
            className="form-label fs-3 justify-content-md-start d-flex"
            style={{ color: "black" }}
          >
            Available
          </label>
          <input
            type="text"
            name="available"
            className="form-control"
            onChange={this.handleChange}
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="price"
            className="form-label fs-3 justify-content-md-start d-flex"
            style={{ color: "black" }}
          >
            Price
          </label>
          <input
            type="text"
            name="price"
            className="form-control"
            onChange={this.handleChange}
          />
        </div>

        <div className="mb-3 justify-content-md-start d-flex">
          <button type="submit" className="btn btn-primary">
            Add
          </button>
          <button type="reset" className="btn btn-secondary ms-2">
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

export default AddRoomForm;
