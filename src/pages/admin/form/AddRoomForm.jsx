import React, { Component } from "react";
import { AddKamar, UpdateKamar } from "../../../api/apiKamar";
import { Toaster, toast } from "sonner";

class AddRoomForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.initialValues?.id || "",
      nama_kamar: props.initialValues?.nama_kamar ||  "",
      tersedia: props.initialValues?.tersedia || "",
      deskripsi: props.initialValues?.deskripsi || "",
      harga: props.initialValues?.harga || "",
      max: props.initialValues?.max || "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    console.log(this.state);

    sessionStorage.removeItem("room");
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    toast.warning("Loading...");

    if(this.state.id){
      UpdateKamar(this.state, this.state.id).then((res) => {
        console.log(res);
        toast.success("Berhasil Update Data Kamar");

        setTimeout(() => {
          location.href = "/admin/room";
        }, 2000);
      }).catch((err) => {
        toast.error(err);
      });
    } else {
      AddKamar(this.state).then((res) => {
        console.log(res);
        toast.success("Berhasil Add Data Kamar");
  
        setTimeout(() => {
          location.href = "/admin/room";
        }, 2000);
      }).catch((err) => {
        toast.error(err);
      })
    }
  }

  handleCancel() {
    location.href = "/admin/room";
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Toaster position="bottom-right" richColors/>
        <div className="mb-3">
          <label
            htmlFor="nama_kamar"
            className="form-label fs-3 justify-content-md-start d-flex"
            style={{ color: "black" }}
          >
            Room Name
          </label>
          <input
            type="text"
            name="nama_kamar"
            className="form-control"
            value={this.state.nama_kamar}
            onChange={this.handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="deskripsi"
            className="form-label fs-3 justify-content-md-start d-flex"
            style={{ color: "black" }}
          >
            Description
          </label>
          <input
            type="text"
            name="deskripsi"
            className="form-control"
            value={this.state.deskripsi}
            onChange={this.handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="max"
            className="form-label fs-3 justify-content-md-start d-flex"
            style={{ color: "black" }}
          >
            Max Capacity
          </label>
          <input
            type="number"
            name="max"
            className="form-control"
            value={this.state.max}
            onChange={this.handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="tersedia"
            className="form-label fs-3 justify-content-md-start d-flex"
            style={{ color: "black" }}
          >
            Available
          </label>
          <input
            type="number"
            name="tersedia"
            className="form-control"
            value={this.state.tersedia}
            onChange={this.handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="harga"
            className="form-label fs-3 justify-content-md-start d-flex"
            style={{ color: "black" }}
          >
            Price
          </label>
          <input
            type="number"
            name="harga"
            className="form-control"
            value={this.state.harga}
            onChange={this.handleChange}
            required
          />
        </div>

        <div className="mb-3 justify-content-md-start d-flex">
          <button type="submit" className="btn btn-primary">
            {this.state.id ?
            "Edit" : "Add" 
            }
          </button>
          <button type="reset" className="btn btn-secondary ms-2" onClick={this.handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

export default AddRoomForm;
