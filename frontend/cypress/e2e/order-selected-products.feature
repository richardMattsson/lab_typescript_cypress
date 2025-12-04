Feature: Order includes correct selected products

After making a successfull order makes shure it includes selected products.

Scenario: Makes an order and sees the selected products
  Given I selected some product and went to the cart page
  When I fill the form and make the order
  Then I should see my selected products in the order confirmation