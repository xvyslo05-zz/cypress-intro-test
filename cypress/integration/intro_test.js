import * as testFixtures from '../fixtures/test_fixtures.json'

describe('MageXo intro test', () => {
  beforeEach(() => {
    cy.visit(testFixtures.env.homepage)

    //hint: want different view? use cy.viewport command!
  })

  context('Newsletter', () => {
    it('Sign for a newsletter', () => {
      cy.log('remove before flight')
    })
  })

  context('Shopping cart', () => {
    it('Add an item to shopping cart', () => {
      cy.log('remove before flight')
    })

    it('Remove item from shopping cart', () => {
      cy.log('remove before flight')
    })

    it('Place order', () => {
      cy.log('remove before flight')
    })
  })

  context('Search bar', () => {
    it('Search for an item and open it', () => {
      cy.log('remove before flight')
    })
    it('Filter brand while searching', () => {
      cy.log('remove before flight')
      //hint: try to use GraphQL and intercepts here
    })

    it('Filter price while searching', () => {
      cy.log('remove before flight')
      //hint: try to use GraphQL and intercepts here
    })
  })
})
