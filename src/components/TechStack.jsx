import React from "react";
import { stacks } from "../data/stackData";
const TechStack = () => {
  return (
    <section className="stack" id="stack">
      <h2 className="section__title section__title--stack">Tech Stack </h2>
      <ul className="stack__list">
        {stacks.map((stack, index) => (
          <li key={index}>
            <img src={stack.logo} alt="" />
            <p>{stack.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TechStack;
