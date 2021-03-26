import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/shared/Layout";
import { portfolioData } from "../data/portfolioData";
const SingularWork = () => {
  const { id } = useParams();

  return (
    <Layout>
      {portfolioData.map((portfolio) => {
        if (portfolio.id === Number(id)) {
          return (
            <>
              <section className="intro" id={id}>
                <h1 className="section__title section__title--intro">
                  The title<strong>of my project</strong>
                </h1>
                <p className="section__subtitle section__subtitle--intro">
                  {portfolio.title}
                </p>
                <img
                  src={portfolio.img}
                  alt="portfolio"
                  className="intro__img"
                />
              </section>
              <div className="portfolio-item-individual">
                <p>{portfolio.paragraphOne}</p>
                <img src={portfolio.img} alt="" />
                <p>{portfolio.paragraphTwo}</p>
              </div>
            </>
          );
        }
      })}
    </Layout>
  );
};

export default SingularWork;
