describe("App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("renders the app", () => {
    cy.contains("Generate a");
    cy.contains("random password");
    cy.contains("Never use an insecure password again.");
  });

  it("updates the password length when slider is changed", () => {
    cy.get("#passwordLength").invoke("val", "10").trigger("change");
    cy.get("#passwordLengthText").should("have.text", "10");
  });

  it("generates passwords when button is clicked", () => {
    cy.get("#btn").click();
    cy.get("#generatedPassword").should("have.length", 4);
  });

  it("copies password to clipboard when clicked", () => {
    cy.get("#btn").click();
    cy.get("#generatedPassword").first().click();
    cy.window().then((win) => {
      expect(win.navigator.clipboard.writeText).to.have.been.calledWith(
        cy.get("#generatedPassword").first().text(),
      );
    });
  });
});
