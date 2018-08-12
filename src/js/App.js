import React from 'react';
import Homepage from './pages/Homepage.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Homepage />
        <Footer />
      </div>
    );
  }
}

export default App;
