import React from 'react'
import Section from './Section.js'

const Intro = ({ illustration, className, children }) => {
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
        <button className="btn-unstyled" onClick={ scroll }>
          <img height="50px" src="/assets/svg/icons/scroll-arrow.svg" alt="scroll down" />
        </button>
      </div>
    </Section>
  )
}

export default Intro
