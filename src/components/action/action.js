// Import Libraries
import React from 'react'
import PropTypes from 'prop-types'

const Action = props => {
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
      id="action"
      className={`${props.article === 'action' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`}
      style={{ display: 'none' }}
    >
      {close()}
      <h2 className="major" >
        Action
      </h2>
      <p>
        A lifetime of working with nuclear power has left me with a healthy green glow…and left me as impotent as a Nevada boxing commissioner. Oh, a *sarcasm* detector. Oh, that's a *really* useful invention!
      </p>
      <h3 className="major">
        Resources
      </h3>
      <p>
        A lifetime of working with nuclear power has left me with a healthy green glow…and left me as impotent as a Nevada boxing commissioner. Oh, a *sarcasm* detector. Oh, that's a *really* useful invention!
      </p>
      <h3 className="major">
        Support
      </h3>
      <p>
        A lifetime of working with nuclear power has left me with a healthy green glow…and left me as impotent as a Nevada boxing commissioner. Oh, a *sarcasm* detector. Oh, that's a *really* useful invention!
      </p>
      <h3 className="major">
        Donate &amp; Volunteer
      </h3>
      <p>
        A lifetime of working with nuclear power has left me with a healthy green glow…and left me as impotent as a Nevada boxing commissioner. Oh, a *sarcasm* detector. Oh, that's a *really* useful invention!
      </p>
    </article>
  )
}

Action.propTypes = {
  onCloseArticle: PropTypes.func.isRequired,
  article: PropTypes.string.isRequired,
  articleTimeout: PropTypes.bool.isRequired
}

export default Action;