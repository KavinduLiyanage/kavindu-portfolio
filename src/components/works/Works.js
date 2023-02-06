/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/
import Portfolio from '../../assets/recentprojects/react-portfolio.png';
import Homaze from '../../assets/recentprojects/Homaze.png';
import Workwise from '../../assets/recentprojects/Workwise.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Workwise Web App',
      description: `Workwise is an online marketplace that connects people who want to rent out their properties, office listing with people who are looking for properties in that locale. For owners and affiliates participating in Workwise is a way to earn income from their property.`,
      technologies: `ReactJS, Redux, Redux-saga, Google API, Material UI, NodeJS, ExpressJS, MongoDB, AWS EC2, S3, Formik`,
      alter: 'Startup Project',
      image: `${Workwise}`,
    },
    {
      id: 2,
      title: 'Homaze Web App',
      description: `Homaze helps remodelers & renovation experts create estimates in minutes on-site, turn those estimates into professional-grade proposals, and share them with their clients. Remodelers can then manage all client communication in one place to ensure all i's are dotted and t's are crossed. Homaze uses technology that turns the tedious remodeling office work process into an easy-to-use tool.`,
      technologies: `React with Typescript, Redux, Redux-saga, Material UI, NodeJS, ExpressJS, MongoDB, AWS EC2, S3, Formik`,
      alter: 'Startup Project',
      image: `${Homaze}`,
    },
    {
      id: 3,
      title: 'Portfolio Web App',
      description: `Designed and developed a ReactJS portfolio 
      with fancy 3D animations using Three.js for 
      the background element.`,
      technologies: `ReactJS, Material-ui`,
      alter: 'React Portfolio',
      image: `${Portfolio}`,
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={project.id}>
            <div className="__img_wrapper">
              <img src={project.image} alt={project.alter} />
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={project.id + '. ' + project.title} />
              </h3>
              <p className="description">
                {project.description}
              </p>
              <p className="technologies">
                Technologies: {project.technologies}
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
