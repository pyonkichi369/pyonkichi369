import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';

const SkillsProgress = () => (
  <div>
    <h2>My Skills</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>

        <ProgressBar
          percent={60}
          text="Java"
        />
        <ProgressBar
          percent={50}
          text="Spring"
        />
        <ProgressBar
          percent={80}
          text="PHP"
        />
        <ProgressBar
          percent={70}
          text="Laravel"
        />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={30}
          text="Python"
        />
        <ProgressBar
          percent={80}
          text="MySQL"
        />
        <ProgressBar
          percent={55}
          text="JavaScript"
        />
        <ProgressBar
          percent={80}
          text="Wordpress"
        />
      </Col>
    </Row>
  </div>
);

export default SkillsProgress;
