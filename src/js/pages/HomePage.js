import React, { Fragment } from 'react';
import Intro from '../components/Intro.js';
import Methodology from '../components/Methodology.js';
import Funnel from '../components/Funnel.js';
import UserInterface from '../components/user_interface/UserInterface.js';
import References from '../components/References.js';

const HomePage = () =>
  <div className="page o-hidden">
    <Intro
      title={ <Fragment><span>Shopability</span><br /><span>for Profitability.</span></Fragment> }
      subtitle="Decision-making platform for brick and mortar retail."
      illustration="/assets/svg/backgrounds/intro-bg.svg" />
    <Methodology />
    <Funnel />
    <UserInterface />
    <References />
  </div>

export default HomePage;
