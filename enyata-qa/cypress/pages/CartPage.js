class CartPage {
  getCartItems() {
    return cy.get('.cart_item');
  }

  removeItem() {
    cy.get('.cart_button').first().click();
  }

  proceedToCheckout() {
    cy.get('[data-test="checkout"]').click();
  }

  continueShopping() {
    cy.get('[data-test="continue-shopping"]').click();
  }
}

export default new CartPage();
