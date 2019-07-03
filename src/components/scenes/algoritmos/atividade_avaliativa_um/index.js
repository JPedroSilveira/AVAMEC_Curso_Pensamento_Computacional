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
            id: "atividade_1_algoritmos",
            statement: "<strong>A1.</strong> Considere o Algoritmo 02, a seguir, sobre o qual fazemos algumas afirmações. Identifique a alternativa que parece menos apropriada para se referir a este algoritmo.",
            questions: [
                {
                    id: "q1_a1_algoritmos",
                    title: "Algoritmo 02",
                    statement: "",
                    algorithm: true,
                    preInstructions: "<span class=\"textdarkgreen\">Considere que: </br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a) Dois recipientes denominados R5 e R3 têm capacidade para 5 e 3 litros respectivamente;</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b) Os dois recipientes estão inicialmente vazios.</span>",
                    videoID: "k-BCRDDC5gA",
                    instructions: [
                        {
                            text: "Encha de água o recipiente R5;"
                        },
                        {
                            text: "Despeje o conteúdo de R5 no recipiente R3;"
                        },
                        {
                            text: "Esvazie R3;"
                        },
                        {
                            text: "Despeje o conteúdo de R5 em R3;"
                        },
                        {
                            text: "Encha de água o R5;"
                        },
                        {
                            text: "Respeje o conteúdo de R5 necessário para completar a capacidade de R3;"
                        },
                        {
                            text: "Esvazie R3."
                        },
                    ],
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "O algoritmo descreve uma sequência de operações cuja execução completa nos permite obter exatos 4 litros de água no recipiente R5.",
                            tip: "De fato, seguindo essa sequência serão obtidos 4 litros de água no recipiente R5."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "Se retirarmos a Operação 7, o algoritmo passa a descrever uma solução para se obter 7 litros de água.",
                            tip: "De fato, no recipiente R5 teremos 4 litros e no recipiente R3 teremos 3 litros, considerando a adição do conteúdo de R5 com o conteúdo de R3, obteremos 7 litros. Executando a Operação 4, obteremos 2 litros em R3 e 0 litros em R5 e, finalmente executando a Operação 5, teremos 5 litros em R5 e 2 litros em R3. A soma dos conteúdos dos 2 recipientes totalizará 5."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "Para obter 7 litros de água podemos retirar as duas últimas operações do Algoritmo 02.",
                            tip: "De fato, executando a Operação 1 obteremos 5 litros de água em R5 e o recipiente R3 continuará vazio. Executando a Operação 2, obteremos 2 litros em R5 e 3 litros em R3. Executando a Operação 3, obteremos 2 litros em R5 e 0 litros em R3."
                        },
                        {
                            value: "1",
                            key: "4",
                            text: "A execução do algoritmo resultará em 4 litros de água no recipiente R3.",
                            tip: "É impossível obter 4 litros em um recipiente que só comporta 3 litros."
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