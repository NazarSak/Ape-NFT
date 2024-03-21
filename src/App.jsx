import Hero from "./Sections/Hero/Hero";
import About from "./Sections/About/About";
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
    </Wrapper>
  );
};

export default App;
