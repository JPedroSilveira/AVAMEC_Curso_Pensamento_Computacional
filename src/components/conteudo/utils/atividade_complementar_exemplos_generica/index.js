import React from 'react'
import AtividadeGenerica from '../atividade_generica'
import Button from '@material-ui/core/Button'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import SaveIcon from '@material-ui/icons/Save'

/*PROPS DESTA CLASSE DEVE CONTER UM OBJETO atividade do tipo:
    atividade: um objetivo com os atributos:
        idUnidade: id da unidade em que se encontra a atividade
        id: String única para este dado genérico,
        enunciado: String,
        quantidadeMinimaExemplos: Número inteiro,
        quantidadeMaximaExemplos: Número inteiro,
        questoes: lista de objetos com os atributos:
            titulo: String,
            tamanhoMaximoResposta: Número inteiro,
*/

const QUANTIDADE_LETRAS_POR_LINHA = 180
const SEPARADOR_ID = "_"

class AtividadeComplementarExemplosGenerica extends AtividadeGenerica {
    constructor(props) {
        super(props)

        this.state = {
            unidadeConcluida: false,
            atividade: null,
            quantidadeRespostas: 0,
            idBusca: 0,
            itensBuscados: []
        }

        //Preenche os dados necessários para a exibição dos exemplos
        this.inicializarExemplos()

        /*Obtem e carrega as respostas da atividade caso o usuário já tenha as respondido*/
        this.obterProximaResposta()                                          

        //Atualiza a quantidade de respostas com o número de exemplos exibidos
        this.state.quantidadeRespostas = this.state.atividade.exemplos.filter(exemplo => exemplo.exibir).length

        /*Descobre se a unidade já foi concluída, permitindo ou não uma nova tentativa nas atividades*/
        this.obterDadosConclusaoUnidade()
    }

    /*Obtem as respostas da atividade caso tenha sido resolvida em looping*/
    obterProximaResposta = () => {
        //Busca por mais respostas até o máximo configurado
        if (this.state.idBusca < this.state.atividade.quantidadeMaximaExemplos) {
            let API = new window.BridgeRestApi()

            window.addEventListener("evObtemDadosGenericos", this.tratarRespostas, false)

            API.obterDadosGenericos(this.state.atividade.id + SEPARADOR_ID + this.state.idBusca)
        } else {
            //Remove o evento para evitar mais chamadas
            window.removeEventListener("evObtemDadosGenericos", this.tratarRespostas, false)
        }
    }

    /*Trata o resultado da chamada a API AvaMEC dentro do método local obterRespostas*/
    tratarRespostas = (retorno) => {
        //Quando o idBusca já não tiver sido buscado e em caso de sucesso apenas
        //A primeira verificação é feita por que o evento é disparado mais de uma vez para o mesmo item
        if (retorno.detail.status === 200 && this.aindaNaoBuscouItem(retorno.detail.data)) { 

            //Encontra o valor da chave
            let data = retorno.detail.data.find(info => {
                return info.chave === this.state.atividade.id + SEPARADOR_ID + this.state.idBusca
            })

            //Tenta apenas se encontrar algo
            if (data !== undefined) {
                //Converte o valor para um objeto JS
                let exemplo = JSON.parse(data.valor)

                //Adiciona no vetor de exemplos e salva no state atual
                let atividade = this.state.atividade
                atividade.exemplos[this.state.idBusca] = exemplo

                this.state.itensBuscados.push(this.state.idBusca)

                this.setState({
                    atividade: atividade,
                    idBusca: this.state.idBusca + 1,
                    quantidadeRespostas: this.state.atividade.exemplos.filter(exemplo => exemplo.exibir).length  
                    //Atualiza a quantidade de respostas com o número de exemplos exibidos
                })

                //Busca a próxima resposta para o vetor
                this.obterProximaResposta()
            } else {
                //Remove o evento para evitar mais chamadas
                window.removeEventListener("evObtemDadosGenericos", this.tratarRespostas, false)
            }
        }
    }

    //Verifica se uma chave dentro do objeto data já está na lista de itensBuscados do state
    aindaNaoBuscouItem = (data) => {
        let infoId = data[0].chave.split(SEPARADOR_ID)
        return !this.state.itensBuscados.includes(parseInt(infoId[infoId.length - 1]))
    }

    /*Dá um número para cada exemplo, um id para cada questão de cada exemplo e uma resposta vazia*/
    inicializarExemplos = () => {
        let atividade = {
            id: this.props.atividade.id,
            enunciado: this.props.atividade.enunciado,
            quantidadeMinimaExemplos: this.props.atividade.quantidadeMinimaExemplos,
            quantidadeMaximaExemplos: this.props.atividade.quantidadeMaximaExemplos,
            exemplos: []
        }

        //Caso a quantidade mínima seja maior que a máximo (possível erro), equipara ambas
        if(atividade.quantidadeMinimaExemplos > atividade.quantidadeMaximaExemplos){
            atividade.quantidadeMinimaExemplos = atividade.quantidadeMaximaExemplos
        }

        //Inicializa os exemplos e suas questões
        for(let x = 1; x <= atividade.quantidadeMaximaExemplos; x++){
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

            atividade.exemplos.push({
                numero: x <= atividade.quantidadeMinimaExemplos ? x : null,
                indice: x - 1, //O indíce nunca deve ser modificado
                exibir: x <= atividade.quantidadeMinimaExemplos, //Sempre será exibido o número mínimo de exemplos
                questoes: questoes
            })
        }

        /*Como é invocado no construtor não precisa utilizar setState*/
        this.state.atividade = atividade
    }

