import React from 'react';
import PropTypes from 'prop-types'
import Section from './Section';
import ButtonForm from './ButtonForm';
import Button from './Button';

const Epub = ({ title, description, image, pdf, blogUrl, btnLabel, showImageOnMobile }) =>
  <Section className="section--epub d-flex bg-blue-light" applyOverlay={ false } >
      <div
        className="epub-wrapper w-100 row"
        style={{ backgroundImage: 'url("/assets/svg/illustrations/coffee.svg")' }}>
        <div
          className={ `${showImageOnMobile ? 'd-block' : 'd-none d-sm-block'} epub-image-container` }
          style={{ backgroundImage: 'url("/assets/svg/illustrations/ipad.svg")' }}>
          <img alt={ title } src={ image } />
        </div>
        <div className="epub-text-container col-12 col-sm-5 mt-lg-4">
          <h1 className="heading t-left p-0 mb-4">{ title }</h1>
          { typeof description === "string" ?
            <p className="mb-4 t-2">{ description }</p> : description
          }
          <div className="d-flex">
            <ButtonForm
              initialLabel={ btnLabel }
              successLabel="Thank you!"
              label="Download"
              btnColor="black"
              kind="deloitte-study"
              showArrow={ true }
              fileName={ pdf }
              href={ `/assets/pdf/${pdf}` } />
            { blogUrl &&
              <Button
                btnColor="black"
                classAdditions="ml-3"
                label="Read more"
                href={ blogUrl } />
            }
          </div>
        </div>
      </div>
  </Section>

Epub.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  blogUrl: PropTypes.string,
  btnLabel: PropTypes.string,
  showImageOnMobile: PropTypes.bool,
}

Epub.defaultProps = {
  btnLabel: 'Download',
  showImageOnMobile: false,
  description: null,
  blogUrl: null,
}

export default Epub
