import React from 'react'
import BasicButton from '../basic_button'
import BaseActivity from '../baseActivity'
import ActivityConstants from '../../../../constants/activityConstants'

import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

/*PROPS DESTA CLASSE DEVE CONTER UM OBJETO atividade do tipo:
    activity: um objetivo com os atributos:
        id: String única para este dado genérico, sendo que deve ter no máximo o valor da constante ActivityConstants.MAX_LENGTH_ID de caracteres
        unitId: id da unidade em que se encontra a atividade, sendo que deve ter no máximo o valor da constante ActivityConstants.MAX_LENGTH_UNIT_ID de caracteres,
        statement: String,
        minExamplesAmount: Número inteiro,
        maxExamplesAmount: Número inteiro,
        questions: lista de objetos com os atributos:
            title: String,
            maxAnswerLength: Número inteiro sendo que:
                a soma de todos os tamanhos de todas as questões não pode passar o valor da constante ActivityConstants.MAX_ANSWER_LENGTH de caracteres,
.*/

class ComplementaryActivity extends BaseActivity {
    constructor(props) {
        super(props)

        this.validateProps()

        this.state = {
            completeUnit: false,
            activity: null,
            answersAmount: 0,
            grabbedItems: []
        }

        //Preenche os dados necessários para a exibição dos exemplos
        this.inicializarExemplos()

        //Atualiza a quantidade de respostas com o número de exemplos exibidos
        this.state.answersAmount = this.state.activity.exemplos.filter(exemplo => exemplo.exibir).length

        /*Obtem e carrega as respostas da atividade caso o usuário já tenha as respondido.*/
        this.obterProximaResposta()                                          

        /*Descobre se a unidade já foi concluída, permitindo ou não uma nova tentativa nas atividades.*/
        this.obterDadosConclusaoUnidade()
    }

    validateProps = () => {
        if(this.props.activity === undefined){
            throw Error("Property \"activity\" is undefined!")
        } else {
            if (this.props.activity.id === undefined || this.props.activity.id.length === 0 || 
                this.props.activity.id.length > ActivityConstants.MAX_LENGTH_ID) {
                throw Error("Property \"activity.id\" is invalid!")
            }

            if (this.props.activity.unitId === undefined || this.props.activity.unitId.length === 0 ||
                this.props.activity.unitId.length > ActivityConstants.MAX_LENGTH_UNIT_ID) {
                throw Error("Property \"activity.unitId\" is invalid!")
            }

            if (this.props.activity.minExamplesAmount === undefined ||
                this.props.activity.maxExamplesAmount === undefined) 
            {
                throw Error("Property \"activity.minExamplesAmount\" and/or \"activity.maxExamplesAmount\" is/are undefined!")
            } else if (this.props.activity.minExamplesAmount > this.props.activity.maxExamplesAmount){
                throw Error("Property \"activity.minExamplesAmount\" is greater than \"activity.maxExamplesAmount\"!")
            }

            if (this.props.activity.questions === undefined) {
                throw Error("Property \"activity.questions\" is undefined!")
            } else if (this.props.activity.questions.length === 0) {
                throw Error("Property \"activity.questions\" is empty!")
            } else {
                let asnwerLengthSum = 0
                this.props.activity.questions.forEach((question, index) => {
                    if (question.title === undefined || question.title === ""){
                        throw Error("Property \"question.title\" of index question " + index + " os list \"activity.questions\" is empty!")
                    }
                    if (question.maxAnswerLength === undefined || question.maxAnswerLength === 0) {
                        throw Error("Property \"question.maxAnswerLength\" of index question " + index + " of list \"activity.questions\" is empty!")
                    } else {
                        asnwerLengthSum += questao.maxAnswerLength
                    }
                })

                if (asnwerLengthSum > ActivityConstants.MAX_ANSWER_LENGTH) {
                    throw Error("The sum of the answers max length of the questions exceeds the limit of " + ActivityConstants.MAX_ANSWER_LENGTH + " characters!")
                }
            }
        }
    }

    /*Obtem as respostas da atividade caso tenha sido resolvida em looping.*/
    obterProximaResposta = () => {
        let API = new window.BridgeRestApi()

        window.addEventListener("evObtemDadosGenericos", this.tratarRespostas, false)

        this.state.activity.exemplos.forEach(exemplo => {
            API.obterDadosGenericos(this.gerarIdentificadorDadoGenerico(exemplo.numero))
        })
    }

    gerarIdentificadorDadoGenerico = (numero) => {
        return this.props.atividade.idUnidade + ActivityConstants.SEPARADOR +
                this.props.atividade.id + ActivityConstants.SEPARADOR + numero
    }

