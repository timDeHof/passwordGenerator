describe("App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("renders the app", () => {
    cy.contains("Generate a");
    cy.contains("random password");
    cy.contains("Never use an insecure password again.");
  });
});
