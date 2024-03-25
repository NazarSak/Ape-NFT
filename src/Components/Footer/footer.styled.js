import styled from "styled-components";

export const FooterContainer = styled.footer`
  p {
    color: #fff;
    text-align: center;
    font-family: "Messina Sans Mono";
    font-size: 16px;
    line-height: 19px;
    text-transform: uppercase;
  }
  @media (max-width: 1279px) {
    p {
      font-size: 12px;
      line-height: 14px;
    }
  }
  @media (max-width: 768px) {
    p {
      font-size: 12px;
      width: 216px;
      line-height: 14px;
    }
  }
`;
