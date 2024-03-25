import React, { useState,useEffect } from "react";

import Dagger from "../../assets/svg/About/dagger.svg";
import Discord from "../../assets/svg/Mint/discord.svg";
import Metamask from "../../assets/svg/Mint/metamask.svg";

import {
  Title,
  Container,
  Form,
  InputContainer,
  ContainerIcon,
} from "./mint.styled";

const Mint = () => {
    const [discordUsername, setDiscordUsername] = useState("");
    const [walletAddress, setWalletAddress] = useState("");
    const [errors, setErrors] = useState({});
    const [formSubmitted, setFormSubmitted] = useState(false);

    const validateForm = () => {
      const newErrors = {};
  
      if (!discordUsername.trim()) {
        newErrors.discordUsername = "Discord username is required";
      } else if (!/^@[a-zA-Z0-9_]{4,32}$/.test(discordUsername.trim())) {
        newErrors.discordUsername = "Wrong discord";
      }
  
      if (!walletAddress.trim()) {
        newErrors.walletAddress = "Wallet address is required";
      } else if (!/^0x[a-fA-F0-9]{40}$/.test(walletAddress.trim())) {
        newErrors.walletAddress = "Wrong ADDRESS";
      }
  
      setErrors(newErrors);
      setFormSubmitted(false);
      return Object.keys(newErrors).length === 0;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
        setDiscordUsername("");
        setWalletAddress("");
        setFormSubmitted(true);
      }
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      const newErrors = { ...errors };
  
      if (newErrors[name]) {
        delete newErrors[name];
        setErrors(newErrors);
      }
  
      if (name === "discordUsername") {
        setDiscordUsername(value);
      } else if (name === "walletAddress") {
        setWalletAddress(value);
      }
  
      setFormSubmitted(false);
    };
  
    const buttonText =
      Object.keys(errors).length > 0
        ? "ERROR"
        : formSubmitted
        ? "MINTED"
        : "MINT";
  
    return (
      <section id="mintSection">
        <Title>Are you in?</Title>
        <Container>
          <img src={Dagger} alt="Dagger" />
          <p>
            Join the YACHT APE community to be one of the first to receive our
            limited edition NFT
          </p>
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
          {formSubmitted && (
            <p style={{ color: "green" }}>Your request has been sent</p>
          )}
        </Container>
      </section>
    );
  };

export default Mint;
