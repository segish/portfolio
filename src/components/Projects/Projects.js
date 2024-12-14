import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import yat from "../../Assets/Projects/yat.png";
import Elearning from "../../Assets/Projects/E_learning.jpg";
import stms from "../../Assets/Projects/STMS.jpg";
import Traffic from "../../Assets/Projects/Traffic_controll.jpg";
import fb from "../../Assets/Projects/fbclone.jpg";
import exam from "../../Assets/Projects/exam.jpg";
import sms from "../../Assets/Projects/sms.jpg";

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
              imgPath={yat}
              isBlog={false}
              title="Business Website For YAT Business Group"
              description="Developed a dynamic business website for YAT Business Group using Laravel,
               MySQL, and SCSS. This comprehensive platform showcases the company's diverse business 
               operations in manufacturing, import/export, and trading"
              features={['Robust admin dashboard for complete content management',
                 'Dynamic sections for services, products, blogs, testimonials and company information',
                 'Integrated contact system with email functionality', 
                'SEO-optimized structure with schema markup and sitemap generation',
                 'Responsive design'
                ]}
              ghLink="https://github.com/YAT-WebDevelopment-Team/YAT-profile"
              demoLink="https://yatbusinessgroup.com"
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
              features={['User authentication and course enrollment.',
                'Fully responsive and performance-optimized',
                'Embeded Tutorial videos',
              ]}
              ghLink="https://github.com/segish/E_learning_NERD"
              demoLink="https://segish-social.netlify.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={exam}
              isBlog={false}
              title="Online Exam System Desktop App"
              description="Developed as a desktop application using Java Swing, 
              this system allows for secure and efficient online exams. Key features include user authentication,
              timed tests, automatic grading, and result generation. 
              The interface is user-friendly, ensuring smooth navigation for both students and administrators"
              features={['User authentication and timed test sessions.',
                'Support for multiple question codes.',
                'Automatic grading and result generation.',
                'User-friendly interface for students and administrators.']}
              ghLink="https://github.com/segish/Online_examination_system.git"
              demoLink="https://tsega-portfolio.netlify.app/"
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
              features={['Real-time vehicle detection and traffic density estimation.',
                'Adaptive signal timing based on live data.',
                'Detection of various vehicle types (cars, buses, trucks).',
                'Vehicle type based Grean light time calculation']}
              ghLink="https://github.com/segish/AI_based_traffic_controll_system"
              demoLink="https://tsega-portfolio.netlify.app/"
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
              features={['manages sophisticated main store, sub store and shop data items in one DB system', 
                'jwt authentication for admin and cashier sessions', 
                'Amazing Database model to manage sales, credits, cashes, and transfered amount through bank accounts', 
                'Respopnsive design for mobile tablet and desktops']}
              ghLink="https://github.com/segish/Stock_Management_System.git"
              demoLink="https://besal10.com/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fb}
              isBlog={false}
              title="Social Media clone"
              description="Built with MERN Stack,this platform replicates key social media features like user profiles, 
              friend connections, and a news feed. It includes real-time posting, image sharing, commenting, and liking 
              functionalities. The platform also supports secure user authentication and a responsive design for seamless
              interaction across devices."
              features={['User profiles and friend connections.',
                'Real-time posting, image sharing, and reactions.',
                'Commenting and liking functionalities',
                'Secure user authentication and a responsive design.']}
              ghLink="https://github.com/segish/Social_Media_clone.git"
              demoLink="https://segish-social.netlify.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sms}
              isBlog={false}
              title="High School Management System"
              description="Built from scratch using HTML, CSS, PHP, and Javascript  without using
              any external frameworks or libraries., this system manages student records, 
              attendance, and grading and connect teachers and student parents."
              features={['Student record management, attendance tracking, and grading.',
                 'Secure portals for admins and teachers.',
                'Chatting communication between Teachers and student parents', 
                'Fully custom-built without external frameworks or libraries.']}
              ghLink="https://github.com/segish/HighSchoolManagementSystem"
              demoLink="https://github.com/segish/HighSchoolManagementSystem"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
