describe("toggler", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });
  it("render on the app", () => {
    cy.get("#settings-container")
      .find(".toggle-wrapper")
      .should("have.length", 2);
  });

  it("update toggles when clicked", () => {
    cy.get("#settings-container")
      .get(".toggle-wrapper")
      .get("#number")
      .should("be.checked")
      .click()
      .should("not.be.checked")
      .click()
      .should("be.checked");
  });

  it("generated passwords without numbers", () => {
    cy.get("#settings-container")
      .get(".toggle-wrapper")
      .get("#number")
      .should("be.checked")
      .click()
      .should("not.be.checked");
    cy.get("#btn").click();
    cy.get(".passwords-container")
      .get(".generatedPassword")
      .contains(/[^0-9]/);
  });

  it("generated passwords without symbols", () => {
    cy.get("#settings-container")
      .get(".toggle-wrapper")
      .get("#symbol")
      .should("be.checked")
      .click()
      .should("not.be.checked");
    cy.get("#btn").click();
    cy.get(".passwords-container")
      .get(".generatedPassword")
      .contains(/[a-zA-Z0-9 ]*$/);
  });

  it("generated passwords without numbers and symbols", () => {
    cy.get("#settings-container")
      .get(".toggle-wrapper")
      .get("#number")
      .should("be.checked")
      .click()
      .should("not.be.checked");
    cy.get("#settings-container")
      .get(".toggle-wrapper")
      .get("#symbol")
      .should("be.checked")
      .click()
      .should("not.be.checked");
    cy.get("#btn").click();
    cy.get(".passwords-container")
      .get(".generatedPassword")
      .contains(/[^0-9]/)
      .contains(/[a-zA-Z]/);
  });
});
