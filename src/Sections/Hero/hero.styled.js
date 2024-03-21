import styled from "styled-components";
import MonkeyBack from "../../assets/img/Hero/MonkeyBack.png";

export const Section = styled.section`
  width: 1216px;
  height: 629px;
  border-radius: 24px;
  background: #dc3b5a;
  padding: 24px 96px 0;
  position: relative;
`;

export const MonkeyBackImg = styled.img`
    width: 463px;
    height: 612px;
    position: absolute;
    bottom: 0;
    left: 30%;
`;

export const TitleContainer = styled.div`
  position: absolute;
  top: 8%;
  left: 13%;

  h2 {
    color: #1e1e1e;
    text-align: center;
    font-family: "Right Grotesk";
    font-size: 164px;
    font-style: normal;
    font-weight: 900;
    line-height: 164px;
  }
  p {
    color: #1e1e1e;
    font-family: "Biro Script Plus";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
  }
`;
