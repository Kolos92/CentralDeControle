/// <reference types="Cypress"/>  

import Home from "../../support/PageObject/HomeCentralDeControle-PageObjects"
import Exportador from "../../support/PageObject/NovoExportador-PageObjects"
import Fabricante from "../../support/PageObject/NovoFabricante-PageObjects"
import Origem from "../../support/PageObject/NovoOrigemDePrerencia-PageObjects"
import Incoterm from "../../support/PageObject/Incoterm-PageObjects"
import Moeda from "../../support/PageObject/Moeda-PageObjects"
import Produtos from "../../support/PageObject/ProdutosCentralDeControle-PageObjects"


describe('Central de Controle', () => {
    it('Criar Produto', () => {
        cy.visit('https://qa-control-panel.godati.com.br')
        //cy.wait(2000)   
        //Menu hamburguer
        Home.BotaoHamburguer()
        //ícone da Engrenagem
        Home.IconeEngrenagem()
        //Clicando na Aba Produtos
        Produtos.AbaProdutos()
        //Clicando em Incluir Produto
        Produtos.IncluirProduto()
        //Preenchendo PartNumber
        Produtos.Partnumber()
        //Preenchendo NCM
        Produtos.NCM()
        //Descrição do Produto
        Produtos.DescricaoProduto()
        //Clicando no Botão Cadastrar
        Produtos.BotaoCadastrar()


    });






});