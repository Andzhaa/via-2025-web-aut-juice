import { BasePage } from "../pageObjects/basePage";

export class SelectAddressPage extends BasePage {
    static get url() {
        return "/#/address/select";
    }

    static get chooseAddress() {
        return cy.get("mat-row[role=row]")
    }

    static get proceedToPayment() {
        return cy.get("[aria-label='Proceed to payment selection']")
    }
}