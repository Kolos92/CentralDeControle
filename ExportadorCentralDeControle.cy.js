/// <reference types="Cypress"/>  

import Home from "../../support/PageObject/HomeCentralDeControle-PageObjects"
import Exportador from "../../support/PageObject/NovoExportador-PageObjects"
import Fabricante from "../../support/PageObject/NovoFabricante-PageObjects"

describe('Central de Controle', () => {
    it('Criando novo exportador', () => {
        cy.visit('https://qa-control-panel.godati.com.br')
        //cy.wait(2000)   
        //Menu hamburguer
        Home.BotaoHamburguer()
        //ícone da Engrenagem
        Home.IconeEngrenagem()
        //Ícone Lateral Exportador
        Exportador.BotaoExportador()
        //Clicando no botão de novo exportador
        Exportador.BotaoIncluirExportador()
        //Inserir nome do exportador
        Exportador.CampoNome('A')
        //Clicando no Campo de Matriz ou Filial
        Exportador.CampoMatrizFilial()
        //Campo CNPJ
        Exportador.CampoCNPJ('99.951.245/0001-61')
        //Selecionando País - Brasil
        Exportador.CampoPais()
        //Botão Cadastrar
        Exportador.BotaoCadastrar()
    });

    it('Clicando em Dados Básicos - Exportador', () => {
        cy.visit('https://qa-control-panel.godati.com.br')
        //cy.wait(2000)   
        //Menu hamburguer
        Home.BotaoHamburguer()
        //ícone da Engrenagem
        Home.IconeEngrenagem()
        //Ícone Lateral Exportador
        Exportador.BotaoExportador()
        //Selecionando o exportador na lista de exportadores, inserir no "NovoExportador-PageObjects.js, dentro do contains
        //o nome do Exportador)"
        Exportador.ListaDeExportadores()
        //Clicando nos Dados Básicos
        Exportador.DadosBasicosExportador()
        //Campo Nome do Exportador - Para alterar o nome, ir no arquivo NovoExportador-PageObjects, e alterar dentro do Type.
        Exportador.NomeDoExportador()
        //Selecionando Matriz de Exportador, para alterar ir em NovoExportador-PageObjects, e alterar 
        Exportador.MatrizFilialExportador()
        //Campo Status do CNPJ do Exportador
        Exportador.StatusCNPJExportador()
        //Campo Endereço do Exportador
        Exportador.CampoEndereçoExportador()
        //Campo Número do Exportador
        Exportador.CampoNumeroExportador()
        //Campo País do Exportador, e selecionando o Brasil
        Exportador.PaisDoExportador()
        //Selecionando o Estado do Exportador, como SP.
        Exportador.BairroDoExportador()
        //Cep do Exportador
        Exportador.CEPDoExportador()
        //I.E do Exportador
        Exportador.IEDoExportador()
        //Botão Salvar Dados do Exportador
        Exportador.BotaoSalvarDadosExportador()


    });

    it('Dados Básicos Fabricante', () => {
       
        cy.visit('https://qa-control-panel.godati.com.br')
        //cy.wait(2000)   
        //Menu hamburguer
        Home.BotaoHamburguer()
        //ícone da Engrenagem
        Home.IconeEngrenagem()
        //Ícone Lateral Exportador
        Exportador.BotaoExportador()
        //Selecionando o exportador na lista de exportadores, inserir no "NovoExportador-PageObjects.js, dentro do contains
        //o nome do Exportador)"
        Exportador.ListaDeExportadores()
        //Clicando nos Dados Básicos
        Exportador.DadosBasicosExportador()
        //Clicando na aba Fabricante
        Fabricante.AbaFabricante()
        //Repetir Dados do Exportador
        Fabricante.RepetirDadosExportador()
        //Botão salvar dados
        Exportador.BotaoSalvarDadosExportador()
        
    });






});