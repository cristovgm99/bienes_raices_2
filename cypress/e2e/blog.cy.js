/// <references types="cypress" />

describe('Prueba la pagina de Blog', () => {
    it('Prueba la pagina de Blog', () => {
        cy.visit('/blog')

        cy.get('[data-cy="heading-blog"]').should('exist')
        cy.get('[data-cy="heading-blog"]').invoke('text').should('equal', 'Nuestro Blog')
        cy.get('[data-cy="heading-blog"]').invoke('text').should('not.equal', 'Blog')

        

       


    })
})