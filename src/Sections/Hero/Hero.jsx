import Header from "../../Components/Header/Header";
import MonkeyBack from "../../assets/img/Hero/MonkeyBack.png";


import { Section,MonkeyBackImg,TitleContainer } from "./hero.styled";

const Hero = () => {
  return (
    <Section>
      <Header />
      <MonkeyBackImg src={MonkeyBack} alt="MonkeyBack" />
      <TitleContainer>
        <p>diD yOu seE iT ?</p>
        <h2>YACHT APES</h2>
      </TitleContainer>
    </Section>
  );
};

export default Hero;
