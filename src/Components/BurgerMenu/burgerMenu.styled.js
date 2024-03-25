import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  border-radius: 12px;
  background: ${(props) => props.bgcolor || "rgba(30, 30, 30, 0.1)"};
  backdrop-filter: blur(6px);
  width: fit-content;
  height: 80px;
  button {
    width: 80px;
    height: 80px;
    padding: 0px;
    background-color: transparent;
    color: ${(props) => props.textcolor || "#1e1e1e"};
    font-family: "Messina Sans Mono", monospace;
    font-size: 16px;
    line-height: 19px;
  }
  a {
    color: ${(props) => props.textcolor || "#1e1e1e"};
    font-family: "Messina Sans Mono", monospace;
    cursor: pointer;
  }
  @media (min-width: 768px) and (max-width: 1279px) {
    height: auto;
    z-index: 2;
    button {
      width: 48px;
      height: 48px;
      font-size: 12px;
    }
    a {
      font-size: 12px;
    }
  }
`;

export const ListButtons = styled.ul`
  display: flex;
  li {
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 768px) and (max-width: 1279px) {
    margin: 0;
    li {
      width: 48px;
      height: 48px;
    }
  }
`;
