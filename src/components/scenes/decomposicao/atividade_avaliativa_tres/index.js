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
            id: "atividade_3_decomposicao",
            questions: [
                {
                    id: "q1_a3_decomposicao",
                    title: "A1. Avaliando um festival folclórico",
                    statement: "Considere que você precisa definir como deve ser realizada a avaliação das danças apresentadas por grupos em um festival folclórico. Considere ainda que esse festival seja realizado pela comunidade de uma escola, de um bairro ou até de uma cidade inteira. Reflita sobre como a avaliação poderia ser decomposta em elementos e indique qual, dentre os seguintes, seria menos adequado para esse fim.",
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "Tempo da apresentação.",
                            tip: "Com certeza seria possível estabelecer um tempo máximo de apresentação e utilizar essa métrica para avaliar a performance do grupo."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "Sincronia.",
                            tip: "Um grupo que treinou adequadamente deve estar em sintonia, com sincronia de movimentos, sendo essa uma boa alternativa de avaliação."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "Precisão de movimentos.",
                            tip: "Movimentos precisos estão associados com dedicação aos treinos e podem ser uma ótima forma de avaliar os grupos."
                        },
                        {
                            value: "1",
                            key: "4",
                            text: "Participação da audiência.",
                            tip: "A participação da audiência não tem influência direta na dança apresentada pelos grupos não sendo uma forma correta de avaliar os grupos."
                        },
                        {
                            value: "0",
                            key: "5",
                            text: "Figurino.",
                            tip: "O figurino está geralmente associado com o tema a ser apresentado pelos grupos e seria uma boa forma de avaliar os mesmos."
                        },
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
