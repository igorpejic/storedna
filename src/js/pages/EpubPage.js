import React from 'react';
import Epub from '../components/Epub.js';
import { getFooterItem } from '../utils.js'

const EpubPage = ({ match }) => {
  const props = getFooterItem(match.params.downloadId)

  return (
    <div className="page page--epub o-hidden">
      <div className='pos-relative w-100'>
        <img
          src='/assets/svg/illustrations/workspace.svg'
          alt='illustration'
          className='epub__illustration' />
        <div className='pos-absolute w-100 h-100 pos-top bg-blue' style={ { opacity: '0.25'} } />
      </div>
      <Epub showImage={ false } btnLabel="Download" { ...props } />
      <hr />
    </div>
  )
}

export default EpubPage;
