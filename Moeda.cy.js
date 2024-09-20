/// <reference types="Cypress"/>  

import Home from "../../support/PageObject/HomeCentralDeControle-PageObjects"
import Exportador from "../../support/PageObject/NovoExportador-PageObjects"
import Fabricante from "../../support/PageObject/NovoFabricante-PageObjects"
import Origem from "../../support/PageObject/NovoOrigemDePrerencia-PageObjects"
import Incoterm from "../../support/PageObject/Incoterm-PageObjects"
import Moeda from "../../support/PageObject/Moeda-PageObjects"


describe('Central de Controle', () => {
    it('Moeda', () => {
        cy.visit('https://qa-control-panel.godati.com.br')
        //cy.wait(2000)   
        //Menu hamburguer
        Home.BotaoHamburguer()
        //ícone da Engrenagem
        Home.IconeEngrenagem()
        //Ícone Lateral Exportador
        Exportador.BotaoExportador()
        //Clicando no botão de novo exportador
        Exportador.ListaDeExportadores()
        //Clicando na aba Moeda   
        Moeda.AbaMoeda()
        //Clicando no botão Incluir
        Moeda.IncluirMoeda()
        //Incluir vínculo da Moeda
        Moeda.IncluirVinculoMoeda()
        //Selecionar vínculo da Moeda
        Moeda.SelecionarVinculoMoeda()
        //Clicando Nome do vínculo
        Moeda.IncluirNomeMoeda()
        //Selecionando Nome do Vínculo
        Moeda.SelecionandoNomeMoeda()
        //Clicando Moeda do Produto
        Moeda.IncluirProdutoMoeda()
        //Selecionando Moeda do Produto
        Moeda.SelecionarProdutoMoeda()
        //Clicando em Salvar Dados
        Moeda.SalvarDadosMoeda()

    });
});