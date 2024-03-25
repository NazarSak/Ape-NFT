import React from "react";
import styled from "styled-components";

import Hero from "./Sections/Hero/Hero";
import About from "./Sections/About/About";
import MindMap from "./Sections/MindMap/MindMap";
import FAQ from "./Sections/FAQ/FAQ";
import Collection from "./Sections/Collection/Collection";
import Mint from "./Sections/Mint/Mint";
import Footer from "./Components/Footer/Footer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 120px;
  @media (max-width: 1279px) {
    gap: 80px;
  }
  @media (max-width: 767px) {
    gap: 60px;
  }
`;

const App = () => {
  return (
    <Wrapper>
      <Hero />
      <About />
      <MindMap />
      <FAQ />
      <Collection />
      <Mint />
      <Footer />
    </Wrapper>
  );
};

export default App;
