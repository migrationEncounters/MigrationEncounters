// Import libraries
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

// Import styles
import '../assets/scss/main.scss'

const Layout = props => {
  const { children, location } = props;
  return (
    <Fragment>
      <Helmet
        title="Migration Encounters"
        meta={[
          { name: 'Migration Encounters description', content: 'Sample content ME' }, // to change
          { name: 'keywords ME', content: 'sample, something Migration Encounters' },
        ]}
      >
        <html lang="en" />
      </Helmet>
      {location && location.pathname === '/' ?
        <div>
          {children}
        </div>
      : // below is where I wanna add the page only menu bar
        <div id="wrapper" className="page">
          <div>
            {children}
          </div>
        </div>
      }
    </Fragment>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;