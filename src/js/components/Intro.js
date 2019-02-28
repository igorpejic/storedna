import React from 'react'
import Section from './Section'
import { renderClientLogos } from './References'

class Intro extends React.PureComponent {
  state = { hideLogos: false };

  onScroll = () => {
    const { scrollY, innerHeight } = window;
    const threshold = innerHeight / 2;

    if (!this.state.hideLogos && scrollY > threshold) {
      this.setState({ hideLogos: true })
    } else if (this.state.hideLogos && scrollY <= threshold) {
      this.setState({ hideLogos: false })
    }
  }

  scrollDown = () => {
    const el = document.querySelector('.scroll-1')
    el && el.scrollIntoView({
      block: "start",
      inline: "nearest",
      behavior: "smooth"
    })
  };

  render() {
    const { illustration, className, children, isHomepage } = this.props;

    return (
      <Section
        applyOverlay={ false }
        onScroll={ this.onScroll }
        className={ `section--intro ${className ? className : ''}` }
        bgImg={ illustration }>
        <div className="p-0 h-100 d-flex flex-column justify-content-end justify-content-sm-between align-items-center">
          { children }
          <button className="scroll-arrow btn-unstyled mb-5" onClick={ this.scrollDown }>
            <img height="50px" src="/assets/svg/icons/scroll-arrow.svg" alt="scroll down" />
          </button>
        </div>
        { isHomepage &&
          <div 
            className={ `pos-absolute pos-bottom pos-left d-flex flex-wrap justify-content-between w-100 py-2 py-md-3
              clients-banner ${this.state.hideLogos ? ' fade' : ''}` }
            style={{ backgroundColor: 'rgba(4, 14, 37, 0.7)'}}>
          {renderClientLogos()}
          </div>
        }
      </Section>
    )
  };
}

export default Intro;
