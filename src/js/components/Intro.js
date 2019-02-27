import React from 'react'
import Section from './Section'
import { renderClientLogos } from './References'

const Intro = ({ illustration, className, children, isHomepage }) => {
  const scroll = () => {
    const el = document.querySelector('.scroll-1')
    el && el.scrollIntoView({
      block: "start",
      inline: "nearest",
      behavior: "smooth"
    })
  }

  return (
    <Section
      applyOverlay={ false }
      className={ `section--intro ${className ? className : ''}` }
      bgImg={ illustration }>
      <div className="p-0 h-100 d-flex flex-column justify-content-end justify-content-sm-between align-items-center">
        { children }
        <button className="scroll-arrow btn-unstyled mb-5" onClick={ scroll }>
          <img height="50px" src="/assets/svg/icons/scroll-arrow.svg" alt="scroll down" />
        </button>
      </div>
      { isHomepage &&
        <div className="pos-absolute pos-bottom pos-left d-flex flex-wrap justify-content-between w-100 py-2 py-md-3"
        style={{ backgroundColor: 'rgba(4, 14, 37, 0.7)'}}>
        {renderClientLogos()}
        </div>
      }
    </Section>
  )
}

export default Intro
