import ProductsPage from '../pages/ProductsPage';
import CartPage from '../pages/CartPage';

describe('Add and Remove Products from Cart (Standard User)', () => {

  beforeEach(() => {
    cy.loginAs('standard_user');
  });

  it('Can add a product to the cart', () => {
    ProductsPage.addFirstProductToCart();
    ProductsPage.getCartBadge().should('have.text', '1');
  });

  it('Can add multiple products to the cart', () => {
    cy.get('.btn_inventory').eq(0).click();
    cy.get('.btn_inventory').eq(1).click();
    ProductsPage.getCartBadge().should('have.text', '2');
  });

  it('Can remove a product from the cart via product page', () => {
    ProductsPage.addFirstProductToCart();
    ProductsPage.getCartBadge().should('have.text', '1');
    cy.get('.btn_inventory').first().click();
    cy.get('.shopping_cart_badge').should('not.exist');
  });

  it('Can remove a product from the cart page', () => {
    ProductsPage.addFirstProductToCart();
    ProductsPage.goToCart();
    CartPage.removeItem();
    CartPage.getCartItems().should('not.exist');
  });

  it('Cart is empty by default', () => {
    cy.get('.shopping_cart_badge').should('not.exist');
  });

});
