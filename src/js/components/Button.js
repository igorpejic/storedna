import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ label, href, onClick, classAdditions, btnStyle }) => {
  const onBtnClick = (e) => {
    e && e.preventDefault();
    onClick ? onClick() : window.location.href = href;
  }

  return (
      <button
        className={ `btn dna-btn clickable btn--${btnStyle} ${classAdditions ? classAdditions : ''}` }
        onClick={ onBtnClick }>
        { label }
      </button>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
  classAdditions: PropTypes.string,
  btnStyle: PropTypes.string,
}

Button.defaultProps = {
  href: null,
  onClick: null,
  classAdditions: null,
  btnStyle: 'white',
}

export default Button
