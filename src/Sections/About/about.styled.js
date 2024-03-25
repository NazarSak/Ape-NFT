import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

export const HistoryContainer = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 1279px) {
    gap: 10px;
  }
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    gap: 36px;
  }
`;

export const TitleContainer = styled.div`
  width: 538px;

  h2 {
    color: #fff;
    font-family: "Right Grotesk";
    font-size: 120px;
    line-height: 120px;
    text-transform: uppercase;
  }
  p {
    color: #fff;
    text-align: center;
    font-size: 24px;
    font-weight: 400;
    line-height: 29px;
  }
  span {
    color: #dc3b5a;
  }

  @media (min-width: 768px) {
    div {
      display: flex;
      width: 417px;
      flex-direction: column;
      align-items: center;
      gap: 36px;
      margin-top: 56px;
    }
  }

  @media (max-width: 1279px) {
    width: 269px;
    div {
      width: 269px;
      gap: 24px;
      margin-top: 68px;
    }
    h2 {
      font-size: 60px;
      line-height: 60px;
    }
    p {
      font-size: 16px;
      line-height: 19px;
    }
  }

  @media (max-width: 767px) {
    width: 216px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    div {
      gap: 24px;
      margin-top: 68px;
    }
    h2 {
      font-size: 40px;
      line-height: 40px;
    }
    p {
      text-align: right;
    }
  }
`;

export const BrMobile = styled.br`
  display: none;
  @media (max-width: 767px) {
    display: block;
  }
`;

export const DesktopDiv = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
`;
export const MonkeyP = styled.p`
  display: none;
  @media (max-width: 767px) {
    display: block;
    width: 216px;
  }
`;
export const MobileDiv = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: flex;
    gap: 16px;
    flex-direction: column;
    align-items: center;
  }
`;
export const DesktopP = styled.p`
  @media (max-width: 767px) {
    display: none;
  }
`;

export const MonkeyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 24px;
  margin-right: 40px;
  margin-top: 30px;
  p {
    font-family: "Messina Sans Mono regular";
    color: #fff;
    font-size: 24px;
    line-height: 29px;
    width: 409px;
    text-align: right;
    height: 174px;
  }
  @media (min-width: 768px) {
  }

  @media (max-width: 1279px) {
    gap: 0px;
    margin-top: 11px;
    margin-right: 0px;
    p {
      font-size: 16px;
      line-height: 19px;
      height: auto;
      width: 275px;
    }
  }

  @media (max-width: 768px) {
    gap: 40px;

    p {
      text-align: center;
    }
  }
`;

export const ImgMonkey = styled.img`
  width: 492px;
  height: 662px;
  @media (max-width: 1279px) {
    width: 313px;
    height: 422px;
  }
  @media (max-width: 767px) {
    width: 216px;
    height: 292px;
    p {
      text-align: center;
    }
  }
`;

export const BurgerMenuWrapper = styled.div`
  width: fit-content;
  position: absolute;
  right: 122px;
  top: -33px;
  @media (max-width: 1279px) {
    display: none;
  }
`;

export const Banner = styled.div`
  display: inline-flex;
  padding: 6px 0px 16px 0px;
  align-items: center;
  gap: 36px;
  background: #dc3b5a;
  h2 {
    font-family: "Right Grotesk";
    width: max-content;
    font-size: 64px;
    font-weight: 900;
    line-height: 64px;
    color: #fff;
    text-transform: uppercase;
  }
  @media (max-width: 1279px) {
    padding: 6px 0px 8px 0px;
    gap: 24px;
    h2 {
      font-size: 36px;
      line-height: 36px;
    }
  }
`;
