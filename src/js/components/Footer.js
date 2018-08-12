import React from 'react'
import Section from './Section'
import ButtonForm from './ButtonForm'
import { sections, links } from '../data/footer.json'

export default class Footer extends React.PureComponent {
  constructor() {
    super()

    // this.state = { openMenu: false }
  }

  // toggleMenu = () => this.setState({ openMenu: !this.state.openMenu })

  renderSections() {
    return sections.map((section, index, array) =>
      <div
        key={ index }
        className={ `${index === array.length - 1 ? '' : 'mr-md-3 mr-lg-5'}` }
        style={{ minWidth: '80px' }}>
        <p className="t-black mb-3">
          { section.title }
        </p>
        <ul className="list-unstyled">
          { section.tabs.map((tab) =>
            <li key={ tab.label }>
              <a className="link--unstyled t-grey" href={ tab.href }>
                { tab.label }
              </a>
            </li>
          ) }
        </ul>
      </div>
    )
  };

  renderBottomLinks = () =>
    <ul className="list-unstyled d-flex">
      { links.map((link, index, array) =>
        <li key={ link.label }>
          <a className="link--unstyled t-grey" href={ link.href }>
            { link.label }
            { index === array.length - 1 ? '' :
              <span className="px-2">|</span>
            }
          </a>
        </li>
      ) }
    </ul>

  render() {
    return (
      <React.Fragment>
        <Section applyOverlay={ false } padding={ 5 } className="t-center">
          <img alt="storeDNA logo" src="/assets/svg/logos/logo.svg" width="200px"/>
          <p className="pt-3 px-sm-6 mx-auto" style={{ maxWidth: '700px' }}>
            For retail executives overwhelmed by piles of data, StoreDNA is the
            integrated decision-making platform which delivers dramatically improved
            performance through better product assortments, store layouts, visual
            merchandising, and associate optimization.
          </p>
        </Section>
        <Section applyOverlay={ false } padding={ 5 } className="section--footer bg-grey t-grey t-center">
          <div className="d-inline-flex flex-column">
            <div className="d-none d-md-inline-flex justify-content-center t-left">
              { this.renderSections() }
            </div>
            <hr className="w-100" />
            <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center">
              <p>Copyright © 2018 Monolith International BV All rights reserved.</p>
              { this.renderBottomLinks() }
              <div className="mb-3">
                <ButtonForm
                  label="Ask for demo"
                  successLabel="Thank you" />
              </div>
            </div>
          </div>
        </Section>
      </React.Fragment>
    )
  }
}
