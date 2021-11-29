import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useLocation } from "react-router";

export default function NavBar() {
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <Navbar bg="dark">
        <Link to="/">
          <Navbar.Brand>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/LinkedIn_Logo_2013.svg/2560px-LinkedIn_Logo_2013.svg.png"
              width="auto"
              height="40"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </Link>
        {
          location.pathname !== "/" &&
          <Link to="/">
            <Nav className="mr-auto">
              Home
            </Nav>
          </Link>
        }
        {
          location.pathname !== "/favourites" &&
          <Link to="/favourites">
            <Nav className="mr-auto">
              Favourites
            </Nav>
          </Link>
        }
      </Navbar>
    </div>
  );
}
