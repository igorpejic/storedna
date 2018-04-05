import React from 'react';
import UserInterface from './components/UserInterface.js'

class App extends React.Component {
  render() {
    return (
      <div className="page">
        <div/>
        <UserInterface />
      </div>
    );
  }
}

export default App;
