import React from 'react';
import PropTypes from 'prop-types';

export default class Chart extends React.PureComponent {
  componentDidMount() {
    if (this.props.data.tab === 'opportunities') {
      setTimeout(() => {
        const el = document.querySelector('.matrix-boxes');
        if (el) { el.classList.add('faded-in-transparent') };
      }, 1);
    }
  }

  render() {
    const { title, test, result, labelX, labelY, background } = this.props.data;

    return (
      <div className="interface-matrix-continer w-100 d-flex flex-column">
        <h3 className="interface-matrix-title t-center">{ title }</h3>
        { test ? <h3 className="interface-matrix-title d-none d-lg-block mt-1 mt-md-3 ml-2 ml-md-4">Test: <span className="t-brand">{ test }</span></h3> : null }
        { result ? <h3 className="interface-matrix-title d-none d-lg-block ml-2 ml-md-4">Result: <span className="t-brand">{ result }</span></h3> : null }
        <div className="interface-matrix-wrapper pos-relative">
          <div className="interface-matrix-axis x-axis pos-absolute pos-bottom w-100 pl-1 pl-md-4 t-center">
            <h3 className="axis-label x-axis-label m-0">{ labelX }</h3>
          </div>
          <div className="interface-matrix-axis y-axis pos-absolute pos-left h-100 pt-1 pt-md-4 t-center">
            <h3 className="axis-label y-axis-label m-0">{ labelY }</h3>
          </div>
          <img src={ background } alt={ title } className="matrix-bg pos-absolute pos-right p-1 p-md-3" />
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
