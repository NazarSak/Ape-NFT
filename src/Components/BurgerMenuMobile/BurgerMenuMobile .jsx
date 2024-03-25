import React, { useState,useEffect  } from "react";
import LogoWhite from "../../assets/svg/Header/LogoWhite.svg";

import Dicord from "../../assets/svg/Header/discordWhite.svg";
import Logomark from "../../assets/svg/Header/logomarkWhite.svg";
import LogoX from "../../assets/svg/Header/logoXWhite.svg";

import {
  ImgLogoWhite,
  MenuButton,
  MobileMenu,
  SocialList,
  Rights,
} from "./burgerMenuMobile.styled";

const BurgerMenuMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      body.style.overflowY = "hidden";
    } else {
      body.style.overflowY = "unset";
    }
    return () => {
      body.style.overflowY = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <MenuButton onClick={toggleMenu}>MENU</MenuButton>
      {isOpen && (
        <>
          <MobileMenu isOpen={isOpen}>
            <ImgLogoWhite src={LogoWhite} alt="LogoWhite" />

            <SocialList>
              <li>
                <button onClick={toggleMenu}>CLOSE</button>
              </li>
              <li>
                <button>
                  <a href="https://discord.com/">
                    <img src={Dicord} alt="Dicord" />
                  </a>
                </button>
              </li>
              <li>
                <button>
                  <a href="https://twitter.com/">
                    <img src={Logomark} alt="Logomark" />
                  </a>
                </button>
              </li>
              <li>
                <button>
                  <a href="https://twitter.com/">
                    <img src={LogoX} alt="LogoX" />
                  </a>
                </button>
              </li>
            </SocialList>

            <ul>
              <li>
                <a href="#aboutSection" onClick={closeMenu}>
                  ABOUT
                </a>
              </li>
              <li>
                <a href="#mindMapSection" onClick={closeMenu}>
                  M-map
                </a>
              </li>
              <li>
                <a href="#faqSection" onClick={closeMenu}>
                  Faq
                </a>
              </li>
              <li>
                <a href="#collectionSection" onClick={closeMenu}>
                  ARTS
                </a>
              </li>
              <li>
                <a href="#mintSection" onClick={closeMenu}>
                  MINT
                </a>
              </li>
            </ul>

            <Rights>© Yacht ape 2024 all rights reserved</Rights>
          </MobileMenu>
        </>
      )}
    </header>
  );
};

export default BurgerMenuMobile;
