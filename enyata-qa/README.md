# Enyata QA Engineer Assessment
**Submitted by:** Feyipitan Igbowu  
**Email:** thetechsirius@gmail.com  
**Test Site:** https://www.saucedemo.com/

---

## Project Structure

```
enyata-qa/
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js        # Login test scenarios
│   │   ├── cart.cy.js         # Add/Remove cart tests
│   │   ├── filter.cy.js       # Product filter tests
│   │   └── checkout.cy.js     # Checkout flow tests
│   ├── pages/                 # Page Object Models
│   │   ├── LoginPage.js
│   │   ├── ProductsPage.js
│   │   ├── CartPage.js
│   │   └── CheckoutPage.js
│   ├── fixtures/
│   │   └── testdata.json
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── .github/
│   └── workflows/
│       └── cypress.yml
├── cypress.config.js
└── package.json
```

---

## Prerequisites

- Node.js v18 or higher
- npm v9 or higher
- Git

---

## Installation

```bash
git clone <repo-url>
cd enyata-qa
npm install
```

---

## Running the Tests

```bash
# Run all tests headlessly
npm test

# Open Cypress interactive runner
npm run cy:open

# Run tests in headed mode
npm run cy:run
```

---

## Test Coverage

### Login
- Standard user login success
- Problem user login success
- Invalid password
- Empty username
- Empty password

### Cart (Standard User)
- Add single product
- Add multiple products
- Remove from product page
- Remove from cart page
- Empty cart by default

### Filtering (Standard & Problem User)
- A-Z, Z-A, Price Low-High, Price High-Low
- Bug documented: filters non-functional for problem_user

### Checkout (Standard & Problem User)
- Full successful checkout
- Missing first name validation
- Missing last name validation
- Missing zip code validation
- Bug documented: checkout broken for problem_user

---

## Notes & Observations

### Bugs Found — problem_user

| # | Bug | Severity |
|---|-----|----------|
| 1 | Product sort/filter does nothing | High |
| 2 | Product images don't match product descriptions | High |
| 3 | 3 out of 6 products cannot be added to cart | Critical |
| 4 | Checkout First Name field doesn't accept input — checkout cannot be completed | Critical |

### Assumptions
- The `problem_user` bugs are intentional for testing purposes (the user is named "problem_user")
- All automation tests for core flows use `standard_user`
- Bug documentation tests use `problem_user` to explicitly capture known defects

### Blockers
- None — all tests run successfully locally
