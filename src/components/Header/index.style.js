import styled from "styled-components";
import headerBackground from "../../imgs/header_background.webp";
export const Wrapper = styled.header`
  width: 100%;
  height: 100vh;
  background: url(${headerBackground}) no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  padding-left: 20vw;
`;

export const Container = styled.div`
  width: 60ch;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: #fff;
  font-weight: 400;
`;

export const SubTitle = styled.p`
  color: #457075;
  font-size: 1.5rem;
`;
export const Paragraph = styled.p`
  color: #fff;
  line-height: 2.3rem;
  font-size: 1.3rem;
  font-weight: 400;
`;

export const Button = styled.button`
  background: #ebaf38;
  color: #fff;
  font-size: 1.2rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 2rem;
`;
