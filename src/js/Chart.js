import React from 'react';
import PropTypes from 'prop-types';

export default class Chart extends React.PureComponent {
  componentDidMount() {
    if (this.props.data.tab === 'opportunities') {
      setTimeout(() => {
        document.querySelector('.matrix-boxes').classList.add('faded-in-transparent')
      }, 1);
    }
  }

  render() {
    const { title, test, result, labelX, labelY, background } = this.props.data;

    return (
      <div className="interface-matrix-continer w-100 d-flex flex-column">
        <h3 className="interface-matrix-title t-center">{ title }</h3>
        { test ? <h3 className="interface-matrix-title mt-3 ml-4">Test: <span className="t-brand">{ test }</span></h3> : null }
        { result ? <h3 className="interface-matrix-title ml-4">Result: <span className="t-brand">{ result }</span></h3> : null }
        <div className="interface-matrix-wrapper pos-relative">
          <div className="interface-matrix-axis x-axis pos-absolute pos-bottom w-100 pl-4 t-center">
            <h3 className="axis-label x-axis-label">{ labelX }</h3>
            <div className="axis-arrow x-axis-arrow"></div>
          </div>
          <div className="interface-matrix-axis y-axis pos-absolute pos-left h-100 pt-4 t-center">
            <h3 className="axis-label y-axis-label m-0">{ labelY }</h3>
            <div className="axis-arrow y-axis-arrow"></div>
          </div>
          <img src={ background } alt={ title } className="matrix-bg pos-absolute pos-right p-2" />
          <div className="interface-matrix pos-absolute pos-top pos-right">
            { this.props.chartEl }
          </div>
        </div>
      </div>
    );
  }
}

Chart.propTypes = {
  data: PropTypes.object.isRequired,
  chartEl: PropTypes.node.isRequired,
};
