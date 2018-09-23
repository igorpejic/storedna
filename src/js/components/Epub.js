import React from 'react';
import PropTypes from 'prop-types'
import Section from './Section';
import ButtonForm from './ButtonForm';
import Button from './Button';

const Epub = ({ title, description, image, pdf, blogUrl, btnLabel, showImage }) =>
  <Section className="section--epub d-flex" applyOverlay={ false } >
      <div className={ `epub-wrapper w-100 row${showImage ? '' : ' no_image'}` }>
        { showImage &&
            <div
              className='d-block epub-image-container'
              style={{ backgroundImage: 'url("/assets/svg/illustrations/ipad.svg")' }}>
              <img alt={ title } src={ image } />
            </div>
        }
        <div className={ `epub-text-container col-12${showImage ? ' col-sm-5 mt-lg-4' : ''}` }>
          <h1 className="heading p-0 mb-4">{ title }</h1>
          { typeof description === "string" ?
            <p className="mb-4 t-2">{ description }</p> : description
          }
          <div className="d-flex-inline">
            <ButtonForm
              initialLabel={ btnLabel }
              successLabel="Thank you!"
              label="Download"
              btnColor="black"
              kind={ pdf }
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
  image: PropTypes.string,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  blogUrl: PropTypes.string,
  btnLabel: PropTypes.string,
  showImage: PropTypes.bool,
}

Epub.defaultProps = {
  btnLabel: 'Download',
  image: '',
  showImage: true,
  description: null,
  blogUrl: null,
}

export default Epub
