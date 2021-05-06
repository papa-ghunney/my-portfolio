import React from "react";
import me from "../images/papa.jpg";
const AboutMe = () => {
  return (
    <>
      <section className="about-me" id="#about">
        <h2 className="section__title section__title--about">Who I am</h2>
        <p className="section__subtitle section__subtitle--about">
          Designer & Developer based in Accra
        </p>
        <div className="about-me__body">
          <p>
            I’m a designer and developer born and bred in the city of Accra. I
            enjoy reading, watching movies and listening to calm soothing music.
            I love learning and trying new ideas whenever I can.
          </p>
          <br />
          <p>
            I'm currently job searching. I spend most of my days
            practicing and doing what I love to do in the day, code!. I believe
            with constant practice comes perfection.
          </p>
        </div>
        <img className="about-me__img" src={me} alt="papa coding" />
      </section>
    </>
  );
};

export default AboutMe;
