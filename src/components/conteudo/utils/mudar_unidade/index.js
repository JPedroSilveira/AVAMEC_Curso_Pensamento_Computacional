import React from 'react'
import './styles.css'

class MudarUnidade extends React.Component {
    constructor(props){
        super(props)
        
        this.state = {
            existeProximaUnidade: false,
            existeUnidadeAnterior: false
        }
    }

    /*Invocado quando uma propriedade passada é modificada, assim pode atualizar o render caso necessário*/
    componentWillReceiveProps(props){
        /*Verifica a existencia de mais unidades*/
        if (props.podeAvancar) {
            this.verificaSeExisteProximaUnidade()
        } 
        if (props.podeRetroceder){
            this.verificaSeExisteUnidadeAnterior()
        }
    }

    /*Realiza a consulta na API para descobrir se existe uma unidade anterior e salva o resultado no state*/
    verificaSeExisteUnidadeAnterior = () => {
        let API = new window.BridgeRestApi()

        window.addEventListener("evObtemSeExisteUnidadeAnterior", this.tratarRetornoExisteUnidadeAnterior, false)
        
        /*Invoca o serviço da API AvaMEC*/
        API.obterSeExisteUnidadeAnterior(this.props.unidadeAtual)
    }

    tratarRetornoExisteUnidadeAnterior = (retorno) => {
        if (retorno.detail.status === 200) { /*Em caso de sucesso*/
            this.setState({ /*Retorno verdadeiro para caso de existencia e falso para não existencia*/
                existeUnidadeAnterior: retorno.detail.data
            })
        }
        /*To-Do: Tratar erro caso o serviço não retorne uma resposta com sucesso (200)*/
        
        /*Remove o listener para evitar chamadas consecutivas*/
        window.removeEventListener("evObtemSeExisteUnidadeAnterior", this.tratarRetornoExisteUnidadeAnterior, false)
    }

    /*Realiza a consulta na API para descobrir se existe uma próxima unidade e salva o resultado no state*/
    verificaSeExisteProximaUnidade = () => {
        let API = new window.BridgeRestApi()
        window.addEventListener("evObtemSeExisteProximaUnidade", this.tratarRetornoExisteProximaUnidade, false)
        /*Invoca o serviço da API AvaMEC*/
        API.obterSeExisteProximaUnidade(this.props.unidadeAtual)
    }

    tratarRetornoExisteProximaUnidade = (retorno) => {
        if (retorno.detail.status === 200) { /*Em caso de sucesso*/
            this.setState({ /*Retorno verdadeiro para caso de existencia e falso para não existencia*/
                existeProximaUnidade: retorno.detail.data
            })
        }
        /*To-Do: Tratar erro caso o serviço não retorne uma resposta com sucesso (200)*/
        
        /*Remove o listener para evitar chamadas consecutivas*/
        window.removeEventListener("evObtemSeExisteProximaUnidade", this.tratarRetornoExisteProximaUnidade, false)
    }

    /*Carrega o botão específico para avançar uma unidade*/
    carregarBotaoAvancar = () => {
        if (this.props.podeAvancar && this.state.existeProximaUnidade){
            return (
                <button type="button" onClick={this.avancarUnidade} className="button button-unidade">
                AVANÇAR PARA A PRÓXIMA UNIDADE
                </button>
            )
        }
    }

    /*Carrega o botão específico para retroceder uma unidade*/
    carregarBotaoRetroceder = () => {
        if (this.props.podeRetroceder && this.state.existeUnidadeAnterior){
            return (
                <button type="button" onClick={this.retrocederUnidade} className="button button-unidade">
                VOLTAR PARA A UNIDADE ANTERIOR
                </button>
            )
        }
    }

    /*Carrega os dados de conclusão da unidade da API AvaMEC e com base neles
     registra a porcentagem de conclusão e avança a unidade*/
    avancarUnidade = () => {
        let API = new window.BridgeRestApi()

        window.addEventListener("evObtemDadosConclusaoUnidade", this.registrarPorcentagemDeConclusao, false)

        API.obterDadosConclusaoUnidade(this.props.unidadeAtual)
    }

    /*Registra porcentagem de conclusão conforme as atividades tenham sido respondidas*/
    registrarPorcentagemDeConclusao = (retorno) => {
        let API = new window.BridgeRestApi()

        retorno = retorno.detail

        if(retorno.status === 200){
            retorno = retorno.data
            if (retorno.unidade.permitePorcentagem && String(retorno.porcentagemConclusao) < "100"){
                API.registrarPorcentagemConclusaoUnidade(this.props.unidadeAtual, "100")
            }
        }
        
        /*Remove o listener para evitar chamadas consecutivas*/
        window.removeEventListener("evObtemDadosConclusaoUnidade", this.registrarPorcentagemDeConclusao, false)
    
        API.obterProximaUnidade(this.props.unidadeAtual)
    }

    /*Acessa a API e chama o método para redicionar para a unidade anterior*/
    retrocederUnidade = () => {
        let API = new window.BridgeRestApi()

        API.obterUnidadeAnterior(this.props.unidadeAtual)
    }

    render() {
        return (
            <div className="container-proxima-unidade">
                {this.carregarBotaoRetroceder()}
                {this.carregarBotaoAvancar()}
            </div>
        )
    }
}

export default MudarUnidade

