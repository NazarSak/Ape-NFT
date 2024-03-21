import BurgerMenu from "../BurgerMenu/BurgerMenu";

import Logo from "../../assets/img/Header/Logo.png";

import { HeaderContainer,ImgLogo } from "./header.styled";

const Header = () => {
  return (
    <HeaderContainer>
      <ImgLogo src={Logo} alt="Logo" />
      <BurgerMenu/>
    </HeaderContainer>
  );
};

export default Header;
