// Import Libraries
import React, { Fragment } from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'gatsby'

// Import assets
import pic01 from '../../images/pic01.jpg'

const dataObject = {
  section: "About us",
  description: "Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesen eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquamerat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex ollis mattis lorem ipsum dolor sit amet.",
  members: [
    {
      name: "Anne Preston",
      portrait: "", // url here
      bio: "Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesen eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquamerat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex ollis mattis lorem ipsum dolor sit amet.",
      link: "/",
      linkLabel: "A link to external/personal site"
    },
    {
      name: "Anita Isaacs",
      portrait: "", // url here
      bio: "Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesen eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquamerat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex ollis mattis lorem ipsum dolor sit amet.",
      link: "/",
      linkLabel: "A link to external/personal site"
    },
    {
      name: "Patrick Montero",
      portrait: "", // url here
      bio: "Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesen eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquamerat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex ollis mattis lorem ipsum dolor sit amet.",
      link: "/",
      linkLabel: "A link to external/personal site"
    },
    {
      name: "Luis Aguilar",
      portrait: "", // url here
      bio: "Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesen eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquamerat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex ollis mattis lorem ipsum dolor sit amet.",
      link: "/",
      linkLabel: "A link to external/personal site"
    },
    {
      name: "Claudio Gage",
      portrait: "", // url here
      bio: "Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesen eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquamerat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex ollis mattis lorem ipsum dolor sit amet.",
      link: "/",
      linkLabel: "A link to external/personal site"
    },
  ]
};

const TeamMembers = props => {
  // X on the upper right corner
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
    <article // this should be a section I need to tweak it for section, currently expecting article
      id="about-us"
      className={`${props.article === 'about-us' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`}
      style={{ display: 'none' }} // check to see if we can dynamically render
    >
      {close()}
      <h2 className="major" >
        {dataObject.section}
      </h2>
      <p>
        {dataObject.description}
      </p>

      {dataObject.members.map( (member, index) =>
        <Fragment key={index}>
          <h3 className="major">
            {member.name}
          </h3>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
          {member.bio}
          </p>
          <div style={{marginBottom: "2rem", display: "flex", justifyContent: "flex-end"}}>
            <a 
              href={member.link}
            >
              {member.linkLabel}
            </a>
          </div>
        </Fragment>
      )}

      <h3 className="major">
        Haverford College Team Members
      </h3>
      <p>
      Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesen eleifend dignissim arcu, at eleifend sapien imperdiet ac.
      Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesen eleifend dignissim arcu, at eleifend sapien imperdiet ac.
      </p>
      <div style={{marginBottom: "2rem", display: "flex", justifyContent: "flex-end"}}>
        <Link 
          to="/haverford_members"
        >
          View Haverford College team members
        </Link>
      </div>

    </article>
  )
}

export default TeamMembers;