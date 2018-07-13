import React from 'react';
import UserInterface from '../components/user_interface/UserInterface.js';
import Methodology from '../components/Methodology.js';
import Section from '../components/Section.js';
import { lazyPlayVideos } from '../utils.js'

class Homepage extends React.PureComponent {
  componentDidMount() {
    lazyPlayVideos()
  }

  render() {
    return (
      <div className="page">
        <Section buttons={[{label: 'button 1', href:'jhj'}, {label: 'button 2', href:'jhgjhk'}]}>
          <div style={{height:'50vh'}}/>
        </Section>
        <Section buttons={[{label: 'button 1', href:'jhj'}, {label: 'button 2', href:'jhgjhk'}]}/>
        <Section padding={5}><UserInterface /></Section>
        <Methodology />
      </div>
    );
  }
}

export default Homepage;
