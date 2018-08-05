import React from 'react'
import PropTypes from 'prop-types'

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default class ButtonForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      label: this.props.initialLabel || this.props.label,
      placeholder: this.props.placeholder,
      active: false,
      inputValid: true,
      submitted: false,
    }
  }

  onClick = (e) => {
    e && e.preventDefault();

    this.setState({
      active: true,
      inputValid: false,
      label: this.props.label
    }, this.refs.input.focus())
  }

  onChange = (event) => {
    this.setState({ inputValid: EMAIL_REGEX.test(event.target.value) });
  }

  onSubmit = (e) => {
    e && e.preventDefault();
    const email = this.refs.input.value;
    const fakeRequest = () => Promise.resolve();

    fakeRequest(email).then(() => {
      if (this.props.href && this.props.fileName) {
        if (this.isLegacyBrowser()) {
          window.open(this.props.href, '_blank').focus();
        } else {
          this.refs.hiddenLink.click();
        }
      }

      this.setState({
        label: "THANK YOU!",
        active: false,
        submitted: true,
        inputValid: false,
      })
    }).catch((err) => {
      this.refs.input.value = ''
      this.setState({ placeholder: "Sorry, try with another email" })
      console.log(err, 'failed')
    });
  }

  isLegacyBrowser() {
    const isOpera = (!!window.opr && !!window.opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window.safari.pushNotification));
    const iOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
    const isIE = /*@cc_on!@*/false || !!document.documentMode;

    return isOpera || isIE || isSafari || iOS;
  }

  render() {
    const { placeholder, label, active, inputValid } = this.state;
    const { href, fileName, height } = this.props;

    return (
      <React.Fragment>
        { href && fileName ?
          <a ref="hiddenLink"
            href={ href }
            download={ fileName }
            target="_blank" id="hidden_download"
            className="hidden_download" type="submit">
            <span />
          </a>
          : null
        }
        <form
          className={ `btn--form d-inline-flex bg-white ${active ? 'active' : ''}` }
          name="download_publication_form"
          onSubmit={ this.onSubmit }
          style={{ height: `${height}px`}}>
            <input
              ref="input"
              className="t-left d-inline-block"
              onChange={ this.onChange }
              placeholder={ placeholder }
              autoComplete="on"
              type="text"
              name="email" />
            <button
              className={ `t-bold ${active ? "t-white bg-brand" : "t-black bg-white"}` }
              disabled={ !inputValid }
              onClick={ active ? this.onSubmit : this.onClick }
              type={ active ? 'submit' : 'button' }>
              { label }
            </button>
        </form>
      </React.Fragment>
    )
  }
}

ButtonForm.propTypes = {
  label: PropTypes.string.isRequired,
  initialLabel: PropTypes.string,
  placeholder: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  fileName: PropTypes.string,
  height: PropTypes.number,
}

ButtonForm.defaultProps = {
  placeholder: "Email address.",
  initialLabel: '',
  href: '',
  classAdditions: '',
  fileName: '',
  onClick: null,
  height: 45,
}
