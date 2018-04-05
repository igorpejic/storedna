import React from 'react';
import CycleNavItem from './CycleNavItem.js'
import Screen from './Screen.js'
import data from '../data.json'

export default class UserInterface extends React.PureComponent {
  constructor() {
    super();
    this.state = { activeScreen: 'video'};
  }

  componentDidMount() {
    window.addEventListener('scroll', this.startScrollAnimation.bind(this));
    this.isClickable = false
  }

  startScrollAnimation() {
    const container = document.querySelector('.optimisation-cycle');
    const macbook = document.querySelector('.interface--container');
    const cycleNavItems = document.querySelectorAll('.cycle-nav-item');
    const macHeight = macbook.offsetHeight;
    const { scrollY }= window;
    const { innerHeight, innerWidth } = window;
    const scale = scrollY * 0.003 + 0.3;
    const translateMac = scrollY + (innerHeight/2*0.07*scale);
    const translateNav = innerWidth > 767 ? 250 : 120 + innerWidth * scrollY * 0.0002;
    let translateNavX = macHeight * 0.55 * scale
    const maxScale = innerWidth > 600 ? 1.1 : 1.3;

    if (scale < maxScale) {
      requestAnimationFrame(() => {
        container.style.transform = `translateY(${translateMac}px)`;
        macbook.style.transform = `scale(${scale - 0.09})`;
        cycleNavItems.forEach((item, index) => {
          if (scale < 0.7) {
            item.style.transform = `rotate(${(index - 1) * 60 - 30}deg) translate(${translateNav - scrollY}px) rotate(${-(index - 1) * 60 + 30}deg) scale(${1.5 - scale}`;
          } else {
            item.style.transform = `rotate(90deg) translate(${translateNavX}px, ${(35-(14 * index)) * (scale-0.1)}vw) rotate(-90deg) scale(${1.7 - scale})`;
          }
        });
      });
    }

    if (!this.isClickable && scale > 0.9) {
      this.setState({ activeScreen: 'fleet' });
      cycleNavItems.forEach((item) => item.classList.add('clickable'));
      this.isClickable = true;
      document.querySelector('.cycle-nav-item--fleet').classList.add('active');
    }

    if (this.isClickable && scale <= 0.9) {
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
      <div className="section optimisation-cycle pos-relative w-100 mb-5">
        <div className="interface--container">
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
