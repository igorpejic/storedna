import React from 'react';
import PropTypes from 'prop-types';

export default class CycleNavItem extends React.PureComponent {
  render() {
    const { name, label } = this.props;
    return (
      <div className="cycle-nav--item">
        <img className={ `icon__${name} mb-2` } alt={ name } src={ `/assets/svg/${name}.svg` } />
        <h3 className="t-center">{ label }</h3>
      </div>
    );
  }
}

CycleNavItem.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};
