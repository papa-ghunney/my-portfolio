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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            architecto quis placeat distinctio. Maxime odio, velit perferendis,
            necessitatibus ex temporibus nobis doloremque dolores eveniet fugiat
            eos quaerat excepturi nihil vel?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ut
            illum quae unde facilis incidunt, cupiditate qui. Magni accusantium
            nulla, molestiae delectus blanditiis iure laudantium, rerum
            doloribus ad, esse illo!
          </p>
        </div>
        <img className="about-me__img" src={me} alt="papa coding" />
      </section>
    </>
  );
};

export default AboutMe;
