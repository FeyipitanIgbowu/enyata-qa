import ProductsPage from '../pages/ProductsPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';

describe('Checkout (Standard User)', () => {

  beforeEach(() => {
    cy.loginAs('standard_user');
    ProductsPage.addFirstProductToCart();
    ProductsPage.goToCart();
    CartPage.proceedToCheckout();
  });

  it('Can complete full checkout successfully', () => {
    CheckoutPage.fillCheckoutInfo('Feyipitan', 'Igbowu', '100001');
    CheckoutPage.clickFinish();
    CheckoutPage.getConfirmationMessage().should('have.text', 'Thank you for your order!');
  });

  it('Checkout fails with empty first name', () => {
    CheckoutPage.fillLastName('Igbowu');
    CheckoutPage.fillZipCode('100001');
    CheckoutPage.clickContinue();
    CheckoutPage.getErrorMessage().should('contain', 'First Name is required');
  });

  it('Checkout fails with empty last name', () => {
    CheckoutPage.fillFirstName('Feyipitan');
    CheckoutPage.fillZipCode('100001');
    CheckoutPage.clickContinue();
    CheckoutPage.getErrorMessage().should('contain', 'Last Name is required');
  });

  it('Checkout fails with empty zip code', () => {
    CheckoutPage.fillFirstName('Feyipitan');
    CheckoutPage.fillLastName('Igbowu');
    CheckoutPage.clickContinue();
    CheckoutPage.getErrorMessage().should('contain', 'Postal Code is required');
  });

  it('Cart summary shows correct item before completing checkout', () => {
    CheckoutPage.fillCheckoutInfo('Feyipitan', 'Igbowu', '100001');
    cy.get('.cart_item').should('have.length', 1);
  });

});

describe('Checkout Problem User (Known Issues)', () => {

  beforeEach(() => {
    cy.loginAs('problem_user');
    cy.get('.btn_inventory').first().click();
    ProductsPage.goToCart();
    CartPage.proceedToCheckout();
  });

  it('BUG: Problem user cannot complete checkout — First Name field broken', () => {
    CheckoutPage.fillCheckoutInfo('Feyipitan', 'Igbowu', '100001');
    CheckoutPage.getErrorMessage().should('contain', 'First Name is required');
  });

});