    /*Registra a resposta de todos os exemplos na API do AvaMEC*/
    onClickSalvarRespostas = () => {
        let API = new window.BridgeRestApi()

        let exemplos = this.state.atividade.exemplos

        //Salva dado a dado do vetor na API AvaMEC
        exemplos.forEach(exemplo => {
            let exemploJSON = JSON.stringify(exemplo)
            API.registrarDadosGenericos(this.state.atividade.id + SEPARADOR_ID + exemplo.indice, exemploJSON)
        })
        /*To-Do: Escutar resposta para tratar erros*/
    }

    /*Adiciona um novo espaço para exemplo*/
    onClickAdd = () => {
        let atividade = this.state.atividade

        let indice = 0

        /*Busca o indíce do primeiro elemento escondido*/
        while (atividade.exemplos[indice] !== undefined && atividade.exemplos[indice].exibir){
            indice++
        }

        let quantidadeRespostas = this.state.quantidadeRespostas + 1

        atividade.exemplos[indice].exibir = true
        atividade.exemplos[indice].numero = quantidadeRespostas

        this.setState({
            atividade: atividade,
            quantidadeRespostas: quantidadeRespostas
        })
    }

    /*Remove um espaço de exemplo*/
    onClickDelete = (indiceExemplo) => {
        let atividade = this.state.atividade

        /*Deixa de exibir o exemplo selecionado*/
        atividade.exemplos[indiceExemplo].exibir = false

        /*Limpa as respostas*/
        atividade.exemplos[indiceExemplo].questoes.forEach(questao =>{
            questao.resposta = ""
        })

        /*Reordena o número dos exemplos exibidos*/
        let contador = 0
        atividade.exemplos.forEach(exemplo => {
            if(exemplo.exibir){
                contador++
                exemplo.numero = contador
            } else {
                exemplo.numero = null
            }
        })

        /*Salva as atualizações dos exemplos no estado*/
        this.setState({
            atividade: atividade,
            quantidadeRespostas: this.state.quantidadeRespostas - 1
        })
    }

    /*Atualiza o valor de uma resposta conforme o usuário a altera*/
    onChangeResposta = (tamMaximo, indiceExemplo, idQuestao, data) => {
        let atividade = this.state.atividade

        atividade.exemplos[indiceExemplo]
            .questoes[idQuestao]
            .resposta = data.currentTarget.value.substr(0, tamMaximo)

        this.setState({
            atividade: atividade
        })
    }

    render(){
        let deveExibirAdd = !this.state.unidadeConcluida && 
            this.state.quantidadeRespostas < this.state.atividade.quantidadeMaximaExemplos

        //Slice serve para copiar o array em vez de utilizar a referência e alterar a ordem do original
        let exemplos = this.state.atividade.exemplos.slice().sort((a, b) => a.numero > b.numero)

        return(
            <div>
                <h2>ATIVIDADE COMPLEMENTAR</h2>
                <p>{this.state.atividade.enunciado}</p>

                {exemplos.map((exemplo, key) => {
                    let deveExibirDelete = !this.state.unidadeConcluida &&
                        this.state.quantidadeRespostas > this.state.atividade.quantidadeMinimaExemplos
                    return (
                        <div key={key}>
                            {exemplo.exibir && 
                                <div className="box">
                                    <div className="algoritmos">
                                        {deveExibirDelete &&
                                        <IconButton id={exemplo.indice} onClick={this.onClickDelete.bind(null, exemplo.indice)} aria-label="Delete" className="delete-button">
                                                <DeleteIcon fontSize="large" />
                                            </IconButton>
                                        }
                                        <h4>EXEMPLO {exemplo.numero}</h4>
                                        {exemplo.questoes.map((questao, key) => {
                                            return (
                                                <p key={key}>
                                                    {questao.titulo}: 
                                                    <textarea 
                                                        id={exemplo.indice} 
                                                        value={questao.resposta} 
                                                        onChange={this.onChangeResposta.bind(this, questao.tamanhoMaximoResposta, exemplo.indice, questao.id)} 
                                                        cols="30" 
                                                        rows={Math.round(questao.tamanhoMaximoResposta / QUANTIDADE_LETRAS_POR_LINHA)} /><br/>
                                                </p>
                                            )
                                        })}
                                    </div>
                                </div>
                            }
                        </div>
                    )
                })}
                {deveExibirAdd &&
                    <Fab size="large" color="primary" aria-label="Add" className="add-button" onClick={this.onClickAdd}>
                        <AddIcon />
                    </Fab>
                }
                {!this.state.unidadeConcluida && 
                    <div className="box">
                        <Button variant="contained" size="large" className="save-button" onClick={this.onClickSalvarRespostas}>
                            <SaveIcon />
                            Salvar respostas
                    </Button>
                    </div>
                }
            </div>
        )
    }
}

export default AtividadeComplementarExemplosGenerica