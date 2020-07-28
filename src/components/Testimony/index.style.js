import styled from "styled-components";

export const Wrapper = styled.section`
  height: 70vh;
  background: #ffde96;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: #fff;
  font-weight: 400;
`;

export const Container = styled.div`
  overflow: hidden;
  position: relative;
`;
export const InnerContainer = styled.div`
  display: flex;
  /* overflow: hidden; */
  width: 50vw;
  transition: 0.4s ease-in;
  transform: translateX(${({ distance }) => distance}%);
`;

export const Slide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  min-width: 100%;
`;
export const Quotation = styled.p`
  font-size: 4rem;
  font-weight: bold;
  margin: 0;
`;
export const Paragraph = styled.p`
  margin: 0;
  line-height: 2rem;
`;
export const Name = styled.p``;
