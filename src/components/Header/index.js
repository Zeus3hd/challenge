import React from "react";
import {
  Wrapper,
  Container,
  Title,
  SubTitle,
  Paragraph,
  Button,
} from "./index.style";
const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Title>I'm Craig Smith</Title>
        <SubTitle>Photographer | Speaker</SubTitle>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          voluptate dolore, nostrum inventore quisquam totam dignissimos culpa!
          Eveniet.
        </Paragraph>
        <Button>Contact Me</Button>
      </Container>
    </Wrapper>
  );
};

export default Header;
