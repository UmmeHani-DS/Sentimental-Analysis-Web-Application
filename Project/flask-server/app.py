from flask import Flask, request, jsonify, send_from_directory
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
import nltk
from nltk.corpus import stopwords
import os

nltk.download('stopwords')

app = Flask(__name__)

@app.route('/tool')
def index():
    # Serve the Tool.js file
    return send_from_directory(os.path.join(app.root_path, 'static'), 'Tool.js')

@app.route('/tool', methods=['POST'])
def analyze_sentiment():
    stop_words = set(stopwords.words('english'))

    # Get text input from request
    text = request.form['text'].lower()

    # Remove digits
    text_final = ''.join(c for c in text if not c.isdigit())

    # Remove stopwords
    processed_text = ' '.join([word for word in text_final.split() if word not in stop_words])

    # Perform sentiment analysis
    analyzer = SentimentIntensityAnalyzer()
    sentiment_scores = analyzer.polarity_scores(text=processed_text)
    compound_score = round((1 + sentiment_scores['compound']) / 2, 2) * 100

    # Return sentiment analysis results as JSON
    return jsonify({
        'compound': compound_score,
        'positive': round(sentiment_scores['pos'] * 100, 2),
        'negative': round(sentiment_scores['neg'] * 100, 2),
        'neutral': round(sentiment_scores['neu'] * 100, 2)
    })

if __name__ == "__main__":
    app.run(debug=True, port=8080)
