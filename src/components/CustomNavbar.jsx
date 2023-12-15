import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import { MdPerson } from "react-icons/md";
import "./style/CustomNavbar.css";

export const CustomNavbar = ({ routes }) => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 756px");

    const handleMediaChange = (event) => {
      setIsMobile(event.matches);
    };

    handleMediaChange(mediaQuery);

    mediaQuery.addListener(handleMediaChange);

    return () => {
      mediaQuery.removeListener(handleMediaChange);
    };
  }, []);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const userData = sessionStorage.getItem("user");

    if (token) {
      setIsLogin(true);
    }

    if(userData){
      setUser(JSON.parse(userData));
    }
  }, []);

  const routeLogin = () => {
    navigate("/");
  };

  const routeRegister = () => {
    navigate("/signup");
  };

  const profileView = () => {
    console.log("PROFILE VIEW");
  }

  return (
    <Navbar
      fixed="top"
      expand="lg"
      className="bg-transparent  d-flex justify-content-around mt-3"
      style={
        isMobile
          ? { marginRight: "0", marginLeft: "0" }
          : { marginRight: "6rem", marginLeft: "6rem" }
      }
    >
      <Navbar.Brand
        href="#home"
        className="text-white-navbar"
        style={{ marginRight: "0" }}
      >
        <h4>The 5 Stars Hotel</h4>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto d-flex gap-4">
          {routes?.map((route, index) => (
            <Nav.Link key={index} href="#home" className="text-white-navbar">
              {route.name}
            </Nav.Link>
          ))}
        </Nav>
        <div className="d-flex gap-2">
          {isLogin ? (
            <Button variant="success" onClick={profileView}>
              <div className="d-flex align-items-center gap-2">
                <MdPerson size={30}/>
                <div>
                  {user.username}
                </div>
              </div>
            </Button>
          ) : (
            <>
              <Button variant="light" onClick={routeLogin}>
                Login
              </Button>
              <Button variant="success" onClick={routeRegister}>
                Sign Up
              </Button>
            </>
          )}
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};
