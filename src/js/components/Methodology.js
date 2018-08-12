import React from 'react'
import LazyLoad from 'react-lazy-load'
import Section from './Section'
import { steps } from '../data/methodology.json'

const Methodology = () =>
  <div className="section--methodology">
    { steps.map((step, index) =>
      <Section key={ index } padding={ 5 }>
        <div className="pos-relative d-flex flex-column flex-md-row z-0">
          <div className={`container p-0 d-md-flex flex-column justify-content-center col-md-3
            ${index === 0 ? 'offset-md-2' : index % 2 ? 'offset-right-md-1 order-md-2':'offset-md-1'}`}>
            <h1 className="heading t-left p-0 mb-2">{ step.title }</h1>
            <p className="t-2">{ step.description }</p>
          </div>
          <div className={ `d-inline-block pos-relative align-self-center col-md-8 p-0
            ${index % 2 ? 't-right' : 't-left'}` }>
            <LazyLoad offsetVertical={ 500 } debounce={ false }>
              <video
                className="z-0"
                style={{maxHeight: '80vh', maxWidth: '100%'}}
                // preload="none"
                poster={ step.poster }
                src={ step.video }
                muted playsInline loop autoPlay />
            </LazyLoad>
            <div className="bg-fade-edge pos-absolute z-1 w-100 h-100 pos-top pos-left" />
          </div>
        </div>
      </Section>
    ) }
  </div>

export default Methodology
