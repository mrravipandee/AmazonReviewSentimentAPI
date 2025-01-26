
# AmazonReviewSentimentAPI

AmazonReviewSentimentAPI is a Flask-based API that scrapes product reviews from Amazon, performs sentiment analysis on the reviews, and returns the results as a JSON response. The API provides sentiment data such as Positive Review Percentage, Overall Rating, and a Recommendation based on the analysis.

## Features
- Scrape Amazon product reviews.
- Perform sentiment analysis on reviews.
- Return sentiment data including:
  - Positive Review Percentage
  - Overall Rating
  - Recommendation (Highly recommended, Recommended, or Not recommended).
- Return data in JSON format.

## Requirements
- Python 3.x
- Flask
- BeautifulSoup
- Requests
- TextBlob

## Installation

### 1. Clone the repository
```bash
git clone https://github.com/mrravipandee/AmazonReviewSentimentAPI.git
cd AmazonReviewSentimentAPI
```

### 2. Create and activate a virtual environment
```bash
python -m venv .venv
source .venv/bin/activate  # On macOS/Linux
# or
.venv\Scripts\activate  # On Windows
```

### 3. Install the required dependencies
```bash
pip install -r requirements.txt
```

### 4. Run the Flask App
```bash
python app.py
```

The API will start running at `http://127.0.0.1:5000/`.

## API Endpoints

### 1. **GET /**
#### Description:
Returns a welcome message.

#### Example:
```bash
GET http://127.0.0.1:5000/
```

#### Response:
```json
{
  "message": "Welcome"
}
```

### 2. **GET /productURL**
#### Description:
Scrapes product reviews from Amazon based on the provided product URL and performs sentiment analysis.

#### Parameters:
- `url`: The Amazon product URL you want to analyze.

#### Example:
```bash
GET http://127.0.0.1:5000/productURL?url=https://www.amazon.com/dp/B08J5F3G18
```

#### Response:
```json
{
  "Positive Review Percentage": 75.00,
  "Overall Rating": 4.0,
  "Recommendation": "Highly recommended product for purchase."
}
```

### Error Handling

- **Missing URL Parameter**: If the URL parameter is missing, the API will respond with an error message.
  
  Example:
  ```json
  {
    "error": "URL parameter is missing"
  }
  ```

- **Failed to Scrape Data**: If scraping the product data fails, the API will respond with an error message.
  
  Example:
  ```json
  {
    "error": "Failed to scrape the product data"
  }
  ```

### 3. **GET /health**
#### Description:
Check the health of the API.

#### Example:
```bash
GET http://127.0.0.1:5000/health
```

#### Response:
```json
{
  "status": "API is running"
}
```

## Usage

Once the server is running, you can send a GET request to the `/productURL` endpoint with a valid Amazon product URL to receive the sentiment analysis of the reviews.

Example request using `curl`:
```bash
curl "http://127.0.0.1:5000/productURL?url=https://www.amazon.com/dp/B08J5F3G18"
```

The response will contain the sentiment data in JSON format.

## Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests for improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries, feel free to contact me at [imravipanday@gmail.com].
