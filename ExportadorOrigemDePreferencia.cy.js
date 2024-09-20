/// <reference types="Cypress"/>  

import Home from "../../support/PageObject/HomeCentralDeControle-PageObjects"
import Exportador from "../../support/PageObject/NovoExportador-PageObjects"
import Fabricante from "../../support/PageObject/NovoFabricante-PageObjects"
import Origem from "../../support/PageObject/NovoOrigemDePrerencia-PageObjects"

describe('Cadastrar Origem de Preferência', () => {
    it('Novo Origem de Preferência', () => {
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
        Origem.OrigemDePreferencia()
        //Clicando no Botão de Incluir, dentro da aba Marítimo
        Origem.MaritimoIncluir()
        //Clicando no campo Incluir Porto de Origem
        Origem.IncluirPortoOrigem()
        //Nome do Vínculo Selecionado
        Origem.NomeDoVinculo()
        //Porto de Origem
        Origem.PortoDeOrigem()
        //Salvar Dados 
        Exportador.BotaoSalvarDadosExportador()
        //Botão Fechar
        Origem.BotaoFechar2()
        //Botao Fechar Novo Vínculo Criado com Sucesso
        Origem.CliqueForaModal()

    });


    it('Aba Aéreo', () => {
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
        Origem.OrigemDePreferencia()
        //Clicando na aba Aéreo
        Origem.AbaAereo()
        //Clicando no Incluir, dentro do Aéreo
        Origem.IncluirAereo()
        //Clicando em Incluir vínculo do aeroporto de origem
        Origem.IncluirVinculoAereo()
        //Incluir vínculo do aeroporto de origem
        Origem.SelecionandoVinculoAereo()
        //Clicando nome do vínculo selecionado
        Origem.NomeDoVinculoAereo()
        //Selecionando Nome Aeroporto
        Origem.SelecionandoNomeAereo()
        //Clicando no Aeroporto de Origem
        Origem.AeroportoDeOrigem()
        //Selecionando Aeroporto de Origem
        Origem.SelecionandoAereoportoOrigem()
        //Clicando em Salvar
        Origem.SalvarAeroportoOrigem()
    
    });


    it('Aba Marítimo', () => {
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
        Origem.OrigemDePreferencia()
        //Aba Rodoviária
        Origem.AbaRodoviario()
        //Clicando no Incluir Rodoviário
        Origem.IncluirRodoviario()
        //Clicando no Incluir vínculo Rodoviário
        Origem.IncluirVinculoRodoviario()
        //Selecionando o vínculo rodoviário
        Origem.SelecionandoVinculoRodoviario()
        //Clicando no nome do vínculo
        Origem.NomeVinculoSelecionadoRodoviario()
        //Selecionando o nome do vínculo
        Origem.SelecionandoNomeVinculoRodoviario()
        //Selecionando Local(Estado ou País)
        Origem.LocalDeOrigemRodoviario()
        //Clicando no campo País
        Origem.ClicandoPaisRodoviario()
        //Selecionando Brasil no Rodoviário
        Origem.ClicandoPaisOrigemRodoviario()
        //Selecionando Brasil
        Origem.SelecionandoBrasilRodoviario()
        //Clicando em Salvar
        Origem.SalvarRodoviarioOrigem()
    
    });

    it.only('Aba Courier', () => {
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
        Origem.OrigemDePreferencia()
        //Clicando na aba Courier
        Origem.AbaCourier()
        //Clicando em Incluir Courier
        Origem.IncluirCourier()
        //Incluir vinculo Local de Origem - Courier
        Origem.IncluirVinculoCourier()
        //Selecionando Produto
        Origem.SelecionandoVinculoCourier()
        //Clicando no campo Nome do vínculo
        Origem.NomeDoVinculoCourier()
        //Selecionando o nome do vínculo
        Origem.SelecionandoNomeCourier()
        //Clicando no campo Local de Origem
        Origem.ClicandoLocalOrigemCourier()
        //Selecionando "País"
        Origem.SelecionandoPaisCourier()
        //Clicando no campo País
        Origem.ClicandoPaisCourier()
        //Selecionando Brasil
        Origem.SelecionandoBrasilCourier()
        //Clicando em Salvar Dados
        Origem.SalvarDadosCourier()

    });
















});