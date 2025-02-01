import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { useState } from "react";
import axios from 'axios';
import { useEffect } from "react";

function Projects() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`https://portfolio-backend-h8bm.onrender.com/api/projects`);
      setProjects(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project) => (
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={`https://portfolio-backend-h8bm.onrender.com/${project.image}`}
                isBlog={false}
                title={project.title}
                description={project.description}
                features={project.keyFeatures}
                ghLink={project.githubLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
