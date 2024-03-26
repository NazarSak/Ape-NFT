import styled from "styled-components";

export const List = styled.ul`
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(456px, 1fr));
  gap: 24px;
  width: 1032px;
  margin-top: 80px; */

  li {
    width: 456px;
    height: 432px;
    display: grid;
    padding: 24px;
    border-radius: 24px;
    background: #1e1e1e;
    justify-items: end;
    &:last-child {
      background: #dc3b5a;
    }
  }

  /* a {
    display: grid;
    width: 100%;
    justify-items: end;
  } */

  h3 {
    color: #fff;
    font-family: "Right Grotesk";
    font-size: 64px;
    line-height: 64px;
    text-transform: uppercase;
    margin-right: auto;
    &:last-child {
      margin-top: auto;
    }
  }

  p {
    width: 228px;
    color: #fff;
    font-size: 24px;
    text-transform: uppercase;
  }
`;

export const ListItem = styled.div`
  margin: 0 20px;
  div {
    padding: 24px 12px;
    height: 194px;
    width: 194px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 24px;
  }

  h3 {
    color: #fff;
    font-family: "Right Grotesk";
    font-size: 32px;
    line-height: 32px;
    text-transform: uppercase;
    margin-right: auto;
  }
  p {
    font-family: "Messina Sans Mono regular";
    width: 192px;
    color: #fff;
    font-size: 12px;
    line-height: 14px;
    text-transform: uppercase;
  }
  a {
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 62px;
  }
`;

export const DefaultListItem = styled.div`
  background: #1e1e1e;
`;

export const AnchorListItem = styled.div`
  background-color: #dc3b5a;
  border-radius: 24px;
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
`;
