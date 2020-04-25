import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Row, Col } from 'react-bootstrap';

import timeline from './timeline.json';

export default function Experience() {
  return (
    <Col className="experience" md={12}>
      <Row className="h-25">
        <Col className="center-items" md={12}>
          <h2 className="py-5">{`Education & Experience`}</h2>
        </Col>
      </Row>
      <Row>
        ¯
        <Col md={12}>
          <VerticalTimeline layout="1-column">
            {timeline.map((data) => {
              return (
                <VerticalTimelineElement
                  position={'right'}
                  className="vertical-timeline-element--work experience-timeline"
                  icon={
                    <div className="h-100 w-100 center-items">
                      <i class={'fas fa-' + data.icon} />
                    </div>
                  }
                >
                  <h5 className="vertical-timeline-element-title pb-2">{data.heading}</h5>
                  <h5 className="vertical-timeline-element-subtitle">{`${data.organization_name}`}</h5>
                  <div>
                    <span className="date-details">{`${data.start_date}-${data.end_date}`}</span>
                  </div>
                  <div>
                    {' '}
                    {data.city !== '' ? (
                      <span className="location-details">
                        {/* <i class="fas fa-map-marker-alt"></i> */}
                        {`  ${data.city}, ${data.country}`}
                      </span>
                    ) : (
                      ''
                    )}
                  </div>
                  <div className="mt-4">
                    <ul>
                      {data.responsibilities.map((item) => {
                        return <li>{item}</li>;
                      })}
                    </ul>
                  </div>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </Col>
      </Row>
    </Col>
  );
}
