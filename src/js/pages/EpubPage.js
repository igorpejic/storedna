import React from 'react';
import Epub from '../components/Epub.js';
import { getFooterItem } from '../utils.js'

const EpubPage = ({match}) => {
  const props = getFooterItem(match.params.downloadId)

  return (
    <div className="page">
      <Epub { ...props } />
    </div>
  )
}

export default EpubPage;
