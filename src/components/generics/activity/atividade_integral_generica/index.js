import React from 'react'
import BaseActivity from '../baseActivity'
import BasicButton from '../basic_button'
import ReactHtmlParser from 'react-html-parser';
import SimboloRecarregar from '../../../images/simbolo-recarregar.png'
import SimboloRecarregarPressionado from '../../../images/simbolo-recarregar-pressionado.png'
import './styles.css'

/*PROPS DESTA CLASSE DEVE CONTER UM OBJETIVO "atividade" DO TIPO:
    atividade: um objetivo com os atributos:
        idUnidade: String,
        id: String, //Deve ter no máximo o valor da constante MAX_CARACTERES_ID de caracteres
        questoes: Lista de objetos com os atributos:
            id: String, //Deve ter no máximo o valor da constante MAX_CARACTERES_ID de caracteres
            titulo: String,
            enunciado: String,
            alternativas: Lista de objetos com os atributos:
                valor: Boolean,
                chave: String numérica,
                texto: String,
                dica: String
.*/

const MAX_CARACTERES_ID = 250

class AtividadeIntegralGenerica extends BaseActivity {
    constructor(props) {
        super(props)

        /*Valida se todas as propriedades estão sendo passadas corretamente.*/
        this.validaProps()

        this.state = {
            atividadeRespondida: false,
            nota: 0,
            opcoesSelecionadas: this.pegarOpcoesSelecionadasVazias(), //Vetor de objetos com atributos: idQuestao: String, chave: String numérica
            unidadeConcluida: false
        }

        /*Obtem e carrega as respostas da atividade caso o usuário já tenha as respondido.*/
        this.obterRespostasDaAtividade()

        /*Descobre se a unidade já foi concluída, permitindo ou não uma nova tentativa nas atividades.*/
        this.obterDadosConclusaoUnidade()
    }

    validaProps = () => {
        if (this.props.atividade === undefined){
            throw Error(" propriedade 'atividade' é indefinida!")
        } else {
            if (this.props.atividade.idUnidade === undefined) {
                throw Error(" propriedade 'atividade.idUnidade' é indefinida!")
            }

            if (this.props.atividade.id === undefined) {
                throw Error(" propriedade 'atividade.id' é indefinida!")
            } else if (this.props.atividade.id.length > MAX_CARACTERES_ID){
                throw Error(" propriedade 'atividade.id' ultrapassa o limite de "+MAX_CARACTERES_ID+" caracteres!")
            }

            if (this.props.atividade.questoes === undefined || this.props.atividade.questoes.length === 0) {
                throw Error(" propriedade 'atividade.questoes' é indefinida ou vazia!")
            } else {
                this.props.atividade.questoes.forEach(questao => {
                    if (questao.id > MAX_CARACTERES_ID){
                        throw Error(" propriedade 'questao.id' ultrapassa o limite de " + MAX_CARACTERES_ID + " caracteres!")
                    }
                    questao.alternativas.forEach(alternativa => {
                        if (alternativa.valor === undefined){
                            throw Error(" propriedade 'alternativa.valor' é indefinida!")
                        }
                        if (alternativa.chave === undefined) {
                            throw Error(" propriedade 'alternativa.chave' é indefinida!")
                        }
                        if (alternativa.texto === undefined || alternativa.texto.length === 0) {
                            throw Error(" propriedade 'alternativa.chave' é indefinida ou vazia!")
                        }
                        if (alternativa.dica === undefined || alternativa.dica.length === 0) {
                            throw Error(" propriedade 'alternativa.dica' é indefinida ou vazia!")
                        }
                    })
                })
            }
        }
    }

    /*Gera um objeto vazio com as questões selecionadas.*/
    pegarOpcoesSelecionadasVazias = () => {
        let opcoesSelecionadas = []
        //Gera opções selecionadas vazias para cada questão
        this.props.atividade.questoes.forEach(questao => {
            opcoesSelecionadas.push({
                idQuestao: questao.id,
                chave: "0",
                respondida: false
            })
        })

        return opcoesSelecionadas
    }

