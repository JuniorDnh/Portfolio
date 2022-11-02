import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Apprenez</h5>
      <h2>À me connaître</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="moi" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Expérience</h5>
              <small>+1 an d'expérience</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projets</h5>
              <small>+10 Complétés</small>
            </article>
          </div>

          <p>
            Curieux et passionné par le monde de la tech et plus
            particulièrement par le développement web. J'ai alors décidé de
            sauter le pas en intégrant l'école OpenClassrooms afin de parfaires
            mes connaissances et d'en acquérir de nouvelles.
          </p>

          <a href="#contact" className="btn btn-primary">
            Discutons
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
