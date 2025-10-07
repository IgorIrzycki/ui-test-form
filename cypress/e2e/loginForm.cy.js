describe("Test formularza logowania", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000"); // otwiera stronę z formularzem
  });

  it("Powinien pokazać komunikat o brakujących danych", () => {
    cy.get("#login-button").click();
    cy.get("#message").should("contain", "Uzupełnij wszystkie pola!");
  });

  it("Powinien zalogować poprawnie użytkownika admin/1234", () => {
    cy.get("#username").type("admin");
    cy.get("#password").type("1234");
    cy.get("#login-button").click();
    cy.get("#message").should("contain", "Zalogowano pomyślnie!");
  });

  it("Powinien wyświetlić błąd przy niepoprawnych danych", () => {
    cy.get("#username").type("user");
    cy.get("#password").type("wrongpass");
    cy.get("#login-button").click();
    cy.get("#message").should("contain", "Błędna nazwa użytkownika lub hasło.");
  });

  it("Powinien wyczyścić pola po kliknięciu Resetuj", () => {
    cy.get("#username").type("test");
    cy.get("#password").type("123");
    cy.get("button").contains("Resetuj").click();
    cy.get("#username").should("have.value", "");
    cy.get("#password").should("have.value", "");
    cy.get("#message").should("not.exist");
  });
});
