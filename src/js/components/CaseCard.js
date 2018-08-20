import React from 'react';

const CaseCard = ({ props }) => {
  const { client, metric, result, image } = props;

  return (
    <div className="case-card col-12 col-sm-6 p-2">
      <div className='case-card__wrapper pl-4 pl-xl-5 t-1 h-100 d-flex'>
        <div className="d-flex pt-5 pb-6 flex-column col-7 col-xl-6 z-10" style={{ minHeight: '30vw' }}>
          <h1 className='case-card__result mb-0'>{ result }</h1>
          <h1 className='case-card__metric'>{ metric }</h1>
          <p className=''>{ client }</p>
        </div>
        <img className="pos-absolute pos-right w-50 pb-3" src={ image } alt={ client } style={{ maxHeight: '95%', minHeight: '90%' }}/>
      </div>
    </div>
  );
}

export default CaseCard;
