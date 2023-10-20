describe("Slider", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("renders in the app", () => {
    cy.get("#passwordLength").should("have.attr", "value", 15);
  });

  it("updates the password length when slider is changed", () => {
    const destiny = 18;
    const step = 3;
    const initialValue = 1;
    const stepsToReachDestiny = (destiny - initialValue) / step;
    cy.get("#passwordLength").focus();
    cy.get("#passwordLength").realType("{rightarrow}");
    cy.get("#passwordLength").trigger("change");
    // check the internal value
    cy.get("#passwordLength")
      .invoke("val")
      .then((val) => 16)
      .should("eq", 16);

    cy.get("#passwordLengthText").should("have.text", "16");
  });

  it("generates passwords when button is clicked", () => {
    cy.get("#btn").click();
    cy.get(".passwords-container").find("div").should("have.length", 4);
  });

  it("generated passwords have the desired length", () => {
    cy.get("#btn").click();
    cy.get(".passwords-container")
      .get(".generatedPassword")
      .first()
      .then((p) => {
        const passwordTextLength = p.text().split("").length;
        cy.log(p.text().split(""));
        expect(passwordTextLength).to.be.equal(15);
      });
  });
});
