import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => (
  <footer className="bg-dark text-light py-3 mt-4">
    <Container className="text-center">
      &copy; {new Date().getFullYear()} Jigyansu Swain • Built with ❤️ in React
    </Container>
  </footer>
);

export default Footer;
