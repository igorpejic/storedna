import React from 'react';
import PropTypes from 'prop-types';

export default class CycleNavItem extends React.PureComponent {
  handleClick = () => {
    const { name, onClick } = this.props;
    onClick(name);
  }

  render() {
    const { name, label } = this.props;
    return (
      <div className={ `cycle-nav-item cycle-nav-item--${name} d-inline-flex flex-column justify-content-end align-items-center` } onClick={ this.handleClick }>
        <img className={ `icon icon__${name} mb-2` } alt={ name } src={ `/assets/svg/${name}.svg` } />
        <h2 className="t-center">{ label }</h2>
      </div>
    );
  }
}

CycleNavItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};
