#  Install the Python Requests library:
# `pip install requests`
import requests

def send_request():
    response = requests.get(
        url='https://app.scrapingbee.com/api/v1/',
        params={
            'api_key': 'VQ5MX6LSR9DGXLDKERJUI39ENCWBT9ELFBFIVGTJKAI354FIQLXV41V3CU3LSTEXQLXCQKJH81S2BAYS',
            'url': 'http://https://www.abc.virginia.gov/products/all-products',  
        },
        
    )
    print('Response HTTP Status Code: ', response.status_code)
    print('Response HTTP Response Body: ', response.content)
send_request()