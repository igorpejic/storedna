import React from 'react';
import PropTypes from 'prop-types';

export default class KnowledgeCenter extends React.PureComponent {
  renderCards() {
    return (
      this.props.data.history.map((item, index) => {
        return(
          <div key={ index } className="card-v col-12 col-sm-6 col-md-4 d-inline-flex flex-column p-1">
            <div className="bg-white card">
              <p className="px-3 py-2 t-2 t-white bg-brand mb-1">{ item.heading }</p>
              <p className="px-3 mb-1">{ item.description }</p>
              <p className="px-3 py-2 t-6 t-brand">Learn more</p>
            </div>
          </div>
        )
      })
    )
  }

  render() {
    const { heading, description, image } = this.props.data;

    return (
      <div className={ `interface-body knowledge-center px-5 pt-4 bg-grey w-100 h-100` }>
        <p className="t-2 t-bold mb-1">Most recent</p>
        <div className="card card-h d-flex mb-4 bg-white">
          <img className="card-image" src={ image } alt="store"/>
          <div className="px-4 py-3">
            <p className="t-2 t-bold">{ heading }</p>
            <p className="mb-1">{ description }</p>
            <p className="t-6 t-brand">Learn more</p>
          </div>
        </div>
        <div className="search-bar bg-white w-100 p-2 mb-3 d-flex">
          <img className="card-image" src="/assets/svg/search.svg" alt="search icon" />
          <div className="pl-2 search-label">Search the knowledge center</div>
        </div>
        <div className="cards-wrapper container">
          <div className="row">
            { this.renderCards() }
          </div>
        </div>
      </div>
    );
  }
}

KnowledgeCenter.propTypes = {
  data: PropTypes.object.isRequired,
};
