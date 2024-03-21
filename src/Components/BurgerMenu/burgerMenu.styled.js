import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  border-radius: 12px;
  background: ${props => props.bgcolor || 'rgba(30, 30, 30, 0.1)'}; // Змінено bgColor на bgcolor
  backdrop-filter: blur(6px);
  width: fit-content;
  height: 80px;
  button {
    width: 80px;
    height: 80px;
    padding: 0px;
    background-color: transparent;
    color: ${props => props.textcolor || '#1e1e1e'};
    font-family: "Messina Sans Mono", monospace;
    font-size: 16px;
    line-height: 19px;
  }
`;

export const ListButtons = styled.ul`
  display: flex;
`;
