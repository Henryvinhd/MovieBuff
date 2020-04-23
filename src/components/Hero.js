import React from "react";

import logo from "../assets/logo.svg";
import newlogo from "../assets/newlogo.png";

import { Image, Grid } from 'semantic-ui-react';
import "../App.css";

const Hero = () => (
  <div className="center">
    <Grid>
      <Grid.Row fluid>
        <Image src={newlogo} className='center' /> 
      </Grid.Row>
    </Grid>
  </div>
);

export default Hero;
