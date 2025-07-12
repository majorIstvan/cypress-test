describe("template spec", () => {
    beforeEach ("visit the site", () => {
        cy.visit("https://agropark.hu");
    });

    it("check navbar", () => {
        cy.get(".header-top-box").then(($navbar) => {
            expect($navbar).to.be.visible;
        });
    });
});
