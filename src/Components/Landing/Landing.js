import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ParticleField from 'react-particles-webgl';

export default function Landing() {
  const config = {
    showCube: false,
    dimension: '2D',
    velocity: 0.1,
    boundaryType: 'bounce',
    antialias: true,
    direction: {
      xMin: -1,
      xMax: 1,
      yMin: -1,
      yMax: 1,
      zMin: -1,
      zMax: 1,
    },
    lines: {
      colorMode: 'solid',
      color: '#666666',
      transparency: 0.9,
      limitConnections: true,
      maxConnections: 50,
      minDistance: 100,
      visible: true,
    },
    particles: {
      colorMode: 'solid',
      color: '#666666',
      transparency: 0.9,
      shape: 'circle',
      boundingBox: 'canvas',
      count: 50,
      minSize: 20,
      maxSize: 50,
      visible: true,
    },
    cameraControls: {
      enabled: false,
      enableDamping: true,
      dampingFactor: 0.9,
      enableZoom: true,
      autoRotate: false,
      autoRotateSpeed: 0.3,
      resetCameraFlag: true,
    },
  };

  return (
    <Col className="center-items  h-100" md="12">
      <div style={{ position: 'absolute', top: 0, left: 0 }} className="w-100 h-100">
        <ParticleField config={config} />
      </div>
      <Row style={{ justifyContent: 'center' }} className="center-items text-center">
        <div className="personal-details-container">
          <div className="pl-5">
            <Row>
              <h1 className="header-name"> Lahiru Ranasinghe</h1>
            </Row>
            <Row className="center-items">
              <h5>Full Stack Developer</h5>
            </Row>
          </div>
        </div>
      </Row>
    </Col>
  );
}
