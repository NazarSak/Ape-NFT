import BurgerMenu from "../BurgerMenu/BurgerMenu";

import Logo from "../../assets/img/Header/Logo.png";

import Dicord from "../../assets/svg/Header/discord.svg";
import Logomark from "../../assets/svg/Header/logomark.svg";
import LogoX from "../../assets/svg/Header/logoX.svg";

import { HeaderContainer, ImgLogo, LinkContainer,SocialList } from "./header.styled";

const Header = () => {
  return (
    <HeaderContainer>
      <ImgLogo src={Logo} alt="Logo" />
      <LinkContainer>
      <BurgerMenu/>
      <SocialList>
        <li>
          <button>
            <img src={Dicord} alt="Dicord" />
          </button>
        </li>
        <li>
          <button>
            <img src={Logomark} alt="Logomark" />
          </button>
        </li>
        <li>
          <button>
            <img src={LogoX} alt="LogoX" />
          </button>
        </li>
      </SocialList>
      </LinkContainer>
    </HeaderContainer>
  );
};

export default Header;
