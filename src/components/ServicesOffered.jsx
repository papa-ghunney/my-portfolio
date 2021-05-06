import React from "react";
import { servicesData } from "../data/servicesData";
import "../styles.css";
const ServicesOffered = () => {
  return (
    <section className="my-services" id="services">
      <h2 className="section__title section__title--services">What I do</h2>
      <div className="services">
        {servicesData.map((service, index) => {
          const { heading, info, img } = service;
          return (
            <div className="service" key={index}>
              <h3>{heading}</h3>
              <p className="service-img">{img}</p>
              <p>{info}</p>
            </div>
          );
        })}
      </div>
      <a href="#work" className="btn">
        My Work
      </a>
    </section>
  );
};

export default ServicesOffered;
