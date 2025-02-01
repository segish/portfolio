import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiWindows11,
  SiStackoverflow,
  SiNginx,
  SiOpenai,
} from "react-icons/si";
import { FaCpanel } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={5} md={2} className="tech-icons">
        <div className="tech-icons-overlay">
          Windows
        </div>
        <SiWindows11 />
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <div className="tech-icons-overlay">
          VS Code
        </div>
        <SiVisualstudiocode />
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <div className="tech-icons-overlay">
          Postman
        </div>
        <SiPostman />
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <div className="tech-icons-overlay">
          Stack Overflow
        </div>
        <SiStackoverflow />
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <div className="tech-icons-overlay">
          Vercel
        </div>
        <SiVercel />
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <div className="tech-icons-overlay">
          Cpanel
        </div>
        <FaCpanel />
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <div className="tech-icons-overlay">
          Nginx
        </div>
        <SiNginx />
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <div className="tech-icons-overlay">
          OpenAI
        </div>
        <SiOpenai />
      </Col>
    </Row>
  );
}

export default Toolstack;
