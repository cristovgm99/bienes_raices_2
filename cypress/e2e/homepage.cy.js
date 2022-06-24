/// <references types="cypress" />

describe('Páginas principal', () => {
  it('Prueba el header de la pagina principal', () => {
    cy.visit('/')

    cy.get('[data-cy="heading-sitio"]').should('exist') 

    cy.get('[data-cy="heading-sitio"]')
      .invoke('text')
      .should('match', /^Venta de Casas y Departamentos Exclusivos de Lujo/)
    cy.get('[data-cy="heading-sitio"]')
      .invoke('text')
      .should('not.include', /^uwu/)
  })

  it('Prueba el bloque de los iconos principales', () => {

    cy.get('[data-cy="heading-nosotros"]').should('exist')
    cy.get('[data-cy="heading-nosotros"]').should('have.prop', 'tagName').should('include', 'H2');

    // Selecciona los iconos
    cy.get('[data-cy="iconos-nosotros"]').should('exist')
    cy.get('[data-cy="iconos-nosotros"]').find('.icono').should('have.length', 3);
    cy.get('[data-cy="iconos-nosotros"]').find('.icono').should('not.have.length', 4);
  })

  it('Prueba la sección de Propiedades', () => {

    // Debe haber 3 propiedades
    cy.get('[data-cy="anuncio"]').should('have.length', 3)
    cy.get('[data-cy="anuncio"]').should('not.have.length', 5)

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

  it('Prueba el Routing hacia todas las propiedades', () => {

    cy.get('[data-cy="todas-propiedades"]').should('exist');
    cy.get('[data-cy="todas-propiedades"]').should('have.class', 'boton-verde')
    cy.get('[data-cy="todas-propiedades"]')
      .invoke('attr', 'href')
      .should('equal', '/propiedades')

    cy.get('[data-cy="todas-propiedades"]').click()
    cy.get('[data-cy="heading-propieades"]')
      .invoke('text')
      .should('match', /^Casas y Depas en Venta/)

    cy.wait(1000)
    cy.go('back')
  })

  it('Prueba el bloque de contactos', () => {

    cy.get('[data-cy="bloque-contacto"]').should('exist')
    cy.get('[data-cy="bloque-contacto"]').find('h2').invoke('text').should('match', /^Encuentra la casa de tus sueños/)
    cy.get('[data-cy="bloque-contacto"]').find('p').invoke('text').should('match', /^Llena el formulario de contacto y un asesor se pondrá en contacto contigo a la brevedad/)
    cy.get('[data-cy="bloque-contacto"]').find('a').invoke('attr', 'href').then( href => {cy.visit(href)})

    cy.get('[data-cy="heading-contacto"]').should('exist')

    cy.wait(1000)
    cy.visit('/')  

       
  })

  it('Prueba los testimoniales y blog', () => {
    cy.get('[data-cy="blog"]').should('exist');
    cy.get('[data-cy="blog"]').find('h3').invoke('text').should('match', /^Nuestro Blog/);
    cy.get('[data-cy="blog"]').find('h3').invoke('text').should('not.include', /^Blog/);
    cy.get('[data-cy="blog"]').find('img').should('have.length', 2)

    cy.get('[data-cy="testimoniales"]').should('exist');
    cy.get('[data-cy="testimoniales"]').find('h3').invoke('text').should('not.include', /^Testimoniales/);
  })
  
  
})