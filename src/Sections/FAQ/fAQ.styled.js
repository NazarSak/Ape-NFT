import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  color: #fff;
  font-family: "Right Grotesk";
  font-size: 160px;
  line-height: 160px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin-top: 80px;
`;

export const ListItem = styled.li`
  display: flex;
  gap: 25px;
  width: ${({ active }) => (active ? "984px" : "711px")};
  height: ${({ active }) => (active ? "auto" : "128px")};
  transition: height 0.3s ease;
  background-color: ${({ active }) => (active ? "#1E1E1E" : "transparent")};
  border-radius: 24px;
  padding: 24px;
  h3 {
    cursor: pointer;
    font-family: "Right Grotesk";
    font-size: 64px;
    line-height: 64px;
    width: 635px;
    color: ${({ active }) => (active ? "#dc3b5a" : "#fff")};
  }

  span {
    font-family: "Biro Script Plus";
    font-size: 24px;
    line-height: 40px;
    color: ${({ active }) => (active ? "#fff" : "#dc3b5a")};
  }
  p {
    width: 635px;
    color: #fff;
    opacity: ${({ active }) => (active ? "1" : "0")};
    transition: opacity 0.3s ease;
  }

  img {
    transform: rotate(-8deg);
    border-radius: 24px;
    opacity: ${({ active }) => (active ? "1" : "0")};
    transition: opacity 0.3s ease;
    width: 200px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export const Question = styled.div`
  display: flex;
  gap: 28px;
  div {
    display: flex;
    flex-direction: column;
    gap: 31px;
  }
`;
