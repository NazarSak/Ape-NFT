import React, { useState, useEffect } from "react";

import FirstMonkey from "../../assets/img/FAQ/FirstMonkey.png";
import SecondMonkey from "../../assets/img/FAQ/SecondMonkey.png";
import ThirdMonkey from "../../assets/img/FAQ/ThirdMonkey.png";
import FourthMonkey from "../../assets/img/FAQ/FourthMonkey.png";

import { Title, List, ListItem, Question } from "./fAQ.styled";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const toggleContent = (index) => {
    setActiveIndex(index);
  };

  const isActiveItem = (index) => activeIndex === index;

  useEffect(() => {
    localStorage.setItem("activeIndex", activeIndex);
  }, [activeIndex]);

  useEffect(() => {
    const savedIndex = localStorage.getItem("activeIndex");
    if (savedIndex !== null) {
      setActiveIndex(parseInt(savedIndex));
    }
  }, []);

  return (
    <section id="faqSection">
      <Title>FAQ</Title>
      <List>
        <ListItem active={isActiveItem(0)}>
          {activeIndex === 0 && <img src={FirstMonkey} alt="First Monkey" />}
          <Question active={isActiveItem(0)} onClick={() => toggleContent(0)}>
            <span>[ 1 ]</span>
            <div>
              <h3>
                WHAT IS AN NFT <br /> COLLECTION?
              </h3>
              <p>
                An NFT collection is a group of unique digital assets, each
                represented by a non-fungible token, typically created around a
                specific theme or style.
              </p>
            </div>
          </Question>
        </ListItem>

        <ListItem active={isActiveItem(1)}>
          {activeIndex === 1 && <img src={SecondMonkey} alt="SecondMonkey" />}
          <Question active={isActiveItem(1)} onClick={() => toggleContent(1)}>
            <span>[ 2 ]</span>
            <div>
              <h3>
                HOW DO I PURCHASE NFTS <br /> FROM A COLLECTION?
              </h3>
              <p>
                To purchase nfts from a collection, you typically need to use
                cryptocurrency on a blockchain0based marketplace.
              </p>
            </div>
          </Question>
        </ListItem>
        <ListItem active={isActiveItem(2)}>
          {activeIndex === 2 && <img src={ThirdMonkey} alt="ThirdMonkey" />}
          <Question active={isActiveItem(2)} onClick={() => toggleContent(2)}>
            <span>[ 3 ]</span>
            <div>
              <h3>
                CAN I SELL OR TRADE NFTS
                <br /> FROM A COLLECTION?
              </h3>
              <p>
                Yes, you can sell or trade NFTs from a collection like you would
                other digital assets.
              </p>
            </div>
          </Question>
        </ListItem>
        <ListItem active={isActiveItem(3)}>
          {activeIndex === 3 && <img src={FourthMonkey} alt="FourthMonkey" />}
          <Question active={isActiveItem(3)} onClick={() => toggleContent(3)}>
            <span>[ 4 ]</span>
            <div>
              <h3>WHAT RIGHTS DO I HAVE AS AN OWNER OF AN NFT?</h3>
              <p>
                As an NFT owner, you can own, transfer, potentially access
                exclusive content, resell, but don't automatically get copyright
                or intellectual property rights.
              </p>
            </div>
          </Question>
        </ListItem>
      </List>
    </section>
  );
};

export default FAQ;
