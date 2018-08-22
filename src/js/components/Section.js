import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button.js'

export default class Section extends React.PureComponent {
  componentDidMount() {
    if (this.props.applyOverlay) {
      window.addEventListener('scroll', this.applyOverlay.bind(this));
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll');
  }

  setCurrentNode = (node) => {
    this.currentNode = node;
  }

  applyOverlay() {
    const rect = this.currentNode.getBoundingClientRect();

    if (rect.bottom > 0 && rect.bottom < rect.height / 2) {
      const opacity =  1.1 - (rect.bottom / (rect.height / 2));
      this.currentNode.style.backgroundColor = `rgba(80, 80, 80, ${opacity})`;
    } else {
      this.currentNode.style.background = 'none';
    }
  }

  renderButtons = (buttons) => {
    if (buttons) {
      return (
        <div className='t-center pos-relative z-10'>
          { buttons.map(btn =>
            <Button
              key={ btn.label }
              label={ btn.label }
              href={ btn.href }
              onClick={ btn.onClick }
              classAdditions="mx-4 mt-3 mt-md-5" />)
          }
        </div>
      )
    }
  }

  renderOverlay = () =>
    <div ref={ this.setCurrentNode } className="section--overlay pos-absolute pos-left pos-top w-100 h-100 z-5" />

  render() {
    const { children, heading, buttons, padding, applyOverlay, className, bgImg } = this.props;

    return (
      <div
        className={ `pos-relative o-hidden w-100 px-3 py-4 p-md-${padding} ${className} methodology-wrapper` }
        style={{ backgroundImage: bgImg ? `url(${bgImg})` : 'none' }}>
        { heading && heading }
        { children }
        { this.renderButtons(buttons) }
        { applyOverlay && this.renderOverlay() }
      </div>
    );
  }
}

Section.propTypes = {
  heading: PropTypes.node,
  buttons: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
  })),
  padding: PropTypes.number,
  applyOverlay: PropTypes.bool,
  className: PropTypes.string,
  bgImg: PropTypes.string,
}

Section.defaultProps = {
  heading: null,
  buttons: null,
  padding: 6,
  applyOverlay: true,
  className: 'section',
  bgImg: '',
}
