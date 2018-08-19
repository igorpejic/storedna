import React from 'react';
import CycleNavItem from './CycleNavItem.js'
import Screen from './Screen.js'
import { screens as items, title } from '../../data/userInterface.json'

export default class UserInterface extends React.PureComponent {
  constructor() {
    super();

    this.state = { activeScreen: 'video'};
  }

  componentDidMount() {
    this.isClickable = false;
    this.cycleNavItems = Array.prototype.slice.call(this.refs.cycleNav.children);

    this.startScrollAnimation.bind(this);
    window.addEventListener('scroll', this.startScrollAnimation.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll');
  }

  startScrollAnimation() {
    const { innerHeight, innerWidth } = window;
    const rect = this.refs.section.getBoundingClientRect();
    const scrollY = (rect.top + 100) * -1;

    if (scrollY > 0) {
      const macHeight = this.refs.macbook.offsetHeight;
      let scale = scrollY * 0.003 + 0.3;
      const translateMac = scrollY + (innerHeight/2*0.07*scale);
      const translateNav = (innerWidth > 767 ? 250 : 120) + innerWidth * scrollY * 0.0002;
      const translateNavX = macHeight * 0.55 * scale
      const maxScale = innerWidth > 600 ? 1.0 : 1.3;

      if (scale < maxScale) {
        requestAnimationFrame(() => {
          this.refs.container.style.transform = `translateY(${translateMac}px)`;
          this.refs.macbook.style.transform = `scale(${scale - 0.09})`;
          this.cycleNavItems.map((item, index) => {
            let step = scale * 600
            step = step > 240 ? step : 240
            let transformStr = `rotate(${(index - 1) * 60 + step}deg) translate(0, ${translateNav - scrollY}px) rotate(${-((index - 1) * 60 + step)}deg) scale(${1.5 - scale})`;
            if (scale < 0.65) {
              item.style.transform = transformStr;
            }
            else if (scale < 0.7) {
              item.style.transform = `rotate(90deg) rotate(-90deg) scale(${1.7 - scale})`;
            } else {
              item.style.transform = `rotate(90deg) translate(${translateNavX}px, ${(35-(14 * index)) * (scale-0.1)}vw) rotate(-90deg) scale(${1.7 - scale})`;
            }
          });
        });
      }

      if (!this.isClickable && scale > 0.9) {
        this.setState({ activeScreen: 'fleet' });
        this.cycleNavItems.map((item) => item.classList.add('clickable'));
        this.isClickable = true;
        this.cycleNavItems[0].classList.add('active');
      }

      if (this.isClickable && scale <= 0.9) {
        this.setState({ activeScreen: 'video' });
        this.cycleNavItems.map((item) => item.classList.remove('clickable', 'active'));
        this.isClickable = false;
      }
    } else {
      this.refs.container.style.transform = '';
      this.refs.macbook.style.transform = '';
      this.cycleNavItems.map((item, index) => item.style.transform = '');
    }
  }

  onItemClick = (name) => {
    this.setState({ activeScreen: name });
    this.cycleNavItems.map((item) => item.classList.remove('active'));
    if (name !== 'video') {
      document.querySelector(`.cycle-nav-item--${name}`).classList.add('active');
    }
  }

  renderCycleNavItems() {
    return items.map((item, index) => { // eslint-disable-line array-callback-return
      if (item.title) {
        return (
          <CycleNavItem
            key={ item.name }
            label={ item.name }
            name={ item.name }
            onClick={ this.onItemClick.bind(this) } />
        );
      };
    });
  }

  renderScreen() {
    const itemData = items.filter(item => item.name === this.state.activeScreen)[0];

    return (
      <Screen
        data={ itemData }
        onClick={ this.onItemClick.bind(this) } />
    );
  }

  render() {
    return (
      <div ref="section" className='section--interface pos-relative mt-4 mt-md-6 o-hidden w-100'>
        <h1 className="heading t-center px-3 mb-0">{ title }</h1>
        <div ref="container" className="optimisation-cycle pos-relative w-100 z-6">
          <div ref="macbook" className="interface--container">
              <img src='/assets/images/macbook.png' className="interface--macbook img--fluid" alt="macbook" />
              { this.renderScreen() }
          </div>
          <div ref="cycleNav" className="cycle-nav">
            { this.renderCycleNavItems() }
          </div>
        </div>
      </div>
    );
  }
}
