describe('Funcionalidade Página de Produtos', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    })
    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            .first()
            // .last()
            // .eq(3)
            // .contains('Ariel Roll Sleeve Sweatshirt')
            .click()
    })

    it.only('Deve adicionar um produto ao carrinho', () => {

        var quantidade = 3

        cy.get('[class="product-block grid"]')
            .first()
            .click()

        cy.get('.button-variable-item-M').click()

        cy.get('.button-variable-item-Green').click()

        cy.get('.input-text').clear()

        cy.get('.input-text').type(quantidade)

        cy.get('.single_add_to_cart_button').click()

        cy.get('.woocommerce-message').should('contain', quantidade, ' × “Abominable Hoodie” foram adicionados no seu carrinho.')

    });
})