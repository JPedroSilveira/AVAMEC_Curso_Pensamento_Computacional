import React from 'react'
import IntegralActivity from '../../../generics/activity/integral_activity'

/*ESTE COMPONENTE DEVE RECEBER COMO PROPRIEDADE O SEGUINTE ITEM:
    unitId: String, representa o id da unidade em que a atividade se encontra
.*/
class AtividadeIntegralUm extends React.Component {
    constructor(props){
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
            id: "atividade_1_apresentacao_do_curso",
            questions: [
                {
                    id: "q1_a1_apresentacao_do_curso",
                    title: "",
                    statement: "\"Assinale a alternativa que lhe parece mais apropriada com respeito à afirmação a seguir, considerado o quadro \"Uma ida não planejada ao supermercado\". O Pensamento Computacional poderia ajudar o Sr.José a ter planejado suas compras e com isso, aproveitado melhor seu tempo disponível.",
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "Não, pois ele sempre segue a mesma rotina e já faz o melhor aproveitamento do seu tempo!",
                            tip: "Podemos verificar que o próprio text descreve a experiência do Sr. José no mercado como não sendo a ideal."
                        },
                        {
                            value: "1",
                            key: "2",
                            text: "Sim, pois José poderia por exemplo aprender um pouco sobre algoritmos e criar um para sempre buscar o menor caminho no mercado otimizando seu tempo.",
                            tip: "Pensar neste algoritmo levaria José a criar uma lista de compras \"enxuta\" e que pouparia a ele seu precioso tempo!"
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "Sim, José deve obrigatoriamnte comprar um notebook e instalar um programa para ajudá-lo a planejar suas compras e otimizar seu tempo.",
                            tip: "Não é uma má ideia utilizar um software para planejar suas compras, mas podemos resolver esta questão de uma forma mais simples, assim como nossos antepassados faziam antes do advento do computador! E mesmo muita gente ainda faz hoje. Uma simples lista de compra e uma ideia das gôndolas que devem ser visitadas já podem resolver esta questão."
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "Sim, José deve obrigatoriamnte comprar um \"smartphone\" e instalar um aplicativo para ajudá-lo a planejar suas compras e otimizar seu tempo.",
                            tip: "Não é uma má ideia utilizar um software para planejar suas compras, mas podemos resolver esta questão de uma forma mais simples, assim como nossos antepassados faziam antes do advento do computador! E mesmo muita gente ainda faz hoje. Uma simples lista de compra e uma ideia das gôndolas que devem ser visitadas já podem resolver esta questão."
                        },
                    ]
                }
            ]
        }
    }

    render() {
        return (
            <IntegralActivity activity={this.getActivity()}/>
        )
    }
}

export default AtividadeIntegralUm
