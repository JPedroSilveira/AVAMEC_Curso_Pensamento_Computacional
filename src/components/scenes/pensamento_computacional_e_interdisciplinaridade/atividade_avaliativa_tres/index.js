import React from 'react'
import IntegralActivity from '../../../generics/activity/integral_activity'

/*ESTE COMPONENTE DEVE RECEBER COMO PROPRIEDADE O SEGUINTE ITEM:
    unitId: String, representa o id da unidade em que a atividade se encontra
.*/
class AtividadeAvaliativaTres extends React.Component {
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
            id: "atividade_3_pensamento_computacional_e_interdisciplinaridade",
            questions: [
                {
                    id: "q1_a3_pensamento_computacional_e_interdisciplinaridade",
                    title: "<span class=\"negrito\">A3</span>. Algoritmo [I2]: Circuito de Aventura Tipo 2",
                    statement: "<span class=\"negrito\">O Algoritmo [I2] acima representa uma outra forma de definir um Circuito de Aventura. Selecione a opção que melhor descreve esse algoritmo:</span>",
                    algorithm: true,
                    instructions: [
                        {
                            text: "Defina o conjunto de elementos da aventura."
                        },
                        {
                            text: "Defina o nível de intensidade (n)."
                        },
                        {
                            text: "Repita n vezes:",
                            instructions: [
                                {
                                    text: "a. Enquanto houver elementos n&atilde;o percorridos fa&ccedil;a:",
                                    instructions: [
                                        {
                                            text: "i. Fa&ccedil;a o percurso de um elemento."
                                        },
                                        {
                                            text: "ii. Registre o tempo do percurso."
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            text: "Registre o tempo total do elemento."
                        },
                        {
                            text: "Calcule o &iacute;ndice de desempenho."
                        },
                        {
                            text: "Gere souvenir com os elementos percorridos, tempos e desempenho."
                        }
                    ],
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "Similar ao Algoritmo [I1], exceto que na ordem inversa (do final para o início).",
                            tip: ""
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "Similar ao Algoritmo [I1], exceto que com o dobro de repetições em cada elemento.",
                            tip: ""
                        },
                        {
                            value: "1",
                            key: "3",
                            text: "Similar ao Algoritmo [I1], exceto que percorre todos os elementos selecionados n vezes.",
                            tip: ""
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "Similar ao Algoritmo [I1], exceto que a quantidade de repetições em cada elemento é multiplicada por n.",
                            tip: ""
                        },
                        {
                            value: "0",
                            key: "5",
                            text: "O mesmo que o Algoritmo [I1], apenas em outra ordem.",
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

export default AtividadeAvaliativaTres