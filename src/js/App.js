import React from 'react';
import Homepage from './pages/Homepage.js';
import Header from './components/Header.js';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Homepage />
      </div>
    );
  }
}

export default App;