    /*Obtem as respostas da atividade caso tenha sido resolvida.*/
    obterRespostasDaAtividade = () => {
        let API = new window.BridgeRestApi()

        window.addEventListener("evObtemDadosRespostaAtividade", this.tratarRespostasDaAtividade, false)

        API.obterRespostaAtividade(this.props.atividade.id)
    }

    /*Trata o retorno da API no método local obterRespostasDaAtividade.*/
    tratarRespostasDaAtividade = (retorno) => {
        /*Apenas em caso de sucesso (status 200).*/
        if (retorno.detail.status === 200) {
            let data = retorno.detail.data

            /*Caso tenha sido mapeada no mínimo uma resposta.*/
            if (data.mapaAtributos.quantidadeRespostasResgistradas > 0) {
                let opcoesSelecionadas = []

                /*Busca as questões passadas como propriedade na resposta da API AvaMEC.*/
                this.props.atividade.questoes.forEach(questao => {
                    let opcaoSelecionada = 0
    
                    /*Busca a resposta de uma questão pelo seu identificador.*/
                    let respostas = data.questoesUsuario.find(questaoUsuario =>
                        questaoUsuario.questao.identificador === questao.id
                    ).respostas

                    /*Caso existam respostas.*/
                    if (respostas !== undefined) {
                        /*Busca a opção selecionada pelo usuário.*/
                        opcaoSelecionada = respostas.find(opcao =>
                            opcao.valor === "1"
                        )

                        /*Caso tenha sido selecionada uma opção*/
                        if (opcaoSelecionada !== undefined){
                            opcoesSelecionadas.push({
                                idQuestao: questao.id,
                                chave: opcaoSelecionada.chave,
                                respondida: true
                            })
                        } else { //Caso não 
                            opcoesSelecionadas.push({
                                idQuestao: questao.id,
                                chave: "0",
                                respondida: false
                            })
                        }
                    }
                })

                /*Atualiza as informações da página com respeito as questões da atividade.*/
                this.setState({
                    atividadeRespondida: true,
                    nota: data.nota,
                    opcoesSelecionadas: opcoesSelecionadas
                })
            } else {
                /*Embaralha alternativas de todas as questões.*/
                this.embaralhaAlternativas()
            }
        } else {
            /*Embaralha alternativas de todas as questões.*/
            this.embaralhaAlternativas()
        }

        //To-Do Tratar erros caso não seja possível salvar a resposta
        /*Remove o listener para evitar chamadas consecutivas.*/
        window.removeEventListener("evObtemDadosRespostaAtividade", this.tratarRespostasDaAtividade, false)
    }

