Feature: Amount increment button

This component lets the user increase the amount of products to add to the cart.

Scenario: The user increments the amount of products
  Given The amount of products is 0
  When The increment button is clicked
  Then The amount increases by 1

Scenario: The user increases the amount once more
  Given The amount of products is 1
  When The increment button is clicked
  Then The amount is equal to 2