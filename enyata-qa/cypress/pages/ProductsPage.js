class ProductsPage {
  getTitle() {
    return cy.get('.title');
  }

  getProducts() {
    return cy.get('.inventory_item');
  }

  addFirstProductToCart() {
    cy.get('.btn_inventory').first().click();
  }

  removeFirstProductFromCart() {
    cy.get('.btn_inventory').first().click();
  }

  getCartBadge() {
    return cy.get('.shopping_cart_badge');
  }

  sortBy(option) {
    cy.get('[data-test="product-sort-container"]').select(option);
  }

  getProductNames() {
    return cy.get('.inventory_item_name');
  }

  getProductPrices() {
    return cy.get('.inventory_item_price');
  }

  getProductImages() {
    return cy.get('.inventory_item_img img');
  }

  goToCart() {
    cy.get('.shopping_cart_link').click();
  }
}

export default new ProductsPage();
