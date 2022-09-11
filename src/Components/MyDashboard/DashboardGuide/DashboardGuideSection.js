import React, { useState } from 'react';
import { Tag, Collapse, Col, Row } from 'antd';
const { Panel } = Collapse;

import './DashboardGuideSection.less';

function DashboardGuideSection({ section }) {

  return (
    <Col xs={6}>
      <Row gutter={[16, 16]} className="guide-section">
        {section.map(box => (
          <Col className="guide-category">
            <a href={box.link} className="guide-link">
              {box.title}
            </a>
          </Col>
        ))}
      </Row>
    </Col>
  );
}

export default DashboardGuideSection;
