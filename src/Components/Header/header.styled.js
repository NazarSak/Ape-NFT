import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const ImgLogo = styled.img`
  width: 72px;
  height: 50px;
  margin-top: 15px;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
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
  }
`;
