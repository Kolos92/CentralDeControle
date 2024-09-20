/// <reference types="Cypress"/>  

import Home from "../../support/PageObject/HomeCentralDeControle-PageObjects"
import Importador from "../../support/PageObject/NovoImportador-PageObjects"
import Exportador from "../../support/PageObject/NovoExportador-PageObjects"

describe('Central de Controle', () => {
    it('Adicionar Importador', () => {
        cy.visit('https://qa-control-panel.godati.com.br')
        //cy.wait(2000)   
        //Menu hamburguer
        Home.BotaoHamburguer()
        //ícone da Engrenagem
        Home.IconeEngrenagem()
        //Clicando no menu importador
        Importador.BotaImportador()
        //Clicando no botão incluir importador
        Importador.BotaoIncluirImportador()
        //Campo nome do Importador
        Importador.NomeDoImportador('Nome Do Importador')
        //Clicando no campo País e selecionando Brasil
        Importador.CampoPaís()
        //Clicando em Cadastrar
        Exportador.BotaoCadastrar()
        cy.wait(2000)
        //Fechando
        Importador.BotaoFechar()

    });

    it.only('Dados Básicos Importador', () => {
        cy.visit('https://qa-control-panel.godati.com.br')
        //cy.wait(2000)   
        //Menu hamburguer
        Home.BotaoHamburguer()
        //ícone da Engrenagem
        Home.IconeEngrenagem()
        //Clicando no menu importador
        Importador.BotaImportador()
        //Selecionando um Importador Específico
        Importador.SelecionarImportador()
        //Clicando nos Dados Básicos do Importador
        Importador.DadosBasicosImportador()
        //Endereço do Exportador
        Importador.EnderecoImportador()
        //Número do Importador
        Importador.NumeroImportador()
        cy.wait(5000)
        //Estado/Provincia do Importador
        Importador.EstadoProvinciaImportador()
        //Cidade do Importador
        Importador.CidadeDoImportador()
        //Zip Code Importador
        Importador.ZipCodeImportador()
        //Salvar Dados Importador
        Exportador.BotaoSalvarDadosExportador()

    });

});