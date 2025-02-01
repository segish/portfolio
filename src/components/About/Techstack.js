import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiLaravel
} from "react-icons/di";
import {
  SiMysql,
  SiExpress,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const FlutterLogo = () => (
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png"
    alt="Flutter Logo"
    style={{ width: "100px", height: "50px", filter: "brightness(0) invert(1)" }}
  />
);

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={5} md={2} className="tech-icons">
      <div className="tech-icons-overlay">
        C++
      </div>
        <CgCPlusPlus />
      </Col>
      <Col xs={5} md={2} className="tech-icons">
      <div className="tech-icons-overlay">
        Java
      </div>
        <DiJava />
      </Col>
      <Col xs={5} md={2} className="tech-icons">
      <div className="tech-icons-overlay">
        Javascript
      </div>
        <DiJavascript1 />
      </Col>
      <Col xs={5} md={2} className="tech-icons">
      <div className="tech-icons-overlay">
        Python
      </div>
        <DiPython />
      </Col>
      <Col xs={5} md={2} className="tech-icons">
      <div className="tech-icons-overlay">
        Node.js
      </div>
        <DiNodejs />
      </Col>
      <Col xs={5} md={2} className="tech-icons">
      <div className="tech-icons-overlay">
        React.js
      </div>
        <DiReact />
      </Col>
      <Col xs={5} md={2} className="tech-icons">
      <div className="tech-icons-overlay">
        Next.js
      </div>
        <TbBrandNextjs/>
      </Col>
      <Col xs={5} md={2} className="tech-icons">
      <div className="tech-icons-overlay">
        Tailwind CSS
      </div>
        <SiTailwindcss />
      </Col>
      <Col xs={5} md={2} className="tech-icons">
      <div className="tech-icons-overlay">
        Express.js
      </div>
        <SiExpress />
      </Col>
      <Col xs={5} md={2} className="tech-icons">
      <div className="tech-icons-overlay">
        Laravel
      </div>
        <DiLaravel />
      </Col>
      <Col xs={5} md={2} className="tech-icons">
      <div className="tech-icons-overlay">
        Flutter
      </div>
        <FlutterLogo />
      </Col>
      <Col xs={5} md={2} className="tech-icons">
      <div className="tech-icons-overlay">
        MongoDB
      </div>
        <DiMongodb />
      </Col>
      <Col xs={5} md={2} className="tech-icons">
      <div className="tech-icons-overlay">
        MySQL
      </div>
        <SiMysql />
      </Col>
      <Col xs={5} md={2} className="tech-icons">
      <div className="tech-icons-overlay">
        Github
      </div>
        <DiGit />
      </Col>
    </Row>
  );
}

export default Techstack;
