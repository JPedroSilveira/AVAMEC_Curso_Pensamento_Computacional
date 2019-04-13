import React from 'react'
import IntegralActivity from '../../../generics/activity/integral_activity'

/*ESTE COMPONENTE DEVE RECEBER COMO PROPRIEDADE O SEGUINTE ITEM:
    unitId: String, representa o id da unidade em que a atividade se encontra
.*/
class AtividadeAvaliativaDois extends React.Component {
    constructor(props) {
        super(props)

        this.validateProps()
    }

    validateProps = () => {
        if (this.props.unitId === undefined) {
            throw Error("Property 'unitId' can't be undefined!")
        }
    }

    getActivity = () => {
        return {
            unitId: this.props.unitId,
            id: "atividade_2_pensamento_computacional_e_cooperacao",
            questions: [
                {
                    id: "q1_a2_pensamento_computacional_e_cooperacao",
                    title: "<span className=\"negrito\">A3</span>: Um dos elementos na realização de um evento diz respeito à disponibilização de equipamentos e demais recursos compartilhados entre os diferentes atores e subeventos. Um \"protocolo\" para o uso desses recursos precisa ser definido e é essencial para o sucesso do evento como um todo. A seguir apresentamos alguns exemplos de protocolos em contextos diversos. Selecione o que parece menos apropriado ao propósito.",
                    statement: "",
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "Corredor estreito: o acesso entre dois pontos é através de um corredor que permite a passagem de pessoas em fila indiana, uma placa com as inscrições SIGA de um lado e PARE no verso indica se o movimento em certa direção está liberado. Na existência de uma fila, o último em direção a um dos lados muda a face da placa indicando que o deslocamento na direção oposta está liberado.",
                            tip: ""
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "Um jogo de palavras: iniciando no sentido horário, cada criança em uma roda pega um cartão em uma pilha de cartões e diz uma palavra que atenda a um requisito escrito no verso do cartão. Quando não consegue cumprir a tarefa, o sentido muda e a criança sai da roda e ajuda uma das crianças ainda na roda a responder às próximas perguntas. Ao final vence a criança à frente do último grupo na roda.",
                            tip: ""
                        },
                        {
                            value: "1",
                            key: "3",
                            text: "Faixa de pedestres: de modo a evitar o bloqueio de uma avenida movimentada, um semáforo foi incorporado a uma faixa para a travessia de pedestres e o deslocamento só ocorre em um sentido por vez. O indivíduo ao chegar do outro lado da avenida, aciona o semáforo e libera a travessia no sentido oposto.",
                            tip: ""
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "Pedidos de músicas: uma banda que anima certo evento coleta pedidos dos participantes através dos garçons durante a confraternização. Cada garçom recolhe pedidos até que certa quantidade seja atingida ou certo tempo seja decorrido.",
                            tip: ""
                        }
                    ]
                },
                {
                    id: "q2_a2_pensamento_computacional_e_cooperacao",
                    title: "<span className=\"negrito\">A4</span>: Grande parte dos eventos acadêmicos tem espaço para a socialização de relatos de investigações científicas cobrindo uma variedade (muitas vezes elevada) de subtemas. Esses relatos são agrupados segundo diferentes critérios. Indique na lista abaixo, qual critério seria menos indicado nesse cenário.",
                    statement: "",
                    options: [
                        {
                            value: "1",
                            key: "1",
                            text: "Casos reais, ficção, trabalho, lazer.",
                            tip: ""
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "Relatos de experiência, experimentação, levantamento bibliográfico.",
                            tip: ""
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "Teoria, prática, técnicas e estratégias.",
                            tip: ""
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "Concepção, modelagem, implementação, avaliação.",
                            tip: ""
                        },
                        {
                            value: "0",
                            key: "5",
                            text: "Completo, resumido, diagramático.",
                            tip: ""
                        }
                    ]
                }
            ]
        }
    }

    render() {
        return (
            <IntegralActivity activity={this.getActivity()} />
        )
    }
}

export default AtividadeAvaliativaDois