import React from 'react';
import Epub from '../components/Epub.js';
import { getFooterItem } from '../utils.js'

const EpubPage = ({match}) => {
  const article = getFooterItem(match.params.downloadId)
  console.log(getFooterItem(match.params.downloadId))
  const { title, description, image, pdf, blogUrl } = article;

  return (
    <div className="page">
      <Epub { ...article } />
    </div>
  )
}

export default EpubPage;
