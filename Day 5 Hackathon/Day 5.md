## Test Cases Executed And Their Results
### Test Case ID: TC001
##### Test Case Description: Validate Search Bar Dropdown Functionality (Dropdown Not Appearing Issue)
#### Test Steps:
* Locate the search bar on the homepage of the website.
* Enter a product name (e.g., "Serene") into the search bar.
* Check whether the dropdown list appears or not.
* Press the search button.
* Observe the search results page.
#### Expected Result:
* The dropdown list should appear with search results as the user types.
* The search results page should display items related to the product name "laptop."
#### Actual Result:
* The dropdown list was not appearing when the text was entered in the search bar.
*The search results page loaded correctly, but the dropdown did not show up.
#### Status:
Fail (Initially, the dropdown issue existed, but it was fixed afterward.)
#### Severity Level:
High (Because the dropdown wasn’t appearing, which impacted user experience.)
#### Assigned To:Neha Ayaz
#### Remarks:
There was a dropdown visibility issue, likely due to CSS or event binding problems. This was resolved, and now the dropdown correctly appears with search results.
************ **************************************************************************
### Test Case ID: TC002
##### Test Case Description: Validate Product Listing API Integration
#### Test Steps:
* Open the e-commerce website.
* Verify that product data is being fetched from the API and is displayed correctly in the product listing section.
* Check that product details such as name, price, image, and description are being displayed properly.
* Expected Result: Products should be listed correctly with accurate details from the API.
* Actual Result: Product data was successfully fetched from the API and displayed correctly in the listing section. The name, price, image, and description were all shown properly.
#### Status: 
Pass
#### Severity Level: 
High
#### Assigned To: Neha Ayaz
#### Remarks:
The API integration is working correctly. No issues were found. Data fetching and display were smooth.
******************************************************************************
### Test Case ID: TC003  
##### Test Case Description: Validate Product Detail Page Navigation  
#### Test Steps:  
* Open the e-commerce website.  
* Click on a product from the product listing page.  
#### Expected Result : 
 User should be redirected to the correct product detail page.  
#### Actual Result: 
 Upon redirecting to the product detail page, a "Product Not Found" error was displayed because the product name was incorrect. The issue has been resolved, and now the correct product detail page is being displayed.  
#### Status: 
 Pass  
#### Severity Level: 
 High  
#### Assigned To:Neha Ayaz 
#### Remarks: 
 The issue was resolved quickly. The product detail page is now loading correctly.
*****************************************************************
### Test Case ID: TC004
##### Test Case Description: Validate "Add to Cart" functionality on Product Detail Page
#### Test Steps:
* Open the product detail page.
* Click the "Add to Cart" button for the product.
#### Expected Result:
The product should be added to the shopping cart, and the cart icon should update with the correct product count.

#### Actual Result:
After clicking the "Add to Cart" button, it took some time for the product to appear on the cart page, but the issue has been resolved. The cart now updates quickly.
#### Status:
 Pass
#### Severity Level:
 High
#### Assigned To:Neha Ayaz
#### Remarks:
The issue has been resolved, and the cart update is now happening efficiently.
********************************************************************
### Test Case ID: TC005
##### Test Case Description: Validate Cart Functionalities (View Cart, Remove from Cart, and Quantity Increase/Decrease)
#### Test Steps:
* Open the eCommerce website.
* Click on the cart icon. (View Cart functionality)
* On the cart page, click the "Remove" button for a product. (Remove from Cart functionality)
* On the cart page, change the quantity of a product (increase/decrease) using the respective buttons. (Quantity Increase/Decrease functionality)
#### Expected Result:
* The cart page should open, showing all the products added to the cart, with correct names, quantities, and prices.
* The product should be removed from the cart, and the cart count should update accordingly.
* The cart should update the total price and quantity correctly when the product quantity is changed.
#### Actual Result:
All functionalities were working correctly. The cart page loaded properly, the cart count updated when products were removed, and the total price and quantity updated correctly when the quantity was changed.
#### Status: 
Pass
#### Severity Level: 
High
#### Assigned To:Neha Ayaz
#### Remarks:
 All cart functionalities worked smoothly and quickly. No issues were encountered, and the user experience was seamless.
***********************************************************************
### Test Case ID: TC006
##### Test Case Description: Validate "Proceed to Checkout" button functionality
#### Test Steps:
* Open the cart page.
* Click on the "Proceed to Checkout" button.
#### Expected Result:
The user should be redirected to the checkout page, where they can fill out shipping and payment details.
#### Actual Result:
Upon clicking the "Proceed to Checkout" button, the user was redirected to the correct checkout page, where they were able to fill in their shipping and payment details.
#### Status:
 Pass
#### Severity Level:
 High
#### Assigned To:Neha Ayaz
#### Remarks:
 Everything worked smoothly. There were no issues in the checkout process, and it was streamlined effectively.
********************************************************************
### Test Case ID: TC007
##### Test Case Description: Validate Shipping Form functionality
#### Test Steps:
* Open the checkout page.
* Fill in all the necessary details in the shipping form (name, address, phone number, etc.).
* Submit the form.
#### Expected Result:
The form should accept valid entries and proceed to the payment details page.
#### Actual Result:
Everything worked fine. After filling the shipping form, the payment details page opened correctly.
#### Status:
 Pass
#### Severity Level:
 High
#### Assigned To:Neha Ayaz
#### Remarks:
 The shipping form is working as expected, and the user can move on to the payment step without issues.

### Test Case ID: TC008
##### Test Case Description: Validate Payment Information
#### Test Steps:
* Open the checkout page.
* Fill in valid payment information (credit card, PayPal, etc.).
* Submit the payment information.
#### Expected Result:
The payment information should be successfully validated, and the user should be redirected to the order confirmation page.
#### Actual Result:
After submitting the payment information, it was successfully validated, and the user was redirected to the order confirmation page.
#### Status:
 Pass
#### Severity Level:
 High
#### Assigned To:Neha Ayaz
#### Remarks: Payment processing was smooth, and the user was able to proceed to the next step without any errors.

### Test Case ID: TC009
##### Test Case Description: Validate Order Confirmation Page
#### Test Steps:
* Fill in the shipping form.
* Submit the payment details.
* Submit the order.
#### Expected Result:
* The user should be redirected to the order confirmation page, showing the order number, items ordered, and estimated delivery details.
* There should be a "Continue to Shopping" button, which when clicked should redirect the user to the home page.
#### Actual Result:
The order confirmation page loaded successfully, displaying the order number, ordered items, and delivery details. The "Continue to Shopping" button redirected the user to the home page when clicked.
#### Status:
 Pass
#### Severity Level:
 High
#### Assigned To:Neha Ayaz
#### Remarks:
 The order confirmation page displayed all the necessary information, and the "Continue to Shopping" button worked perfectly to redirect the user to the homepage.
