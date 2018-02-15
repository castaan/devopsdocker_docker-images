//
// **** Bamboo Startup Screen Tests ****
//

describe('Bamboo Startup Screen', function(){

  it('Loading Startup Screen', function(){
    cy.fixture('env').then((json) => {
        Cypress.config('baseUrl', json.bamboo.url)
        cy.visit('/userlogin!default.action')
        cy.wait(json.short_wait)
        cy.screenshot('00 - Bamboo Startup Screen')
    })
  })

})
