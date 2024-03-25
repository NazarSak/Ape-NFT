import BurgerMenu from "../BurgerMenu/BurgerMenu";

import Logo from "../../assets/img/Header/Logo.png";

import Dicord from "../../assets/svg/Header/discord.svg";
import Logomark from "../../assets/svg/Header/logomark.svg";
import LogoX from "../../assets/svg/Header/logoX.svg";

import {
  HeaderContainer,
  ImgLogo,
  LinkContainer,
  SocialList,
} from "./header.styled";

const Header = () => {
  return (
    <HeaderContainer>
      <ImgLogo src={Logo} alt="Logo" />
      <LinkContainer>
        <BurgerMenu />
        <SocialList>
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
      </LinkContainer>
    </HeaderContainer>
  );
};

export default Header;
