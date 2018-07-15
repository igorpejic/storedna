import React from 'react'
import Section from './Section'
import { steps } from '../data/methodology.json'

const Methodology = () =>
  <div>
    { steps.map((step, index) =>
      <Section key={ index }>
        <div className="pos-relative d-flex flex-column z-0">
          <div className="container d-md-flex">
            <h2 className="heading mt-2 p-0 col-md-3 mr-md-4">{ step.title }</h2>
            <p className="t-0">{ step.description }</p>
          </div>
          <div className="d-inline-block pos-relative align-self-center">
            <video
              className="z-0 lazy"
              style={{maxHeight: '70vh', maxWidth: '100%'}}
              preload="none"
              poster={ step.poster }
              src={ step.video }
              muted playsInline loop />
            <div className="bg-fade-edge pos-absolute z-1 w-100 h-100 pos-top pos-left" />
          </div>
        </div>
      </Section>
    ) }
  </div>

export default Methodology
