import React from 'react';
import Section from './Section';
import ButtonForm from './ButtonForm';

export default class Epub extends React.PureComponent {
  render() {
    return (
      <Section className="section--epub d-flex bg-grey" applyOverlay={ false }>
          <img className="d-none d-sm-inline-block" height="350" alt="Deloitte retail study" src="assets/images/study_cover.png" />
          <div className="mx-sm-6">
            <h1 className="heading t-left p-0 mb-4">How to increase shopability and profitability of your fleet?</h1>
            <ul className="list-unstyled t-2 t-bold mb-3">
              <li>What is the purpose of stores in the future?</li>
              <li>How do I run experiments and scale them across the fleet?</li>
              <li>How do I transform my current store fleet?</li>
            </ul>
            <p className="mb-4 t-2">
              Peek inside and learn how leading companies like Ahold, IKEA, Adidas, and Vodafone are thinking about creating the most engaging shopping experiences.
            </p>
            <ButtonForm
              initialLabel="DOWNLOAD FREE E-BOOK"
              successLabel="THANK YOU!"
              label="DOWNLOAD"
              fileName="Monolith_Deloitte_Store_Of_The_Future.pdf"
              href="/assets/Monolith_Deloitte_Store_Of_The_Future.pdf"/>
          </div>
      </Section>
    );
  }
}
