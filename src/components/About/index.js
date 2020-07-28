import React from "react";
import {
  Wrapper,
  LeftSide,
  RightSide,
  LeftTitle,
  Image,
  Paragraph,
  StatContainer,
  StatTitle,
  StatBar,
} from "./index.style";
const About = () => (
  <Wrapper>
    <LeftSide>
      <LeftTitle>About Me</LeftTitle>
      <Image
        src="https://colorlib.com/preview/theme/credo/images/credo_img_1.jpg"
        alt="douce"
      />
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        repudiandae cupiditate, aspernatur ipsa enim magnam quaerat pariatur
        vero provident necessitatibus amet saepe officiis labore. Provident
        deserunt necessitatibus expedita. Voluptate, soluta?
      </Paragraph>
      <Paragraph>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
        praesentium quibusdam minus voluptatem sequi iure amet?
      </Paragraph>
    </LeftSide>
    <RightSide>
      <StatContainer>
        <StatTitle>Photographer</StatTitle>
        <StatBar rate={89} />
      </StatContainer>
      <StatContainer>
        <StatTitle>Wedding</StatTitle>
        <StatBar rate={75} />
      </StatContainer>
      <StatContainer>
        <StatTitle>Events</StatTitle>
        <StatBar rate={94} />
      </StatContainer>
      <StatContainer>
        <StatTitle>Conferences</StatTitle>
        <StatBar rate={94} />
      </StatContainer>
    </RightSide>
  </Wrapper>
);

export default About;
