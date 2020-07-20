import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../assets/scss/main.scss'

const Layout = ({ children, location }) => {

  let content;

  if (location && location.pathname === '/') {
    content = (
      <div>
        {children}
      </div>
    )
  } else {
    // for pages other than the home page
    content = (
      <div id="wrapper" className="page">
        <div>
          {children}
        </div>
      </div>
    )
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <Fragment>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'Migration Encounters description', content: 'Sample content ME' }, // to change
              { name: 'keywords ME', content: 'sample, something Migration Encounters' },
            ]}
          >
            <html lang="en" />
          </Helmet>
          {content}
        </Fragment>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout