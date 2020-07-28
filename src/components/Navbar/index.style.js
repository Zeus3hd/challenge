import styled from "styled-components";

export const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  transition: 0.5s;
  ${({ isScrolled }) => (isScrolled ? "background: #fff" : null)}
`;

export const MenuLink = styled.a`
  text-decoration: none;
  color: ${({ isScrolled }) => (isScrolled ? " #000" : "#fff")};
  margin: 1.5rem 2rem;
  font-weight: ${({ bold }) => (bold ? "700" : "400")};
  font-size: ${({ bold }) => (bold ? "1.2rem" : "1rem")};
`;
