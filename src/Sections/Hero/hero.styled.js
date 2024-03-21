import styled from "styled-components";


export const Section = styled.section`
  width: 1216px;
  height: 653px;
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
  z-index: 1;
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
`;

export const LowerParagraph = styled.p`
  margin-left: 200px;
  color: #1e1e1e;
  font-size: 24px;
  font-family: "Biro Script Plus", sans-serif;
  line-height: 40px;
  margin-top: 20px;
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

  button {
    width: 337px;
    height: 70px;
    border-radius: 12px;
    background: rgba(30, 30, 30, 0.1);
    backdrop-filter: blur(6px);
    color: #1e1e1e;
    font-family: "Right Grotesk";
    font-size: 28px;
    font-weight: 900;
    line-height: 34px;
  }
`;
