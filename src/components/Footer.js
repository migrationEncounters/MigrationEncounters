// Import libraries
import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
  <footer id="footer" style={props.timeout ? {display: 'none'} : {}} >
		<ul className="icons">
			<li>
				<a
					href="/"
					className="icon fa-twitter"
				>
					<span className="label">Twitter</span>
				</a>
			</li>
			<li>
				<a 
					href="/" 
					className="icon fa-facebook"
				>
					<span className="label">Facebook</span>
				</a>
			</li>
			<li>
				<a 
					href="/" 
					className="icon fa-instagram"
				>
					<span className="label">Instagram</span>
				</a>
			</li>
		</ul>
		
    <p className="copyright">
			&copy; Disclaimer <a href="/">Link</a>. 
			Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a>. 
			Using the base starter template by <a href="https://html5up.net">html5</a>
		</p>
  </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
