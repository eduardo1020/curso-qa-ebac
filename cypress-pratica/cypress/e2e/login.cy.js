// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

context('Funcionalidade Login', () => {

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
  })

  afterEach(() => {
    cy.screenshot()
  })

  it('Deve fazer login com sucesso', () => {
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.page-title').should('contain', 'Minha conta')
  })

  it('Deve exibir uma mensagem de erro ao inserir usuario inválido', () => {
    cy.get('#username').type('ebac@teste')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error').should('contain', 'Erro: o usuário ebac@teste não está cadastrado neste site. Se você não está certo de seu nome de usuário, experimente o endereço de e-mail.')
  })

  it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('@teste.com')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error').should('contain', 'Erro: a senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')
  })
})