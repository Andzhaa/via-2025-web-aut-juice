import { BasketPage } from "../pageObjects/BasketPage";
import { CreateAddressPage } from "../pageObjects/CreateAddressPage";
import { DeliveryMethodPage } from "../pageObjects/DeliveryMethodPage";
import { HomePage } from "../pageObjects/HomePage";
import { LoginPage } from "../pageObjects/LoginPage";
import { OrderCompletionPage } from "../pageObjects/OrderCompletionPage";
import { OrderSummaryPage } from "../pageObjects/OrderSummaryPage";
import { PaymentOptionsPage } from "../pageObjects/PaymentOptionsPage";
import { RegistrationPage } from "../pageObjects/RegistrationPage";
import { SavedAddressesPage } from "../pageObjects/SavedAddressesPage";
import { SavedPaymentMethodsPage } from "../pageObjects/SavedPaymentMethodsPage";
import { SelectAddressPage } from "../pageObjects/SelectAddressPage";

describe("Juice-shop scenarios", () => {
  context("Without auto login", () => {
    beforeEach(() => {
      HomePage.visit();
      HomePage.dismissButton.click();
      HomePage.meWantItButton.click();
    });

    it("Login", () => {
      // Click Account button
      HomePage.accountButton.click();
      // Click Login button
      HomePage.loginButton.click();
      // Set email value to "demo"
      LoginPage.emailField.type("demo");
      // Set password value to "demo"
      LoginPage.passwordField.type("demo");
      // Click Log in
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that "demo" account name appears in the menu section
      HomePage.userProfleButton.should("contain.text", "demo");
    });

    it("Registration", () => {
      // Click Account button
      HomePage.accountButton.click();
      // Login button
      HomePage.loginButton.click();
      // Click "Not yet a customer?"
      LoginPage.notYetCustomer.click();
      // Find - how to generate random number in JS
      // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
      const randomNumber = Math.floor(Math.random() * 10000000);
      const email = `email_${randomNumber}@ebox.com`;
      const password = "ABC123#";
      RegistrationPage.emailField.type(email);
      // Save that email address to some variable
      // Fill in password field and repeat password field with same password
      RegistrationPage.passwordField.type(password);
      RegistrationPage.repeatPasswordField.type(password);      
      // Click on Security Question menu
      RegistrationPage.securityQuestionField.click();
      // Select  "Name of your favorite pet?"
      RegistrationPage.securityQuestionOption.contains("Name of your favorite pet?").click();
      // Fill in answer
      RegistrationPage.securityAnswerField.type("Bee");
      // Click Register button
      RegistrationPage.registrationButton.click();
      // Set email value to previously created email
      LoginPage.emailField.type(email);
      // Set password value to previously used password value
      LoginPage.passwordField.type(password);
      // Click login button
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that account name (with previously created email address) appears in the menu section
      HomePage.userProfleButton.should("contain.text", email);
    });
  });

  context("With auto login", () => {
    beforeEach(() => {
      cy.login("demo", "demo");
      HomePage.visit();
    });

    it("Search and validate Lemon", () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for Lemon
      HomePage.searchField.type("Lemon{enter}");
      // Select a product card - Lemon Juice (500ml)
      HomePage.productBox.contains("Lemon Juice (500ml)").click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.productInfo.should("contain.text", "Sour but full of vitamins.");
    });

    it("Search 500ml and validate Lemon, while having multiple cards", () => {
    // Create scenario - Search 500ml and validate Lemon, while having multiple cards
    // Click on search icon
      HomePage.searchIcon.click();
    // Search for 500ml
      HomePage.searchField.type("500ml{enter}");
    // Select a product card - Lemon Juice (500ml)
      HomePage.productBox.contains("Lemon Juice (500ml)").click();
    // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.productInfo.should("contain.text", "Sour but full of vitamins.");      
    });

    it("Search 500ml and validate cards", () => {
    // Create scenario - Search 500ml and validate cards
    // Click on search icon
      HomePage.searchIcon.click();
    // Search for 500ml
      HomePage.searchField.type("500ml{enter}");
    // Select a product card - Eggfruit Juice (500ml)
      HomePage.productBox.contains("Eggfruit Juice (500ml)").click();
    // Validate that the card (should) contains "Now with even more exotic flavour."
      HomePage.productInfo.should("contain.text", "Now with even more exotic flavour.");
    // Close the card
      HomePage.closeButton.click();
    // Select a product card - Lemon Juice (500ml)
      HomePage.productBox.contains("Lemon Juice (500ml)").click();
    // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.productInfo.should("contain.text", "Sour but full of vitamins.");
    // Close the card
      HomePage.closeButton.click();
    // Select a product card - Strawberry Juice (500ml)
      HomePage.productBox.contains("Strawberry Juice (500ml)").click();
    // Validate that the card (should) contains "Sweet & tasty!"
      HomePage.productInfo.should("contain.text", "Sweet & tasty!");      
    });

    it("Read a review", () => {
    // Create scenario - Read a review
    // Click on search icon
      HomePage.searchIcon.click();
    // Search for King
      HomePage.searchField.type("King{enter}");
    // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
      HomePage.productBox.contains("King of the Hill").click();
    // Click expand reviews button/icon (wait for reviews to appear)
      HomePage.expandReview.click();
    // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!  
      HomePage.expandReview.should("contain.text", "K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!");    
    });

    it("Add a review", () => {
    // Create scenario - Add a review
    // Click on search icon
      HomePage.searchIcon.click();
    // Search for Raspberry
      HomePage.searchField.type("Raspberry{enter}");
    // Select a product card - Raspberry Juice (1000ml)
      HomePage.productBox.contains("Raspberry Juice (1000ml)").click();
    // Type in review - "Tastes like metal"
      HomePage.writeInReview.click();
      HomePage.writeInReview.type("Tastes like metal");
    // Click Submit
      HomePage.submitButton.click();
    // Click expand reviews button/icon (wait for reviews to appear)
      HomePage.expandReview.click();
    // Validate review -  "Tastes like metal"   
      HomePage.expandReview.should("contain.text", "Tastes like metal");   
    });

    it("Validate product card amount", () => {
    // Create scenario - Validate product card amount
    // Validate that the default amount of cards is 12
      HomePage.cardQuantity.should("contain.text", "12");
    // Change items per page (at the bottom of page) to 24
      HomePage.openCardQuantity.click();
      HomePage.chooseCardQuantity.contains("24").click();
    // Validate that the amount of cards is 24
      HomePage.cardQuantity.should("contain.text", "24");
    // Change items per page (at the bottom of page) to 36
      HomePage.openCardQuantity.click();
      HomePage.chooseCardQuantity.contains("36").click();
    // Validate that the amount of cards is 36
      HomePage.cardQuantity.should("contain.text", "36");    
    });

    it("Buy Girlie T-shirt", () => {
    // Create scenario - Buy Girlie T-shirt
    // Click on search icon
      HomePage.searchIcon.click();
    // Search for Girlie
      HomePage.searchField.type("Girlie{enter}");
    // Add to basket "Girlie"
      //HomePage.addToBasket.click();
    // Click on "Your Basket" button
      HomePage.myBasket.click();
    // Create page object - BasketPage
    // Click on "Checkout" button
      BasketPage.checkoutButton.click();
    // Create page object - SelectAddressPage
    // Select address containing "United Fakedom"
      SelectAddressPage.chooseAddress.contains("United Fakedom").click();
    // Click Continue button
      SelectAddressPage.proceedToPayment.click();
    // Create page object - DeliveryMethodPage
    // Select delivery speed Standard Delivery
      DeliveryMethodPage.chooseDeliverySpeed.contains("Standard Delivery").click();
    // Click Continue button
      DeliveryMethodPage.proceedToPayment.click();
    // Create page object - PaymentOptionsPage
    // Select card that ends with "5678"
      PaymentOptionsPage.chooseCard.contains("5678").siblings().children("mat-radio-button").click();
    // Click Continue button
      PaymentOptionsPage.proceedToReview.click();
    // Create page object - OrderSummaryPage
    // Click on "Place your order and pay"
      OrderSummaryPage.placeOrder.click();
    // Create page object - OrderCompletionPage
    // Validate confirmation - "Thank you for your purchase!"  
      OrderCompletionPage.orderConfirmation.should("contain.text","Thank you for your purchase!");    
    });


    // Create scenario - Add address
    it("Add address", () => {
    // Click on Account
      HomePage.accountButton.click();
    // Click on Orders & Payment
      HomePage.ordersAndPayment.click();
    // Click on My saved addresses
      HomePage.savedAdresses.click();
    // Create page object - SavedAddressesPage
    // Click on Add New Address
      SavedAddressesPage.newAdress.click();
    // Create page object - CreateAddressPage
    // Fill in the necessary information
      const randomNumber = Math.floor(Math.random() * 10000000);
      const randomAddressNumber = Math.floor(Math.random() * 100);
      const randomAdress = `Terbatas iela ${randomAddressNumber}`;
      CreateAddressPage.getCountryField.type("Latvia");
      CreateAddressPage.getNameField.type("Janka");
      CreateAddressPage.getMobileNumberField.type(randomNumber);
      CreateAddressPage.getZipCodeField.type("LV-1234");
      CreateAddressPage.getAddressField.type(randomAdress);
      CreateAddressPage.getCityField.type("Valmiera");
    // Click Submit button
      CreateAddressPage.submitButton.click();
    // Validate that previously added address is visible
      CreateAddressPage.seekAddress.should("contain", randomAdress);
    });

    // Create scenario - Add payment option
    it.only("Add payment option", () => {
    // Click on Account
      HomePage.accountButton.click();
    // Click on Orders & Payment
      HomePage.ordersAndPayment.click();
    // Click on My payment options
      HomePage.paymentOptions.click();
    // Create page object - SavedPaymentMethodsPage
    // Click Add new card
      SavedPaymentMethodsPage.newCardForm.click();
    // Fill in Name
      SavedPaymentMethodsPage.getNameField.type("Janka");
    // Fill in Card Number
      SavedPaymentMethodsPage.getCardNumberField.type(5573682012341234);
    // Set expiry month to 7
      SavedPaymentMethodsPage.getExpiryMonth.select('7');
    // Set expiry year to 2090
      SavedPaymentMethodsPage.getExpiryYear.select('2090');
    // Click Submit button
      SavedPaymentMethodsPage.submitButton.click();
    // Validate that the card shows up in the list
      SavedPaymentMethodsPage.savedCards.should("contain.text", "Janka").should("contain.text", "7/2090");
    });

  });
});
