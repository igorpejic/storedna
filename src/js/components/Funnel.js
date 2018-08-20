import React from 'react'
import Section from './Section.js'
import { Carousel } from 'react-responsive-carousel';
import { assets, funnel } from '../data/funnel.json'

export default class Funnel extends React.Component {
  isMobile = window.innerWidth < 576
  state = { opened: this.isMobile, activeLevel: 0 }

  toggleFunnel = () =>
    this.setState(
      { opened: !this.state.opened }
    )

  componentDidUpdate(prevProps, prevState) {
    if ((prevState.opened !== this.state.opened) && this.state.opened) {
      setTimeout(function() {
        document.querySelector('.funnel-bottomNav').scrollIntoView({
          block: "start",
          inline: "nearest",
          behavior: "smooth"
        })
      }, 0)
    }
  }


  setActiveLevel = (index) => this.setState(this.state.opened ? { activeLevel: index } : { opened: true, activeLevel: index })

  onChange = (activeIndex) => this.setActiveLevel(activeIndex)

  isActive = (index) => this.state.activeLevel === index

  renderAssetsCards = () => {
    return (
      <div className="d-flex flex-wrap flex-sm-nowrap">
        { assets.map((asset, index) =>
          <div key={ index } className='funnel-card d-flex flex-column justify-content-between px-3 t-center'>
            <p className="t-bold mt-3 mt-sm-1">{ asset.title }</p>
            <img src={ asset.icon } alt={ asset.title } height="60px" />
            <p className="t-grey">{ asset.description }</p>
          </div>
        ) }
      </div>
    )
  }

  renderFunnelNavigation = () =>
    <div className="funnel-bottomNav d-flex flex-column align-items-center t-white">
      <div className="d-flex w-100 justify-content-between mb-4">
        { funnel.map((step, index) => {
          if (!this.state.opened && step.isExtra) {
            return null
          }
          return(
            <React.Fragment key={ index }>
              <div
                className="funnel-bottomNav__item pos-relative o-hidden t-center t-bold clickable"
                onClick={ () => this.setActiveLevel(index) }>
                <span>{ step.label }</span>
                <div className={ `funnel-bottomNav__dot o-hidden${this.isActive(index) ? ' bg-white' : ''}` } />
              </div>
            </React.Fragment>
          )
        }) }
      </div>
      <div
        className={ `funnel-bottomNav clickable d-flex flex-column${this.state.opened ? ' opened' : ''}` }
        onClick={ this.toggleFunnel }>
        <p className="mb-2">{this.state.opened ? "Retract funnel" : "Expand funnel"}</p>
        <img className="funnel-arrow" alt="expand funnel" src="/assets/svg/icons/arrow-down.svg" height="15px" />
      </div>
    </div>

  renderFunnel = () =>
    <div className="funnel-container pos-relative py-4 px-md-4 py-md-5">
      <div className="funnel-sideNav pos-absolute mx-4 z-10 d-none d-sm-flex flex-column align-items-center">
        { funnel.map((step, index) =>
          <div
            key={ step.label }
            className={ `funnel-sideNav__item clickable${this.isActive(index) ? ' active' : ''}` }
            onClick={ () => this.setActiveLevel(index) } >
            <h1 className="pos-absolute pos-h-center t-bold t-uppercase t-center m-0">{ step.label }</h1>
          </div>
        ) }
      </div>
      <Carousel
        selectedItem={ this.state.activeLevel }
        onChange={ this.onChange }
        showIndicators={ this.isMobile ? true : false }
        showStatus={false}
        showThumbs={false}
        axis={ this.isMobile ? "horizontal" : "vertical" }
        verticalSwipe={ this.isMobile ? "standard" : "natural" }
        useKeyboardArrows
        emulateTouch>
          { funnel.map((step, index) =>
            <div key={ step.label } className="col-sm-7 col-lg-6 col-xl-4 offset-sm-5 offset-xl-7 d-flex flex-column align-items-start mt-1">
              { this.isMobile &&
                <h1 className="funnel-mobile-title t-white t-uppercase t-left w-100 px-3 mb-3 z-10">
                  { `${index + 1}. ${ step.label }` }
                </h1>
              }
              <img className="funnel-slide-content" alt={ step.title } src={ step.image } height={ 110 } />
              <div className="funnel-slide-content t-white t-left legend pr-sm-4 pr-lg-auto">
                <h1 className="funnel-slide-title t-brand t-normal">{ step.title }</h1>
                <h2 className="t-brand t-bold mb-0">
                  { index === 0 ? "CRITICAL MOMENT" : "KEY INSIGHT" }
                </h2>
                <hr className="my-1" />
                <p>{ step.insight }</p>
                { step.metrics.length > 0 ?
                  <div>
                    <h2 className="t-brand t-bold mb-0">KEY METRICS</h2>
                    <hr className="my-1" />
                    <div className="d-flex">
                    { step.metrics.map((metric) =>
                      <div key={ metric.description } className="funnel-metric-item col-4 p-0 pr-3">
                        <div className="funnel-metric-item__image d-flex justify-content-center my-2">
                          <img alt={ metric.description } src={ metric.icon } />
                        </div>
                        <p className="funnel-metric-item__label">
                          { metric.description }
                        </p>
                      </div>
                    ) }
                    </div>
                  </div>
                : null }
              </div>
            </div>
          ) }
      </Carousel>
    </div>

  render() {
    return (
    <React.Fragment>
        <div className="pos-relative o-hidden w-100 pt-4 pt-md-6 pb-md-3">
          <h1 className="heading t-center px-3">
            World’s first decision making platform which impacts every part of the <span className="t-brand">shopper funnel</span>
          </h1>
          { this.renderAssetsCards() }
        </div>
        <div className={ `funnel o-hidden bg-dark-grey${this.state.opened ? ' opened' : ''}` }>
          { this.renderFunnel() }
        </div>
        {
          !this.isMobile &&
          <Section applyOverlay={ false } padding={ 0 } className="funnel-bottomNav bg-lightdark-grey">
            { this.renderFunnelNavigation() }
          </Section>
        }
      </React.Fragment>
    )
  }
}
