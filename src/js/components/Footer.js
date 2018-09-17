import React from 'react'
import Section from './Section'
import ButtonForm from './ButtonForm'
import { sections, links } from '../data/footer.json'
import { BLOG_URL } from '../utils'

export default class Footer extends React.PureComponent {
  constructor() {
    super()

    this.state = { sections }
  }
  componentWillMount() {
    if (!window.ghost) {
      return
    }
    fetch('https://' + window.ghost.url.api('posts', {limit: 3})).then(res => {
      if (!res) return
      res.json().then(body => {
        if (!body || !body.posts) return
        this.setState({ 'posts': body.posts})
      })
    })

  }

  onToggle = (index) => {
    const updatedSections = this.state.sections;
    updatedSections[index].active = !this.state.sections[index].active;

    this.setState({ sections: updatedSections })
    this.forceUpdate()
  }

  getTabLink(tab) {
    if (tab && tab.href && tab.href.includes('https://')) {
      return tab.href
    } else {
      return '/' + tab.type + '/' + tab.href
    }
  }

  renderSections() {
    const footerSections = this.state.sections;

    return footerSections.map((section, index, array) =>
      <div
        key={ index }
        className={
          `footer__list ${index === array.length - 1 ? '' : 'mr-md-3 mr-lg-5'}
          ${section.active ? ' active' : ''}`
        }
        style={{ minWidth: '80px' }}>
        <p className="d-none d-md-block t-black mb-3">
          { section.title }
        </p>
        <button
          className="footer__list-header btn btn-unstyled w-100 d-flex d-md-none
          justify-content-between align-items-center"
          onClick={ this.onToggle.bind(this, index) }>
          <span>{ section.title }</span>
          <img className="toggle-dropdown" alt="toggle footer section" src="/assets/svg/icons/plus.svg" height="8px" />
        </button>
        <div className="footer__list-wrapper">
          <ul className="footer__list-items list-unstyled">
            { section.title === 'Recent Posts' && this.state.posts ?
               this.state.posts.map((post) =>
                <li key={ post.id }>
                  <a className="footer__list-item link--unstyled t-grey" href={ BLOG_URL + post.url }>
                    { post.title }
                  </a>
                </li>
              )
              : section.tabs.map((tab) =>
                <li key={ tab.label }>
                  <a className="footer__list-item link--unstyled t-grey" href={this.getTabLink(tab)}>
                    { tab.label }
                  </a>
                </li>
              )
            }
          </ul>
        </div>
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
          <a href="/">
            <img alt="storeDNA logo" src="/assets/svg/logos/logo.svg" width="200px"/>
          </a>
          <p className="pt-3 px-sm-6 mx-auto" style={{ maxWidth: '700px' }}>
            For retail executives overwhelmed by piles of data, StoreDNA is the
            integrated decision-making platform which delivers dramatically improved
            performance through better product assortments, store layouts, visual
            merchandising, and associate optimization.
          </p>
        </Section>
        <Section applyOverlay={ false } padding={ 5 } className="section--footer bg-grey t-grey t-center">
          <div className="d-inline-flex flex-column">
            <div className="footer__sections d-flex flex-column d-md-inline-flex flex-md-row justify-content-center t-left">
              { this.renderSections() }
            </div>
            <hr className="d-none d-md-block w-100" />
            <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center">
              <p>Copyright © 2018 Monolith International BV All rights reserved.</p>
              { this.renderBottomLinks() }
              <div className="col-12 col-md-auto mb-3">
                <ButtonForm
                  label="Ask for demo"
                  successLabel="Thank you"
                  btnColor="black"
                  kind="ask-for-demo-footer"
                  height={ 30 }/>
              </div>
            </div>
          </div>
        </Section>
      </React.Fragment>
    )
  }
}
