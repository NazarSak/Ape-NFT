import React, { useRef } from "react";
import Slider from "react-slick";
import { ContainerImg, Switches } from "./simpleSlider.styled";
import data from "./array/pictures";
import "./slick/slick.css";

const SimpleSlider = () => {
  const sliderRef = useRef(null);

  const handlePrev = () => {
    if (sliderRef.current.innerSlider.state.currentSlide === 0) {
      console.log("object2");
    } else {
      // можна продовжити переміщення назад, виконуємо потрібні дії
      sliderRef.current.slickPrev();
    }
  };
  
  const handleNext = () => {
    const { currentSlide, slidesToShow } = sliderRef.current.innerSlider.state;
    const totalSlides = data.length;
    if (currentSlide + slidesToShow >= totalSlides) {
      console.log("object");
    } else {
      // можна продовжити переміщення вперед, виконуємо потрібні дії
      sliderRef.current.slickNext();
    }
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    style: { width: "1082px" },
    arrows: false,
  };

  return (
    <>
      <Slider ref={sliderRef} {...settings}>
        {data.map((item) => (
          <ContainerImg key={item.id} style={{width: "340px", margin: "0 24px" }}>
            <img
              src={item.image}
              alt=""
            />
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
