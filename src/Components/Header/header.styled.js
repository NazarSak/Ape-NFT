import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const ImgLogo = styled.img`
  width: 72px;
  height: 50px;
  margin-top: 15px;
  cursor: pointer;
  @media (max-width: 1279px) {
    width: 48px;
    height: 32px;
    margin-top: 8px;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
  @media (max-width: 1279px) {
    margin-right: 0px;
  }
`;

export const SocialList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-left: auto;

  button {
    width: 80px;
    height: 80px;
    padding: 10px;
    border-radius: 12px;
    background: rgba(30, 30, 30, 0.1);
    backdrop-filter: blur(6px);
    &:hover path {
      fill: #f0f0f0;
    }
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
