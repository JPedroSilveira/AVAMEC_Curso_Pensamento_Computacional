import React from 'react'
import Paginacao from '../paginacao'
import MudarUnidade from '../mudar_unidade'

class ConteudoGenerico extends React.Component {

    componentDidMount() {
        this.buscaPaginaAtual()
        this.validaPropriedades()
    }

    /*Busca a página atual do localStorage.*/
    buscaPaginaAtual = () => {
        this.setState({
            paginaAberta: localStorage.getItem("PaginaAberta")
        })
    }

    /*Valida se o id da unidade foi repassado como propriedade.*/
    validaPropriedades = () => {
        if(this.props.id === undefined || this.props.id === ""){
            throw Error("A propriedade \"id\" da unidade atual não foi repassada como atributo!")
        }
    }

    /*Função chamada dentro da Paginacao para atualizar os dados do componente atual.*/
    atualizarPagina = () => {
        let paginaAtual = localStorage.getItem("PaginaAberta")
        /*Recuperado localStorage a página aberta atual.*/
        this.setState({
            paginaAberta: paginaAtual
        })
        /*PageUP ao carregar nova página.*/
        window.scrollTo(0, 0)

        this.salvaUltimaPaginaVisitada(paginaAtual)
    }

    /*Salva a última página de redirecionamento acessada na API AvaMEC.*/
    salvaUltimaPaginaVisitada = (paginaAtual) => {
        let caminhoPaginaAtual = "unidades/" + this.props.id + "/page_" + paginaAtual + ".html"

        let API = new window.BridgeRestApi()
        
        API.registrarUltimaPaginaAcessada(this.props.id, caminhoPaginaAtual)
        /*To-Do: Ouvir a resposta e tratar erro caso não consiga salvar a última página acessada.*/
    }
    
    /*Carrega o componente de paginação com as propriedades da unidade.*/
    carregarPaginacao = () => {
        return (
            <Paginacao
                paginasDisponiveis={this.state.paginasDisponiveis}
                funcaoParaAtualizarPagina={this.atualizarPagina}
                unidadeAtual={this.props.id} />
        )
    }

    /*Carrega o componente que deve exibir as opções para mudar a unidade (avançar e retroceder).*/
    carregarMudarUnidade = () => {
        return (
            <MudarUnidade 
                podeRetroceder={this.state.paginaAberta === "1"} 
                podeAvancar={this.state.paginaAberta === String(this.state.paginasDisponiveis)}
                unidadeAtual={this.props.id}
                dadosDeConclusaoUnidade={this.state.dadosConclusaoUnidade} />
        )
    }
}

export default ConteudoGenerico
