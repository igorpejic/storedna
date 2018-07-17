import React from 'react'
import Section from './Section.js'
import Button from './Button.js'

const Intro = () => {
  const onBtnClick = () => {
    window.location.href = '/platform';
  }

  return (
    <Section applyOverlay={ false } className="section--intro bg-grey">
      <div className="col-md-4 p-0 h-100 d-flex flex-column justify-content-between">
        <div />
        <div>
          <p className="t-1">
            STORE DNA is the <strong>decision-making platform</strong> that delivers improved performance through better:
          </p>
          <ul className="t-1 t-bold pl-4">
            <li>product assortment</li>
            <li>layout and navigation</li>
            <li>visual merchandising</li>
            <li>sales staff service</li>
          </ul>
          <Button
            label="Find out more"
            classAdditions="mt-4"
            onClick={ onBtnClick } />
        </div>
        <h2 className="heading">
          Shopability for <span className="t-brand">profitability</span>
        </h2>
      </div>
    </Section>
  )
}

export default Intro
