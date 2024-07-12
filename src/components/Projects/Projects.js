import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/mu.jpg";
import fb from "../../Assets/Projects/fb.png";
import movie from "../../Assets/Projects/movie.png";
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
              ghLink="https://github.com/Soum1997/Simon-Game"
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
              imgPath={fb}
              isBlog={false}
              title="FriendsBook"
              description="FriendsBook is a full-stack social networking application built using the MERN stack (MongoDB, Express.js, React, and Node.js). The app allows users to create profiles, connect with friends, share posts, and interact through comments and likes. Key features include user authentication, profile customization, real-time notifications, and a responsive design for both web and mobile devices. The app also employs JWT for secure authentication, Redux for state management, and Mongoose for seamless MongoDB integration."
              ghLink="https://github.com/Soum1997/FriendsBook"              
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Movie App"
              description="MovieApp is a React-based application that interacts with the OMDB API to provide a seamless movie search experience. Users can search for movies, view detailed information, and manage their favorites list by adding or removing movies. The app is designed with a user-friendly interface and efficient state management to ensure a smooth user experience."
              ghLink="https://github.com/Soum1997/MovieApp"
              // demoLink="https://drive.google.com/file/d/1zXV9Ty39-UHcGP6woPRkEMs0UnI0u-QF/view"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
