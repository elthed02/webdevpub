describe('Use navigation', () => {

    it('Go to page then click all navbar items', () => {
        cy.visit('https://elthed02.github.io/webdevpub/')
        for (let i = 0; i < 100; i++) {
            cy.wait(500)
            cy.get('#driversId').click()
            cy.wait(500)
            cy.get('#parent').trigger('mouseover')
            cy.wait(5000)

            cy
                
                .wait(1000)
                .get('#scheduleId').click()
                .wait(500)
            
            cy.get('#constructorsId').click()
            cy.wait(500)
            
        }
    })
})