import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  width: 65%;
  margin: 0 auto;
  padding: 1.5rem;
`;

export const LeftSide = styled.div`
  flex: 1;
`;

export const LeftTitle = styled.h2`
  font-weight: 400;
`;
export const Image = styled.img`
  width: 100%;
`;
export const Paragraph = styled.p`
  color: #8f8f8f;
  line-height: 2rem;
  font-size: 0.9rem;
`;

export const RightSide = styled.div`
  flex: 1;
  padding: 2rem;
  padding-left: 4rem;
`;

export const StatContainer = styled.div``;
export const StatTitle = styled.p``;
export const StatBar = styled.div`
  height: 3px;
  position: relative;
  border-radius: 1rem;
  background: #f2f2f2;
  ::after {
    content: "";
    width: ${({ rate }) => rate.toString().concat("%")};
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: #ebaf38;
  }
  ::before {
    content: '${({ rate }) => rate.toString()}%';
    position: absolute;
    left: ${({ rate }) => rate.toString().concat("%")};
    top: 10px;
    padding: 0.3rem;
    background: #ebaf38;
    border-radius: 0.5rem;
    font-size: 0.8rem;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
  }
`;
