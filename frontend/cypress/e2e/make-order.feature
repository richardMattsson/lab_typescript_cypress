Feature: Make-order

Theres going to be a make order button that gives me a confirmation that my order
was successfull if ive choosen at least one product and filled the needed info.

Scenario: Makes an order
  Given I have choosen a product, clicked continue with order and filled in all info correct
  When I click the make order button
  Then I should get a confirmation about that my order was successfull