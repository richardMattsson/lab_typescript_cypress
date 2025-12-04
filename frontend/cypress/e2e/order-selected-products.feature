Feature: Order includes correct selected products

After making a successfull order makes shure it includes selected products.

Scenario: Makes an order
  Given I selected some product and made an order
  When I click on my order on the cart page
  Then I should see my selected products in the order confirmation