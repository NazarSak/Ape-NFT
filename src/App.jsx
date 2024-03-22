import Hero from "./Sections/Hero/Hero";
import About from "./Sections/About/About";
import MindMap from "./Sections/MindMap/MindMap";
import FAQ from "./Sections/FAQ/FAQ";
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
    </Wrapper>
  );
};

export default App;
