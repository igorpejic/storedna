import React from 'react';
import Intro from '../components/Intro.js';
import UserInterface from '../components/user_interface/UserInterface.js';
import Methodology from '../components/Methodology.js';
import Funnel from '../components/Funnel.js';
import Section from '../components/Section.js';
import { playLazyVideos } from '../utils.js'

class Homepage extends React.PureComponent {
  componentDidMount() {
    playLazyVideos()
  }

  render() {
    return (
      <div className="page">
        <Intro />
        <Section padding={5}><UserInterface /></Section>
        <Methodology />
        <Funnel />
      </div>
    );
  }
}

export default Homepage;
