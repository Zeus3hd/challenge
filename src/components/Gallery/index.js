import React from "react";
import { Wrapper, Title, Container, Photo, Column } from "./index.style";
const Gallery = () => (
  <Wrapper>
    <Title>Photography</Title>
    <Container>
      <Column>
        <Photo bg={"https://picsum.photos/800/800"} height="350" />
        <Photo bg={"https://picsum.photos/800/800"} height="170" />
        <Photo bg={"https://picsum.photos/800/800"} height="350" />
      </Column>
      <Column>
        <Photo bg={"https://picsum.photos/800/800"} height="170" />
        <Photo bg={"https://picsum.photos/800/800"} height="350" />
        <Photo bg={"https://picsum.photos/800/800"} height="170" />
      </Column>
      <Column>
        <Photo bg={"https://picsum.photos/800/800"} height="350" />
        <Photo bg={"https://picsum.photos/800/800"} height="170" />
        <Photo bg={"https://picsum.photos/800/800"} height="350" />
      </Column>
    </Container>
  </Wrapper>
);

export default Gallery;
