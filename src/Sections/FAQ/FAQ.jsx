import React, { useState, useEffect } from "react";

import questions from "../../Arrays/FAQ";

import { Title, List, ListItem, Question } from "./FAQ.styled";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
        {questions.map((item, index) => (
          <ListItem key={index} active={isActiveItem(index)}>
            {activeIndex === index && (
              <img src={item.image} alt={`Monkey ${index}`} />
            )}
            <Question
              active={isActiveItem(index)}
              onClick={() => toggleContent(index)}
            >
              <span>[ {index + 1} ]</span>
              <div>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            </Question>
          </ListItem>
        ))}
      </List>
    </section>
  );
};

export default FAQ;
