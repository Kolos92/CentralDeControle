/// <reference types="Cypress"/>  

import Home from "../../support/PageObject/HomeCentralDeControle-PageObjects"

describe('Central de Controle', () => {
    it('Elementos da HomePage', () => {
    cy.visit('https://qa-control-panel.godati.com.br')
    cy.wait(2000)
    //Frase do "Preencha o campo de pesquisa com o que deseja"
    Home.FraseDoisHome()
    //Frase do "Ou escolha a melhor visualização dos seus pedidos"
    Home.FraseUmHome()
    //Menu hamburguer
    Home.BotaoHamburguer()
    //ícone da Engrenagem
    Home.IconeEngrenagem()

});

});
