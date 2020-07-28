import React, { useState } from "react";
import {
  Wrapper,
  Title,
  Container,
  InnerContainer,
  Slide,
  Quotation,
  Paragraph,
  Name,
} from "./index.style";
const Testimony = () => {
  const [distance, setDistance] = useState(0);
  return (
    <Wrapper>
      <Title>What Clients Are Saying</Title>
      <Container>
        <InnerContainer
          distance={distance}
          onClick={() => {
            setDistance(distance - 100);
          }}
        >
          <Slide>
            <Quotation>"</Quotation>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              veniam officiis placeat tempore, voluptates quis, odit mollitia
              neque, quisquam sint temporibus in ullam delectus modi repudiandae
              expedita! Cupiditate aspernatur illum adipisci recusandae beatae
              ea impedit.
            </Paragraph>
            <Name>_ Ryan Specer</Name>
          </Slide>
          <Slide>
            <Quotation>"</Quotation>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              veniam officiis placeat tempore, voluptates quis, odit mollitia
              neque, quisquam sint temporibus in ullam delectus modi repudiandae
              expedita! Cupiditate aspernatur illum adipisci recusandae beatae
              ea impedit.
            </Paragraph>
            <Name>_ Ryan Specer</Name>
          </Slide>
          <Slide>
            <Quotation>"</Quotation>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              veniam officiis placeat tempore, voluptates quis, odit mollitia
              neque, quisquam sint temporibus in ullam delectus modi repudiandae
              expedita! Cupiditate aspernatur illum adipisci recusandae beatae
              ea impedit.
            </Paragraph>
            <Name>_ Ryan Specer</Name>
          </Slide>
        </InnerContainer>
      </Container>
    </Wrapper>
  );
};

export default Testimony;
