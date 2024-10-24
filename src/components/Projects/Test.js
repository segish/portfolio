import React from "react";
import { Card } from "react-bootstrap";

function ProjectCard({ imgPath, title, description, ghLink, demoLink }) {
    return (
        <Card className="custom-project-card">
            <div className="custom-img-wrapper">
                <Card.Img variant="top" src={imgPath} alt={title} className="custom-project-img" />
                <div className="custom-overlay">
                    <div className="custom-description">
                        <h5>{title}</h5>
                        <p>{description}</p>
                        <a href={ghLink} target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                        <br />
                        <a href={demoLink} target="_blank" rel="noopener noreferrer">
                            Demo
                        </a>
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default ProjectCard;
