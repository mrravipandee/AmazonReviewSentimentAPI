from flask import Flask, request, jsonify
from scraper import get_product_sentiment

app = Flask(__name__)

@app.route('/')
def hello():
    return 'Welcome to the Product Sentiment API'

@app.route('/productURL', methods=['GET'])
def scrape_product():
    # Get the 'url' query parameter
    url = request.args.get('url')

    # If no URL is provided, return a 400 error
    if not url:
        return jsonify({"error": "URL parameter is missing"}), 400

    try:
        # Scrape product data and get sentiment
        result = get_product_sentiment(url)

        # If the result is None (failed scraping), return a 500 error
        if not result:
            return jsonify({"error": "Failed to scrape the product data"}), 500

        # Return the scraped result in JSON format
        return jsonify(result)

    except Exception as e:
        # Catch any exception and return a 500 error with the error message
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    # Ensure the app is running in debug mode for development
    app.run(debug=True)