    /*Registra a resposta do usuário na API AvaMEC.*/
    registrarRespostasDaAtividade = () => {
        /*Monta o objeto com a resposta do usuário para a API AvaMEC.*/
        let atividadeAPI = {
            "identificador": this.props.atividade.id,
            "questoes": []
        }

        /*Salva uma questão para cada item em questoes passado como propriedade.*/
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

    /*Trata o retorno da API no método local registrarRespostasDaAtividade.*/
    tratarRetornoRespostasDaAtividade = (retorno) => {
        /*Em caso de sucesso ao salvar a resposta.*/
        if (retorno.detail.status === 200) {

            /*Atualiza as opções selecionadas para salvar que elas foram respondidas.*/
            this.state.opcoesSelecionadas.forEach(opcao => {
                opcao.respondida = true
            })

            /*Atualiza as informações de estado da página correspondentes a questão 1.*/
            this.setState({
                atividadeRespondida: true,
                nota: retorno.detail.data.notaAtividade
            })

        }
        /*TO-DO Tratar erros caso não seja possível salvar a resposta.*/

        /*Remove o listener para evitar chamadas consecutivas.*/
        window.removeEventListener("evRegistraRespostaAtividade", this.tratarRetornoRespostasDaAtividade, false)
    }

    /*Realiza a mudança na opção da resposta.*/
    onChangeRadioButton = data => {
        /*Só pode alterar a opção caso não tenha respondido.*/
        if (!this.state.atividadeRespondida) {

            //Pega a opção selecionada da questão que disparou o evento e 
            //altera o seu valor para a alternativa selecionada no evento.
            let indiceSelecionada = this.getIndiceOpcaoSelecionadaDaQuestao(data.currentTarget.name)

            //Apenas se não estiver respondida e enviada corretamente já.
            if (!this.state.opcoesSelecionadas[indiceSelecionada].respondida){
                this.state.opcoesSelecionadas[indiceSelecionada].chave = data.currentTarget.value

                this.forceUpdate()
            }
        }
    }

    /*Retorna o indice da resposta de uma questão dentro do vetor "this.state.opcoesSelecionadas".*/
    getIndiceOpcaoSelecionadaDaQuestao = (idQuestao) => {
        return this.state.opcoesSelecionadas.findIndex(opcao => opcao.idQuestao === idQuestao)
    }

    /*Retorna a alternativa selecionada da ativida baseado na opcaoSelecionada do state*/
    getAlternativaDaOpcaoSelecionada = (opcaoSelecionada) => {

        //Busca a questão correspondente a opção selecionada
        let questaoDaOpcao = this.props.atividade.questoes.find(questao =>
            questao.id === opcaoSelecionada.idQuestao
        )

        //Busca a alternativa da questão correspondente a opção selecionada
        let alternativaDaOpcao = questaoDaOpcao.alternativas.find(alternativa =>
            alternativa.chave === opcaoSelecionada.chave
        )

        return alternativaDaOpcao
    }

    /*Embaralha as alternativas de todas as questões dentro de this.props.atividade.*/
    embaralhaAlternativas = () => {
        this.props.atividade.questoes.forEach(questao => {
            //Pega a opção selecionada da questão
            let opcaoSelecionada = this.getIndiceOpcaoSelecionadaDaQuestao(questao.id)

            //Apenas embaralha as questões que não tiverem sido respondidas corretamente
            if (!opcaoSelecionada.respondida){
                /*Para cada questão redefine a ordem da lista de alternativas.*/
                questao.alternativas = questao.alternativas.sort(() => (Math.round(Math.random()) - 0.5))
            }
        })

        this.forceUpdate()
    }

    /*Carrega uma alternativa de uma questao.*/
    /*questao deve conter os atributos:
        id: String,
        alternativas: lista de objetos com os atributos:
            valor: Boolean,
            chave: String numérica,
            texto: String,
            dica: String.*/
    carregaAlternativas = (questao) => {
        return (
            <div>
                {questao.alternativas.map((alternativa, key) => {
                    return (
                        <div key={key} className="option">
                            {this.carregaTextoAlternativa(questao, alternativa)}
                            {this.carregaDicaAlternativa(questao, alternativa)}
                        </div>
                    )
                })}
            </div>
        )
    }

    /*Define se a alternativa atual é a opção selecionada pelo usuário na questão.*/
    isOpcaoSelecionada = (questao, alternativa) => {
        //Busca a posição da opção selecionada correspondente a questão atual
        let posicaoOpcao = this.getPosicaoOpcaoSelecionadaPeloIdQuestao(questao.id) 

        return this.state.opcoesSelecionadas[posicaoOpcao].chave === alternativa.chave
    }

    /*Carrega o radioButton com o texto da alternativa.*/
    carregaTextoAlternativa = (questao, alternativa) => {
        /*Define se a alternativa atual é a opção selecionada pelo usuário na questão.*/
        let isOpcaoSelecionada = this.isOpcaoSelecionada(questao, alternativa)

        return (
            <label className="radioLabel">{alternativa.texto}
                <input type="radio" className="optionRadio" name={questao.id} value={alternativa.chave}
                    checked={isOpcaoSelecionada}
                    onChange={this.onChangeRadioButton} />
                <span className="checkmark"></span>
            </label>
        )
    }
    
    /*Carrega a dica da alternativa se respondida.*/
    carregaDicaAlternativa = (questao, alternativa) => {
        /*Define se a alternativa atual é a opção selecionada pelo usuário na questão.*/
        let isOpcaoSelecionada = this.isOpcaoSelecionada(questao, alternativa)

        /*Só irá carregar a dica se for a opção selecionada pelo usuário.*/
        if (isOpcaoSelecionada){

            /*Define se ela foi respondida pelo estado da atividade.*/
            let isRespondida = this.state.atividadeRespondida;

            /*Caso a atividade não tenha sido respondida.*/
            if (!isRespondida) {
                //Busca a posição da opção selecionada correspondente a questão atual
                let posicaoOpcao = this.getPosicaoOpcaoSelecionadaPeloIdQuestao(questao.id)

                /*Válida se a questão já foi respondida corretamente e enviada ao servidor anteriormente
                para o caso da atividade ter sido recarregada pelo tentar novamente.*/
                isRespondida = this.state.opcoesSelecionadas[posicaoOpcao].respondida
            }
            
            /*Se a conclusão foi que ela já foi respondida então carrega a dica.*/
            if (isRespondida) {
                return (
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
                ) 
            }

        }
    }

    /*Carrega todas as questões com suas alternativas.*/
    carregaQuestoes = (questoes) => {
        return (
            <div>
                {questoes.map((questao, key) => {
                    return (
                        <div key={key}>
                            {this.carregaEnunciadoQuestao(questao)}
                            <div className="options-box">
                                {this.carregaAlternativas(questao)}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }

    /*Carrega o enunciado da questão com as instruções e infomações para realizar ela.*/
    carregaEnunciadoQuestao = (questao) => {
        if (questao.algoritmo){
            return (
                <div>
                    {this.carregaEnunciadoAlgoritmo(questao)}
                </div>
            )
        } else {
            return (
                <div>
                    {questao.titulo !== "" &&
                        <h4>{ReactHtmlParser(questao.titulo)}</h4>
                    }
                    {questao.enunciado !== "" &&
                        <p>{ReactHtmlParser(questao.enunciado)}</p>
                    }
                </div>
            )
        }
    }

    /*Carrega o tipo de enunciado algoritmo de forma recursiva conforme seus subníveis.*/
    carregaEnunciadoAlgoritmo = (questao) => {
        return (
            <div className="box">
                <div className="box-alg-question">
                    <div className="head">
                        <span className="titulo">{questao.titulo}</span>
                    </div>
                    <div className="nivel-1">
                        <ol>
                            {questao.instrucoes.map((instrucao, key) => {
                                return (
                                    <div key={key}>
                                        {this.carregaInstrucao(instrucao)}                                                                   
                                    </div>
                                )
                            })}
                        </ol>
                    </div>
                </div>
            </div>
        )
    }

    /*Carrega uma instrução do algoritmo e suas sub-instruções.*/
    carregaInstrucao = (instrucao) => {
        return (
            <li>
                {ReactHtmlParser(instrucao.texto)}
                {this.carregaSubInstrucoes(instrucao.instrucoes)}
            </li>
        )
    }
    
    /*Carrega as sub-instruções de uma instrução e suas sub-instruções.*/
    carregaSubInstrucoes = (subInstrucoes) => {
        if(subInstrucoes !== undefined && subInstrucoes.length > 0){
            return (
                <div className="subnivel">
                    {subInstrucoes.map((subInstrucao, key) => {
                        return (
                            <div key={key}>
                                {ReactHtmlParser(subInstrucao.texto)}
                                {this.carregaSubInstrucoes(subInstrucao.instrucoes)}
                            </div>
                        )
                    })}
                </div>
            )
        }
    }

    /*Carrega a posição no vetor "this.state.opcoesSelecionadas" onde se encontra a resposta
    para o id da questão passado.*/
    getPosicaoOpcaoSelecionadaPeloIdQuestao = (idQuestao) => {
        return this.state.opcoesSelecionadas.map(opcao => opcao.idQuestao).indexOf(idQuestao)
    }

    /*Zera a resposta e re-embaralha as alternativas.*/
    configurarNovaTentativa = () => {
        /*Embaralha alternativas de todas as questões.*/
        this.embaralhaAlternativas()

        let opcoesSelecionadas = this.state.opcoesSelecionadas
        
        /*Limpa as alternativas erradas.*/
        opcoesSelecionadas.forEach((opcaoSelecionada) => {
            //Busca a alternativa da questão correspondente a opção selecionada
            let alternativaDaOpcao = this.getAlternativaDaOpcaoSelecionada(opcaoSelecionada)

            if (alternativaDaOpcao === undefined || alternativaDaOpcao.valor === "0") {
                opcaoSelecionada.chave = "0"
                opcaoSelecionada.respondida = false
            }
        })

        this.setState({
            atividadeRespondida: false,
            opcoesSelecionadas: opcoesSelecionadas
        })
    }

    /*Carrega o titulo conforme a quantidade de questões.*/
    carregarTitulo = () => {
        return (
            <div>
                {this.props.atividade.questoes.length > 1 ?
                    <h3>ATIVIDADES AVALIATIVAS</h3>
                    :
                    <h3>ATIVIDADE AVALIATIVA</h3>
                }
                {this.props.atividade.enunciado !== undefined && this.props.atividade.enunciado.length > 0 &&
                    <div className="enunciado-atividade">
                        <p>{this.props.atividade.enunciado}</p>
                    </div>
                }
            </div>
        )
    }

    /*Carrega a nota do usuário caso a mesma exista.*/
    carregarNota = () => {
        return (
            <div>
                {this.state.atividadeRespondida &&
                    <div id="nota">Sua nota nesta atividade é: {this.state.nota}.</div>
                }
            </div>
        )
    }

    /*Carrega o botão Tentar Novamente caso ainda existem alternativas erradas*/
    carregarBotaoTentarNovamente = () => {
        /*Verifica se existe alguma questão não respondida corretamente*/
        let alternativasSelecionadas = this.state.opcoesSelecionadas.map(opcaoSelecionada => this.getAlternativaDaOpcaoSelecionada(opcaoSelecionada))
        
        let existeAlternativaNaoRespondida = alternativasSelecionadas
            .some(alternativa => alternativa === undefined || alternativa.valor === "0")
        
        if (existeAlternativaNaoRespondida){
            return (
                <BasicButton 
                    onClick={this.configurarNovaTentativa}
                    onMouseOver={e => e.currentTarget.firstChild.src = SimboloRecarregarPressionado}
                    onMouseOut={e => e.currentTarget.firstChild.src = SimboloRecarregar}>
                    <img src={SimboloRecarregar} alt="Clique para tentar responder novamente ao questionário."/>
                    TENTAR NOVAMENTE
                </BasicButton>
            )
        }
    }

    /*Carrega os botões de Enviar Respostas e Tentar Novamento conforme os status da unidade.*/
    carregaBotoesEnviarTentarNovamente = () => {
        if (!this.state.unidadeConcluida){
            return (
                <div>
                    {!this.state.atividadeRespondida ?
                        <BasicButton onClick={this.registrarRespostasDaAtividade}>
                            ENVIAR RESPOSTAS
                        </BasicButton>
                        :
                        <div>
                            {this.carregarBotaoTentarNovamente()}
                        </div>
                    }
                </div>
            )
        }
    }

    render() {
        return (
            <div className="atividadeAvaliativa">
                {this.carregarTitulo()}

                {this.carregaQuestoes(this.props.atividade.questoes)}<br/>

                {this.carregarNota()}

                {this.carregaBotoesEnviarTentarNovamente()}
            </div>
        )
    }
}

export default AtividadeIntegralGenerica
