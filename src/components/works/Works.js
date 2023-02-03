
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

import Portfolio from '../../assets/recentProjects/react-portfolio.png';
// import Veritru from '../../assets/recentProjects/veritru.png';
// import Lofo from '../../assets/recentProjects/lofo.png';
// import Startup from '../../assets/recentProjects/startup.png';
// import Lacalle from '../../assets/recentProjects/lacalle.png';
import Workwise from '../../assets/recentProjects/Workwise.png';
import Homaze from '../../assets/recentProjects/Homaze.png';


const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects] = useState([
    {
      id: 1,
      title: 'Marketplace for Office Spaces',
      description: `Buy or Sell Office spaces without hassle. Search offices according to your locations and an AI-powered recommendation engine that always helps buyers find their dream offices.`,
      alter: 'Startup Project',
      image: `${Workwise}`,
    },
    {
      id: 2,
      title: 'Hommazze',
      description: `Online Quotation Generating Web app for Contractors.`,
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
    // {
    //   id: 2,
    //   title: 'VeriTru Project',
    //   description: `An advocacy project website built using
    //   MEAN stack with fact-checking tool to promote actions against
    //   fake news.`,
    //   alter: 'VeriTru Project',
    //   image: `${Veritru}`,
    // },
    // {
    //   id: 3,
    //   title: 'LoFo Project',
    //   description: `Logistics and Forwarding website built using
    //   ReactJS to design and develop its front-end.`,
    //   alter: 'LoFo Project',
    //   image: `${Lofo}`,
    // },
    // {
    //   id: 4,
    //   title: 'Startup Project',
    //   description: `A website portfolio project for the Startup Dev Team
    //   built using MEVN stack to demonstrate the CRUD capabilities of the tech stack.`,
    //   alter: 'Startup Project',
    //   image: `${Startup}`,
    // },
    // {
    //   id: 5,
    //   title: 'LaCalle Cafe',
    //   description: `A website project for the La Calle Cafe business
    //   built using Wordpress and PHP with integrated SEO tools to help
    //   the business ramp up its prospects and lead generation.`,
    //   alter: 'Startup Project',
    //   image: `${Lacalle}`,
    // },
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
