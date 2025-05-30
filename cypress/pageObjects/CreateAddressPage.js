import { BasePage } from "../pageObjects/basePage";

export class CreateAddressPage extends BasePage {
  static get getCountryField() {
    return cy.get('input[placeholder="Please provide a country."]');
  }

  static get getNameField() {
    return cy.get('input[placeholder="Please provide a name."]');
}

  static get getMobileNumberField() {
    return cy.get('input[placeholder="Please provide a mobile number."]');
  }

  static get getZipCodeField() {
    return cy.get('input[placeholder="Please provide a ZIP code."]');
  }

  static get getAddressField() {
    return cy.get('textarea[placeholder="Please provide an address."]');
  }

  static get getCityField() {
    return cy.get('input[placeholder="Please provide a city."]');
  }

  static get getStateField() {
    return cy.get('input[placeholder="Please provide a state."]');
  }

  static get submitButton() {
    return cy.get("#submitButton")
  }

  static get seekAddress() {
    return cy.get(".mdc-card")
  }
}