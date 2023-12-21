// Import Components
import { HeadPicture } from "../../components/HeadPicture";
import { FooterComp } from "../../components/FooterComp";

// Import Assets
import gambar1 from "../../assets/bg_1.jpg";
import profileImg from "../../assets/profil.png";

// Import Styling
import "./ProfileStyle.css";

// React Bootstrap import
import { Modal, Button, Spinner } from "react-bootstrap";

// React Import
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetUserData, UpdateProfileData, UpdateProfileImage } from "../../api/apiProfile";
import { Toaster, toast } from "sonner";

export const ProfilePage = () => {
  const [disabledEdit, setDisableEdit] = useState(true);
  const [userData, setUserData] = useState();
  const [file, setFile] = useState();
  const [fileNotExists, setFileNotExists] = useState(true);
  const [isLoadingUserData, setIsLoadingUserData] = useState(false);
  const [isLoadingUpload, setIsLoadingUpload] = useState(false);
  const [isLoadingUpdate, setIsLoadingUpdate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = sessionStorage.getItem("user");

    setUserData(JSON.parse(user));
  }, []);

  const logoutBtnHandler = () => {
    sessionStorage.clear();
    navigate("/");
    toast.success("Berhasil Logout");
  };


  // EDIT USER PROFIL HANDLING
  const editBtnHandler = () => {
    setDisableEdit(!disabledEdit);
  };

  const simpanBtnHandler = (event) => {
    event.preventDefault();

    const updatedUserData = {
      "firstname": userData.firstname,
      "lastname": userData.lastname,
      "email": userData.email,
      "no_telp": userData.no_telp,
      "username": userData.username,
    }

    setIsLoadingUpdate(true);
    UpdateProfileData(updatedUserData).then((res) => {
      toast.success("Berhasil Update Data Profil Anda");
      setIsLoadingUpdate(false);
      setDisableEdit(true);
      updateUserData();
    }).catch((err) => {
      console.log(err);
      toast.error(err);
      setIsLoadingUpdate(false);
    })
  };
  // END OF EDIT USER PROFIL HANDLING

  // UPDATE USER DATA HANDLING
  const updateUserData = () => {
    setIsLoadingUserData(true);
    GetUserData()
      .then((res) => {
        sessionStorage.setItem("user", JSON.stringify(res.data));
        setUserData(res.data);
        setIsLoadingUserData(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // END OF UPDATE USER DATA HANDLING

  // FILE HANDLING
  const handleFile = (value) => {
    const maxSize = 0.05 * 1024 * 1024; // 50 KB in bytes
    if (value && value.size > maxSize) {
      toast.warning(
        "File size exceeds the limit (50 KB). Please choose a smaller file."
      );
      return;
    }

    setFile(value);
    setFileNotExists(false);
  };
  // END OF FILE HANDLING

  // MODAL HANDLING
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setFile(undefined);
    setFileNotExists(true);
  };

  const handleShow = () => setShow(true);
  // END OF MODAL HANDLING

  // UPDATE FOTO PROFIL HANDLING
  const handleUploadProfilePic = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", file);

    console.log(formData);

    setIsLoadingUpload(true);
    UpdateProfileImage(formData)
      .then((res) => {
        toast.success("Berhasil Update Foto Profil");
        handleClose();
        updateUserData();
        setIsLoadingUpload(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message + ". Maybe please try another smaller picture.");
        setIsLoadingUpload(false);
      });
  };
  // END OF FOTO PROFIL HANDLING

  return (
    <>
      <HeadPicture
        gambar={gambar1}
        headlinePage={"Profile"}
        description={"You can edit your profile detail here"}
      />
      <Toaster position="bottom-right" richColors />

      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Foto Profil</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleUploadProfilePic}>
          <Modal.Body>
            <input
              type="file"
              className="form-control"
              accept="image/*"
              onChange={(e) => handleFile(e.target.files[0])}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit" disabled={fileNotExists}>
                {isLoadingUpload ? <Spinner size="sm" animation="border" variant="light"/> : "Save Changes"}
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
      {/* End of Modal */}

      <div className="profile-container">
        {isLoadingUserData ? (
          <Spinner size="lg" className="d-flex justify-content-center" animation="border" variant="success"/>
        ) : (
          <>
            <div className="profile-img">
              <img
                src={
                  userData?.profile_img === "data:image/;base64,"
                    ? profileImg
                    : userData?.profile_img
                }
                className="profile_image"
                alt=""
                width={"300px"}
              />

              <div className="d-flex justify-content-center mt-2">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleShow}
                >
                  Edit Foto Profil
                </button>
              </div>
            </div>
            <div>
              <h2>Profil Anda</h2>

              <form onSubmit={simpanBtnHandler}>
                <div className="d-flex flex-column gap-2">
                  <div className="d-flex gap-2">
                    <div className="col-6">
                      <label htmlFor="firstname">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        disabled={disabledEdit}
                        name="firstname"
                        placeholder="Firstname"
                        value={userData?.firstname}
                        onChange={(e) => setUserData((prev) => ({ ...prev, firstname: e.target.value}))}
                      />
                    </div>
                    <div className="col-6">
                      <label htmlFor="lastname">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        disabled={disabledEdit}
                        value={userData?.lastname}
                        name="lastname"
                        placeholder="Lastname"
                        onChange={(e) => setUserData((prev) => ({ ...prev, lastname: e.target.value}))}
                      />
                    </div>
                  </div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    size={80}
                    className="form-control"
                    name="email"
                    disabled
                    placeholder="Email"
                    value={userData?.email}
                    onChange={(e) => setUserData((prev) => ({ ...prev, email: e.target.value}))}
                  />
                  <label htmlFor="noTelp">No Telepon</label>
                  <input
                    type="number"
                    className="form-control"
                    disabled={disabledEdit}
                    name="noTelp"
                    placeholder="No Telp"
                    value={userData?.no_telp}
                    onChange={(e) => setUserData((prev) => ({ ...prev, no_telp: e.target.value}))}
                  />
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    disabled={disabledEdit}
                    name="username"
                    placeholder="Username"
                    value={userData?.username}
                    onChange={(e) => setUserData((prev) => ({ ...prev, username: e.target.value}))}
                  />
                </div>

                <div className="d-flex justify-content-between mt-4">
                  <div className="d-flex gap-2">
                    {disabledEdit ? (
                      <button
                        type="button"
                        className="btn btn-warning"
                        onClick={editBtnHandler}
                      >
                        Edit
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={editBtnHandler}
                      >
                        Batal
                      </button>
                    )}
                    <button
                      type="submit"
                      className="btn btn-success"
                      disabled={disabledEdit}
                    >
                      {isLoadingUpdate ? <Spinner animation="border" variant="light" size="sm"/>
                      : "Simpan"
                      }
                    </button>
                  </div>

                  <div>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={logoutBtnHandler}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
      <FooterComp />
    </>
  );
};
