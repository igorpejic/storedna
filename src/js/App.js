import React, { Component } from 'react';
import CycleNavItem from './CycleNavItem.js'
import '../scss/components/Interface.scss';

class App extends Component {
  componentDidMount() {
    requestAnimationFrame(() => window.addEventListener('scroll', this.scrollAnimation));
  }

  scrollAnimation() {
    const macbook = document.querySelector('.interface--container');
    const cycleNav = document.querySelector('.cycle-nav');
    const cycleNavItems = document.querySelectorAll('.cycle-nav--item');

    const scrollTop = window.scrollY;
    const scale = scrollTop * 0.003 + 0.3;
    const translateMac = scrollTop * (scrollTop + window.innerWidth) / window.innerWidth;

    if (scale < 1) {
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
  }

  renderCycleNavItems() {
    const items = [
      {
        name: 'fleet',
        label: 'Fleet performance',
      },{
        name: 'store',
        label: 'Store performance',
      },{
        name: 'sku',
        label: 'Category performance',
      },{
        name: 'test',
        label: 'Test',
      },{
        name: 'verify',
        label: 'Verify',
      },{
        name: 'scale',
        label: 'Scale',
      }
    ]

    return items.map((item) => (
      <CycleNavItem
        key={ item.label }
        name={ item.name }
        label={ item.label } />
    ));
  }

  render() {
    return (
      <div className="optimisation-cycle pos-relative">
        {/* <header className="header">
          <img src={logo} className="logo" alt="logo" />
          <h1 className="title">Welcome toStoreDNA</h1>
        </header>
        <p className="intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <div className="interface--container pos-relative mx-auto">
            <img src='/assets/images/macbook.png' className="interface--macbook img--fluid" alt="macbook" />
            <div className="interface--screen">
              {/* <img src={logo} className="logo" alt="logo" /> */}
            </div>
        </div>
        <div className="cycle-nav">
          { this.renderCycleNavItems() }
        </div>
      </div>
    );
  }
}

export default App;
