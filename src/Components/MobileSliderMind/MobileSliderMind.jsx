import React, { useRef } from "react";
import Slider from "react-slick";
import Arrow from "../../assets/svg/MindMap/arrow.svg";
import {
  ListItem,
  DefaultListItem,
  AnchorListItem,
  Switches,
} from "./mobileSliderMind.styled";

const MobileSliderMind = () => {
  const sliderRef = useRef(null);

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    style: { width: "250px" },
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
  };

  return (
    <>
      <Slider ref={sliderRef} {...settings}>
        <ListItem>
          <DefaultListItem>
            <p>
              All owners of APE NFTs and all future collections will receive a
              percentage of sales based on the number of NFTs they own
            </p>
            <h3>YAPE DROP</h3>
          </DefaultListItem>
        </ListItem>

        <ListItem>
          <DefaultListItem>
            <p>
              Launch of the 2nd YACHT Collection Releasing the first version of
              the Ape Slam Game
            </p>
            <h3>New Collection</h3>
          </DefaultListItem>
        </ListItem>

        <ListItem>
          <DefaultListItem>
            <p>
              Launch your own token, the proceeds of which will go to a global
              fund to LAUNCH YACHT CLUB AND PROMOTE it
            </p>
            <h3>Token</h3>
          </DefaultListItem>
        </ListItem>

        <ListItem>
          <AnchorListItem>
            <a href="https://nft-inator.com/nft-generator?gad_source=1&gclid=Cj0KCQjw2PSvBhDjARIsAKc2cgM3vfgto1-5ZAKxAWMN5ZjQ5oRb425ZUkzi8BagANKkw1iMIJ6Tp-IaAg4kEALw_wcB">
              <img src={Arrow} alt="Arrow" />
              <h3>
                Learn <br /> more <br /> in mind map
              </h3>
            </a>
          </AnchorListItem>
        </ListItem>
      </Slider>
      <Switches>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </Switches>
    </>
  );
};

export default MobileSliderMind;
