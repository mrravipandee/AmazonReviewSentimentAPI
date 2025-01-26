import requests
from bs4 import BeautifulSoup
from textblob import TextBlob


def extract_product_details(soup):
    """
    Extracts product details like name, price, image URL, description, and rating from the page.
    """
    product_name = soup.find("span", {"id": "productTitle"})
    product_name = product_name.get_text(strip=True) if product_name else "No product name available"

    price = soup.find("span", {"class": "a-price-whole"})
    price = price.get_text(strip=True) if price else "Not Available"

    img = soup.find("img", {"id": "landingImage"})
    img_url = img['src'] if img else "No image found"

    description = soup.find("div", {"id": "feature-bullets"})
    description = description.get_text(strip=True) if description else "No description available"

    rating = soup.find("span", {"class": "a-icon-alt"})
    rating = rating.get_text(strip=True) if rating else "No rating"

    return {
        "Product Name": product_name,
        "Price": price,
        "Image URL": img_url,
        "Description": description,
        "Overall Rating": rating,
    }


def extract_reviews(soup):
    """
    Extracts reviews from the Amazon product page.
    """
    reviews = []
    review_elements = soup.find_all("li", {"data-hook": "review"})
    for review in review_elements:
        review_text = review.find("span", {"data-hook": "review-body"})
        if review_text:
            reviews.append(review_text.get_text(strip=True))
    return reviews


def get_product_sentiment(url):
    """
    Scrapes product details and reviews from Amazon and analyzes sentiment.
    """
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"}
    response = requests.get(url, headers=headers)

    if response.status_code != 200:
        print(f"Failed to retrieve the webpage. Status code: {response.status_code}")
        return None

    soup = BeautifulSoup(response.content, "html.parser")

    # Extract product details and reviews
    product_details = extract_product_details(soup)
    reviews = extract_reviews(soup)

    # Analyze sentiment of reviews
    positive_reviews = [review for review in reviews if TextBlob(review).sentiment.polarity > 0]
    positive_percentage = (len(positive_reviews) / len(reviews)) * 100 if reviews else 0

    # Extract overall rating
    overall_rating = float(product_details.get("Overall Rating", 0).split()[0])

    # Provide recommendation based on positive review percentage
    if positive_percentage > 70:
        recommendation = "Highly recommended product for purchase."
    elif positive_percentage >= 50:
        recommendation = "The product is decent. Consider purchasing."
    else:
        recommendation = "The product is not recommended based on reviews."

    result = {
        "Product Name": product_details["Product Name"],
        "Price": product_details["Price"],
        "Image URL": product_details["Image URL"],
        "Description": product_details["Description"],
        "Overall Rating": overall_rating,
        "Positive Review Percentage": f"{positive_percentage:.2f}%",
        "Recommendation": recommendation,
    }

    return result
