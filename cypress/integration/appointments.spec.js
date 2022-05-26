//prettier-ignore
describe('Appointments', () => {

  beforeEach(()=>{
    //reset database 
    cy.request('GET','/api/debug/reset')

    //load the page and verify it
    cy.visit('/')
      .contains('Monday')
  })

  it('should book an interview', () => {
    //click on add button to add new appointment
    cy.get('[alt=Add]')
      .first()
      .click()

      //student types name
    cy.get("[data-testid=student-name-input]")
      .type("Lydia Miller-Jones")

    //select an interviewer
    cy.get('[alt="Sylvia Palmer"]')
      .click()
      
      //click on save button
      cy.contains('Save')
      .click()
      
      //verify if Show component renders with proper student and interviewer names
      cy.contains(".appointment__card--show","Lydia Miller-Jones")
      cy.contains(".appointment__card--show","Sylvia Palmer")
    });
    
    it("should edit an interview", () => {
      //click edit button
      cy.get("[alt=Edit]")
      .first()
      .click({ force: true });
      
      //type new name
      cy.get("[data-testid=student-name-input]")
      .clear()
      .type("Lydia Miller-Jones");
      
      cy.get("[alt='Tori Malcolm']")
      .click();
      
      cy.contains("Save")
      .click();
      
      cy.contains(".appointment__card--show", "Lydia Miller-Jones");
      cy.contains(".appointment__card--show", "Tori Malcolm");
    });
    
    it("should cancel an interview", () => {
      //click delete button
      cy.get("[alt=Delete]")
      .first()
      .click({ force: true });

      //click confirm button
      cy.contains('Confirm')
        .click()

      //check for deleting spinner
      cy.contains("Deleting")
        .should("exist");
      cy.contains("Deleting")
        .should("not.exist");

      //confirm removal of appointment
      cy.contains(".appointment__card--show", "Archie Cohen")
        .should("not.exist");
    });
  });
