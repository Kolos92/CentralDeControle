/// <reference types="Cypress"/>  

import Home from "../../support/PageObject/HomeCentralDeControle-PageObjects"
import Exportador from "../../support/PageObject/NovoExportador-PageObjects"
import Fabricante from "../../support/PageObject/NovoFabricante-PageObjects"
import Origem from "../../support/PageObject/NovoOrigemDePrerencia-PageObjects"
import Incoterm from "../../support/PageObject/Incoterm-PageObjects"

describe('Central De Controle', () => {
    it('Novo Incoterm', () => {
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
        //Clicando no Botão Origem de Preferência       
        Incoterm.MenuIncoterm()
        //Clicando em Incluir Incoterm
        Incoterm.IncluirIncoterm()
        //Clicar no vínculo da Incoterm
        Incoterm.VinculoIncoterm()
        //Selecionar vínculo Incoterm
        Incoterm.SelecionarIncoterm()
        //Clicar no nome Incoterm
        Incoterm.NomeIncoterm()
        //Selecionando Nome Incoterm
        Incoterm.SelecionandoNomeIncoterm()
        //Clicando no campo Incoterm
        Incoterm.ClicandoIncoterm()
        //Selecionando Campo Inconterm
        Incoterm.SelecionandoIncoterm()
        //Clicando no botão Salvar
        Incoterm.SalvarDadosIncoterm()


    });























});