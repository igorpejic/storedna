import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ label, href, onClick, classAdditions }) => {
  const onBtnClick = () => {
    onClick ? onClick() : window.location.href = href;
  }

  return (
    <button
      className={ `btn clickable ${classAdditions ? classAdditions : ''}` }
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
}

Button.defaultProps = {
  href: null,
  onClick: null,
  classAdditions: null,
}

export default Button
