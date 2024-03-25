import React, { useState } from "react";
import MintForm from "../../Components/MintForm/MintForm";
import Dagger from "../../assets/svg/About/dagger.svg";

import { Title, Container } from "./Mint.styled";

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
        <MintForm
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          buttonText={buttonText}
          discordUsername={discordUsername}
          walletAddress={walletAddress}
          errors={errors}
        />
        {formSubmitted && (
          <p style={{ color: "green" }}>Your request has been sent</p>
        )}
      </Container>
    </section>
  );
};

export default Mint;
