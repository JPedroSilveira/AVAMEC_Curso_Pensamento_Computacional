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
        id: String única para este dado genérico, sendo que deve ter no máximo o valor da constante LIMITE_CARACTERES_ID de caracteres
        idUnidade: id da unidade em que se encontra a atividade, sendo que deve ter no máximo o valor da constante LIMITE_CARACTERES_ID_UNIDADE de caracteres,
        enunciado: String,
        quantidadeMinimaExemplos: Número inteiro,
        quantidadeMaximaExemplos: Número inteiro,
        questoes: lista de objetos com os atributos:
            titulo: String,
            tamanhoMaximoResposta: Número inteiro sendo que:
                a soma de todos os tamanhos de todas as questões não pode passar o valor da constante LIMITE_CARACTERES_TAM_MAX_RESPOSTA de caracteres,
*/

const QUANTIDADE_LETRAS_POR_LINHA = 180
const SEPARADOR_ID = "_sep%ger_"
const LIMITE_CARACTERES_ID = 100
const LIMITE_CARACTERES_ID_UNIDADE = 125
const LIMITE_CARACTERES_TAM_MAX_RESPOSTA = 2000

class AtividadeComplementarExemplosGenerica extends AtividadeGenerica {
    constructor(props) {
        super(props)

        //Valida se as propriedadas passadas para o componente existem e respeitam as regras do mesmo
        this.validarProps() 

        this.state = {
            unidadeConcluida: false,
            atividade: null,
            quantidadeRespostas: 0,
            itensBuscados: []
        }

        //Preenche os dados necessários para a exibição dos exemplos
        this.inicializarExemplos()

        //Atualiza a quantidade de respostas com o número de exemplos exibidos
        this.state.quantidadeRespostas = this.state.atividade.exemplos.filter(exemplo => exemplo.exibir).length

        /*Obtem e carrega as respostas da atividade caso o usuário já tenha as respondido*/
        this.obterProximaResposta()                                          

        /*Descobre se a unidade já foi concluída, permitindo ou não uma nova tentativa nas atividades*/
        this.obterDadosConclusaoUnidade()
    }

    validarProps = () => {
        if(this.props.atividade === undefined){
            throw Error("Propriedade \"atividade\" não existente!")
        } else {
            if (this.props.atividade.id === undefined || this.props.atividade.id.length === 0 || 
                this.props.atividade.id.length > LIMITE_CARACTERES_ID) {
                throw Error("Propriedade \"atividade.id\" não respeita o tamanho determinado!")
            }

            if (this.props.atividade.idUnidade === undefined || this.props.atividade.idUnidade.length === 0 ||
                this.props.atividade.idUnidade.length > LIMITE_CARACTERES_ID_UNIDADE) {
                throw Error("Propriedade \"atividade.idUnidade\" não respeita o tamanho determinado!")
            }

            if(this.props.atividade.quantidadeMinimaExemplos === undefined ||
            this.props.atividade.quantidadeMaximaExemplos === undefined) 
            {
                throw Error("Propriedade \"atividade.quantidadeMinimaExemplos\" e/ou \"atividade.quantidadeMaximaExemplos\" não existe(m)!")
            } else if (this.props.atividade.quantidadeMinimaExemplos > this.props.atividade.quantidadeMaximaExemplos){
                throw Error("Propriedade \"atividade.quantidadeMinimaExemplos\" é maior que a propriedade \"atividade.quantidadeMaximaExemplos\"!")
            }

            if(this.props.atividade.questoes === undefined) {
                throw Error("Propriedade \"atividade.questoes\" não existente!")
            } else if (this.props.atividade.questoes.length === 0) {
                throw Error("Propriedade \"atividade.questoes\" é vazia!")
            } else {
                let someTamMaxResposta = 0
                this.props.atividade.questoes.forEach((questao, indice) => {
                    if (questao.titulo === undefined || questao.titulo === ""){
                        throw Error("Propriedade \"questao.titulo\" da questao de indice " +indice+ " da lista \"atividade.questoes\" é vazia!")
                    }
                    if (questao.tamanhoMaximoResposta === undefined || questao.tamanhoMaximoResposta === 0) {
                        throw Error("Propriedade \"questao.tamanhoMaximoResposta\" da questao de indice " + indice + " da lista \"atividade.questoes\" é vazia!")
                    } else {
                        someTamMaxResposta += questao.tamanhoMaximoResposta
                    }
                })

                if (someTamMaxResposta > LIMITE_CARACTERES_TAM_MAX_RESPOSTA) {
                    throw Error("A soma dos tamanhos de resposta das questões ultrapassa o limite de "+LIMITE_CARACTERES_TAM_MAX_RESPOSTA+" caracteres!")
                }
            }
        }
    }

    /*Obtem as respostas da atividade caso tenha sido resolvida em looping*/
    obterProximaResposta = () => {
        let API = new window.BridgeRestApi()

        window.addEventListener("evObtemDadosGenericos", this.tratarRespostas, false)

        this.state.atividade.exemplos.forEach(exemplo => {
            API.obterDadosGenericos(this.gerarIdentificadorDadoGenerico(exemplo.numero))
        })
    }

    gerarIdentificadorDadoGenerico = (numero) => {
        return this.props.atividade.idUnidade + SEPARADOR_ID +
                this.props.atividade.id + SEPARADOR_ID + numero
    }

    /*Trata o resultado da chamada a API AvaMEC dentro do método local obterRespostas*/
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
                let indice = this.state.atividade.exemplos
                    .findIndex(exemplo => exemplo.numero === exemploAPI.numero)
                
