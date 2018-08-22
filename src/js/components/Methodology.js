import React from 'react'
import LazyLoad from 'react-lazy-load'
import Section from './Section'
import { steps, title } from '../data/methodology.json'

const Methodology = () =>
  <div className="section--methodology scroll-1">
    <h1 className="heading t-0 t-center px-3 pt-4 px-md-6 pt-md-6 mb-0">
      { title }
    </h1>
    { steps.map((step, index) =>
      <Section key={ index } padding={ 5 } class="methodology-wrapper">
        <div className={`pos-relative d-flex flex-column flex-md-row z-0`}>
          { index % 2 === 0 ? <div className='col-md-1 step-number-left'><span>{index + 1}</span></div> : null }
          <span className={`pos-relative d-flex flex-column flex-md-row ${index % 2 === 0 ? 'step-1-methodology' : 'step-2-methodology' }`}>
            <div className={`container p-0 d-md-flex flex-column justify-content-center col-md-3
              ${index === 0 ? 'offset-md-1' : index % 2 ? 'order-md-2':'offset-md-1'}`}>
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
            { index % 2 === 1 ? <div className='col-md-1 step-number-right'><span>{index + 1}</span></div> : null }
          </span>
        </div>
      </Section>
    ) }
  </div>

export default Methodology
