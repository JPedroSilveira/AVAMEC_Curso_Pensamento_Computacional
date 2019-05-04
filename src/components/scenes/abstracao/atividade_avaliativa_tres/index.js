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
        if(this.props.unitId === undefined){
            throw Error("Property 'unitId' can't be undefined!")
        }
    }

    getActivity = () => {
        return {
            unitId: this.props.unitId,
            id: "atividade_3_abstracao",
            questions: [
                {
                    id: "q1_a3_abstracao",
                    title: "",
                    statement: "<strong>A4.</strong> Para organizar o seu guarda-roupa, o que lhe parece ser uma abstração mais conveniente para ajudá-lo na hora de escolher o que vestir: ",
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "O tecido com qual as peças são confeccionadas.",
                            tip: "O tecido de fabricação das peças pode ajudar a conhecer mais sobre tipos de tecido, mas não parece uma boa abstração para organizar um guarda-roupa, que é o objetivo proposto."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "O país onde as peças são fabricadas.",
                            tip: "Saber o país onde as peças são fabricadas ajudaria você em Geografia, mas dificilmente vai gerar uma boa abstração."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "O preço das peças.",
                            tip: "O preço de uma peça de roupa muitas vezes não consegue relacionar-se diretamente com sua qualidade, assim também não é uma boa abstração."
                        },
                        {
                            value: "1",
                            key: "4",
                            text: "O tipo das peças, por exemplo, calça, bermuda, vestido, saia, blazer, etc.",
                            tip: "Saber exatamente qual o tipo de peça está em qual posição do guarda-roupa vai lhe ajudar a planejar seu \"look\" e é a melhor abstração possível neste caso."
                        },
                    ]
                },
                {
                    id: "q2_a3_abstracao",
                    title: "",
                    statement: "<strong>A5.</strong> Para organizar a circulação de veículos de uma cidade, o que parece ser uma característica irrelevante de suas vias:",
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "A largura da via.",
                            tip: "A largura da via pode impedir que mais de um veículo circule pela mesma simultaneamente, sendo uma característica muito relevante."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "A altura máxima permitida para o tráfego de veículos.",
                            tip: "A altura máxima garante por exemplo que um caminhão não vá ficar preso em uma passarela ou viaduto, sendo uma característica muito relevante."
                        },
                        {
                            value: "1",
                            key: "3",
                            text: "A idade média dos veículos que trafegam na via.",
                            tip: "A idade média de um veículo (a não ser que esse seja muito velho) não vai ser um item que evite sua circulação na via."
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "A tonelagem máxima suportada pela via.",
                            tip: "A tonelagem máxima suportada pela via define se pela mesma podem circular veículos de carga ou de grande capacidade de passageiros, sendo uma característica muito relevante."
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