import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Elearning from "../../Assets/Projects/E_learning.jpg";
import stms from "../../Assets/Projects/STMS.jpg";
import Traffic from "../../Assets/Projects/Traffic_controll.jpg";
import fb from "../../Assets/Projects/fbclone.jpg";

function Projects() {
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fb}
              isBlog={false}
              title="Social Media clone"
              description="Built with MERN Stack,this platform replicates key social media features like user profiles, 
              friend connections, and a news feed. It includes real-time posting, image sharing, commenting, and liking 
              functionalities. The platform also supports secure user authentication and a responsive design for seamless
               interaction across devices."
              ghLink="https://github.com/segish/Stock_Management_System.git"
              demoLink="https://github.com/segish/Stock_Management_System.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Elearning}
              isBlog={false}
              title="E-Learning Platform"
              description="Developed with MERN Stack and Tailwind CSS, this platform offers an interactive e-learning experience. 
              It includes user authentication, course enrollment, progress tracking, video lessons, and a discussion forum. 
              The site is responsive and optimized for performance, making it accessible across all devices."
              ghLink="https://github.com/segish/E_learning_NERD"
              demoLink="https://github.com/segish/E_learning_NERD"
            />
          </Col>

          <Col md={4} className="project-card ">
            <ProjectCard
              imgPath={Traffic}
              isBlog={false}
              title="AI Based Traffic Light Controll"
              description="Developed using YOLO-based object detection, this system enhances traffic flow by identifying vehicles
               in real-time from video feeds. It dynamically adjusts traffic signal timings based on vehicle density at intersections,
                improving traffic efficiency and reducing wait times. The model detects multiple vehicle types like cars, buses, and trucks, 
                optimizing the flow across various lanes."
              ghLink="https://github.com/segish/AI_based_traffic_controll_system"
              demoLink="https://github.com/segish/AI_based_traffic_controll_system"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stms}
              isBlog={false}
              title="Stock Management System"
              description="Built with MERN Stack and Tailwind CSS, this system streamlines inventory management by tracking stock
               levels, product categories, and order history. It features real-time stock updates, low stock alerts, and a user-friendly
                interface for managing products, suppliers, and customers. The system ensures efficient inventory control and improves
                 business operations."
              ghLink="https://github.com/segish/Stock_Management_System.git"
              demoLink="https://github.com/segish/Stock_Management_System.git"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
