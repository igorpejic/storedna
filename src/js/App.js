import React from 'react';
import CycleNavItem from './CycleNavItem.js'
import Screen from './Screen.js'
import data from './data.json'

class App extends React.Component {
  constructor() {
    super();
    this.state = { activeScreen: 'video'};

  }

  componentDidMount() {
    window.addEventListener('scroll', this.startScrollAnimation.bind(this));
    this.isClickable = false
  }

  startScrollAnimation() {
    const macbook = document.querySelector('.interface--container');
    const cycleNav = document.querySelector('.cycle-nav');
    const cycleNavItems = document.querySelectorAll('.cycle-nav-item');
    const scrollTop = window.scrollY;
    const scale = scrollTop * 0.003 + 0.3;
    const translateMac = scrollTop * (scrollTop + window.innerWidth) / window.innerWidth;

    if (scale <= 1) {
      requestAnimationFrame(() => {
        macbook.style.transform = `translateY(${translateMac}px)`;
        macbook.style.transform += `scale(${scale})`;
        cycleNav.style.transform = `translateY(${-250 + translateMac}px)`;
        cycleNavItems.forEach((item, index) => {
          if (scale < 0.7) {
            item.style.transform = `rotate(${(index - 1) * 60 - 30}deg) translate(${250 - scrollTop}px) rotate(${-(index - 1) * 60 + 30}deg) scale(${1.5 - scale}`;
          } else {
            item.style.transform = `rotate(90deg) translate(${250 * scale}px, ${(35-(14 * index)) * scale}vw) rotate(-90deg) scale(${1.5 - scale})`;
          }
        });
      });
    }

    if (!this.isClickable && scale > 0.85) {
      this.setState({ activeScreen: 'fleet' });
      cycleNavItems.forEach((item) => item.classList.add('clickable'));
      this.isClickable = true;
      document.querySelector('.cycle-nav-item--fleet').classList.add('active');
    }

    if (this.isClickable && scale <= 0.85) {
      this.setState({ activeScreen: 'video' });
      cycleNavItems.forEach((item) => item.classList.remove('clickable', 'active'));
      this.isClickable = false;
    }
  }

  onItemClick = (name) => {
    const cycleNavItems = document.querySelectorAll('.cycle-nav-item');

    this.setState({ activeScreen: name });
    cycleNavItems.forEach((item) => item.classList.remove('active'));
    if (name !== 'video') {
      document.querySelector(`.cycle-nav-item--${name}`).classList.add('active');
    }
  }

  renderCycleNavItems() {
    const items = data.items;

    return items.map((item) => { // eslint-disable-line array-callback-return
      if (item.title) {
        return (
          <CycleNavItem
            key={ item.name }
            name={ item.name }
            label={ item.name }
            onClick={ this.onItemClick.bind(this) } />
        );
      };
    });
  }

  renderScreen() {
    const itemData = data.items.filter(item => item.name === this.state.activeScreen)[0];

    return (
      <Screen
        data={ itemData }
        onClick={ this.onItemClick } />
    );
  }

  render() {
    return (
      <div className="optimisation-cycle pos-relative">
        <div className="interface--container pos-relative mx-auto">
            <img src='/assets/images/macbook.png' className="interface--macbook img--fluid" alt="macbook" />
            { this.renderScreen() }
        </div>
        <div className="cycle-nav">
          { this.renderCycleNavItems() }
        </div>
      </div>
    );
  }
}

export default App;
