// Import libraries
import React from 'react'
import PropTypes from 'prop-types'

// Import components 
import TeamMembers from './aboutUs/teamMembers'
import Action from './action/action'
import InTheNews from './inTheNews/inTheNews'

const Main = props => {
  return (
    <div
      ref={props.setWrapperRef} // reference from the home page, used for the pop up windows
      id="main"
      style={props.timeout ? { display: 'flex' } : { display: 'none' }} // switches the display to make things visible or not, change to render and not render
    >
      <InTheNews
        onCloseArticle={props.onCloseArticle}
        article={props.article}
        articleTimeout={props.articleTimeout}
      />
      <Action
        onCloseArticle={props.onCloseArticle}
        article={props.article}
        articleTimeout={props.articleTimeout}
      />
      <TeamMembers
        onCloseArticle={props.onCloseArticle}
        article={props.article}
        articleTimeout={props.articleTimeout}
      />
    </div>
  )
};

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
};

export default Main;