import React from 'react'
import Section from './Section.js'

const Intro = ({ title, subtitle, illustration }) => {
  const scroll = () => {
    const el = document.querySelector('.scroll-1')
    el && el.scrollIntoView({
      block: "start",
      inline: "nearest",
      behavior: "smooth"
    })
  }

  return (
    <Section applyOverlay={ false } className="section--intro" bgImg={ illustration }>
      <div className="p-0 h-100 d-flex flex-column justify-content-between align-items-center">
        <div className="intro__text t-white d-flex flex-column justify-content-center align-items-center">
          <h1 className="heading mb-3 p-0">{ title }</h1>
          <p className="t-2 t-center px-4 w-75">{ subtitle }</p>
        </div>
        <button className="btn-unstyled" onClick={ scroll }>
          <img height="50px" src="/assets/svg/icons/scroll-arrow.svg" alt="scroll down" />
        </button>
      </div>
    </Section>
  )
}

export default Intro
