import Header from "../../Components/Header/Header";
import MonkeyBack from "../../assets/img/Hero/MonkeyBack.png";

import {
  Section,
  MonkeyBackImg,
  TitleContainer,
  LowerParagraph,
  MeetApesConatiner,
} from "./hero.styled";

const Hero = () => {
  return (
    <Section>
      <Header />
      <MonkeyBackImg src={MonkeyBack} alt="MonkeyBack" />
      <TitleContainer>
        <p>diD yOu seE iT ?</p>
        <div>
          <div>
        <h2>YACHT</h2>
        <h2>APES</h2>
          </div>
        </div>
      </TitleContainer>
        <LowerParagraph>Apes aRe eveRywhere</LowerParagraph>
      <MeetApesConatiner>
        <p>
          <span>Yacht Ape is a collection</span> of unique digital apes that you <span>can own in
          NFT format</span>
        </p>
        <button>MEET APES</button>
      </MeetApesConatiner>
    </Section>
  );
};

export default Hero;
