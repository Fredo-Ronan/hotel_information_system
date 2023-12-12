import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import "./style/CustomNavbar.css";

export const CustomNavbar = ({ routes }) => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 756px');

    const handleMediaChange = (event) => {
      setIsMobile(event.matches);
    }

    handleMediaChange(mediaQuery);

    mediaQuery.addListener(handleMediaChange);

    return () => {
      mediaQuery.removeListener(handleMediaChange);
    }
  }, []);

  return (
    <Navbar
      fixed="top"
      expand="lg"
      className="bg-transparent  d-flex justify-content-around mt-3"
      style={isMobile ? { marginRight: "0", marginLeft: "0"} : { marginRight: "6rem", marginLeft: "6rem"}}
    >
      <Navbar.Brand href="#home" className="text-white-navbar" style={{marginRight: "0"}}>
        <h4>The 5 Stars Hotel</h4>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto d-flex gap-4">
          {routes?.map((route, index) => (
            <Nav.Link key={index} href="#home" className="text-white-navbar">
              {route.name}
            </Nav.Link>
          ))}
        </Nav>
        <div className="d-flex gap-2">
          <Button variant="light">Login</Button>
          <Button variant="success">Sign Up</Button>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};
