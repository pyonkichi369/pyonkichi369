import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
  paraOne: `Hello!! My name is pyonkichi369. I'm a back-end engineer who is passionate about various web technologies.
    I like to experiment with different web technologies to be a fullstack developer. `,
  paraTwo: `Currently I work mostly with Java technologies like Spring.
    I also have hands on experience working with cloud infrastructures like <b>AWS</b> a little and have deployed applications
    keeping scalability in mind. I'm always a learner and a self taught programmer.`,
};

const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`;
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={['pyonkichi369', 'Aichi', 'Japan', 'Developer', 'Java', 'Spring', 'Gatsby']}
        />
        <h1 className="titleSeparate">About Me</h1>
        <p>
          {pageText.paraOne}
        </p>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
      </div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="location.png"
            height={60}
            alt="location image"
            textH4="Born and bought up in"
            textH3="Aichi, Japan"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="coffee.png"
            alt="coffee image"
            textH4="Love Coffee"
            textH3="Coffee + Me = Energy"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="meeting.png"
            alt="meeting image"
            textH4="Socially Awkward"
            textH3="At times"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="gym.png"
            alt="gym image"
            textH4="Love Training"
            textH3="Stay healthy"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="web.png"
            alt="web image"
            textH4="Self Taught Programmer"
            textH3="Thanks to the Web Resources"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="graduation.png"
            alt="graduation image"
            textH4="Pursued B.Tech in"
            textH3="Computer Science"
            height={60}
            width={60}
          />
        </Col>
      </Row>
    </>
  );
};
export default AboutMe;
