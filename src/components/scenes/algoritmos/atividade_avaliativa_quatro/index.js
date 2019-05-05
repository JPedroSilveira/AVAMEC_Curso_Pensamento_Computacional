import React from 'react'
import IntegralActivity from '../../../generics/activity/integral_activity'

/*ESTE COMPONENTE DEVE RECEBER COMO PROPRIEDADE O SEGUINTE ITEM:
    unitId: String, representa o id da unidade em que a atividade se encontra
.*/
class AtividadeAvaliativaQuatro extends React.Component {
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
            id: "atividade_4_algoritmos",
            statement: "<strong>A4.</strong> O Algoritmo 14 abaixo descreve o processo de retirada de um dos 4 pneus de um automóvel. Fazemos a seguir algumas afirmações sobre ele. Selecione a afirmação que você considera menos apropriada para se referir a este algoritmo.",
            questions: [
                {
                    id: "q1_a4_algoritmos",
                    title: "Algoritmo 14",
                    statement: "",
                    algorithm: true,
                    instructions: [
                        {
                            text: "Pegue o macaco;"
                        },
                        {
                            text: "Pegue um recipiente vazio onde serão colocados os parafusos da roda;"
                        },
                        {
                            text: "Posicione o macaco no ponto indicado para levantar o carro com respeito a uma dada roda;"
                        },
                        {
                            text: "Acione um pouco o macaco, sem tirar o carro do piso;"
                        },
                        {
                            text: "Afrouxe todos os parafusos da roda;"
                        },
                        {
                            text: "Levante o carro, deixando-o cerca de 10 centímetros acima do piso;"
                        },
                        {
                            text: "<span class=\"textred\">Enquanto</span> <span class=\"textblue\">houver parafuso por retirar da roda</span> <span class=\"textred\">faça</span>:",
                            instructions: [
                                {
                                    text: "a. Retire um dos parafusos restantes na roda;"
                                },
                                {
                                    text: "b. Coloque o parafuso retirado da roda dentro de um recipiente;"
                                },
                                {
                                    text: "c. Coloque na roda um dos parafusos disponíveis no recipiente."
                                }
                            ]
                        },
                        {
                            text: "Tire o pneu."
                        }
                    ],
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "A Operação 7 descreve uma repetição que nunca termina, pois a Operação 7.c tem efeito contrário ao que é realizado na Operação 7.a.",
                            tip: "De fato pois  na Operação 7.a um dos parafusos é retirado e em 7.c um parafuso é colocado. Dessa forma, em cada repetição, a roda estará sempre com a mesma quantidade de parafusos."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "Pela Operação 7 é possível que, a cada vez,  o parafuso a ser  retirado seja diferente do parafuso retirado na repetição anterior.",
                            tip: "Sim, pela Operação 7 é possível que a cada ciclo de repetição o parafuso a ser retirado seja diferente do parafuso retirado no ciclo anterior."
                        },
                        {
                            value: "1",
                            key: "3",
                            text: "No mesmo ciclo, é possível que o parafuso retirado seja diferente do colocado.",
                            tip: "Não é possível que isso aconteça, pois sempre que a ação for executada, só haverá um buraco em aberto e, portanto, o parafuso que for retirado é o que será devolvido."
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "A exclusão da Operação 7.c torna o algoritmo correto para os objetivos pretendido.",
                            tip: "De fato, a repetição permitirá que todos os parafusos sejam retirados e assim, após uma quantidade de repetições idêntica ao número de parafusos, o pneu deverá ficar livre para ser retirado."
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

export default AtividadeAvaliativaQuatro