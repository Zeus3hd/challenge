import React, { useEffect, useState } from "react";
import { Wrapper, MenuLink } from "./index.style";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  });
  return (
    <Wrapper isScrolled={isScrolled}>
      <MenuLink isScrolled={isScrolled}>Home</MenuLink>
      <MenuLink isScrolled={isScrolled}>About</MenuLink>
      <MenuLink isScrolled={isScrolled}>Services</MenuLink>
      <MenuLink isScrolled={isScrolled} bold>
        Credo
      </MenuLink>
      <MenuLink isScrolled={isScrolled}>Photography</MenuLink>
      <MenuLink isScrolled={isScrolled}>Blog</MenuLink>
      <MenuLink isScrolled={isScrolled}>Contact</MenuLink>
    </Wrapper>
  );
};

export default Navbar;
