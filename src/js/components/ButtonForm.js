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
        active: false,
        submitted: true,
        inputValid: false,
        label: this.props.successLabel,
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
    const { href, fileName, height, btnColor } = this.props;

    return (
      <React.Fragment>
        { href && fileName ?
          <a ref="hiddenLink"
            href={ href }
            download={ fileName }
            target="_blank" id="hidden_download"
            className="d-none " type="submit">
            <span />
          </a>
          : null
        }
        <form
          className={ `btn--form btn--${btnColor} d-inline-flex${active ? ' active' : ''}` }
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
              disabled={ !inputValid }
              onClick={ active ? this.onSubmit : this.onClick }
              type={ active ? 'submit' : 'button' }>
              <h3 className="heading m-0">{ label }</h3>
            </button>
        </form>
      </React.Fragment>
    )
  }
}

ButtonForm.propTypes = {
  label: PropTypes.string.isRequired,
  initialLabel: PropTypes.string,
  successLabel: PropTypes.string,
  placeholder: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  fileName: PropTypes.string,
  height: PropTypes.number,
  btnColor: PropTypes.string,
}

ButtonForm.defaultProps = {
  placeholder: "Email address.",
  successLabel: "Thank you!",
  initialLabel: '',
  href: '',
  btnColor: 'white',
  fileName: '',
  onClick: null,
  height: 40,
}