    /*Trata o resultado da chamada a API AvaMEC dentro do método local obterRespostas.*/
    tratarRespostas = (retorno) => {
        //A segunda verificação é feita por que o evento é disparado mais de uma vez para o mesmo item
        if (retorno.detail.status === 200 && this.aindaNaoBuscouItem(retorno.detail.data)) { 
            
            //O valor do item por padrão é o primeiro do vetor data
            let data = retorno.detail.data[0]

            //Tenta apenas se encontrar algo
            if (data !== undefined) {
                //Converte o valor para um objeto JS
                let exemploAPI = JSON.parse(data.valor)

                //Busca o indice do problema no vetor de exemplos
                let indice = this.state.activity.exemplos
                    .findIndex(exemplo => exemplo.numero === exemploAPI.numero)
                
                //Atualiza o valor no indice encontrado
                this.state.activity.exemplos[indice] = exemploAPI

                //Adiciona o item a lista de itens já carregados
                this.state.grabbedItems.push(data.chave)

                this.setState({
                    quantidadeRespostas: this.state.activity.exemplos.filter(exemplo => exemplo.exibir).length  
                    //Atualiza a quantidade de respostas com o número de exemplos exibidos
                })

                //Quando o número de itens buscados for igual ao número total de itens existentes
                if (this.state.grabbedItems.length === this.state.activity.exemplos.length) {
                    //Remove o evento para evitar mais chamadas repetidas
                    window.removeEventListener("evObtemDadosGenericos", this.tratarRespostas, false)
                }
            }
        }
    }

    //Verifica se uma chave dentro do objeto data já está na lista de itensBuscados do state
    aindaNaoBuscouItem = (data) => {
        return !this.state.grabbedItems.includes(data[0].chave)
    }

    /*Gera uma estrutura de atividade com exemplos sem resposta dentro do state.*/
    inicializarExemplos = () => {
        this.state.activity = {
            id: this.props.atividade.id,
            enunciado: this.props.atividade.enunciado,
            quantidadeMinimaExemplos: this.props.atividade.quantidadeMinimaExemplos,
            quantidadeMaximaExemplos: this.props.atividade.quantidadeMaximaExemplos,
            exemplos: []
        }

        //Inicializa os exemplos e suas questões
        for (let x = 1; x <= this.state.activity.quantidadeMaximaExemplos; x++){
            let contador = 0

            let questoes = []

            this.props.atividade.questoes.forEach(questao => {
                questoes.push({
                    id: contador,
                    resposta: "",
                    titulo: questao.titulo,
                    tamanhoMaximoResposta: questao.tamanhoMaximoResposta,
                })
                
                contador++
            })

            //Inicializa exibindo apenas um número de exemplos equivalente a quantidade mínima passada
            this.state.activity.exemplos.push({
                numero: x, 
                exibir: x <= this.state.activity.quantidadeMinimaExemplos,
                questoes: questoes
            })
        }
    }

    /*Registra a resposta de todos os exemplos na API do AvaMEC.*/
    onClickSalvarRespostas = () => {
        let API = new window.BridgeRestApi()

        let exemplos = this.state.activity.exemplos

        //Salva dado a dado do vetor na API AvaMEC
        exemplos.forEach(exemplo => {
            let exemploJSON = JSON.stringify(exemplo)
            API.registrarDadosGenericos(this.gerarIdentificadorDadoGenerico(exemplo.numero), exemploJSON)
        })
        /*To-Do: Escutar resposta para tratar erros.*/
        /*To-Do: Criar tratamento para não salvar itens não modificados.*/
    }

    /*Adiciona um novo espaço para exemplo.*/
    onClickAdd = () => {
        /*Busca o indíce de um elemento escondido.*/
        let indice = this.state.activity.exemplos.findIndex(exemplo => !exemplo.exibir)

        //Caso o item exista
        if (this.state.activity.exemplos[indice] !== undefined) {

            //Aumenta a quantidade de respostas com o novo item
            let quantidadeRespostas = this.state.answersAmount + 1

            //Configura o novo exemplo para ser exibido e o enumera
            this.state.activity.exemplos[indice].exibir = true
            this.state.activity.exemplos[indice].numero = quantidadeRespostas

            //Atualiza o estado do programa
            this.setState({
                quantidadeRespostas: quantidadeRespostas
            })
        }
    }

    /*Remove um espaço de exemplo.*/
    onClickDelete = (numeroExemplo) => {
        /*Encontra o indíce do exemplo pelo seu número.*/
        let indiceExemplo = this.state.activity.exemplos.findIndex(exemplo => exemplo.numero === numeroExemplo)

        /*Deixa de exibir o exemplo selecionado.*/
        this.state.activity.exemplos[indiceExemplo].exibir = false

        /*Limpa as respostas.*/
        this.state.activity.exemplos[indiceExemplo].questoes.forEach(questao =>{
            questao.resposta = ""
        })

        /*Reordena o número dos exemplos exibidos.*/
        this.state.activity.exemplos.sort(exemplo => !exemplo.exibir).forEach((exemplo, indice) => {
            exemplo.numero = indice + 1
        })

        /*Salva as atualizações do state.*/
        this.setState({
            quantidadeRespostas: this.state.answersAmount - 1
        })
    }

