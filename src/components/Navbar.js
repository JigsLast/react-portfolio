import React, { useContext } from "react";
import { Navbar as RBNavbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";

const Navbar = () => {
  const { toggleTheme, darkMode } = useContext(ThemeContext); // ✅ moved inside

  return (
    <RBNavbar bg={darkMode ? "dark" : "light"} variant={darkMode ? "dark" : "light"} expand="lg">
      <Container>
        <RBNavbar.Brand as={Link} to="/">Portfolio</RBNavbar.Brand>
        <RBNavbar.Toggle aria-controls="basic-navbar-nav" />
        <RBNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
          <Button variant="outline-primary" onClick={toggleTheme}>
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </Button>
        </RBNavbar.Collapse>
      </Container>
    </RBNavbar>
  );
};

export default Navbar;
