import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import { ContainerImg, Switches } from "./simpleSlider.styled";
import data from "../../Arrays/pictures";
import "./slick/slick.css";

const SimpleSlider = () => {
  const sliderRef = useRef(null);
  const [settings, setSettings] = useState({
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    arrows: false,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setSettings({
          ...settings,
          slidesToShow: 4,
          style: { width: "1082px" },
        });
      } else if (width >= 768) {
        setSettings({
          ...settings,
          slidesToShow: 2,
          style: { width: "592px" },
        });
      } else {
        setSettings({
          ...settings,
          slidesToShow: 1,
          style: { width: "295px" },
        });
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <>
      <Slider ref={sliderRef} {...settings}>
        {data.map((item) => (
          <ContainerImg key={item.id}>
            <img src={item.image} alt={item.id} />
          </ContainerImg>
        ))}
      </Slider>
      <Switches>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </Switches>
    </>
  );
};

export default SimpleSlider;
