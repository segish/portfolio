import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Tsega Tigneh </span>
            from <span className="purple"> Addis Ababa, Ethiopia.</span>
            <br />
            I am a recent <span className="purple">Computer Engineering graduate</span> from <span className="purple">BahirDar University</span> with hands-on experience 
              <span className="purple"> in full-stack web development. </span>
              Proficient in front-end technologies such as<span className="purple"> HTML, Tailwind CSS, React.js, Next.js, and Blade</span>, 
              as well as back-end development using <span className="purple">Laravel, Node.js, Express, MySQL, and MongoDB</span> 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Studying interesting sciences facts
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Tsega</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
