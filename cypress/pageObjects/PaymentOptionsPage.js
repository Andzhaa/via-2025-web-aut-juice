import { BasePage } from "../pageObjects/basePage";

export class PaymentOptionsPage extends BasePage {
    static get url() {
        return "/#/payment/shop";
    }

    static get chooseCard() {
        return cy.get("mat-cell");
    }

    static get proceedToReview() {
        return cy.get("[aria-label='Proceed to review']");
    }

}