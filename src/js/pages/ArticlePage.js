import React from 'react'
import Intro from '../components/Intro.js'
import Section from '../components/Section.js'
import renderTemplate from '../templates.js'
import { getFooterItem } from '../utils.js'

const ArticlePage = ({match}) => {
  const article = getFooterItem(match.params.articleId)

  return (
    <div className="page">
      <Intro { ...article } />
      <Section className="section--template scroll-1" applyOverlay={false}>
        { renderTemplate(article.html) }
      </Section>
    </div>
  )
}

export default ArticlePage;