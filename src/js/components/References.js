import React from 'react';
import ButtonForm from './ButtonForm';
import Epub from './Epub';
import QuoteCard from './QuoteCard';
import CaseCard from './CaseCard';
import { quotes, cases, partners } from '../data/references.json'

const References = () => {
  const renderCases = () => {
    return cases.map((_case) => <CaseCard key={ _case.client } props={ _case } />);
  };

  const renderQuotes = () => {
    return quotes.map((quote) => <QuoteCard key={ quote.name } props={ quote } />);
  };

  const renderLogos = () => {
    return partners.map((partner) =>
      <div className="px-2 px-md-4 w-25 ">
        <img
          key={partner}
          alt={ partner }
          src={ `assets/svg/logos/${partner}.svg`}
          width="100%" />
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row m-0">
        { renderQuotes() }
        { renderCases() }
        <div className="p-2 w-100">
          <Epub />
          <div className="bg-blue-light px-2 py-4 px-md-6 pb-md-6 pt-md-4" applyOverlay={ false }>
            <h1 className="heading mb-md-5 t-center t-normal">
              Working together to transform retail
            </h1>
            <div className="d-flex align-items-center px-lg-6">
              { renderLogos() }
            </div>
          </div>
        </div>
        <div className="p-2 w-100">
          <div className="p-4 p-md-6 bg-blue t-center">
            <h1 className="heading t-center t-white t-normal mb-md-5">
              Learn more how leading retailers are using Store dna to increase their profitability.
            </h1>
            <ButtonForm
              initialLabel="Ask for Case Studies"
              successLabel="Request sent"
              label="Send" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default References;
