// Import Libraries
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const dataObject = {
  section: "In the news",
  description: "A lifetime of working with nuclear power has left me with a healthy green glow…and left me as impotent as a Nevada boxing commissioner. Oh, a *sarcasm* detector. Oh, that's a *really* useful invention!",
  links: [
    {
      title: "Deporting the American Dream",
      link: "https://www.nytimes.com/2018/07/09/opinion/mexico-migrants-deportation.html",
      linkLabel: "Read opinion piece"
    },
    {
      title: "The Immigrants No One Wants",
      link: "https://www.nytimes.com/2017/06/22/opinion/guatemala-immigrants.html?auth=login-google",
      linkLabel: "Read opinion piece"
    },
    {
      title: "What Trump Gets Wrong About Central American Aid",
      link: "https://www.nytimes.com/2019/04/01/opinion/trump-central-america-aid.html",
      linkLabel: "Read opinion piece"
    },
    {
      title: "College Made Them Feel Equal. The Virus Exposed How Unequal Their Lives Are.",
      link: "https://www.nytimes.com/2020/04/04/us/politics/coronavirus-zoom-college-classes.html",
      linkLabel: "Read article"
    },
    {
      title: "Bursting College Bubble",
      link: "https://www.nytimes.com/2020/05/05/podcasts/the-daily/college-kids-coronavirus.html",
      linkLabel: "Listen to podcast"
    },
  ]
}

const InTheNews = props => {
  const close = () => 
    <div
      role="button"
      aria-label="Close Section"
      tabIndex = {0}
      className="close"
      onKeyDown={() => {props.onCloseArticle()}}
      onClick={() => {props.onCloseArticle()}}
    />;

  return (
    <article
      id="in-the-news"
      className={`${props.article === 'in-the-news' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`}
      style={{ display: 'none' }}
    >
      {close()}
      <h2 className="major" >
        {dataObject.section}
      </h2>
      <p>
        {dataObject.description}
      </p>
      {dataObject.links.map((article, index) => {
        if(article.title.length > 48) {
          return (
            <Fragment key={index}>
              <h3 
                className="major"
                style={{textOverflow: "ellipsis", whiteSpace: "nowrap", width: "auto", overflow: "hidden"}}
              >
                {article.title}
              </h3>
              <a style={{display: "inline-block", marginBottom: "2rem"}}
                href={article.link}
              >
                {article.linkLabel}
              </a>
            </Fragment>
          )
        } else {
          return (
            <Fragment key={index}>
              <h3 className="major">
                {article.title}
              </h3>
              <a style={{display: "inline-block", marginBottom: "2rem"}}
                href={article.link}
              >
                {article.linkLabel}
              </a>
            </Fragment>
          )
        }
      })}
    </article>
  )
}

InTheNews.propTypes = {
  onCloseArticle: PropTypes.func.isRequired,
  article: PropTypes.string.isRequired,
  articleTimeout: PropTypes.bool.isRequired
}

export default InTheNews;