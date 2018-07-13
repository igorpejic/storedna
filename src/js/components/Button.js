import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ label, href, onClick }) => {
  const onBtnClick = () => {
    onClick ? onClick() : window.location.href = href;
  }

  return (
    <button className='btn clickable m-2' onClick={ onBtnClick }>
      { label }
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  href: null,
  onClick: null,
}

export default Button
