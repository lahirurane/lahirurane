import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

const projects = [
  {
    thumb: './images/thumbs/mern_example.png',
    title: 'React MERN',
    url: 'https://github.com/lahirurane/MERN_Example',
  },
  {
    thumb: './images/thumbs/graphql_example.png',
    title: 'React GraphQL',
    url: 'https://github.com/lahirurane/graphql-react-sample',
  },
  {
    thumb: './images/thumbs/northernclearners.png',
    title: 'Nothern Cleaners Web',
    url: 'http://www.northerncleaners.com.au/',
  },
  {
    thumb: './images/thumbs/videojs-example.png',
    title: 'Videojs Overlay on React',
    url: 'https://github.com/lahiru0561/videojs-sample',
  },
  {
    thumb: './images/thumbs/mern_example.png',
    title: 'Single Page RSVP on React',
    url: 'https://github.com/lahirurane/RSVP-ReactJS',
  },
  {
    thumb: './images/thumbs/movie_recommendation.png',
    title: 'Movie Recommender',
    url: 'https://github.com/lahirurane/react-movie-recommender',
  },
];
export default function ExternalLinks() {
  return (
    <Col className="h-100 externallinks" md={12}>
      <Row className="h-25">
        <Col className="center-items py-5">
          <h2>Projects</h2>
        </Col>
      </Row>
      <Row className="h-75 projects-row center-items">
        {projects.map((item) => {
          return (
            <Col md={{ span: 3 }} className="project-col">
              <div
                onClick={(e) => {
                  window.open(item.url, '_blank');
                }}
                target="_blank"
                rel="noopener noreferrer"
                className="h-100 project-container overflow-hidden"
              >
                <Row className="h-75 overflow-hidden">
                  <Col className="" md={12}>
                    <Image className="w-100" src={item.thumb} alt={item.title} />
                  </Col>
                </Row>
                <Row className="h-25">
                  <Col className="center-items" md={12}>
                    <span>{item.title}</span>
                  </Col>
                </Row>
              </div>
            </Col>
          );
        })}
      </Row>
    </Col>
  );
}
