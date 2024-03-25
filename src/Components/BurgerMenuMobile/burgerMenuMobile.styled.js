import styled,{keyframes} from "styled-components";

export const ImgLogoWhite = styled.img`
  position: absolute;
  left: 16px;
  top: 70px;
`;

export const MenuButton = styled.button`
  width: 48px;
  height: 48px;
  padding: 0px;
  background-color: transparent;
  color: #1e1e1e;
  font-family: "Messina Sans Mono", monospace;
  font-size: 12px;
  line-height: 14px;
  border-radius: 8px;
  background: rgba(30, 30, 30, 0.1);
  backdrop-filter: blur(6px);
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.9);
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #181818;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  opacity: ${({ isopen }) => (isopen ? "1" : "0")};
  animation: ${({ isopen }) => (isopen ? fadeIn : fadeOut)} 0.3s ease-in-out;
  transition: opacity 0.3s ease-in-out;
  
  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  li {
    height: 40px;
  }

  a {
    color: #fff;
    font-family: "Messina Sans Mono";
    font-size: 24px;
    line-height: 29px;
  }
`;

export const SocialList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  right: 16px;
  top: 62px;
  margin-left: auto;
  position: absolute;
  button {
    width: 80px;
    height: 80px;
    padding: 10px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(6px);
    color: #fff;
    font-family: "Messina Sans Mono";
    font-size: 12px;
    line-height: 14px;
  }
  a {
    line-height: 0;
  }
  @media (max-width: 1279px) {
    gap: 8px;
    margin-top: 8px;
    button {
      width: 48px;
      height: 48px;
    }
  }
`;

export const Rights = styled.p`
  width: 216px;
  position: absolute;
  bottom: 50px;
  color: #fff;
  text-align: center;
  font-family: "Messina Sans Mono";
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
`;
