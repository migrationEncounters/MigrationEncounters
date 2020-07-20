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
        <h2>"Acknowledging that this part of society exists and that these people are human and have dreams and hopes is very important in order to create a more equal society"</h2>
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
);

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
};

export default Header;