import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <Container className="mt-5">
      <h2 className="mb-4">My Projects</h2>
      <Row>
        <Col md={6}>
          <ProjectCard
            title="Client Management Dashboard"
            description="A full-featured React dashboard with CRUD operations, filters, and responsive design."
            tech="React, Bootstrap, Axios, JSON Server"
            codeLink="https://github.com/JigsLast/client-management-dashboard"
          />
        </Col>
        <Col md={6}>
          <ProjectCard
            title="Restaurant Management System"
            description="Python + JS based app to manage restaurant bookings and orders."
            tech="Python, JavaScript, SQL"
            codeLink="https://github.com/yourusername/restaurant-manager"
          />
        </Col>
        {/* Add more cards here */}
      </Row>
    </Container>
  );
};

export default Projects;
