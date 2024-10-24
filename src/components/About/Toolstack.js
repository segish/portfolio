import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiWindows11,
  SiStackoverflow,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={5} md={2} className="tech-icons">
        <SiWindows11 />
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <SiStackoverflow />
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <SiVercel />
      </Col>
    </Row>
  );
}

export default Toolstack;
