import { Given } from "cypress-cucumber-preprocessor/steps";
const url = "https://demo.guru99.com/insurance/v1/index.php";
const regist_value = Cypress.config().registration;
const mileage_value = Cypress.config().mileage;
const value_txt = Cypress.config().value;
const stateofpolicy_value = Cypress.config().stateofpolicy;


Given('I open Demo99 test page', () => {
  cy.visit(url);
});

Given('Perform Login with Username {string} and Password {string}', (username, password) => {
  cy.performLogin(username, password)
});

Given('Verify the text should be {string}', (text) => {
  cy.verifyText(text)
});

Given('Verify the text should be present {string}', (text) => {
  cy.verifyTextpresent(text)
});

Given('User Perfrom Request Quotation', () => {
  cy.get('a.ui-tabs-anchor').should('contain.text', 'Request Quotation');
  cy.get('a.ui-tabs-anchor').contains('Request Quotation').click();
  cy.get('h2').should('contain.text', 'Request a quotation')
  var incidents = Cypress.config('incidents')
  var registration = Cypress.config('registration')
  var mileage = Cypress.config('mileage')
  var value = Cypress.config('value')
  var stateofpolicy = Cypress.config('stateofpolicy')

  cy.get('#quotation_breakdowncover').select('At home').should('have.value', '3')
  cy.get('#quotation_incidents').type(incidents)
  cy.get('#quotation_vehicle_attributes_registration').type(registration)
  cy.get('#quotation_vehicle_attributes_mileage').type(mileage)
  cy.get('#quotation_vehicle_attributes_value').type(value)
  cy.get('#quotation_vehicle_attributes_policystart_1i').select(stateofpolicy).should('have.value', stateofpolicy)
  cy.get('.btn.btn-success').contains('Save Quotation').click({ force: true });

});


Given('Save identification Number', () => {
  cy.xpath('/html/body/text()').invoke('text').then(text => {
    cy.log("IdNum is " + text)
    cy.writeFile('cypress/fixtures/idNum.txt', text)
  })
})

Given('User Perfrom Retrieve Quotation', () => {
  cy.get('a.ui-tabs-anchor').contains('Retrieve Quotation').click();
  cy.readFile('cypress/fixtures/idNum.txt').then((idNum) => {
    cy.get('input[placeholder="identification number"]').type(idNum);
    cy.get('input[value="Retrieve"]').click()
  })
})

Given('Verify Retrieve Quotation page', () => {
  cy.contains('Retrieve Quotation')
  cy.contains(regist_value)
  cy.contains(mileage_value)
  cy.contains(value_txt)
  cy.contains(stateofpolicy_value)
})

Given('Navigate Back', () => {
  cy.go('back')
})

Given('Navigate Forward', () => {
  cy.go('forward')
})


Given('Select Profile info', () => {
cy.get('a.ui-tabs-anchor').should('contain.text', 'Profile');
cy.get('a.ui-tabs-anchor').contains('Profile').click();
})

Given('Verify Profile page', () => {
  cy.get('div>p>strong').should('contain.text', 'Title');
  cy.get('div>p>strong').should('contain.text', 'Firstname');
  cy.get('div>p>strong').should('contain.text', 'Surname');
  cy.get('div>p>strong').should('contain.text', 'Phone');
  cy.get('div>p>strong').should('contain.text', 'Dataofbirth');
  cy.get('div>p>strong').should('contain.text', 'License type');
  cy.get('div>p>strong').should('contain.text', 'License period');
  cy.get('div>p>strong').should('contain.text', 'Occupation');
  cy.get('div>p>strong').should('contain.text', 'Driver History');
  cy.contains('ADDRESS:')
})
 
Given('Select Edit Profile info', () => {
  cy.get('a.ui-tabs-anchor').should('contain.text', 'Edit Profile');
  cy.get('a.ui-tabs-anchor').contains('Edit Profile').click();
})

Given('Verify Edit Profile page', () => {
  cy.get('div>label').should('contain.text', 'Title');
  cy.get('div>label').should('contain.text', 'Surname');
  cy.get('div>label').should('contain.text', 'Firstname');
  cy.get('div>label').should('contain.text', 'Phone');
  cy.get('div>label').should('contain.text', 'Dateofbirth');
  cy.get('div>label').should('contain.text', 'Licencetype');
  cy.get('div>label').should('contain.text', 'Licenceperiod');
})



