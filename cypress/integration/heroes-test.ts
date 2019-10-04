describe("add hero", () => {
    // let heroValiation = Cypress.$('.eachHero').length;
    let heroValiation = 10;

    beforeEach(() => {
        cy.visit('/heroes');
    })
    it('default', ()=>{
        cy.get('.heroTest').should('have.length', 1)
    })

    it('add hero blank', () => {
        cy.get('input').type(' ');
        cy.get('#addButton').click();
        cy.get('.eachHero').should('have.length', heroValiation);
        cy.get('.heroTest').should('have.length', 1);
    })

    it('add hero not blank', () => {
        //add
        cy.get('input').type('tom');
        cy.get('#addButton').click();
        cy.get('.eachHero').should('have.length', heroValiation+1);
        cy.get('.heroTest').should('contain', 'HeroService add hero');
        //delete
        cy.get('.delete').last().click();
        cy.get('.eachHero').should('have.length', heroValiation);
        cy.get('.heroTest').should('contain', 'HeroService deleted hero');

        cy.get('.heroTest').should('have.length', 3);
    })
})

describe('hero list', ()=>{
    beforeEach(() => {
        cy.visit('/heroes');
    })
    it('detail page', ()=>{
        cy.get('.eachHero').first().click();
        cy.url().should('include', '/detail/11');
    })
})