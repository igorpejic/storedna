import React from 'react'
import Intro from '../components/Intro.js'
import Section from '../components/Section.js'
import renderTemplate from '../templates.js'
import { getFooterItem } from '../utils.js'

const ArticlePage = ({match}) => {
  const article = getFooterItem(match.params.articleId)
  const { html, title, subtitle, illustration } = article;

  return (
    <div className="page">
      <Intro
        title={ title }
        subtitle={ subtitle }
        illustration={ illustration } />
      <Section className="section--template scroll-1" applyOverlay={false}>
        { renderTemplate(html) }
      </Section>
    </div>
  )
}

export default ArticlePage;
