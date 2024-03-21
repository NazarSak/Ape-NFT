import { useState } from "react";

import { ButtonsContainer,ListButtons } from "./burgerMenu.styled";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ButtonsContainer>
      <button onClick={toggleMenu}>
        {isOpen ? "CLOSE" : "MENU"}
      </button>
      {isOpen && (
        <ListButtons>
          <li>
            <button>ABOUT</button>
          </li>
          <li>
            <button>M-map</button>
          </li>
          <li>
            <button>Faq</button>
          </li>
          <li>
            <button>ARTS</button>
          </li>
          <li>
            <button>MINT</button>
          </li>
        </ListButtons>
      )}
    </ButtonsContainer>
  );
};

export default BurgerMenu;
