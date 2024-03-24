import styled from "styled-components";

export const Title = styled.h2`
  color: #fff;
  font-family: "Right Grotesk";
  font-size: 160px;
  line-height: 160px;
  text-transform: uppercase;
  margin-bottom: 80px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  input {
    display: flex;
    width: 283px;
    height: 18px;
    padding: 22px 24px;
    align-items: center;
    gap: 10px;
    background-color: transparent;
    border-radius: 0px 12px 12px 0px;
    border: 1px solid #1e1e1e;

    color: #fff;
    font-size: 16px;
    line-height: 19px;
    text-transform: uppercase;
    &:checked {
      border-radius: 0px 12px 12px 0px;
      border: 1px solid #fff;
    }
  }
  button {
    padding: 16px 140px 20px 140px;
    border-radius: 12px;
    background: #dc3b5a;
    backdrop-filter: blur(6px);
    color: #fff;
    font-family: "Right Grotesk";
    font-size: 28px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 581px;
  p {
    color: #fff;
    text-align: center;
    font-size: 24px;
    line-height: 29px;
    text-transform: uppercase;
  }
`;
export const InputContainer = styled.div`
  display: flex;
  position: relative;
  span {
    position: absolute;
    bottom: -17px;
    right: 0px;
    color: #dc3b5a;
    text-align: right;
    font-family: "Messina Sans Mono";
    font-size: 12px;
    text-transform: uppercase;
  }
`;

export const ContainerIcon = styled.div`
  display: flex;
  width: 64px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px 0px 0px 12px;
  background: #1e1e1e;
  backdrop-filter: blur(6px);
`;
