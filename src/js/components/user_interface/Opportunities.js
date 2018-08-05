import React from 'react';
import PropTypes from 'prop-types';
import Chart from './Chart.js';
import { defaultBox, peeledBoxLeft, peeledBoxRight } from '../../svgInline.js';

export default class Opportunities extends React.PureComponent {
  goToNextLevel = () => {
    const { name } = this.props.data;
    const nextLevel = name === 'fleet' ? 'store' : name === 'store' ? 'category' : name === 'category' ? 'test' : null;
    this.props.onClick(nextLevel);
  }

  getChartEl() {
    const { name, action1, action2, action3, action4 } = this.props.data;

    return (
      <div className="matrix-boxes w-100 h-100 d-flex flex-wrap t-center p-1 fade-in">
        <div className="matrix-boxes-top w-100 d-flex">
          <div className="matrix-box pos-relative d-flex justify-content-center align-items-center">
            { defaultBox('#EFE64B', 'yellow') }
            <h3 className="mb-0 z-8 matrix-label">{ action1 }</h3>
          </div>
          <div className="matrix-box pos-relative d-flex justify-content-center align-items-center">
            { defaultBox('#69BFB7', 'green' ) }
            <h3 className="mb-0 z-8 matrix-label">{ action2 }</h3>
          </div>
        </div>
        <div className="matrix-boxes-bottom w-100 d-flex">
          <div className="matrix-box pos-relative d-flex justify-content-center align-items-center">
            { defaultBox('#EA4445', 'red') }
            <h3 className="mb-0 z-8 matrix-label">{ action3 }</h3>
          </div>
          <div className="matrix-box pos-relative clickable d-flex justify-content-center align-items-center" onClick={ this.goToNextLevel }>
            { name === 'category' ? defaultBox('#f59b41', 'orange') :  name === 'store' ? peeledBoxLeft() : peeledBoxRight() }
            <h3 className="mb-0 z-8 matrix-label">{ action4 }</h3>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { name } = this.props.data;
    const { onClick, data } = this.props;

    return (
      <div className={ `interface-body interface-${name} mx-1 mx-md-5 py-1 py-md-4` }>
        <div className="interface-navigation d-none d-md-flex t-brand mb-2 mb-md-3">
          <h6 onClick={ onClick.bind(this,'fleet') } className={`mr-3 pb-1 clickable interface-navigation-item${name === 'fleet' ? ' active' : ''}`}>fleet</h6>
          <h6 onClick={ onClick.bind(this,'store') } className={`mr-3 pb-1 clickable interface-navigation-item${name === 'store' ? ' active' : ''}`}>store</h6>
          <h6 onClick={ onClick.bind(this,'category') } className={`mr-3 pb-1 clickable interface-navigation-item${name === 'category' ? ' active' : ''}`}>category</h6>
        </div>
        <Chart
          key={ data.name }
          data={ data }
          chartEl={ this.getChartEl() } />
      </div>
    )
  }
}

Opportunities.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};
