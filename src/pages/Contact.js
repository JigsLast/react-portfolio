import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => (
  <Container className="mt-5">
    <h2 className="mb-4">Contact Me</h2>
    <ListGroup>
      <ListGroup.Item>
        <FaEnvelope className="me-2" />
        <a href="mailto:swain.jigyansu1@gmail.com">swain.jigyansu1@gmail.com</a>
      </ListGroup.Item>
      <ListGroup.Item>
        <FaGithub className="me-2" />
        <a href="https://github.com/JigsLast" target="_blank" rel="noreferrer">
          https://github.com/JigsLast
        </a>
      </ListGroup.Item>
      <ListGroup.Item>
        <FaLinkedin className="me-2" />
        <a href="www.linkedin.com/in/jigyansu-swain-344a3b1b0" target="_blank" rel="noreferrer">
          linkedin.com/in/jigyansu-swain
        </a>
      </ListGroup.Item>
    </ListGroup>
  </Container>
);

export default Contact;
