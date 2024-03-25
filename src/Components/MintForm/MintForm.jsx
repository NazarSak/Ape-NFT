import React from "react";

import Discord from "../../assets/svg/Mint/discord.svg";
import Metamask from "../../assets/svg/Mint/metamask.svg";

import { Form, InputContainer, ContainerIcon } from "./mintForm.styled";

const MintForm = ({
  handleInputChange,
  handleSubmit,
  buttonText,
  discordUsername,
  walletAddress,
  errors,
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <InputContainer>
        <ContainerIcon>
          <img src={Discord} alt="Discord" />
        </ContainerIcon>
        <input
          type="text"
          name="discordUsername"
          placeholder="@username"
          value={discordUsername}
          onChange={handleInputChange}
          style={{
            borderColor: errors.discordUsername
              ? "#DC3B5A"
              : discordUsername.trim()
              ? "white"
              : "",
          }}
        />
        {errors.discordUsername && (
          <span style={{ color: "#DC3B5A" }}>{errors.discordUsername}</span>
        )}
      </InputContainer>
      <InputContainer>
        <ContainerIcon>
          <img src={Metamask} alt="Metamask" />
        </ContainerIcon>
        <input
          type="text"
          name="walletAddress"
          placeholder="Wallet address"
          value={walletAddress}
          onChange={handleInputChange}
          style={{
            borderColor: errors.walletAddress
              ? "#DC3B5A"
              : walletAddress.trim()
              ? "white"
              : "",
          }}
        />
        {errors.walletAddress && (
          <span style={{ color: "#DC3B5A" }}>{errors.walletAddress}</span>
        )}
      </InputContainer>
      <button type="submit">{buttonText}</button>
    </Form>
  );
};

export default MintForm;
