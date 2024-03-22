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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    padding: 24px;
    border-radius: 24px;
    background: #1e1e1e;

    &:last-child {
      background: #dc3b5a;
    }
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    height: 100%;
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
