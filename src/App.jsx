import Hero from "./Sections/Hero/Hero";
import About from "./Sections/About/About";
import MindMap from "./Sections/MindMap/MindMap";
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
    </Wrapper>
  );
};

export default App;
