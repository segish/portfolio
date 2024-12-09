import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsLightning } from "react-icons/bs";

function ProjectCards(props) {
  const [showFeatures, setShowFeatures] = useState(false);

  const toggleFeatures = () => {
    setShowFeatures((prevShowFeatures) => !prevShowFeatures);
  };

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
          <Button
            variant="primary"
            style={{ marginBottom: "10px" }}
            onClick={toggleFeatures}
          >
            <BsLightning /> &nbsp;
            {showFeatures ? "Hide Features" : "Key Features"}
          </Button>
          {showFeatures && props.features && (
            <ul style={{ textAlign: "left" }}>
              {props.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
          {"\n"}
          {"\n"}
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            Demo
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
