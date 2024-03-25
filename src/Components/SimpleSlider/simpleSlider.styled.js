import styled from "styled-components";

export const ContainerImg = styled.div`
  width: 340px;
  margin: 0 24px;
  img {
    width: 245px;
    height: 290px;
    border-radius: 24px;
  }
`;
export const Switches = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 48px;
  margin-top: 48px;
  button {
    color: #fff;
    font-family: "Biro Script Plus";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    background-color: transparent;
  }
  @media (max-width: 1279px) {
    margin-top: 24px;
  }
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;
