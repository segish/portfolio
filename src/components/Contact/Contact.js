import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import {
    AiFillGithub,
    AiFillInstagram,
} from "react-icons/ai";
import {
    FaTelegramPlane,
    FaLinkedinIn,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';


function CONTACTS() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_m7owj0i', 'template_mnwfico', form.current, 'YCPBc9CNXOh9ysL1F')
            .then((result) => {
                console.log(result.text);
                alert('Email sent successfully!');
            }, (error) => {
                console.log(error.text);
                alert('Failed to send email.');
            });
    };

    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <div className="section-title">
                            <h2>
                                CONTACT ME
                            </h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-contact-social">
                        <h1>FIND ME ON</h1>
                        <p>
                            Feel free to <span className="purple">contact </span>with me
                        </p>
                        <div className="social-contacts">
                            <li className="social-icons">
                                <a
                                    href="https://t.me/tse_21_30"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaTelegramPlane />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="mailto:tsegishuser@gmail.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <MdEmail />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://github.com/segish"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/tsega-tigneh-b7099b333"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.instagram.com/tsegish21_30/profilecard/?igsh=bWE5N2xzYTVnbWdo"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <AiFillInstagram />
                                </a>
                            </li>
                        </div>
                        <div className="email-section">
                            <h1 className="">SEND ME AN EMAIL</h1>
                            <form ref={form} className="contactForm">
                                <div className="contact-form padd-15">
                                    <div className="emailrow fllllddl">
                                        <div className="form-item padd-15 col-6" style={{paddingRight:"10px"}}>
                                            <div className="form-group">
                                                <input type="text" name="Name" id="Name" className="forming1" placeholder="Name"/>
                                            </div>
                                        </div>
                                        <div className="form-item padd-15 col-6">
                                            <div className="form-group">
                                                <input type="text" name="Email" id="Email" className="forming1" placeholder="Email" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="emailrow">
                                        <div className="form-item col-12 padd-15">
                                            <div className="form-group">
                                                <input type="text" name="subject" id="subject" className="forming" placeholder="Subject" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="emailrow">
                                        <div className="form-item col-12 padd-15">
                                            <div className="form-group">
                                                <textarea name="message" id="message" className="forming" placeholder="Message" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="emailrow">
                                        <div className="form-item col-12 padd-15">
                                            <div className="form-group">
                                                <button className="forming" onClick={sendEmail}>send</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default CONTACTS;
