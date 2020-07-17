// Import libraries
import React from 'react'
import { Link } from 'gatsby'

// Import components
import Layout from '../components/layout'


const NotFoundPage = () => (
  <Layout>
    <h1>Migration Encounters</h1>
    <h2>NOT FOUND</h2>
    <p>You just hit a route that doesn&#39;t exist...</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default NotFoundPage
