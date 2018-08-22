import React from 'react';
import Epub from '../components/Epub.js';
import { getFooterItem } from '../utils.js'

const EpubPage = ({match}) => {
  const props = getFooterItem(match.params.downloadId)

  return (
    <div className="page page--epub">
      <Epub btnLabel="Download" { ...props } />
    </div>
  )
}

export default EpubPage;
