import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button.js'

export default class Section extends React.PureComponent {
  componentDidMount() {
    window.addEventListener('scroll', this.applyOverlay.bind(this));
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
      const opacity =  1 - (rect.bottom / (rect.height / 2));
      this.currentNode.style.backgroundColor = `rgba(150, 150, 150, ${opacity})`;
    } else {
      this.currentNode.style.background = 'none';
    }
  }

  renderButtons = (buttons) => {
    if (buttons) {
      return (
        <div className='t-center pos-relative z-10'>
          { buttons.map(btn =>
            <Button key={ btn.label } label={ btn.label } href={ btn.href } onClick={ btn.onClick } />)
          }
        </div>
      )
    }
  }

  render() {
    const { children, heading, buttons, padding } = this.props;

    return (
      <div className={ `section pos-relative w-100 px-2 py-4 p-md-${padding}` }>
        { heading && heading }
        { children }
        { this.renderButtons(buttons) }
        <div ref={ this.setCurrentNode } className="section--overlay pos-absolute pos-left pos-top w-100 h-100 z-5" />
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
}

Section.defaultProps = {
  heading: null,
  buttons: null,
  padding: 6,
}
