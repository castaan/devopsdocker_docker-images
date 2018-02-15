//
// **** OHIM Portal Startup Screen Tests ****
//

describe('OHIM Portal Startup Screen', function(){

  it('Loading Startup Screen', function(){
    cy.fixture('env').then((json) => {
        cy.visit('/ohimportal/es/home')
        cy.wait(json.short_wait)
        cy.screenshot('00 - OHIM Portal Startup Screen')
    })
  })

})
