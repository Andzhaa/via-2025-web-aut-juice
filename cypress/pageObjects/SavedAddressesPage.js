import { BasePage } from "../pageObjects/basePage";

export class SavedAddressesPage extends BasePage {
    static get newAdress() {
        return cy.get("[aria-label='Add a new address']");
    }
}