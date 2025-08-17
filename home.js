import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Similar Babyish Loris</title>
        <meta property="og:title" content="Similar Babyish Loris" />
      </Helmet>
    </div>
  )
}

export default Home
