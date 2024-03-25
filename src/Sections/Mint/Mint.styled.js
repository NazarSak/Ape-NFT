import styled from "styled-components";

export const Title = styled.h2`
  color: #fff;
  font-family: "Right Grotesk";
  font-size: 160px;
  line-height: 160px;
  text-transform: uppercase;
  margin-bottom: 80px;
  @media (max-width: 1279px) {
    font-size: 80px;
    line-height: 80px;
    margin-bottom: 40px;
  }
  @media (max-width: 768px) {
    font-size: 44px;
    line-height: 40px;
    margin-bottom: 24px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 581px;
  p {
    color: #fff;
    text-align: center;
    font-size: 24px;
    line-height: 29px;
    text-transform: uppercase;
  }
  @media (max-width: 1279px) {
    gap: 24px;
    width: 397px;
    p {
      font-size: 16px;
      line-height: 19px;
    }
  }
  @media (max-width: 768px) {
    gap: 16px;

    width: 216px;
  }
`;
