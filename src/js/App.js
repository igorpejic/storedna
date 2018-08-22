import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import HomePage from './pages/HomePage.js';
import VideoPage from './pages/VideoPage.js';
import EpubPage from './pages/EpubPage.js';
import ArticlePage from './pages/ArticlePage.js';

const App = () => (
  <Router>
    <div>
      <Header />

      <Route exact path="/" component={ HomePage }/>
      <Route exact path="/video/:videoId" component={ VideoPage }/>
      <Route exact path="/download/:downloadId" component={ EpubPage }/>
      <Route exact path="/article/:articleId" component={ ArticlePage }/>

      <Footer />
    </div>
  </Router>
);

export default App;
