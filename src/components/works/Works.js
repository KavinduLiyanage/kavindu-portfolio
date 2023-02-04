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
      title: 'Marketplace for Office Spaces',
      description: 'Buy or Sell Office spaces without hassle. Search offices according to your locations and an AI-powered recommendation engine that always helps buyers find their dream offices.',
      alter: 'Startup Project',
      image: `${Workwise}`,
    },
    {
      id: 2,
      title: 'Hommazze',
      description: 'Online Quotation Generating Web app for Contractors.',
      alter: 'Startup Project',
      image: `${Homaze}`,
    },
    {
      id: 3,
      title: 'React Portfolio',
      description: `Designed and developed a ReactJS portfolio 
      with fancy 3D animations using Three.js for 
      the background element.`,
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
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
