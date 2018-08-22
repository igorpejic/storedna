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
      <div key={partner} className="partner-logo mx-2 mx-md-4">
        <img alt={ partner } src={ `assets/svg/logos/${partner}.svg`} />
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
          <div
            className="px-2 py-4 px-md-6 pb-md-6 pt-md-4"
            style={{ backgroundColor: "#cbe8ec"}}>
            <h1 className="heading mb-md-5 t-center t-normal">
              Working together to transform retail
            </h1>
            <div
              className="d-flex align-items-center justify-content-center px-lg-6">
              {/* style={{ maxWidth: "800px", margin: "0 auto"}}> */}
              { renderLogos() }
            </div>
          </div>
        </div>
        <div className="p-2 w-100">
          <div className="p-4 p-md-6 bg-blue t-center">
            <h1 className="heading t-center t-white t-normal mb-md-5">
              Learn more how leading retailers are using StoreDNA to increase their profitability.
            </h1>
            <ButtonForm
              initialLabel="Ask for Case Studies"
              successLabel="Request sent"
              kind="case-studies"
              label="Send" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default References;
