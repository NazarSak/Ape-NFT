import Hero from "./Sections/Hero/Hero";
import About from "./Sections/About/About";
import MindMap from "./Sections/MindMap/MindMap";
import FAQ from "./Sections/FAQ/FAQ";
import Collection from "./Sections/Collection/Collection";
import Mint from "./Sections/Mint/Mint";
import Footer from "./Components/Footer/Footer";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 120px;
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
