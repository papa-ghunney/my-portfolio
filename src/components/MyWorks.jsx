import React from "react";
import { portfolioData } from "../data/portfolioData";
import { withRouter } from "react-router-dom";
import "../styles.css";
const MyWorks = () => {
  return (
    <section className="my-work" id="work">
      <h2 className="section__title">My Work</h2>
      <p className="section__subtitle">A selection of my range of work</p>
      <div className="portfolio">
        {portfolioData.map((portfolio) => {
          const { id, img, path } = portfolio;
          return (
            <a
              key={id}
              href={`/portfolio/${id}`}
              className="portfolio__item"
            >
              <img src={img} alt="" className="portfolio__img" />
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default withRouter(MyWorks);
