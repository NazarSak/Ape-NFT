import styled from "styled-components";

export const Title = styled.h2`
  color: #fff;
  font-family: "Right Grotesk";
  font-size: 160px;
  line-height: 160px;
`;

export const List = styled.ul`
  display: flex;
  align-items: end;
  flex-direction: column;
  width: 1032px;
  gap: 24px;
  margin-top: 80px;
`;

export const ListItem = styled.li`
  display: flex;
  gap: 25px;
  justify-content: end;
  width: 984px;
  height: ${({ active }) => (active ? "250px" : "128px")};
  transition: height 0.3s ease;
  background-color: ${({ active }) => (active ? "#1E1E1E" : "transparent")};
  border-radius: 24px;
  padding: 0 24px;
  margin-bottom: ${({ active }) => (active ? "0" : "24px")};
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }

  h3 {
    cursor: pointer;
    font-family: "Right Grotesk";
    font-size: 64px;
    line-height: 64px;
    width: 635px;
    color: ${({ active }) => (active ? "#dc3b5a" : "#fff")};
    transition: color 0.3s ease;
    z-index: 1;
  }

  span {
    font-family: "Biro Script Plus";
    font-size: 24px;
    line-height: 40px;
    color: ${({ active }) => (active ? "#fff" : "#dc3b5a")};
    transition: color 0.3s ease;
    height: fit-content;
  }
  p {
    width: 635px;
    color: #fff;
    opacity: ${({ active }) => (active ? "1" : "0")};
    text-transform: uppercase;
    transition: opacity 0.5s ease, transform 0.5s ease;
    transform: translateY(${({ active }) => (active ? "0" : "-100%")});
    position: absolute;
    bottom: 24px;
  }
  img {
    border-radius: 24px;
    opacity: ${({ active }) => (active ? "1" : "0")};
    transform: rotate(${({ active }) => (active ? "-8deg" : "0")});
    transition: opacity 0.7s ease, transform 0.7s ease;
    width: 200px;
  }
`;

export const Question = styled.div`
  display: flex;
  gap: 28px;
  height: fit-content;
  margin-top: ${({ active }) => (active ? "24px" : "0")};
`;
