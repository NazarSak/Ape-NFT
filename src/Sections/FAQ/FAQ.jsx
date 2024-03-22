import React, { useState } from "react";

import FirstMonkey from "../../assets/img/FAQ/FirstMonkey.png";
import SecondMonkey from "../../assets/img/FAQ/SecondMonkey.png";
import ThirdMonkey from "../../assets/img/FAQ/ThirdMonkey.png";
import FourthMonkey from "../../assets/img/FAQ/FourthMonkey.png";

import { Section, Title, List, ListItem, Info, Question } from "./fAQ.styled";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleContent = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <Section>
      <Title>FAQ</Title>
      <List>
        <ListItem active={activeIndex === 0} onClick={() => toggleContent(0)}>
          {activeIndex === 0 && <img src={FirstMonkey} alt="First Monkey" />}
          <Info>
            <Question>
              <span>[ 1 ]</span>
              <div>
                <h3>WHAT IS AN NFT <br /> COLLECTION?</h3>
                <p>
                  An NFT collection is a group of unique digital assets, each
                  represented by a non-fungible token, typically created around
                  a specific theme or style.
                </p>
              </div>
            </Question>
          </Info>
        </ListItem>
        <li>
          <span>[ 2 ]</span>
          <h3>HOW DO I PURCHASE NFTS FROM A COLLECTION?</h3>
        </li>
        <li>
          <span>[ 3 ]</span>
          <h3>CAN I SELL OR TRADE NFTS FROM A COLLECTION?</h3>
        </li>
        <li>
          <span>[ 4 ]</span>
          <h3>WHAT RIGHTS DO I HAVE AS AN OWNER OF AN NFT?</h3>
        </li>
      </List>
    </Section>
  );
};

export default FAQ;
