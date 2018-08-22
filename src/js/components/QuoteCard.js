import React from 'react';
import ButtonForm from './ButtonForm';

const QuoteCard = ({ props }) => {
  const { name, logo, quote, credentials, pdf } = props;

  return (
    <div className="col-12 col-sm-6 p-2">
      <div
        className="p-4 pt-5 bg-grey t-center h-100 d-flex flex-column justify-content-center"
        style={{ minHeight: '25vw' }}>
        <img className="mb-3 mx-auto w-50" alt={`${name} logo`} src={logo} height="50px"/>
        <p className="t-center">
          { quote }
        </p>
        { credentials && <p className="t-5 mt-3 mt-lg-4">{ credentials }</p> }
        { pdf &&
          <div className="mt-3 mt-lg-4">
            <ButtonForm
              initialLabel="Download Case Study"
              successLabel="Thank you!"
              label="Download"
              showArrow={ true }
              btnColor="brand"
              fileName={ pdf }
              kind="case-studies"
              href={ `/assets/pdf/${pdf}` } />
          </div>
        }
      </div>
    </div>
  );
}

export default QuoteCard;