    /*Atualiza o valor de uma resposta conforme o usuário a altera.*/
    onChangeResposta = (tamMaximo, numeroExemplo, idQuestao, data) => {
        let atividade = this.state.activity

        let indiceExemplo = this.state.activity.exemplos.findIndex(exemplo => exemplo.numero === numeroExemplo)

        atividade.exemplos[indiceExemplo]
            .questoes[idQuestao]
            .resposta = data.currentTarget.value.substr(0, tamMaximo) 
            //Salva a resposta somente até o valor máximo do campo
            //Isto trata casos de colagem de respostas maiores que o limite máximo

        this.setState({
            atividade: atividade
        })
    }

    //Adiciona o botão de "+" na tela para exibir um novo exemplo
    carregarBotaoAdicionarNovoExemplo = () => {
        //Caso seja possível, carrega o botão
        //Por padrão da API do AvaMEC após concluida a unidade as respostas não podem ser modificadas, 
        //a primera verificação mantém esta regra
        //A segunda verificação limita a adição ao número máximo de exemplos
        if (!this.state.completeUnit && this.state.answersAmount < this.state.activity.quantidadeMaximaExemplos){
            return (
                <Fab size="large" color="primary" aria-label="Add" className="add-button" onClick={this.onClickAdd}>
                    <AddIcon />
                </Fab>
            )
        }   
    }

    //Adicionar um botão para deletar um exemplo se possível
    carregarBotaoDeletarExemplo = (exemplo) => {
        //Para seguir o padrão da API AvaMEC só permite alterações enquanto a unidade não estiver concluída
        //Não permite deletar itens quando a quantidade estiver igual ou menor a quantidade mínima
        if (!this.state.completeUnit 
            && this.state.answersAmount > this.state.activity.quantidadeMinimaExemplos){
                return (
                    <IconButton id={exemplo.numero} 
                                onClick={this.onClickDelete.bind(null, exemplo.numero)} 
                                aria-label="Delete" 
                                className="delete-button">
                        <DeleteIcon fontSize="large" />
                    </IconButton>
                )
        }
    }

    //Carrega um botão para salvar os exemplos
    carregarBotaoSalvar = () => {
        //Por padrão da API AvaMEC só é possível modificar uma atividade antes de a mesma ser concluída
        //Esta condição segue o padrão da API
        if (!this.state.completeUnit){
            return (
                <BasicButton onClick={this.onClickSalvarRespostas} centralize={true}>
                    SALVAR RESPOSTAS
                </BasicButton>
            )
        }
    }

    //Carrega uma questão de um exemplo para a tela
    carregarQuestaoExemplo = (numeroExemplo, questao, key) => {
        return (
            <p key={key}>
                {questao.titulo}:
                            <textarea
                    id={numeroExemplo}
                    value={questao.resposta}
                    onChange={this.onChangeResposta.bind(this, questao.tamanhoMaximoResposta, numeroExemplo, questao.id)}
                    cols="30"
                    rows={Math.round(questao.tamanhoMaximoResposta / ActivityConstants.NUMBER_OF_LETTERS_PER_LINE_TEXTBOX)}
                /><br/>
            </p>
        )
    }

    //Carrega as questões de um exemplo com seus dados para a tela
    carregarQuestoesExemplo = (numeroExemplo, questoes) => {
        return (
            <div>
                {questoes.map((questao, key) => {
                    return ( this.carregarQuestaoExemplo(numeroExemplo, questao, key) )
                })}
            </div>
        )
    }

    //Carrega um exemplo para a tela
    carregarExemplo = (exemplo, key) => {
        if(exemplo.exibir) {
            return (
                <div className="box" key={key}>
                    <div className="algoritmos">
                        {this.carregarBotaoDeletarExemplo(exemplo)}
                        <h4>EXEMPLO {exemplo.numero}</h4>
                        {this.carregarQuestoesExemplo(exemplo.numero, exemplo.questoes)}
                    </div>
                </div>
            )
        }
    }

    //Carrega uma lista de exemplos para a tela
    carregarExemplos = () => {
        return(
            <div>
                {this.state.activity.exemplos.map((exemplo, key) => {
                    return ( this.carregarExemplo(exemplo, key) )
                })}
            </div>
        )
    }

    render(){
        return(
            <div>
                <h2>ATIVIDADE COMPLEMENTAR</h2>
                <p>{this.state.activity.enunciado}</p>
                {this.carregarExemplos()}
                {this.carregarBotaoAdicionarNovoExemplo()}
                {this.carregarBotaoSalvar()}
            </div>
        )
    }
}

export default ComplementaryActivity