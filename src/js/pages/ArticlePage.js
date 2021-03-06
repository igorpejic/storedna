import React from 'react'
import OurDna from '../components/templates/OurDna'
import Purpose from '../components/templates/Purpose'
import Manifesto from '../components/templates/Manifesto'
import Contact from '../components/templates/Contact'
import { getFooterItem } from '../utils.js'

const ArticlePage = ({match}) => {
  const article = getFooterItem(match.params.articleId)

  const renderTemplate = (key) => {
  	switch (key) {
  		case "our_dna": return <OurDna />;
  		case "purpose": return <Purpose />;
  		case "contact": return <Contact />;
  		case "manifesto": return <Manifesto />;
  		default: return null;
  	}
  }

  return (
    <div className="page o-hidden">
      <div className='article__illustration bg-brand-dark'>
      <img
        src='/assets/images/our_dna.png'
        alt='illustration'
        style={{objectFit: 'cover'}}
        width='100%'
        height='100%' />
      </div>
      { renderTemplate(article.href) }
    </div>
  )
}

export default ArticlePage;
