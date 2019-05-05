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
            id: "atividade_3_algoritmos",
            statement: "<strong>A3.</strong> Considere o Algoritmo 12, sobre o qual se fazem algumas afirmações. Selecione aquela que lhe parece com menos possibilidade de estar correta.",
            questions: [
                {
                    id: "q1_a3_algoritmos",
                    statement: "",
                    title: "Algoritmo 12",
                    algorithm: true,
                    preInstructions: "<span class=\"textdarkgreen\">Considere uma pilha de pratos sujos e a inexistência de uma pilha de pratos limpos.</span>",
                    instructions: [
                        {
                            text: "<span class=\"textred\">Enquanto</span> <span class=\"textblue\">a pilha de pratos sujos não estiver vazia</span> <span class=\"textred\">faça</span>:",
                            instructions: [
                                {
                                    text: "a. Retire o prato que está no topo da pilha de pratos sujos;"
                                },
                                {
                                    text: "b. Lave o prato sujo recém-retirado da pilha;"
                                },
                                {
                                    text: "c. Coloque o prato limpo no topo da pilha de pratos limpos."
                                }
                            ]
                        },
                    ],
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "A execução do algoritmo certamente produzirá uma pilha vazia de pratos sujos e uma pilha de pratos limpos com a mesma quantidade de pratos que existia na pilha de pratos sujos.",
                            tip: "De fato, podemos observar que: a) o algoritmo só é interrompido quando não há mais pratos na pilha de pratos sujos e que, como cada vez que  um prato sujo é retirado, diminui de um o tamanho dessa pilha, em um determinado momento todos os pratos terão sido retirados; b) cada vez que um prato sujo é retirado, na operação seguinte ele é lavado e a seguir colocado no topo da pilha de pratos limpos; disso se pode concluir que, como a quantidade de pratos limpos cresce de forma inversa ao decréscimo da quantidade de pratos sujos, ao final o número de pratos limpos deverá ser igual ao número de pratos sujos iniciais."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "O algoritmo funciona para qualquer pilha de pratos sujos, independentemente da quantidade de pratos.",
                            tip: "De fato, pois a repetição \"enquanto\" será executada para todos os pratos ainda sujos, independente da quantidade de pratos restantes."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "O tempo necessário para executar o Algoritmo 12, do início ao fim, é  proporcional à quantidade de pratos sujos e depende ainda do tempo médio necessário para lavar 1 prato.",
                            tip: "De fato, a cada ciclo da repetição teremos o tempo para tirar o prato da pilha de sujos, o tempo para lavá-lo e o tempo para colocá-lo na pilha de pratos limpos. Se chamarmos a soma desses tempos de Tp e de Qp a quantidade de pratos, então o tempo total Tt pode ser obtido pelo produto de Tp por Qp, ou seja Tt = Tp x Qp."
                        },
                        {
                            value: "1",
                            key: "4",
                            text: "Se ao executarmos a Operação 1.b, quebrarmos o prato, a execução pode prosseguir sem qualquer problema.",
                            tip: "Se o prato for quebrado na lavagem, então a operação 1.c não pode ser executada, pois não há operação prevista quando não há prato limpo a ser colocado na pilha de limpos."
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