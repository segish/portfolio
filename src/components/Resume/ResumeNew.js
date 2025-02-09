import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Preloader from "../Pre";
// import pdf from "../../Assets/my_cv.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import axios from 'axios';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [currentResume, setCurrentResume] = useState(null);
  const [loading, setLoading] = useState(true)
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
    fetchCurrentResume();
  }, []);

  const fetchCurrentResume = async () => {
    try {
      const response = await axios.get(`https://portfolio-backend-h8bm.onrender.com/api/resume`);
      setCurrentResume(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching resume:', error);
    } finally {
      setLoading(false)
    }
  };

  return (
    <div>
      <Container fluid className="resume-section">
        {(loading ? <Preloader load={loading} /> : <>
          <Particle />
          {currentResume && (
            <Row style={{ justifyContent: "center", position: "relative" }}>
              <Button
                variant="primary"
                href={`https://portfolio-backend-h8bm.onrender.com/${currentResume?.file}`}
                target="_blank"
                style={{ maxWidth: "250px" }}
              >
                <AiOutlineDownload />
                &nbsp;Download CV
              </Button>
            </Row>
          )}
          <Row className="resume">
            {loading ? <p>loading...</p> :
              <Document file={`https://portfolio-backend-h8bm.onrender.com/${currentResume.file}`} className="d-flex justify-content-center flex-column align-items-center">
                <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
                <Page pageNumber={2} scale={width > 786 ? 1.7 : 0.6} />
              </Document>}
          </Row>

          {currentResume && (
            <Row style={{ justifyContent: "center", position: "relative" }}>
              <Button
                variant="primary"
                href={`https://portfolio-backend-h8bm.onrender.com/${currentResume?.file}`}
                target="_blank"
                style={{ maxWidth: "250px" }}
              >
                <AiOutlineDownload />
                &nbsp;Download CV
              </Button>
            </Row>
          )}
        </>)}
      </Container>
    </div>
  );
}


export default ResumeNew;
