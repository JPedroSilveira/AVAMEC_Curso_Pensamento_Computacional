import React from 'react'
import AtividadeGenerica from '../atividade_generica'
import SimboloRecarregar from '../../../../images/simbolo-recarregar.png'
import SimboloRecarregarPressionado from '../../../../images/simbolo-recarregar-pressionado.png'

/*PROPS DESTA CLASSE DEVE CONTER UM OBJETIVO "atividade" DO TIPO:
    atividade: um objetivo com os atributos:
        idUnidade: String,
        id: String,
        questoes: Lista de objetos com os atributos:
            id: String,
            titulo: String,
            enunciado: String,
            alternativas: Lista de objetos com os atributos:
                valor: Boolean,
                chave: String numérica,
                texto: String,
                dica: String
*/

class AtividadeIntegralGenerica extends AtividadeGenerica {
    constructor(props) {
        super(props)

        this.state = {
            atividadeRespondida: false,
            nota: 0,
            opcoesSelecionadas: this.pegarOpcoesSelecionadasVazias(), //Vetor de objetos com atributos: idQuestao: String, chave: String numérica
            unidadeConcluida: false
        }

        /*Obtem e carrega as respostas da atividade caso o usuário já tenha as respondido*/
        this.obterRespostasDaAtividade()

        /*Descobre se a unidade já foi concluída, permitindo ou não uma nova tentativa nas atividades*/
        this.obterDadosConclusaoUnidade()
    }

    /*Gera um objeto vazio com as questões selecionadas*/
    pegarOpcoesSelecionadasVazias = () => {
        let opcoesSelecionadas = []
        //Gera opções selecionadas vazias para cada questão
        this.props.atividade.questoes.forEach(questao => {
            opcoesSelecionadas.push({
                "idQuestao": questao.id,
                "chave": "0"
            })
        })

        return opcoesSelecionadas
    }

    /*Obtem as respostas da atividade caso tenha sido resolvida*/
    obterRespostasDaAtividade = () => {
        let API = new window.BridgeRestApi()

        window.addEventListener("evObtemDadosRespostaAtividade", this.tratarRespostasDaAtividade, false)

        API.obterRespostaAtividade(this.props.atividade.id)
    }

    /*Trata o retorno da API no método local obterRespostasDaAtividade*/
    tratarRespostasDaAtividade = (retorno) => {
        /*Apenas em caso de sucesso (status 200)*/
        if (retorno.detail.status === 200) {
            let data = retorno.detail.data

            /*Caso tenha sido mapeada no mínimo uma resposta*/
            if (data.mapaAtributos.quantidadeRespostasResgistradas > 0) {
                let opcoesSelecionadas = []

                /*Busca as questões passadas como propriedade na resposta da API AvaMEC*/
                this.props.atividade.questoes.forEach(questao => {
                    let opcaoSelecionada = 0
    
                    /*Busca a resposta de uma questão pelo seu identificador*/
                    let resposta = data.questoesUsuario.find(questaoUsuario =>
                        questaoUsuario.questao.identificador === questao.id
                    ).respostas

                    /*Caso existe resposta*/
                    if (resposta !== undefined) {
                        /*Busca a opção selecionada pelo usuário*/
                        opcaoSelecionada = resposta.find(opcao =>
                            opcao.valor === "1"
                        )

                        if (opcaoSelecionada !== undefined){
                            opcoesSelecionadas.push({
                                "idQuestao": questao.id,
                                "chave": opcaoSelecionada.chave
                            })
                        }
                    }
                })

                /*Atualiza as informações da página com respeito as questões da atividade*/
                this.setState({
                    atividadeRespondida: true,
                    nota: data.nota,
                    opcoesSelecionadas: opcoesSelecionadas
                })
            } else {
                /*Embaralha alternativas de todas as questões*/
                this.embaralhaAlternativas()
            }
        } else {
            /*Embaralha alternativas de todas as questões*/
            this.embaralhaAlternativas()
        }

        //To-Do Tratar erros caso não seja possível salvar a resposta
        /*Remove o listener para evitar chamadas consecutivas*/
        window.removeEventListener("evObtemDadosRespostaAtividade", this.tratarRespostasDaAtividade, false)
    }

    /*Registra a resposta do usuário na API AvaMEC*/
    registrarRespostasDaAtividade = () => {
        /*Monta o objeto com a resposta do usuário para a API AvaMEC*/
        let atividadeAPI = {
            "identificador": this.props.atividade.id,
            "questoes": []
        }

        /*Salva uma questão para cada item em questoes passado como propriedade*/
        this.props.atividade.questoes.forEach(questao => {
            let questaoAPI = {
                "identificador": questao.id,
                "gabaritos": []
            }

            let opcaoSelecionada = this.state.opcoesSelecionadas.find(opcao => opcao.idQuestao === questao.id).chave

            questao.alternativas.forEach(alternativa => {
                let gabarito = {
                    "chave": alternativa.chave,
                    "valor": alternativa.chave === opcaoSelecionada ? "1" : "0"
                }

                questaoAPI.gabaritos.push(gabarito)
            })

            atividadeAPI.questoes.push(questaoAPI)
        })

        let API = new window.BridgeRestApi()
        window.addEventListener("evRegistraRespostaAtividade", this.tratarRetornoRespostasDaAtividade, false)
        API.registrarRespostaAtividade(atividadeAPI)
    }

