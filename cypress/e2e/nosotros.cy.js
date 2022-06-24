/// <references types="cypress" />

describe('Prueba la pagina de Nosotros', () => {
    it('Prueba la pagina de Nosotros', () => {
        cy.visit('/nosotros')

        cy.get('[data-cy="heading-nosotros"]').should('exist')
        cy.get('[data-cy="heading-nosotros"]').invoke('text').should('equal', 'Conoce sobre Nosotros')
        cy.get('[data-cy="heading-nosotros"]').invoke('text').should('not.equal', 'Nosotros')

        cy.get('[data-cy="imagen-nosotros"]').should('exist')
        cy.get('[data-cy="imagen-nosotros"]').find('img').should('have.length', 1)
        cy.get('[data-cy="imagen-nosotros"]').find('img').should('not.have.length', 2)

        cy.get('[data-cy="bloque-nosotros"]').should('exist')
        cy.get('[data-cy="bloque-nosotros"]').find('blockquote').invoke('text').should('match', /^25 Años de experiencia/)
        cy.get('[data-cy="bloque-nosotros"]').find('p').invoke('text').should('match', /^Proin consequat viverra sapien, malesuada tempor tortor feugiat vitae. In dictum felis et nunc aliquet molestie. Proin tristique commodo felis, sed auctor elit auctor pulvinar. Nunc porta, nibh quis convallis sollicitudin, arcu nisl semper mi, vitae sagittis lorem dolor non risus. Vivamus accumsan maximus est, eu mollis mi. Proin id nisl vel odio semper hendrerit. Nunc porta in justo finibus tempor. Suspendisse lobortis dolor quis elit suscipit molestie. Sed condimentum, erat at tempor finibus, urna nisi fermentum est, a dignissim nisi libero vel est. Donec et imperdiet augue. Curabitur malesuada sodales congue. Suspendisse potenti. Ut sit amet convallis nisi./)

        cy.get('[data-cy="footer-nosotros"]').should('exist')
        cy.get('[data-cy="footer-nosotros"]').find('h2').invoke('text').should('match', /^Más Sobre Nosotros/)
   

       


    })
})