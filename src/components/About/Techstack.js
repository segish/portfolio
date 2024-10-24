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
} from "react-icons/di";
import {
  SiMysql,
  SiExpress,
  SiTailwindcss
} from "react-icons/si";

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
        <CgCPlusPlus />
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <SiExpress />
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <FlutterLogo />
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <DiGit />
      </Col>
    </Row>
  );
}

export default Techstack;
