import React from 'react';
import Intro from '../components/Intro.js';
import Methodology from '../components/Methodology.js';
import Funnel from '../components/Funnel.js';
import UserInterface from '../components/user_interface/UserInterface.js';
import References from '../components/References.js';

const Homepage = () =>
  <div className="page">
    <Intro />
    <Methodology />
    <Funnel />
    <UserInterface />
    <References />
  </div>

export default Homepage;
