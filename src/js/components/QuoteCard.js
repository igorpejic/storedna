import React from 'react';
import ButtonForm from './ButtonForm';

const QuoteCard = ({ props }) => {
  const { name, logo, quote, credentials, pdf } = props;

  return (
    <div className="col-12 col-sm-6 p-2">
      <div
        className="p-4 p-lg-5 bg-grey t-center h-100 d-flex flex-column justify-content-center"
        style={{ minHeight: '25vw' }}>
        <div className="mb-auto">
          <img className="mb-3 mx-auto w-50" alt={`${name} logo`} src={logo} style={{maxHeight: '50px'}}/>
        </div>
        <p className="t-center mx-auto" style={{ maxWidth: '550px' }}>
          { quote }
        </p>
        { credentials && <p className="t-5 mb-3 mb-lg-4">{ credentials }</p> }
        { pdf &&
          <div>
            <ButtonForm
              initialLabel="Download Case Study"
              successLabel="Thank you!"
              label="Download"
              showArrow={ true }
              btnStyle="brand"
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
