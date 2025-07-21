import React from "react";
import { Container, Button, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Container className="text-center mt-5">
        <Image
          src="/profile.jpg"
          roundedCircle
          width="150"
          height="150"
          alt="Profile"
          className="mb-4"
        />

        <h1>Hello, I'm <span style={{ color: "#0dcaf0" }}>Jigyansu</span> 👋</h1>
        <p>A React Developer and DevOps learner building real-world projects.</p>

        <div className="d-flex justify-content-center gap-3 mt-4">
          <Button
            variant="outline-primary"
            href="/Jigyansu_Swain_Resume.pdf"
            download
          >
            📄 Download Resume
          </Button>

          <Link to="/contact">
            <Button variant="primary">
              💼 Hire Me
            </Button>
          </Link>
        </div>
      </Container>
    </motion.div>
  );
};

export default Home;
