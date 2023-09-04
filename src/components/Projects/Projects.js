import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/mu.jpg";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/ecommpro.jpg";
import chatify from "../../Assets/Projects/9999.jpg";
import bitsOfCode from "../../Assets/Projects/9998.jpg";

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
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Simon Game"
              description="Experience the nostalgia of the classic Simon game with a modern twist! This interactive memory game is built using a combination of HTML, CSS, and JavaScript. Test your memory and concentration with this electronic memory game, known for its simple yet challenging gameplay."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://amazing-cendol-1ceede.netlify.app/"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="AICTE Dashboard"
              description="The proposed dashboard for the CRCS Portal, Ministry of Cooperation, developed using the Power BI tool as a part of a hackathon
              organized by AICTE. This comprehensive dashboard design and development of
              a comprehensive dashboard for the upcoming new CRCS portal that will
              streamline the registration process, handle amendments and appeals, and
              manage annual returns for the registered societies.
              Dataset that is provided by AICTE as part of hackathon is used to develop this
              dashboard."
              ghLink="https://github.com/Soum1997/Soumya_AICTE-CRCS-Dashboard-"
              demoLink="https://drive.google.com/file/d/1zXV9Ty39-UHcGP6woPRkEMs0UnI0u-QF/view"
            />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="World Wide Wishes(Ecommerce Website)"
              description="This project is an e-commerce web application that allows users to browse, search for, and purchase products online. It provides features such as user registration, product listings, user authentication, shopping cart functionality, order processing, and product reviews. The application is designed to simulate the basic functionality of an online marketplace."
              ghLink="https://github.com/Soum1997/Ecommerce-Website-MERN-"              
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="MU Exam Portal"
              description="The MU Exam Portal is a comprehensive examination management system designed and developed by me. It streamlines and simplifies the examination processes for students, faculty, and administrators at our university, enhancing efficiency and transparency."
              ghLink="https://github.com/Soum1997/MU-Exam-Portal-Fullstack"
              // demoLink="https://drive.google.com/file/d/1zXV9Ty39-UHcGP6woPRkEMs0UnI0u-QF/view"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
