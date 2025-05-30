import { BasePage } from "../pageObjects/basePage";

export class OrderCompletionPage extends BasePage {
    static get orderConfirmation() {
        return cy.get(".confirmation");
    }
}