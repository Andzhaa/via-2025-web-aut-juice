import { BasePage } from "../pageObjects/basePage";

export class SavedPaymentMethodsPage extends BasePage {
    static get newCardForm() {
        return cy.get("mat-expansion-panel").contains("Add new card");
    }

    static get getNameField() {
        return cy.contains("mat-form-field", "Name").find("input");
    }

    static get getCardNumberField() {
        return cy.contains("mat-form-field", "Card Number").find("input");
    }

    static get getExpiryMonth() {
        return cy.contains("mat-form-field", "Expiry Month").find("select");
    }

    static get getExpiryYear() {
        return cy.contains("mat-form-field", "Expiry Year").find("select");
    }

    static get submitButton() {
        return cy.get("#submitButton");
    }

    static get savedCards() {
        return cy.get("mat-row[role=row]");
    }
}