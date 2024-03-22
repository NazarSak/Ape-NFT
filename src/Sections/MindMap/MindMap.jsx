import React from "react";
import Arrow from '../../assets/svg/MindMap/arrow.svg'
import { Section, Title, List } from "./mindMap.styled";

const MindMap = () => {
  return (
    <Section>
      <Title>MIND map</Title>
      <List>
        <li>
          <p>
            All owners of APE NFTs and all future collections will receive a
            percentage of sales based on the number of NFTs they own
          </p>
          <h3>YAPE DROP</h3>
        </li>
        <li>
          <p>
            Launch of the 2nd YACHT Collection Releasing the first version of
            the Ape Slam Game
          </p>
          <h3>New Collection</h3>
        </li>
        <li>
          <p>
            Launch your own token, the proceeds of which will go to a global
            fund to LAUNCH YACHT CLUB AND PROMOTE it
          </p>
          <h3>Token</h3>
        </li>
        <li>
            <a href="https://nft-inator.com/nft-generator?gad_source=1&gclid=Cj0KCQjw2PSvBhDjARIsAKc2cgM3vfgto1-5ZAKxAWMN5ZjQ5oRb425ZUkzi8BagANKkw1iMIJ6Tp-IaAg4kEALw_wcB">

            <img src={Arrow} alt="Arrow" />
          <h3>Learn <br /> more <br /> in mind map</h3>
            </a>
        </li>
      </List>
    </Section>
  );
};
export default MindMap;
