import { BasePage } from "../pageObjects/basePage";

export class PaymentOptionsPage extends BasePage {
    static get url() {
        return "/#/payment/shop";
    }

    static get chooseCard() {
        return cy.get("mat-row[role=row]")
    }
}