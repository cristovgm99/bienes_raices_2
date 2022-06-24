/// <references types="cypress" />

describe('Prueba la pagina de Propiedades', () => {
    it('Prueba la pagina de Propiedades', () => {
        cy.visit('/propiedades')

        cy.get('[data-cy="heading-propieades"]').should('exist')
        cy.get('[data-cy="heading-propieades"]').invoke('text').should('equal', 'Casas y Depas en Venta')
        cy.get('[data-cy="heading-propieades"]').invoke('text').should('not.equal', 'Casas y Depas')

       // Debe haber 3 propiedades
        cy.get('[data-cy="anuncio"]').should('have.length', 9)
        cy.get('[data-cy="anuncio"]').should('not.have.length', 10)

        // Probar el enlace de la propiedades
        cy.get('[data-cy="enlace-propiedad"]').should('have.class', 'boton-amarillo-block')
        cy.get('[data-cy="enlace-propiedad"]').should('not.have.class', 'boton-amarillo')

        cy.get('[data-cy="enlace-propiedad"]')
            .invoke('text')
            .should('match', /^Ver Propiedad/)

        // Probar el enlace a una propiedad
        cy.get('[data-cy="enlace-propiedad"]').first().click();
        cy.get('[data-cy="titulo-propiedad"]').should('exist')

        cy.wait(1000)
        cy.go('back')

       


    })
})