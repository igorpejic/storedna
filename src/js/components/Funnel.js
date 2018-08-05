import React from 'react'
import Section from './Section.js'
import { assets, funnel } from '../data/funnel.json'

export default class Funnel extends React.PureComponent {
  constructor() {
    super()

    this.state = { openFunnel: false }
  }

  toggleFunnel = () => this.setState({ openFunnel: !this.state.openFunnel })

  renderAssetsCards = () => {
    return (
      <div className="d-flex flex-wrap flex-lg-nowrap">
        { assets.map((asset, index) =>
          <div key={ index } className='funnel-card d-flex flex-column col-6 col-md-4 col-lg-2 p-0 t-white t-center'>
            <div className="funnel-card-top p-3 p-lg-4 d-flex flex-column" style={{ borderBottom: '1px solid white' }}>
              <h3 className="heading mb-1 mb-md-4">{ asset.title }</h3>
              <img src={ asset.icon } alt={ asset.title } height="60px" />
            </div>
            <div className="funnel-card-bottom p-3" style={{ borderBottom: '1px solid white' }}>
              <p className="m-0">{ asset.description }</p>
            </div>
          </div>
        ) }
      </div>
    )
  }

  renderShortFunnel = () =>
    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center flex-wrap flex-md-nowrap p-3 px-lg-5 t-white bg-dark-grey">
      { funnel.map((step, index) =>
        <React.Fragment key={ index }>
          <div className="clickable" onClick={ () => console.log(index) } >
            <h3 className="heading my-3 my-md-0">{ step.title }</h3>
          </div>
          { index < funnel.length - 1 && <img className="funnel-arrow d-md-none d-lg-inline-block" alt="arrow" src="/assets/svg/arrow-right.svg" height="20px" /> }
        </React.Fragment>
      ) }
    </div>

  render() {
    return (
      <Section
        applyOverlay={ false }
        buttons={ [
          { label: "Expand funnel", onClick: this.toggleFunnel },
          { label: "Find out more", href: '/more' },
        ]}
        className="bg-grey">
        <h1 className="heading t-center">
          World’s  first decision making platform which impacts every part of the <span className="t-brand">shopper funnel</span>
        </h1>
        { this.renderAssetsCards() }
        { this.renderShortFunnel() }
      </Section>
    )
  }
}
