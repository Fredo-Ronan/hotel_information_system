import { useEffect, useState } from "react";
import gambar1 from "../../assets/bg_1.jpg";
import gambar2 from "../../assets/bg_2.jpg";
import "./Home.css";

export const HomePage = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (token) {
      setIsLogin(true);
    }
  });

  return (
    <>
      <div className="head">
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item carousel-item-overlay carousel-item-img-cover active" style={{backgroundImage: gambar1}} data-bs-interval="2000">
              <img src={gambar1} className="d-block w-100" alt="Gambar" />
            </div>
            <div className="carousel-item carousel-item-overlay carousel-item-img-cover" style={{backgroundImage: gambar2}} data-bs-interval="2000">
              <img src={gambar2} className="d-block w-100" alt="Gambar" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};
