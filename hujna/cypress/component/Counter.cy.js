import Counter from "../../src/lib/Counter.svelte";

describe('Counter.cy.js', () => {
  it('playground', () => {
    cy.mount(Counter)
  })
  it('Тест хуйни 2', () => {
    cy.mount(Counter)
    cy.get("button").click();
    cy.get("button").should("have.text","count is 1")
  })
  it('Тест хуйни 3', () => {
    const clickSpy = cy.spy().as("clickSpy");
    cy.mount(Counter).then(({component}) => {
      component.$on('click',clickSpy);
    });
    cy.get("button").click();
    cy.get("@clickSpy").should('have.been.calledWithPatch',{
      detail: {count:1}
    })
  })
})

