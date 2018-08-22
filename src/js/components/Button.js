import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ label, href, onClick, classAdditions, btnColor }) => {
  const onBtnClick = (e) => {
    e && e.preventDefault();
    onClick ? onClick() : window.location.href = href;
  }

  return (
      <button
        className={ `btn dna-btn clickable btn--${btnColor} ${classAdditions ? classAdditions : ''}` }
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
  btnColor: PropTypes.string,
}

Button.defaultProps = {
  href: null,
  onClick: null,
  classAdditions: null,
  btnColor: 'white',
}

export default Button
