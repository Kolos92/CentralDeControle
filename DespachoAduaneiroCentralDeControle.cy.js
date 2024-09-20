/// <reference types="Cypress"/>  

import Home from "../../support/PageObject/HomeCentralDeControle-PageObjects"
import Exportador from "../../support/PageObject/NovoExportador-PageObjects"
import Fabricante from "../../support/PageObject/NovoFabricante-PageObjects"
import Origem from "../../support/PageObject/NovoOrigemDePrerencia-PageObjects"
import Incoterm from "../../support/PageObject/Incoterm-PageObjects"
import Moeda from "../../support/PageObject/Moeda-PageObjects"
import Produtos from "../../support/PageObject/ProdutosCentralDeControle-PageObjects"
import DespachoAduaneiro from "../../support/PageObject/DespachoAduaneiro-PageObjects"

describe('Central de Controle', () => {
    it('Despacho Aduaneiro - Tipo de Operação', () => {
        cy.visit('https://qa-control-panel.godati.com.br')
        //cy.wait(2000)   
        //Menu hamburguer
        Home.BotaoHamburguer()
        //ícone da Engrenagem
        Home.IconeEngrenagem()       
        //Clicando no menu
        DespachoAduaneiro.AbaDespachoAduaneiro()
        //Clicando no Configuração da DUE
        DespachoAduaneiro.ConfiguracaoDue()
        //Clicando em Informações Gerais
        DespachoAduaneiro.InformacoesGerais()
        //Clicando em Dados Básicos
        DespachoAduaneiro.DadosBasicosDespacho()
        //Clicando no Incluir Despacho Aduaneiro
        DespachoAduaneiro.IncluirDespachoAduaneiro()
        //Clicando em Tipo de Operação
        DespachoAduaneiro.VinculoDeOperacaoDespacho()
        //Selecionando Tipo de Operação
        DespachoAduaneiro.SelecionandoTipoOperacaoDespanho()
        //Clicando em Nome do Vínculo
        DespachoAduaneiro.NomeDoVinculoDespacho()
        //Selecionando nome do vínculo
        DespachoAduaneiro.SelecionandoVinculoDespacho()
        //Clicando em Tipo de Operação
        DespachoAduaneiro.TipoDeOperacaoDespacho()
        //Selecionando Tipo de Operação
        DespachoAduaneiro.SelecionandoTipoDeOperacao()
        //Botão Salvar
        DespachoAduaneiro.BotaoSalvarDespachoAduaneiro()

    });

    it('Despacho Aduaneiro - Exportação consorciada', () => {
        cy.visit('https://qa-control-panel.godati.com.br')
        //cy.wait(2000)   
        //Menu hamburguer
        Home.BotaoHamburguer()
        //ícone da Engrenagem
        Home.IconeEngrenagem()       
        //Clicando no menu
        DespachoAduaneiro.AbaDespachoAduaneiro()
        //Clicando no Configuração da DUE
        DespachoAduaneiro.ConfiguracaoDue()
        //Clicando em Informações Gerais
        DespachoAduaneiro.InformacoesGerais()
        //Clicando em Dados Básicos
        DespachoAduaneiro.DadosBasicosDespacho()
        //Clicando no Exportação Consorciada
        DespachoAduaneiro.ExportacaoConsorciadaDespacho()
        //Clicando em Incluir
        DespachoAduaneiro.IncluirExportacaoConsorciada()
        //Clicando no campo Incluir Exportação Consorciada
        DespachoAduaneiro.IncluirVinculoExportacaoConsorciada()
        //Selecionar o vínculo do campo Exportação Consorciada
        DespachoAduaneiro.SelecionarVinculoExportacao()
        //Clicando no campo Nome do Vínculo 
        DespachoAduaneiro.NomeDoVinculoExportacao()
        //Selecionando Vínculo
        DespachoAduaneiro.SelecionandoVinculoExportacao()
        //Campo Exportação Consorciada
        DespachoAduaneiro.ExportacaoConsorciadaCampo()
        //Selecionando Exportação Consorciada
        DespachoAduaneiro.SelecionandoExportacaoConsorciada()
        //Clicando em Salvar Dados
        DespachoAduaneiro.SalvarDadosExportacao()

    });

    it('Despacho Aduaneiro - Situação Especial de Despacho', () => {
        
        cy.visit('https://qa-control-panel.godati.com.br')
        //cy.wait(2000)   
        //Menu hamburguer
        Home.BotaoHamburguer()
        //ícone da Engrenagem
        Home.IconeEngrenagem()       
        //Clicando no menu
        DespachoAduaneiro.AbaDespachoAduaneiro()
        //Clicando no Configuração da DUE
        DespachoAduaneiro.ConfiguracaoDue()
        //Clicando em Informações Gerais
        DespachoAduaneiro.InformacoesGerais()
        //Clicando em Dados Básicos
        DespachoAduaneiro.DadosBasicosDespacho()
        //Clicando na Aba Situação Especial de Despacho
        DespachoAduaneiro.AbaSituacaoEspecial()
        //Clicando em Incluir em Situação Especial
        DespachoAduaneiro.IncluirSituacaoEspecial()
        //Clicando incluir em Situação Especial Despacho
        DespachoAduaneiro.CampoSituacaoEspecial()
        //Selecionando produto em Situação Especial Despacho
        DespachoAduaneiro.SelecionandoVinculoSituacaoEspecial()
        //Clicando Nome do Vínculo 
        DespachoAduaneiro.CampoNomeDoVinculoSituacaoEspecial()
        //Selecionando Nome do Vínculo
        DespachoAduaneiro.SelecionandoCampoNomeDoVinculo()
        //Clicando no campo Situação Especial de Despacho
        DespachoAduaneiro.CampoSituacaoEspecialDespacho()
        //Selecionando no Campo Situação Especial de Despacho
        DespachoAduaneiro.SelecionandoCampoSituacaoEspecial()
        //Clicando em Salvar Dados
        DespachoAduaneiro.SalvarDadosSituacaoEspecial()

    });

    it.only('Despacho Aduaneiro - Tipo de Documento Fiscal', () => {
        
        cy.visit('https://qa-control-panel.godati.com.br')
        //cy.wait(2000)   
        //Menu hamburguer
        Home.BotaoHamburguer()
        //ícone da Engrenagem
        Home.IconeEngrenagem()       
        //Clicando no menu
        DespachoAduaneiro.AbaDespachoAduaneiro()
        //Clicando no Configuração da DUE
        DespachoAduaneiro.ConfiguracaoDue()
        //Clicando em Informações Gerais
        DespachoAduaneiro.InformacoesGerais()
        //Clicando em Dados Básicos
        DespachoAduaneiro.DadosBasicosDespacho()
        //Clicando na Aba Tipo de Documento Fiscal
        DespachoAduaneiro.AbaTipoDeDocumentoFiscal()
        //Clicando no Incluir em Tipo de Documento Fiscal
        DespachoAduaneiro.IncluirTipoDeDocumentoFiscal()
        //Clicando em Incluir Tipo de Documento Fiscal
        DespachoAduaneiro.IncluirVinculoTipoDocumentoFiscal()
        //Selecionando o Tipo de Documento Fiscal
        DespachoAduaneiro.SelecionandoVinculoTipoDocumento()
        //Clicando no campo Nome do Vínculo
        DespachoAduaneiro.NomeDoVinculoTipoDocumento()
        //Selecionando Nome do Vínculo
        DespachoAduaneiro.SelecionandoNomeDoVinculo()
        //Clicando no campo Tipo de Documento Fiscal
        DespachoAduaneiro.TipoDocumentoFiscalTipoDocumento()
        //Selecionando Tipo de Documento Fiscal
        DespachoAduaneiro.SelecionandoTipoDocumentoFiscal()
        //Clicando no Botão Salvar Dados
        DespachoAduaneiro.BotaoSalvarTipoDocumentoFiscal()







    });






});