                //Atualiza o valor no indice encontrado
                this.state.atividade.exemplos[indice] = exemploAPI

                //Adiciona o item a lista de itens já carregados
                this.state.itensBuscados.push(data.chave)

                this.setState({
                    quantidadeRespostas: this.state.atividade.exemplos.filter(exemplo => exemplo.exibir).length  
                    //Atualiza a quantidade de respostas com o número de exemplos exibidos
                })

                //Quando o número de itens buscados for igual ao número total de itens existentes
                if (this.state.itensBuscados.length === this.state.atividade.exemplos.length) {
                    //Remove o evento para evitar mais chamadas repetidas
                    window.removeEventListener("evObtemDadosGenericos", this.tratarRespostas, false)
                }
            }
        }
    }

    //Verifica se uma chave dentro do objeto data já está na lista de itensBuscados do state
    aindaNaoBuscouItem = (data) => {
        return !this.state.itensBuscados.includes(data[0].chave)
    }

    /*Gera uma estrutura de atividade com exemplos sem resposta dentro do state*/
    inicializarExemplos = () => {
        this.state.atividade = {
            id: this.props.atividade.id,
            enunciado: this.props.atividade.enunciado,
            quantidadeMinimaExemplos: this.props.atividade.quantidadeMinimaExemplos,
            quantidadeMaximaExemplos: this.props.atividade.quantidadeMaximaExemplos,
            exemplos: []
        }

        //Inicializa os exemplos e suas questões
        for (let x = 1; x <= this.state.atividade.quantidadeMaximaExemplos; x++){
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
            this.state.atividade.exemplos.push({
                numero: x, 
                exibir: x <= this.state.atividade.quantidadeMinimaExemplos,
                questoes: questoes
            })
        }
    }

    /*Registra a resposta de todos os exemplos na API do AvaMEC*/
    onClickSalvarRespostas = () => {
        let API = new window.BridgeRestApi()

        let exemplos = this.state.atividade.exemplos

        //Salva dado a dado do vetor na API AvaMEC
        exemplos.forEach(exemplo => {
            let exemploJSON = JSON.stringify(exemplo)
            API.registrarDadosGenericos(this.gerarIdentificadorDadoGenerico(exemplo.numero), exemploJSON)
        })
        /*To-Do: Escutar resposta para tratar erros*/
        /*To-Do: Criar tratamento para não salvar itens não modificados*/
    }

    /*Adiciona um novo espaço para exemplo*/
    onClickAdd = () => {
        /*Busca o indíce de um elemento escondido*/
        let indice = this.state.atividade.exemplos.findIndex(exemplo => !exemplo.exibir)

        //Caso o item exista
        if (this.state.atividade.exemplos[indice] !== undefined) {

            //Aumenta a quantidade de respostas com o novo item
            let quantidadeRespostas = this.state.quantidadeRespostas + 1

            //Configura o novo exemplo para ser exibido e o enumera
            this.state.atividade.exemplos[indice].exibir = true
            this.state.atividade.exemplos[indice].numero = quantidadeRespostas

            //Atualiza o estado do programa
            this.setState({
                quantidadeRespostas: quantidadeRespostas
            })
        }
    }

    /*Remove um espaço de exemplo*/
    onClickDelete = (numeroExemplo) => {
        /*Encontra o indíce do exemplo pelo seu número*/
        let indiceExemplo = this.state.atividade.exemplos.findIndex(exemplo => exemplo.numero === numeroExemplo)

        /*Deixa de exibir o exemplo selecionado*/
        this.state.atividade.exemplos[indiceExemplo].exibir = false

        /*Limpa as respostas*/
        this.state.atividade.exemplos[indiceExemplo].questoes.forEach(questao =>{
            questao.resposta = ""
        })

        /*Reordena o número dos exemplos exibidos*/
        this.state.atividade.exemplos.sort(exemplo => !exemplo.exibir).forEach((exemplo, indice) => {
            exemplo.numero = indice + 1
        })

        /*Salva as atualizações do state*/
        this.setState({
            quantidadeRespostas: this.state.quantidadeRespostas - 1
        })
    }

    /*Atualiza o valor de uma resposta conforme o usuário a altera*/
    onChangeResposta = (tamMaximo, numeroExemplo, idQuestao, data) => {
        let atividade = this.state.atividade

        let indiceExemplo = this.state.atividade.exemplos.findIndex(exemplo => exemplo.numero === numeroExemplo)

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
        if (!this.state.unidadeConcluida && this.state.quantidadeRespostas < this.state.atividade.quantidadeMaximaExemplos){
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
        if (!this.state.unidadeConcluida 
            && this.state.quantidadeRespostas > this.state.atividade.quantidadeMinimaExemplos){
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
        if (!this.state.unidadeConcluida){
            return (
                <div className="box">
                    <Button variant="contained" size="large" className="save-button" onClick={this.onClickSalvarRespostas}>
                        <SaveIcon />
                        Salvar respostas
                    </Button>
                </div>
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
                    rows={Math.round(questao.tamanhoMaximoResposta / QUANTIDADE_LETRAS_POR_LINHA)}
                /><br />
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
                {this.state.atividade.exemplos.map((exemplo, key) => {
                    return ( this.carregarExemplo(exemplo, key) )
                })}
            </div>
        )
    }

    render(){
        return(
            <div>
                <h2>ATIVIDADE COMPLEMENTAR</h2>
                <p>{this.state.atividade.enunciado}</p>
                {this.carregarExemplos()}
                {this.carregarBotaoAdicionarNovoExemplo()}
                {this.carregarBotaoSalvar()}
            </div>
        )
    }
}

export default AtividadeComplementarExemplosGenerica