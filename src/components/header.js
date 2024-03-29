// Import libraries
import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      {/* <span className="icon fa-diamond"></span> */}
      <h1>Migration Encounters</h1>
    </div>

    <div className="content">
      <div className="inner">
        <h2>"An epic quote of legendary proportions will go right here"</h2>
      </div>
    </div>
    
    <nav>
      <ul>
        <li>
          <button
            onClick={() => navigate("/stories")}
          >
            Stories
          </button>
        </li>
        <li>
          <button
            onClick={() => navigate("/research")}
          >
            Research
          </button>
        </li>
        <li>
          <button
            onClick={() => navigate("/commentary")}
          >
            Commentary
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('in-the-news')
            }}
          >
            In the news
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('action')
            }}
          >
            Action
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about-us')
            }}
          >
            About us
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header