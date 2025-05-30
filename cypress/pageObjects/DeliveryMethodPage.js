import { BasePage } from "../pageObjects/basePage";

export class DeliveryMethodPage extends BasePage {
    static get url() {
        return "/#/delivery-method";
    }

    static get chooseDeliverySpeed() {
        return cy.get("mat-row[role=row]")
    }

    static get proceedToPayment() {
        return cy.get("[aria-label='Proceed to delivery method selection']")
    }
}