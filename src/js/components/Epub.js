import React from 'react';
import Section from './Section';
import ButtonForm from './ButtonForm';
import Button from './Button';

const Epub = ({ title, description, image, pdf, blogUrl }) =>
  <Section className="section--epub d-flex bg-blue-light" applyOverlay={ false }>
      <img className="d-none d-sm-inline-block" height="350" alt={ title } src={ image } />
      <div className="mx-sm-6">
        <h1 className="heading t-left p-0 mb-4">{ title }</h1>
        { description }
        <div>
          <ButtonForm
            initialLabel="Download Free E-Book"
            successLabel="Thank you!"
            label="Download"
            btnColor="black"
            showArrow={ true }
            fileName={ pdf }
            href={ `/assets/pdf/${pdf}` } />
          { blogUrl && <Button label="Read more" href={ blogUrl } /> }
        </div>
      </div>
  </Section>

Epub.defaultProps = {
  title: 'How to increase shopability and profitability of your fleet?',
  description: [
    <ul className="list-unstyled t-2 t-bold mb-3">
      <li>What is the purpose of stores in the future?</li>
      <li>How do I run experiments and scale them across the fleet?</li>
      <li>How do I transform my current store fleet?</li>
    </ul>,
    <p className="mb-4 t-2">
      Peek inside and learn how leading companies like Ahold, IKEA, Adidas, and Vodafone are thinking about creating the most engaging shopping experiences.
    </p>
  ] ,
  image: 'assets/images/study_cover.png',
  pdf: 'Monolith_Deloitte_Store_Of_The_Future.pdf',
}

export default Epub
