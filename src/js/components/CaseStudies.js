import React from 'react'
import Section from './Section'
import { cases } from '../data/references.json'

const CaseStudies = () => {
  const renderCases = () =>
    <div className="d-flex flex-wrap">
      { cases.map((c) =>
        <div
          key={ c.name }
          className="case-card d-flex col-12 col-lg-4 mb-3 o-hidden clickable"
          onClick={ () => window.location.href = c.href }>
          <div className="d-flex flex-wrap bg-grey w-100 p-3">
            <div className="d-flex mx-2 my-1" style={{ flexGrow: 1 }}>
              <img src={ c.logo } alt={ c.name } width="80px" height="40px" />
              <div className="ml-3">
                <h1>{ c.name }</h1>
                <h2>{ c.level }</h2>
              </div>
            </div>
            <div className="d-flex align-items-center m-1">
              <span className="t-1 t-bold t-brand">
                { c.result }
                <span className="t-black mx-2">{ c.metric }</span>
              </span>
              <img src="/assets/svg/arrow-up.svg" alt="arrow up" height="45px" className="pb-2"/>
            </div>
          </div>
        </div>
      ) }
    </div>

  return (
    <Section
      className="bg-dark-grey"
      applyOverlay={ false }
      buttons={
        [{ label: "Talk with expert", onClick: () => {console.log('hi, I`m expert')} }]
      }>
      <h1 className="heading t-center t-white">
        Learn more how leading retailers are using StoreDNA to
        <span className="t-brand"> increase their profitability</span>
      </h1>
      { renderCases() }
    </Section>
  )
}

export default CaseStudies
