describe('navigation', () =>{
    beforeEach(function() {
        console.log('starting navigation test');
    })

    it('should navigate to about and check text', () => {
        // start from index page
        cy.visit('http://localhost:3000');

        //find link with href attribute containing about and clicking it
        cy.get('a[href*="about"]').click();
        // the new url should include "/about"
        cy. url().should('include','/about');

        // the new page should contain an h1 with text 'about page'
        cy.get('h1').contains('about page')
    })
})