    /*Trata o retorno da API no método local registrarRespostasDaAtividade*/
    tratarRetornoRespostasDaAtividade = (retorno) => {
        /*Em caso de sucesso ao salvar a resposta*/
        if (retorno.detail.status === 200) {
            /*Atualiza as informações de estado da página correspondentes a questão 1*/
            this.setState({
                atividadeRespondida: true,
                nota: retorno.detail.data.notaAtividade
            })
        }
        /*TO-DO Tratar erros caso não seja possível salvar a resposta*/

        /*Remove o listener para evitar chamadas consecutivas*/
        window.removeEventListener("evRegistraRespostaAtividade", this.tratarRetornoRespostasDaAtividade, false)
    }

    /*Realiza a mudança na opção da resposta*/
    onChangeRadioButton = data => {
        /*Só pode alterar a opção caso não tenha respondido*/
        if (!this.state.atividadeRespondida) {
            let opcoesSelecionadas = this.state.opcoesSelecionadas

            //Busca a posição da opção selecionada da questão que disparou o botão no vetor opcoesSelecionadas e modifica a sua chave
            let contador = 0
            let continuar = true

            while (continuar && contador < opcoesSelecionadas.length){
                if (opcoesSelecionadas[contador].idQuestao === data.currentTarget.name){
                    opcoesSelecionadas[contador].chave = data.currentTarget.value
                    continuar = false
                }

                contador++
            }

            /*Salva no estado a opção selecionada no RadioButton da questão 1*/
            this.setState({
                opcoesSelecionadas: opcoesSelecionadas
            })
        }
    }

    /*Embaralha as alternativas de todas as questões dentro de this.props.atividade*/
    embaralhaAlternativas = () => {
        this.props.atividade.questoes.forEach(questao => {
            /*Para cada questão redefine a ordem da lista de alternativas*/
            questao.alternativas = questao.alternativas.sort(() => (Math.round(Math.random()) - 0.5))
        })

        this.forceUpdate()
    }

    /*Carrega uma alternativa de uma questao*/
    /*questao deve conter os atributos:
        id: String,
        alternativas: lista de objetos com os atributos:
            valor: Boolean,
            chave: String numérica,
            texto: String,
            dica: String*/
    carregaAlternativas = (questao) => {
        return (
            <div>
                {questao.alternativas.map((alternativa, key) => {
                    //Busca a posição da opção selecionada correspondente a questão atual
                    let posicaoOpcao = this.state.opcoesSelecionadas.map(opcao => opcao.idQuestao).indexOf(questao.id)

                    /*Define se a alternativa atual é a opção selecionada pelo usuário na questão*/
                    let ehOpcaoSelecionada = this.state.opcoesSelecionadas[posicaoOpcao].chave === alternativa.chave

                    return (
                        <div key={key} className="option">
                            <label className="radioLabel">
                                <input type="radio" className="optionRadio" name={questao.id} value={alternativa.chave}
                                    checked={ehOpcaoSelecionada}
                                    onChange={this.onChangeRadioButton} />
                                {alternativa.texto}
                            </label>
                            {(ehOpcaoSelecionada && this.state.atividadeRespondida) &&
                                <div>
                                    {alternativa.valor === "0" ?
                                        <div className="hint wrong">
                                            <strong>Resposta Errada: </strong>
                                            {alternativa.dica}
                                        </div>
                                        :
                                        <div className="hint right">
                                            <strong>Resposta Certa: </strong>
                                            {alternativa.dica}
                                        </div>
                                    }
                                </div>
                            }
                        </div>
                    )
                })}
            </div>
        )
    }
    
    /*Carrega todas as questões com suas alternativas*/
    carregaQuestoes = (questoes) => {
        return (
            <div>
                {questoes.map((questao, key) => {
                    return (
                        <div key={key}>
                            {questao.titulo !== "" &&
                                <h4>{questao.titulo}</h4>
                            }
                            {questao.enunciado !== "" &&
                                <p>{questao.enunciado}</p>
                            }
                            <div className="options-box">
                                {this.carregaAlternativas(questao)}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }

    /*Zera a resposta e re-embaralha as alternativas*/
    configurarNovaTentativa = () => {
        /*Embaralha alternativas de todas as questões*/
        this.embaralhaAlternativas()

        this.setState({
            atividadeRespondida: false,
            opcoesSelecionadas: this.pegarOpcoesSelecionadasVazias()
        })
    }

    carregarTitulo = () => {
        return (
            <div>
                {this.props.atividade.questoes.length > 1 ?
                    <h3>ATIVIDADES AVALIATIVAS</h3>
                    :
                    <h3>ATIVIDADE AVALIATIVA</h3>
                }
            </div>
        )
    }

    carregarNota = () => {
        return (
            <div>
                {this.state.atividadeRespondida &&
                    <div id="nota">Sua nota nesta atividade é: {this.state.nota}.</div>
                }
            </div>
        )
    }

    render() {
        return (
            <div className="atividadeAvaliativa">
                {this.carregarTitulo()}

                {this.carregaQuestoes(this.props.atividade.questoes)}<br/>

                {this.carregarNota()}

                {!this.state.unidadeConcluida &&
                    <div>
                        {!this.state.atividadeRespondida ?
                            <button type="button" className="button" onClick={this.registrarRespostasDaAtividade}>ENVIAR RESPOSTAS</button>
                            :
                            <button type="button" className="button" onClick={this.configurarNovaTentativa}
                                onMouseOver={e => e.currentTarget.firstChild.src = SimboloRecarregarPressionado}
                                onMouseOut={e => e.currentTarget.firstChild.src = SimboloRecarregar}>
                                <img src={SimboloRecarregar} alt="Clique para tentar responder novamente ao questionário." />
                                TENTAR NOVAMENTE
                            </button>
                        }
                    </div>
                }
            </div>
        )
    }
}

export default AtividadeIntegralGenerica
