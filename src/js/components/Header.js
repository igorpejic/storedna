import React from 'react'
import ButtonForm from './ButtonForm';
import { tabs } from '../data/navigation.json'

export default class Header extends React.PureComponent {
  constructor() {
    super()

    this.state = { openMenu: false }
  }

  toggleMenu = () => this.setState({ openMenu: !this.state.openMenu })

  renderNavigationTabs = () =>
    tabs.map((tab, index) =>
      <li
        key={ index }
        className={ `nav-tab px-md-1 t-brand t-underline--fancy-hover clickable${window.location.pathname === tab.href ? ' t-underline--fancy' : ''}` }>
        <a className="btn t-white" href={ tab.href }>
          <h3 className="heading my-md-1 mb-md-0">{ tab.label }</h3>
        </a>
        <hr className="t-white d-md-none"/>
      </li>
    )

  render() {
    return (
      <nav className={ `header ${this.state.openMenu ? 'opened' : 'closed'}
        w-100 t-white d-flex flex-column flex-md-row align-items-md-center justify-content-md-between
        py-1 px-3 px-lg-6 pos-fixed pos-top z-11` }>

        <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '22px' }}>
          <button
            style={{ lineHeight: '15px', top: '6px' }}
            className="d-md-none pl-3 btn-unstyled pos-absolute pos-left"
            onClick={ this.toggleMenu }>
            <img
              src={ `/assets/svg/icons/${this.state.openMenu ? 'close' : 'menu'}.svg` }
              alt="menu"
              height="15px" />
          </button>

          <a href="/">
            <img className="d-none d-lg-inline-block mr-lg-3" src="/assets/svg/logos/logo_white.svg" alt="storedna logo" height="30px" />
            <img className="d-lg-none mr-md-3" src="/assets/svg/logos/logo_icon_white.svg" alt="storedna logo" height="20px" />
          </a>

          <button
            style={{ lineHeight: '15px', top: '6px' }}
            className="d-md-none pr-3 btn-unstyled pos-absolute pos-right"
            onClick={ () => window.location.href = '/article/contact' }>
            <img
              src={ `/assets/svg/icons/contact.svg` }
              alt="storedna contact"
              height="15px" />
          </button>
        </div>

        <ul className={ `menu ${this.state.openMenu ? 'my-6 mx-4' : 'd-none'} list-unstyled d-md-flex m-md-0` }>
          { this.renderNavigationTabs() }
        </ul>

        <ol className="d-none d-md-flex align-items-center mb-0 list-unstyled">
          <li className="mr-lg-3">
            <ButtonForm label="Ask for demo" kind="ask-for-demo-header" height={ 30 } />
          </li>
          <li className='d-none d-lg-inline-block clickable t-brand t-underline--fancy-hover'>
            <a className="t-white" href="https://app.storedna.co">
              <h3 className="heading my-md-1 mb-md-0">Log in</h3>
            </a>
          </li>
        </ol>

      </nav>
    )
  }
}
