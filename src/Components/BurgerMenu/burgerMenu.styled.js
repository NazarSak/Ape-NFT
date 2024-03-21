import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  border-radius: 12px;
  background: rgba(30, 30, 30, 0.1);
  backdrop-filter: blur(6px);
  width: fit-content;
  height: 80px;
  button {
    width: 80px;
    height: 80px;
    padding: 0px;
    background-color: transparent;
    color: #1e1e1e;
    font-family: 'Messina Sans Mono', monospace;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 19px;
    text-transform: uppercase;
  }
`;

export const ListButtons = styled.ul`
  display: flex;
`;
