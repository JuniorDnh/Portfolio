import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const data1 = [
  {
    id: 1,
    title: "HTML5",
    level: "Avancé",
  },
  {
    id: 2,
    title: "CSS3",
    level: "Intermédiaire",
  },
  {
    id: 3,
    title: "Sass",
    level: "Intermédiaire",
  },
  {
    id: 4,
    title: "Javascript",
    level: "Intermédiaire",
  },
  {
    id: 5,
    title: "ReactJS",
    level: "Intermédiaire",
  },
  {
    id: 6,
    title: "Vue.js",
    level: "Débutant",
  },
];

const data2 = [
  {
    id: 1,
    title: "Node.js",
    level: "Intermédiaire",
  },
  {
    id: 2,
    title: "Express.js",
    level: "Intermédiaire",
  },
  {
    id: 3,
    title: "MySQL",
    level: "Intermédiaire",
  },
  {
    id: 4,
    title: "MongoDB",
    level: "Débutant",
  },
];

function Experience() {
  return (
    <section id="experience">
      <h5> Mes Compétences</h5>
      <h2>Mes Expériences </h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3> Développement Front-end</h3>
          <div className="experience__content">
            {data1.map(({ id, title, level }) => {
              return (
                <article key={id} className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{title}</h4>
                    <small className="text-light">{level}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        <div className="experience__backend">
          <h3> Développement Back-end</h3>
          <div className="experience__content">
            {data2.map(({ id, title, level }) => {
              return (
                <article key={id} className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{title}</h4>
                    <small className="text-light">{level}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
