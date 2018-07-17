import React from 'react';
import PropTypes from 'prop-types';
import Chart from './Chart.js'
import { categoryItem, locationPin } from '../../svgInline.js'

export default class ActionBoard extends React.PureComponent {
  componentDidMount() {
    setTimeout(() => {
      const el = document.querySelector('.test-toggle-after');
      if (el) { el.click() };
    }, 100);
  }

  toggleBeforeAfter = (e) => {
    if (!e.target.classList.contains('active')) {
      document.querySelector('.actionboard-item').classList.toggle('after');
      document.querySelectorAll('h6.test-toggle-btn, h6.test-toggle-middle').forEach((btn) => btn.classList.toggle('active'));
    }
  };



  locationPins() {
    const { stores } = this.props.data;

    return (
      <div className="actionboard-item store-items">
        { stores.map((store) => {
          return (
            <div key={ store } className={ `store-item ${store} pos-absolute d-flex flex-column align-items-center` }>
              { locationPin(store) }
              <h6 className="store-item-label mb-0">{ store }</h6>
            </div>
          );
        }) }
      </div>
    );
  }

  getChartEl() {
    return (
      <div className="pos-relative w-100 h-100 p-2">
        { this.props.data.name === 'test' ? categoryItem() : this.locationPins() }
      </div>
    );
  }

  render() {
    const { data } = this.props;

    return (
      <div className="interface-body actionboard mx-1 mx-md-5 py-1 py-md-4">
        <Chart
          data={ data }
          chartEl={ this.getChartEl() } />
        <div className="test-toggle pos-relative pos-h-center mt-md-2 d-flex justify-content-between bg-grey">
          <h6 className="test-toggle-btn test-toggle-btn-before mb-0 p-1 p-sm-2 active" onClick={ this.toggleBeforeAfter }>{ data.before }</h6>
          <h6 className="d-none d-sm-inline-block test-toggle-middle mb-0 p-2 pr-2 active">{`<<< before`}</h6>
          <h6 className="d-none d-sm-inline-block test-toggle-middle mb-0 p-2 pl-2 ">{`after >>>`}</h6>
          <h6 className="test-toggle-btn test-toggle-after mb-0 p-1 p-sm-2" onClick={ this.toggleBeforeAfter }>{ data.after }</h6>
        </div>
      </div>
    );
  }
}

ActionBoard.propTypes = {
  data: PropTypes.object.isRequired,
};
