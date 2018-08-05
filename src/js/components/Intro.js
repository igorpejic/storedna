import React from 'react'
import Section from './Section.js'
// import Button from './Button.js'

const Intro = () => {
  // const onBtnClick = () => {
  //   window.location.href = '/platform';
  // }

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
          {/* <ul className="t-1 t-bold pl-4">
            <li>product assortment</li>
            <li>layout and navigation</li>
            <li>visual merchandising</li>
            <li>sales staff service</li>
          </ul>
          <Button
            label="Find out more"
            classAdditions="mt-4"
            onClick={ onBtnClick } /> */}
        <img height="50px" src="/assets/svg/scroll-arrow.svg" alt="scroll down" />
      </div>
    </Section>
  )
}

export default Intro
