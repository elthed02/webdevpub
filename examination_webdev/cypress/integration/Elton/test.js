describe('Use navigation', () => {

    it('Go to page then click all navbar items', () => {
        cy.visit('http://localhost:5500/')
        for (let i = 0; i < 100; i++) {
            cy.wait(500)
            cy.get('#driversId').click()
            cy.wait(500)
            cy.get('#parent').trigger('mouseover')
            cy.wait(5000)

            cy
                .get('#scheduleId').realHover()
                
                .should('have.css', 'background-color', 'white')
                .wait(1000)
                .get('#scheduleId').click()
                .wait(500)
            
            cy.get('#constructorsId').click()
            cy.wait(500)
            
        }
    })
})