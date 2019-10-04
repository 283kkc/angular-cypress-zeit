describe('where is from', () => {
    it('from dashboard', () => {
        cy.visit('/');
        cy.url().should('include', '/dashboard');
        cy.get('.module').first().click();
        cy.url().should('include', '/detail/');
        cy.wait(500);
        cy.get('.heroTest').last().should('contain', 'HeroService fetched hero id');
        cy.get('app-root').find('button').first().click();
        cy.url().should('include', '/dashboard');
    })
    it('from heroesList', () => {
        cy.visit('/heroes');
        cy.get('.eachHero').first().click();
        cy.url().should('include', '/detail/');
        cy.wait(500);
        cy.get('.heroTest').last().should('contain', 'HeroService fetched hero id');
        cy.get('app-root').find('button').first().click();
        cy.url().should('include', '/heroes');
    })
})

describe('editting name', () => {
    it('edit', () => {
        cy.visit('/detail/11');
        cy.get('app-root').find('input')
        .clear()
        .type('DrNicessss');
        cy.get('app-root').find('button').last().click();
        cy.get('app-root').find('input').should('to.have.value', 'DrNicessss');
    })
})