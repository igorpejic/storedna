import React from 'react';
import Intro from '../components/Intro.js';
import Methodology from '../components/Methodology.js';
import Funnel from '../components/Funnel.js';
import UserInterface from '../components/user_interface/UserInterface.js';
import CaseStudies from '../components/CaseStudies.js';
import { playLazyVideos } from '../utils.js'

class Homepage extends React.PureComponent {
  componentDidMount() {
    playLazyVideos()
  }

  render() {
    return (
      <div className="page">
        <Intro />
        <Methodology />
        <Funnel />
        <UserInterface />
        <CaseStudies />
      </div>
    );
  }
}

export default Homepage;
