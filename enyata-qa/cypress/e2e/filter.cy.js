import ProductsPage from '../pages/ProductsPage';

describe('Product Filtering - Standard User', () => {

  beforeEach(() => {
    cy.loginAs('standard_user');
  });

  it('Filter by Name A to Z', () => {
    ProductsPage.sortBy('az');
    ProductsPage.getProductNames().then((items) => {
      const names = [...items].map(i => i.innerText);
      const sorted = [...names].sort();
      expect(names).to.deep.equal(sorted);
    });
  });

  it('Filter by Name Z to A', () => {
    ProductsPage.sortBy('za');
    ProductsPage.getProductNames().then((items) => {
      const names = [...items].map(i => i.innerText);
      const sorted = [...names].sort().reverse();
      expect(names).to.deep.equal(sorted);
    });
  });

  it('Filter by Price Low to High', () => {
    ProductsPage.sortBy('lohi');
    ProductsPage.getProductPrices().then((items) => {
      const prices = [...items].map(i => parseFloat(i.innerText.replace('$', '')));
      const sorted = [...prices].sort((a, b) => a - b);
      expect(prices).to.deep.equal(sorted);
    });
  });

  it('Filter by Price High to Low', () => {
    ProductsPage.sortBy('hilo');
    ProductsPage.getProductPrices().then((items) => {
      const prices = [...items].map(i => parseFloat(i.innerText.replace('$', '')));
      const sorted = [...prices].sort((a, b) => b - a);
      expect(prices).to.deep.equal(sorted);
    });
  });

});

describe('Product Filtering - Problem User (Known Issues)', () => {

  beforeEach(() => {
    cy.loginAs('problem_user');
  });

  it('BUG: Filter does not reorder products for problem_user', () => {
    ProductsPage.getProductNames().then((beforeItems) => {
      const beforeNames = [...beforeItems].map(i => i.innerText);
      ProductsPage.sortBy('az');
      ProductsPage.getProductNames().then((afterItems) => {
        const afterNames = [...afterItems].map(i => i.innerText);
        // This test documents the known bug - products don't reorder
        expect(afterNames).to.deep.equal(beforeNames);
      });
    });
  });

});
