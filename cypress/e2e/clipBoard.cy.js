describe("App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("should call the clipboard API when a password is clicked", () => {
    // Stub the Clipboard API
    cy.window().then((win) => {
      const clipboardStub = cy
        .stub(win.navigator.clipboard, "writeText")
        .resolves();
      cy.on("window:alert", (str) => {
        expect(str).to.contain("copied to clipboard"); // Check if the alert is shown
      });

      // Click the "Generate passwords" button to generate passwords
      cy.get("#btn").click();

      // Click on the first generated password
      cy.get(".passwords-container .generatedPassword")
        .first()
        .click()
        .then(() => {
          // Check if the clipboard function was called with the correct password
          cy.get(".passwords-container .generatedPassword")
            .first()
            .invoke("text")
            .then((passwordText) => {
              expect(clipboardStub).to.have.been.calledWith(passwordText);
            });
        });
    });
  });
});
