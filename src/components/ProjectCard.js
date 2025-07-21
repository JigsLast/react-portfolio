import React from "react";
import { Card, Button } from "react-bootstrap";

const ProjectCard = ({ title, description, tech, demoLink, codeLink }) => {
  return (
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text><strong>Tech:</strong> {tech}</Card.Text>
        <Button
          variant="primary"
          href={demoLink}
          target="_blank"
          className="me-2"
        >
          Live Demo
        </Button>
        <Button
          variant="secondary"
          href={codeLink}
          target="_blank"
        >
          View Code
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
