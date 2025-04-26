from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

driver = webdriver.Chrome(executable_path='path/to/chromedriver')
driver.get('http://localhost:5001/api/login')  

login_button = driver.find_element(By.ID, 'login-button')
login_button.click()

WebDriverWait(driver, 10).until(EC.visibility_of_element_located((By.ID, 'error-message'))) 
error_message = driver.find_element(By.ID, 'error-message').text
toast_message = driver.find_element(By.ID, 'toast-message').text 

assert "enter all the required fields" in error_message
assert "enter the values in the required field" in toast_message

username_field = driver.find_element(By.ID, 'username')  
password_field = driver.find_element(By.ID, 'password') 

username_field.send_keys('wrongusername')
password_field.send_keys('somepassword')
login_button.click()

WebDriverWait(driver, 10).until(EC.visibility_of_element_located((By.ID, 'toast-message')))
toast_message = driver.find_element(By.ID, 'toast-message').text

assert "enter the valid username" in toast_message

username_field.clear()
username_field.send_keys('validusername') 
password_field.clear()
password_field.send_keys('wrongpassword')
login_button.click()

WebDriverWait(driver, 10).until(EC.visibility_of_element_located((By.ID, 'toast-message')))
toast_message = driver.find_element(By.ID, 'toast-message').text

assert "enter the valid password for that username" in toast_message

google_photo = driver.find_element(By.ID, 'google-photo') 
google_photo.click()

WebDriverWait(driver, 10).until(EC.visibility_of_element_located((By.ID, 'email-input'))) 

driver.get('http://localhost:5001/api/login') 
apple_photo = driver.find_element(By.ID, 'apple-photo') 
apple_photo.click()

WebDriverWait(driver, 10).until(EC.visibility_of_element_located((By.ID, 'apple-id-input'))) 

driver.get('http://localhost:5001/api/register') 
register_link = driver.find_element(By.ID, 'register-link') 
register_link.click()

WebDriverWait(driver, 10).until(EC.visibility_of_element_located((By.ID, 'registration-form'))) 

driver.quit()