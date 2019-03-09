import React from 'react'

class AtividadeGenerica extends React.Component {

    /*Busca na API do AvaMEC os dados de conclusão do curso e salva no state.*/
    obterDadosConclusaoUnidade = () => {
        let API = new window.BridgeRestApi()

        window.addEventListener("evObtemDadosConclusaoUnidade", this.retornoDadosConclusaoUnidade, false)

        API.obterDadosConclusaoUnidade(this.props.atividade.idUnidade)
    }

    /*Resgata o retorno da API chamado no método obterDadosConclusaoUnidade.*/
    retornoDadosConclusaoUnidade = (retorno) => {
        /*Apenas em caso de sucesso (status 200).*/
        if (retorno.detail.status === 200) {
            if (retorno.detail.data.concluido) { //Somente atualiza o state se estiver concluída
                this.setState({
                    unidadeConcluida: true
                })
            }
        }
        /*To-Do: Tratar erro na resposta do servidor.*/

        /*Remove o listener para evitar chamadas consecutivas.*/
        window.removeEventListener("evObtemDadosConclusaoUnidade", this.retornoDadosConclusaoUnidade, false)
    }
}

export default AtividadeGenerica