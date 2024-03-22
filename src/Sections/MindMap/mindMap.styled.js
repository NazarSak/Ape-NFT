import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h2`
  color: #fff;
  font-family: "Right Grotesk";
  font-size: 160px;
  line-height: 160px;
  text-transform: uppercase;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(456px, 1fr));
  gap: 24px;
  width: 1032px;
  margin-top: 80px;

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

  a {
    display: grid;
    width: 100%;
    justify-items: end;
  }

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
