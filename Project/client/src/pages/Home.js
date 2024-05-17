import React from 'react'
import { Link } from 'react-router-dom';
import BannerImage from '../assets/welcome-banner.jpg';
import '../styles/Home.css';

function Home() {
  return (
    <div>
      <div className='home' style={{ backgroundImage: `url(${BannerImage})`}}>
        <div className='headerContainer' >
            <h1> Explore sentriX </h1>
            <p> Analyze Sentiment, Uncover Insights.</p>
            <Link to = "/tool"> 
              <button> TRY NOW </button>
            </Link>
           
        </div>

      </div>
    </div>
  )
}

export default Home
