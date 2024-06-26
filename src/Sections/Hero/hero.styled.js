import styled from "styled-components";

export const Section = styled.section`
  width: 1216px;
  height: 653px;
  border-radius: 24px;
  background: #dc3b5a;
  padding: 24px 96px 0;
  position: relative;
  display: block;

  @media (max-width: 1279px) {
    width: 712px;
    height: 397px;
    padding: 12px 12px 0;
  }

  @media (max-width: 767px) {
    width: 328px;
    height: 534px;
    padding: 8px 8px 0;
  }
`;

export const MonkeyBackImg = styled.img`
  width: 463px;
  height: 612px;
  position: absolute;
  bottom: 0;
  left: 30%;
  z-index: 1;
  @media (max-width: 1279px) {
    width: 283px;
    height: 386px;
    left: 29%;
  }
  @media (max-width: 767px) {
    width: 216px;
    height: 284px;
    left: 18.6%;
    bottom: 19.4%;
  }
`;

export const TitleContainer = styled.div`
  position: absolute;
  top: 29%;
  left: 12.5%;

  div {
    display: flex;
    width: 1020px;

    justify-content: space-between;
  }

  h2 {
    color: #1e1e1e;
    text-align: center;
    font-family: "Right Grotesk", sans-serif;
    font-size: 164px;
    font-style: normal;
    font-weight: 900;
    line-height: 164px;
  }
  p {
    color: #1e1e1e;
    font-size: 24px;
    font-family: "Biro Script Plus", sans-serif;
    font-weight: 400;
    line-height: 40px;
  }
  @media (max-width: 1279px) {
    top: 26%;
    left: 10.5%;

    div {
      width: 591px;
    }
    h2 {
      font-size: 92px;
      line-height: 92px;
      letter-spacing: 0.92px;
    }
    p {
      font-size: 20px;
      line-height: 33px;
    }
  }
  @media (max-width: 767px) {
    top: 9%;
    left: 18.5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
      width: auto;
      gap: 7px;
    }
    h2 {
      font-size: 44px;
      line-height: 44px;
      letter-spacing: 0.44px;
    }
    p {
      font-size: 16px;
      line-height: 27px;
    }
  }
`;

export const LowerParagraph = styled.p`
  margin-left: 200px;
  color: #1e1e1e;
  font-size: 24px;
  font-family: "Biro Script Plus", sans-serif;
  line-height: 40px;
  margin-top: 20px;
  @media (max-width: 1279px) {
    margin-left: 72px;
    font-size: 20px;
    line-height: 33px;
    margin-top: 0px;

    @media (max-width: 767px) {
      font-size: 16px;
      line-height: 27px;
      margin-left: 80px;
      margin-top: -115px;
    }
  }
`;

export const MeetApesConatiner = styled.div`
  display: flex;
  width: 337px;
  flex-direction: column;
  gap: 28px;
  align-self: start;
  margin-left: auto;
  margin-right: 115px;
  margin-top: -20px;

  p {
    color: #1e1e1e;
    text-align: justify;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    text-transform: uppercase;
  }

  span:first-child {
    margin-left: 84px;
  }

  span:last-child {
    margin-right: 110px;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #1e1e1e;
    transition: all 0.7s ease;
    height: 70px;
    border-radius: 12px;
    background: rgba(30, 30, 30, 0.1);
    backdrop-filter: blur(6px);
    font-family: "Right Grotesk";
    font-size: 28px;
    &:hover {
      color: white;
    }
  }

  @media (max-width: 1279px) {
    width: 190px;
    gap: 16px;
    margin-right: 57px;
    margin-top: -15px;
    p {
      font-size: 12px;
      line-height: initial;
    }
    span:last-child {
      margin-right: 0px;
    }
    a {
      width: auto;
      height: auto;
      padding: 10px 61px 12px 61px;
      font-size: 16px;
      line-height: 19px;
      z-index: 2;
    }
  }
  @media (max-width: 767px) {
    width: 216px;
    gap: 12px;
    margin-top: 280px;
    flex-direction: column-reverse;
    p {
      font-size: 12px;
      line-height: initial;
      text-align: center;
      width: 217px;
    }
    span:first-child {
      margin-left: 0px;
    }
  }
`;
