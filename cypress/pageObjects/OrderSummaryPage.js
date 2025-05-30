import { BasePage } from "../pageObjects/basePage";

export class OrderSummaryPage extends BasePage {
    static get placeOrder() {
        return cy.get("[aria-label='Complete your purchase']");
    }
}