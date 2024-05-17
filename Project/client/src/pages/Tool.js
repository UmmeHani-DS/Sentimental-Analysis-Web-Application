import React, { useState } from 'react';
import '../styles/Tool.css';
import BannerImage from '../assets/new-banner.jpg';

function Tool() {
  const [text, setText] = useState('');
  const [sentiment, setSentiment] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send text to Flask API endpoint for sentiment analysis

    const response = await fetch('/tool', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({ text })
    });

    if (response.ok) {
      const data = await response.json();
      setSentiment(data);
    } else {
      console.error('Failed to analyze sentiment');
    }
  };

  const handleTextAreaClick = () => {
    setText('');
    setSentiment(null);
  };

  return (
    <div className="tool-container" style={{ backgroundImage: `url(${BannerImage})`}}>
      <h1>Sentiment Analysis Tool</h1>
      <form className="tool-form" onSubmit={handleSubmit}>
        <textarea
          rows="4"
          placeholder="Enter text for sentiment analysis..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onClick={handleTextAreaClick} 
        ></textarea>
        <br />
        <button type="submit">ANALYZE TEXT</button>
      </form>
      {sentiment && (
        <div className='sentiment-info'>
          <h2>The sentiment is : </h2>
          <p>Compound Score: {sentiment.compound} % </p>
          <p>Positive : {sentiment.positive} %</p>
          <p>Negative : {sentiment.negative} %</p>
          <p>Neutral : {sentiment.neutral} %</p>
        </div>
      )}
    </div>
  );
}

export default Tool;
