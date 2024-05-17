import React from 'react';
import BannerImage from '../assets/welcome-banner.jpg';
import BImage from '../assets/new-banner.jpg';
import '../styles/About.css';

function About() {
  return (
    <div className='about' style={{ backgroundImage: `url(${BImage})`}}>
      <div className='aboutTop' style={{ backgroundImage: `url(${BannerImage})`}}>
      </div>
      <div className='aboutBottom' style={{ backgroundImage: `url(${BImage})`}}>
        <h1>ABOUT US</h1>
        <p>
          Welcome to sentriX! Our mission is to provide users with a powerful yet simple tool for understanding the sentiment behind any text. Whether you're analyzing customer feedback, social media posts, or news articles, our tool helps you uncover the emotional tone and context within the text.
        </p>
        <h2>OUR VISION</h2>
        <p>
          We believe in the power of sentiment analysis to drive better decision-making and understanding in a wide range of contexts. By harnessing the latest in natural language processing technology, we aim to empower individuals and businesses with actionable insights derived from textual data.
        </p>
        <h2>OUR TEAM</h2>
        <p>
          Our team consists of passionate individuals dedicated to the fields of artificial intelligence and natural language processing. With expertise in machine learning, data science, and software development, we're committed to delivering a seamless user experience and accurate sentiment analysis results.
        </p>
      </div>
    </div>
  );
}

export default About;
