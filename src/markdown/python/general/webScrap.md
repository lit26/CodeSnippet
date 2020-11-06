# Web Scrapping

## Beautiful Soup
Full Documentation: [https://beautiful-soup-4.readthedocs.io/](https://beautiful-soup-4.readthedocs.io/)
```python
from bs4 import BeautifulSoup
import requests

headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) \
            AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36'}
source = requests.get(url, headers=headers)

# get html
soup = BeautifulSoup(source.text, 'lxml')
# get json
response = json.loads(source.content)

# print html
print(soup.prettify())

# find elements by tag
headings = soup.find_all('h1', class_="heading")
print(heading.text)
# find element by tag
content = soup.find('p', class_="content")
```

## Selenium
Full Documentation: [https://selenium-python.readthedocs.io/](https://selenium-python.readthedocs.io/)
```python
from selenium import webdriver
import pandas as pd
import time

PATH = "" # path to chromedriver
URL = "" # URL to scrap
driver = webdriver.Chrome(PATH)
driver.get(URL)

# doing operations
# ...

# close tab
driver.close()
# close window
driver.quit()
```

### Finding Element
```python
# search by name
username = driver.find_element_by_name('username')
# search by id
element = driver.find_element_by_id('main')
# search by xpath
login_form = driver.find_element_by_xpath("/html/body/form[1]")
# search by css selectors
content = driver.find_element_by_css_selector('p.content')
```

### Finding Elements
```python
# search by tag name
heading1 = driver.find_elements_by_tag_name('h1')
```

### Wait for page load
```python
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver.get("http://somedomain/url_that_delays_loading")

try:
    element = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "myDynamicElement"))
    )
except:
    driver.quit()
```

### Sending keys
```python
from selenium.webdriver.common.keys import Keys

# send search item to the input field
search = driver.find_element_by_name("search_item")
search.send_keys("selenium")
search.send_keys(Keys.RETURN)

# clear text input
search.clear()
```
### Page navigation
```python
link = driver.find_element_by_link_text("some link text")
link.click()
# page back
driver.back()
# page forward
driver.forward()
```

