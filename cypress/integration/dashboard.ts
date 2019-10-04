
describe('dashboard test', () => {
    beforeEach(function(){
        cy.visit('/');
    });

    it('search for hero:narco', ()=>{
        cy.get('#search-component').find('input').type('Na');
        cy.get('.search-result').each(($el) =>{
            cy.wrap($el).should('contain', 'na');
        })
        cy.get('.search-result').should('to.contain', 'Narco');
        cy.get('app-messages').find('div').last().should('contain', 'HeroService found heroes matching "Na"');
    })

    it('search for hero in 5.01 seconds, getting 2 messages', ()=> {
        cy.get('.clear').click();
        cy.get('#search-component').find('input').type('Na');
        cy.wait(501);
        cy.get('#search-component').find('input').clear();
        cy.get('#search-component').find('input').type('Bo');
        cy.wait(301);
        cy.get('app-messages').find('.heroTest').should('have.length', 2);
    })

    it('search for hero in 2.99 seconds, getting 1 messages', ()=>{
        cy.get('.clear').click();
        cy.get('#search-component').find('input').type('Na');
        cy.wait(299);
        cy.get('#search-component').find('input').type('Na');
        cy.wait(300);
        cy.get('app-messages').find('.heroTest').should('have.length', 1);
    })

    it('message test', () => {
        cy.url().should('include', '/dashboard');
        cy.get('h3').should('have.text', 'Top Heroes');
        cy.get('app-messages').should('contain', 'Messages');
    });

    it('clear messages', () =>{
        cy.get('.clear').click();
        cy.get('app-messages').should('to.be.empty');
        cy.visit('/');
        cy.get('h2').should('have.text', 'Messages');
    });

    it('dashboard link', ()=>{
        cy.get('nav').find('a').first().click();
        cy.url().should('include', '/dashboard');
    })

    it('heroes link', ()=>{
        cy.get('nav').find('a').last().click();
        cy.url().should('include', '/heroes');
    })

    it('top heroes', ()=>{
        cy.get('.grid').find('h4').should('have.length', 4);
        cy.get('.grid').get('h4').first().click();
        cy.url().should('include', '/detail/')
    })
});