import styled from "styled-components";

export const Wrapper = styled.section`
  background: #f2f2f2;
  height: 70vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  width: 70%;
`;

export const Card = styled.div`
  background: #fff;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
  padding: 1.5rem 1rem;
  display: grid;
  grid-template-columns: 1fr 8fr;
  transition: box-shadow 0.3s;

  :hover {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const CardTitle = styled.p``;

export const CardParagraph = styled.p``;
export const CardAvatar = styled.div`
  position: relative;

  ::after {
    content: "+";
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background: #ebaf38;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 1.5rem;
  }
`;
export const TitleParagraphContainer = styled.div``;

export const Title = styled.h2`
  font-size: 3rem;
  font-weight: 400;
`;
