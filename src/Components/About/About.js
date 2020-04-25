import React from 'react';
import { Row, Col, Image, Button } from 'react-bootstrap';

export default function About() {
  return (
    <Col className=" h-100 about" md={12}>
      <Row className="h-25">
        <Col>
          <h1 className="py-5 mt-4">About Me</h1>
        </Col>
      </Row>
      <Row className="h-75 center-items align-items-start">
        <Col md={4}>
          <Row>
            <Col>
              <Image
                style={{ width: '15em' }}
                src="/images/Lahiru.jpg"
                alt="Lahiru Ranasinghe"
                roundedCircle
              />
            </Col>
          </Row>
        </Col>
        <Col className="justify-content" md={{ span: 6 }}>
          <span className="description">
            I am a Software Engineer with deep experience in modern technologies including ReactJS,
            Node, MongoDB, OrientDB, Redux, Sitecore, Jenkins AWS, and GIT.
          </span>
          <br />
          <span className="description">
            I have delivered projects in number of industries including technology services,
            entertainment, cryptocurrency and sports. I am well experienced in agile delivery
            methodologies as well as waterfall, with deep technical experience in modern DevOps
            practices including CI/CD tooling and test automation.
          </span>
          <br />

          <span className="mt-5 description text-right">
            <div className="external-profiles">
              <h2>
                <i
                  onClick={(e) => {
                    window.open('https://www.linkedin.com/in/lahirurane/', '_blank');
                  }}
                  className="fab fa-linkedin pr-4"
                ></i>
                <i
                  onClick={(e) => {
                    window.open('https://medium.com/@lahiru0561', '_blank');
                  }}
                  className="fab fa-medium pr-4"
                ></i>
                <i
                  onClick={(e) => {
                    window.open('https://github.com/lahirurane', '_blank');
                  }}
                  className="fab fa-github pr-4"
                ></i>
              </h2>
            </div>
          </span>
        </Col>
      </Row>
    </Col>
  );
}
