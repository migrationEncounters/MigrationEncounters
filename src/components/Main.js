// Import Libraries
import React from 'react'
import PropTypes from 'prop-types'

// Import assets
import pic01 from '../images/pic01.jpg'

// Import sub-components 
import TeamMembers from './aboutUs/teamMembers'
import Action from './action/action'
import InTheNews from './inTheNews/inTheNews'

class Main extends React.Component {
  render() {
    let close = ( // X on the upper right corner
      <div
        className="close"
        onClick={() => {this.props.onCloseArticle()}}
      />
    )

    return (
      <div
        ref={this.props.setWrapperRef} // reference from the home page, used for the pop up windows
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }} // switches the display to make things visible or not, change to render and not render
      >

        <InTheNews
          onCloseArticle={this.props.onCloseArticle}
          article={this.props.article}
          articleTimeout={this.props.articleTimeout}
        />
        
        <Action
          onCloseArticle={this.props.onCloseArticle}
          article={this.props.article}
          articleTimeout={this.props.articleTimeout}
        />

        <TeamMembers
          onCloseArticle={this.props.onCloseArticle}
          article={this.props.article}
          articleTimeout={this.props.articleTimeout}
        />
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
