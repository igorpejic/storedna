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
        className={ `nav-tab mr-2 mr-md-3 t-brand t-underline--fancy-hover clickable${window.location.pathname === tab.href ? ' t-underline--fancy' : ''}` }>
        <a className="btn t-white" href={ tab.href }>
          <h3 className="heading my-md-1 mb-md-0">{ tab.label }</h3>
        </a>
        <hr className="t-white d-md-none"/>
      </li>
    )

  render() {
    return (
      <div className={ `header${this.state.openMenu ? ' opened' : ''}
        w-100 t-white d-flex flex-column flex-md-row align-items-md-center justify-content-md-between
        py-1 py-md-2 px-3 px-lg-6 pos-absolute pos-top z-11` }>

        <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '22px' }}>
          <button
            style={{ lineHeight: '15px' }}
            className="d-md-none pl-3 btn-unstyled pos-absolute pos-left"
            onClick={ this.toggleMenu }>
            <img
              src={ `/assets/svg/icons/${this.state.openMenu ? 'close' : 'menu'}.svg` }
              alt="storedna logo"
              height="15px" />
          </button>

          <a href="/">
            <img className="d-none d-md-inline-block mr-md-4" src="/assets/svg/logos/logo_white.svg" alt="storedna logo" height="30px" />
            <img className="d-md-none mr-md-4" src="/assets/svg/logos/logo_icon_white.svg" alt="storedna logo" height="22px" />
          </a>

          <button
            style={{ lineHeight: '15px' }}
            className="d-md-none pr-3 btn-unstyled pos-absolute pos-right"
            onClick={ () => window.location.href = '/info' }>
            <img
              src={ `/assets/svg/icons/info.svg` }
              alt="storedna contact"
              height="20px" />
          </button>
        </div>

        {/* <ul className={ `menu ${this.state.openMenu ? 'my-6 mx-4' : 'd-none'} list-unstyled d-md-flex m-md-0` }>
          { this.renderNavigationTabs() }
        </ul> */}

        <ol className="d-none d-md-flex align-items-center mb-0 list-unstyled">
          <li className="mr-2 mr-sm-3">
            <ButtonForm label="Ask for demo" height={ 30 } />
          </li>
          <li className='clickable t-brand t-underline--fancy-hover'>
            <a className="t-white" href='logIn'>
              <h3 className="heading my-md-1 mb-md-0">Log in</h3>
            </a>
          </li>
        </ol>

      </div>
    )
  }
}
