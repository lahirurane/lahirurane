import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default function Technologies() {
  return (
    <Col className="h-100 technologies" md={12}>
      <Row className="h-25">
        <Col className="center-items py-5">
          <h2>Technologies</h2>
        </Col>
      </Row>
      <Row className="h-75 icon-row center-items">
        <Col md={{ span: 6 }}>
          <i className="fab fa-react"></i>
          <i className="fab fa-node"></i>

          <i className="fab fa-js"></i>
          <i className="fab fa-html5"></i>
          <i className="fab fa-css3-alt"></i>
          <i className="fab fa-sass"></i>

          {/* ,,, */}
          <i className="fab fa-aws"></i>
          <i className="fab fa-react"></i>
          <i className="fab fa-node"></i>
          <i className="fab fa-aws"></i>
          <i className="fab fa-js"></i>
        </Col>
      </Row>
    </Col>
  );
}
