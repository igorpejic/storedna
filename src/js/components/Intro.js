import React from 'react'
import Section from './Section.js'

const Intro = () => {
  const scroll = () =>
    document.querySelector('.section--methodology').scrollIntoView({
      block: "start",
      inline: "nearest",
      behavior: "smooth"
    })

  return (
    <Section applyOverlay={ false } className="section--intro">
      <div className="p-0 h-100 d-flex flex-column justify-content-between align-items-center">
        <div className="intro__text t-white d-flex flex-column justify-content-center align-items-center">
          <h1 className="heading mb-3 p-0">
            <span>Shopability</span><br /><span>for Profitability.</span>
          </h1>
          <p className="t-2 t-center px-4 w-75">
            Decision-making platform for brick and mortar retail.
          </p>
        </div>
        <button className="btn-unstyled" onClick={ scroll }>
          <img height="50px" src="/assets/svg/icons/scroll-arrow.svg" alt="scroll down" />
        </button>
      </div>
    </Section>
  )
}

export default Intro
