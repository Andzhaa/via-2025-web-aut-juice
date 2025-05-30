import { BasePage } from "../pageObjects/basePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }

  static get accountButton() {
    return cy.get("button#navbarAccount");
  }

  static get loginButton() {
    return cy.get("button#navbarLoginButton");
  }

  static get userProfleButton() {
    return cy.get("button[aria-label='Go to user profile']");
  }

  static get searchIcon() {
    return cy.get("#searchQuery")
  }

  static get searchField() {
    return cy.get("#searchQuery input")
  }

  static get productBox() {
    return cy.get("div.mdc-card")
  }

  static get productInfo() {
    return cy.get("app-product-details")
  }

  static get closeButton() {
    return cy.get("button[aria-label='Close Dialog']");
  }

  static get expandReview() {
    return cy.get("[aria-label='Expand for Reviews']")
  }

  static get writeInReview() {
    return cy.get("[aria-label='Text field to review a product']")
  }

  static get submitButton() {
    return cy.get("button#submitButton")
  }
 
  static get cardQuantity() {
    return cy.get(".mat-mdc-select")
  }

  static get openCardQuantity() {
    return cy.get(".mat-mdc-paginator-touch-target")
  }

  static get chooseCardQuantity() {
    return cy.get("[role=option]")
  }

  static get addToBasket() {
    return cy.get("[aria-label='Add to Basket']")
  }

  static get myBasket() {
    return cy.get("[aria-label='Show the shopping cart']")
  }

  static get ordersAndPayment() {
    return cy.get("button[aria-label='Show Orders and Payment Menu']")
  }

  static get savedAdresses() {
    return cy.get("button[aria-label='Go to saved address page']")
  }

  static get paymentOptions() {
    return cy.get("button[aria-label='Go to saved payment methods page']")
  }
}
