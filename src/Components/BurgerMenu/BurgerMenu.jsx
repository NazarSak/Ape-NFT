import React, { useState } from "react";
import { ButtonsContainer, ListButtons } from "./burgerMenu.styled";

const BurgerMenu = ({ textColor, bgColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <ButtonsContainer textcolor={textColor} bgcolor={bgColor}>
      <button onClick={toggleMenu}>{isOpen ? "CLOSE" : "MENU"}</button>
      {isOpen && (
        <ListButtons>
          <li>
            <a href="#aboutSection">ABOUT</a>
          </li>
          <li>
            <a href="#mindMapSection" >M-map</a>
          </li>
          <li>
            <a href="#faqSection">Faq</a>
          </li>
          <li>
            <a href="#collectionSection">ARTS</a>
          </li>
          <li>
            <a href="#mintSection">MINT</a>
          </li>
        </ListButtons>
      )}
    </ButtonsContainer>
  );
};

export default BurgerMenu;
