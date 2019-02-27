import React, { Fragment } from 'react';
import Intro from '../components/Intro.js';
import Methodology from '../components/Methodology.js';
import Funnel from '../components/Funnel.js';
import UserInterface from '../components/user_interface/UserInterface.js';
import References from '../components/References.js';
import { isMobile } from '../utils';

const HomePage = () =>
  <div className="page o-hidden">
    <Intro
      isHomepage
      className="intro--home"
      illustration="/assets/svg/backgrounds/intro-bg-2.svg">
      <div className="intro__text d-flex flex-column justify-content-end align-items-start">
        <p className="t-1 t-white t-bold w-75 mb-3">
          SHOPABILITY FOR PROFITABILITY
          <br/>
          <span className="t-2">POWERED BY</span>
        </p>
        <h1 className="heading t-brand t-left mb-3 p-0">
         DECISION READY <br/> INSIGHTS
        </h1>
      </div>
    </Intro>
    <Methodology />
    <Funnel />
    {!isMobile() && <UserInterface />}
    <References />
  </div>

export default HomePage;
