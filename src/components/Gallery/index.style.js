import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 2rem;
`;
export const Title = styled.h2`
  font-weight: 400;
  font-size: 2rem;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
`;

export const Column = styled.div``;

export const Photo = styled.div`
  position: relative;
  background: url(${({ bg }) => bg}) no-repeat;
  background-size: 150%;
  background-position: center;
  width: 270px;
  height: ${({ height }) => height}px;
  margin: 1rem 0;
  ::after {
    content: "+";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    background: rgba(0, 0, 0, 0.5);
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: #fff;
    opacity: 0;
    transition: 0.4s;
  }

  transition: 0.4s;

  :hover {
    background-size: 200%;
    ::after {
      opacity: 1;
    }
  }
`;
