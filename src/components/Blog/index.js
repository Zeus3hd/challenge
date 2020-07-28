import React from "react";
import {
  Wrapper,
  Title,
  Card,
  CardImage,
  CardDetails,
  CardContainer,
  CardTitle,
  CardParagraph,
} from "./index.style";
const Blog = () => (
  <Wrapper>
    <Title>Blog Posts</Title>
    <CardContainer>
      <Card>
        <CardImage bg="https://picsum.photos/800/800" />
        <CardDetails>
          <CardTitle>Why is this taking too long</CardTitle>
          <CardParagraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            reprehenderit adipisci sed perferendis quia iure, aperiam ab?.
          </CardParagraph>
        </CardDetails>
      </Card>
      <Card>
        <CardImage bg="https://picsum.photos/800/800" />
        <CardDetails>
          <CardTitle>Why is this taking too long</CardTitle>
          <CardParagraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            reprehenderit adipisci sed perferendis quia iure, aperiam ab?.
          </CardParagraph>
        </CardDetails>
      </Card>
      <Card>
        <CardImage bg="https://picsum.photos/800/800" />
        <CardDetails>
          <CardTitle>Why is this taking too long</CardTitle>
          <CardParagraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            reprehenderit adipisci sed perferendis quia iure, aperiam ab?.
          </CardParagraph>
        </CardDetails>
      </Card>
    </CardContainer>
  </Wrapper>
);

export default Blog;
