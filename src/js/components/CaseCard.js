import React from 'react';

const CaseCard = ({ props }) => {
  const { client, metric, result, isDark } = props;

  return (
    <div className="case-card col-12 col-sm-6 p-2">
      <div className='case-card__wrapper p-5 t-1 t-center h-100 d-flex flex-column justify-content-between'>
        <h1 className='case-card__result mb-0'>{ result }</h1>
        <h1 className='case-card__metric'>{ metric }</h1>
        <p className='mb-0 mx-auto w-75'>{ client }</p>
      </div>
    </div>
  );
}

export default CaseCard;
