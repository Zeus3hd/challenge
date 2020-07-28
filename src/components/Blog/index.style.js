import styled from "styled-components";

export const Wrapper = styled.section`
  height: 90vh;
  background: f2f2f2;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h2``;

export const Card = styled.div`
  background: #fff;
  height: 50vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);
`;

export const CardImage = styled.div`
  flex: 3;
  background: url(${({ bg }) => bg}) no-repeat;
  background-size: cover;
`;

export const CardDetails = styled.div`
  flex: 1;
  padding: 1rem;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 25%);
  grid-gap: 3rem;
  margin: 0 auto;
  margin-left: 10%;
  margin-top: 10rem;
`;

export const CardTitle = styled.p``;
export const CardParagraph = styled.p``;
