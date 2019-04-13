import React from 'react'
import IntegralActivity from '../../../generics/activity/integral_activity'

/*ESTE COMPONENTE DEVE RECEBER COMO PROPRIEDADE O SEGUINTE ITEM:
    unitId: String, representa o id da unidade em que a atividade se encontra
.*/
class AtividadeAvaliativaUm extends React.Component {
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
            id: "atividade_1_pensamento_computacional_e_cooperacao",
            questions: [
                {
                    id: "q1_a1_pensamento_computacional_e_cooperacao",
                    title: "<span className=\"negrito\">A1</span>: Definição de critérios para formação de grupos cooperativos",
                    statement: "<span className=\"negrito\">A formação do grupo é ponto crucial para o sucesso de uma ação cooperativa, qualquer que seja seu objetivo. Dentre os critérios a seguir, indique o que parece menos adequado:</span>",
                    options: [
                        {
                            value: "1",
                            key: "1",
                            text: "Aleatoriamente.",
                            tip: ""
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "Segundo faixa etária (agrupando idades similares).",
                            tip: ""
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "Segundo interesses comuns (agrupando tópicos de interesse similares).",
                            tip: ""
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "Segundo desempenho escolar (agrupando notas próximas).",
                            tip: ""
                        },
                        {
                            value: "0",
                            key: "5",
                            text: "Segundo local de residência (agrupado locais diferentes).",
                            tip: ""
                        }
                    ]
                },
                {
                    id: "q2_a1_pensamento_computacional_e_cooperacao",
                    title: "<span className=\"negrito\">A2</span>: Aprendizagem ativa - o método JIGSAW II (Slavin, 1955) (Pereira, 2003)",
                    statement: "<span className=\"negrito\">A lista de ações apresentada descreve um método de aprendizagem cooperativa, denominado JIGSAW II. Qual das afirmativas parece mais adequada para descrever o método:</span>",
                    algorithm: true,
                    instructions: [
                        {
                            text: "Escolha um texto que trata do assunto que pretende que os alunos estudem a partir da leitura de um texto-base."
                        },
                        {
                            text: "Divida o texto-base em trechos que representam um subtópico do tema a ser estudado;"
                        },
                        {
                            text: "[Grupos de Especialistas] Divida o grupo em subgrupos na mesma quantidade de subtópicos e atribua a cada subgrupo a responsabilidade sobre um dos subtópicos:",
                            instructions: [
                                {
                                    text: "a. Cada subgrupo deve ler o texto completo com ênfase no subtópico de sua responsabilidade e a seguir pesquisar para aprofundar conhecimento sobre seu subtópico."
                                }
                            ]
                        },
                        {
                            text: "[Grupos Gerais] Forme novos subgrupos, onde cada um deles deve ter um especialista  de cada subtópico:",
                            instructions: [
                                {
                                    text: "Cada grupo deve buscar entender o tema como um todo a partir da contribuição de cada especialista, ou seja o especialista deve explicar para os demais participante o tema que aprofundou no estudo anterior etapa anterior."
                                }
                            ]
                        },
                        {
                            text: "[Grupos de Especialistas] Os especialistas voltam aos seus grupos de origem para debater o tema geral."
                        },
                        {
                            text: "Avalie o conhecimento construído pelos participantes com respeito ao tema como um todo."
                        }
                    ],
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "Há uma clara interdependência entre os membros do grupo.",
                            tip: ""
                        },
                        {
                            value: "1",
                            key: "2",
                            text: "É possível perceber (e cobrar) responsabilidades individuais.",
                            tip: ""
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "A negociação de significados é contemplada.",
                            tip: ""
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "Um único entendimento sobre o assunto resulta do método.",
                            tip: ""
                        },
                        {
                            value: "0",
                            key: "5",
                            text: "Há \"fases\" ou \"estágios\" bem definidos.",
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

export default AtividadeAvaliativaUm