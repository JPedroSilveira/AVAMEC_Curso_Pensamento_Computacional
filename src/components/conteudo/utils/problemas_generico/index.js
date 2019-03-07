import React from 'react'
import ReactHtmlParser from 'react-html-parser';
import AtividadeGenerica from '../atividade_generica'

/*PROPS DESTA CLASSE DEVE CONTER UM OBJETO atividade do tipo:
    atividade: um objetivo com os atributos:
        idUnidade: String, representa o id da unidade em questão,
        problemas: lista de objetos com os atributos:
            id: String única para cada problema, NÃO DEVE CONTAR O "SEPARADOR_ID",
            titulo: String,
            texto: String,
            tamanhoMaximoResposta: Número inteiro
*/

const QUANTIDADE_LETRAS_POR_LINHA = 180
const SEPARADOR_ID = "_sep%ger_"

class ProblemasGenerico extends AtividadeGenerica {
    constructor(props) {
        super(props)

        this.state = {
            unidadeConcluida: false,
            problemasBuscados: []
        }

        this.validarPropriedades()

        /*Obtem e carrega as respostas da atividade caso o usuário já tenha as respondido*/
        this.obterRespostas()

        /*Descobre se a unidade já foi concluída, permitindo ou não uma nova tentativa nas atividades*/
        this.obterDadosConclusaoUnidade()
    }

    /*Válida se todas as propriedades necessárias foram passadas*/
    validarPropriedades = () => {
        if(this.props.atividade === undefined){
            throw Error("Não foi repassada a propriedade atividade para o componente!")
        } else {
            if (this.props.atividade.idUnidade === undefined){
                throw Error("O atributo idUnidade da propriedade atividade está indefinido!")
            }
            if (this.props.atividade.problemas === undefined || this.props.atividade.problemas === []){
                throw Error("O atributo problemas da propriedade atividade está indefinido ou vazio!")
            } else {
                this.props.atividade.problemas.forEach((problema, indice) => {
                    if(problema.id === undefined || problema.id === ""){
                        throw Error("O atributo \"id\" do problema de indice " + indice + " está indefinido ou vazio!")
                    }
                    if(problema.tamanhoMaximoResposta === undefined){
                        throw Error("O atributo \"tamanhoMaximoResposta\" do problema de indice " + indice + " está indefinido ou vazio!")
                    }
                })
            }
        } 
    }

    /*Obtem as respostas do problema em looping*/
    obterRespostas = () => {
        //Busca por mais respostas até o máximo configurado
        let API = new window.BridgeRestApi()

        window.addEventListener("evObtemDadosGenericos", this.tratarRespostaAPI, false)

        this.props.atividade.problemas.forEach(problema => {
            API.obterDadosGenericos(this.props.atividade.idUnidade + SEPARADOR_ID + problema.id)
        })
    }

    /*Trata o resultado da chamada a API AvaMEC dentro do método local obterRespostas*/
    tratarRespostaAPI = (retorno) => {

        //Quando o idBusca já não tiver sido buscado e em caso de sucesso apenas
        //A primeira verificação é feita por que o evento é disparado mais de uma vez para o mesmo item
        if (retorno.detail.status === 200 && this.aindaNaoBuscouItem(retorno.detail.data)) {

            //Encontra o valor do item atual, por padrão ele vem em um vetor e é o primeiro da lista
            let data = retorno.detail.data[0]

            //Tenta apenas se encontrar algo
            if (data !== undefined) {
                //Converte o valor para um objeto JS
                let problemaAPI = JSON.parse(data.valor)

                //Busca o indice do problema no vetor problemas da prop atividade
                let indice = this.props.atividade.problemas.findIndex(problema => problema.id === problemaAPI.id)

                //Atualiza o valor no indice encontrado
                this.props.atividade.problemas[indice] = problemaAPI

                //Adiciona o item a lista de itens já carregados
                this.state.problemasBuscados.push(problemaAPI.id)

                /*Atualiza o render com os novos valores*/
                this.forceUpdate()

                if (this.state.problemasBuscados.length === this.props.atividade.problemas.length) {
                    /*Remove o listener para evitar mais chamadas*/
                    window.removeEventListener("evObtemDadosGenericos", this.tratarRespostaAPI, false)
                }
            }
        }
    }

    //Verifica se uma chave dentro do objeto data já está na lista de problemasBuscados do state
    aindaNaoBuscouItem = (data) => {
        /*Cria um regex para pegar o id do item que vem depois da primeira aparição do separador padrão*/
        let regex = new RegExp(SEPARADOR_ID + "(.+)")

        /*Realiza o split com o regex para pegar o id na segunda parte da lista retornada*/
        let infoId = data[0].chave.split(regex)[1]

        /*Retorna verdadeiro se o id não estiver na lista "problemasBuscados"*/
        return !this.state.problemasBuscados.includes(infoId)
    }
    
    /*Registra a resposta de todos os problemas na API do AvaMEC*/
    onClickSalvarRespostas = () => {
        let API = new window.BridgeRestApi()

        let problemas = this.props.atividade.problemas

        //Salva dado a dado do vetor na API AvaMEC
        problemas.forEach(problema => {
            let problemaJSON = JSON.stringify(problema)
            API.registrarDadosGenericos(this.props.atividade.idUnidade + SEPARADOR_ID + problema.id, problemaJSON)
        })
        /*To-Do: Escutar resposta para tratar erros*/
    }

    /*Atualiza o valor de uma resposta conforme o usuário a altera*/
    onChangeResposta = (tamMaximo, data) => {
        
        /*Encontra o indice do problema a ser modificado*/
        let indice = this.props.atividade.problemas
            .findIndex(problema => problema.id === data.currentTarget.id)

        /*Atualiza seu valor de resposta*/
        this.props.atividade.problemas[indice].resposta = data.currentTarget.value.substr(0, tamMaximo)

        /*Utilizado pelo fato de a modificação ser na props e não no state, 
        sendo assim não atualiza o render sozinho*/
        this.forceUpdate()
    }

    carregarTitulo = (titulo) => {
        if (titulo !== undefined){
            return (<h2>{titulo}</h2>)
        } else if (this.props.atividade.problemas.length > 1) {
            return (<h2>PROBLEMAS</h2>)
        } else {
            return (<h2>PROBLEMA</h2>)
        }
        
    }

    carregarProblemas = (problemas) => {
        return(
            <div>
                {problemas.map((problema, key) => {
                        return (
                            <div className="box" key={key}>
                                <div className="boxed problema">
                                    <strong>{problema.titulo}.</strong> {ReactHtmlParser(problema.texto)}
                                    <br /><br />
                                    {ReactHtmlParser(problema.subtitulo)}
                                    <textarea
                                        id={problema.id}
                                        value={problema.resposta}
                                        onChange={this.onChangeResposta.bind(this, problema.tamanhoMaximoResposta)}
                                        cols="120"
                                        rows={Math.round(problema.tamanhoMaximoResposta / QUANTIDADE_LETRAS_POR_LINHA)} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    carregarBotaoSalvar = () => {
        if (!this.state.unidadeConcluida){
            return (
                <div className="box">
                    <div className="button-container">
                        <button type="button" className="button" onClick={this.onClickSalvarRespostas}>SALVAR RESPOSTAS</button>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.carregarTitulo(this.props.atividade.titulo)}
                {this.carregarProblemas(this.props.atividade.problemas)}
                {this.carregarBotaoSalvar()}
            </div>
        )
    }
}

export default ProblemasGenerico