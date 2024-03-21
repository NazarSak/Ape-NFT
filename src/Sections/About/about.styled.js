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
`;

export const TitleContainer = styled.div`
  width: 538px;
  div {
    display: flex;
    width: 417px;
    flex-direction: column;
    align-items: center;
    gap: 36px;
    margin-top: 56px;
  }
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
  img {
    width: 492px;
    height: 662px;
  }
`;

export const BurgerMenuWrapper = styled.div`
  width: fit-content;
  position: absolute;
  right: 122px;
  top: -33px;
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
`;
