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
            id: "atividade_3_pensamento_computacional_e_cooperacao",
            questions: [
                {
                    id: "q1_a3_pensamento_computacional_e_cooperacao",
                    title: "<span className=\"negrito\">A5</span>: Uma das etapas no cen&aacute;rio apresentado &eacute; a escolha dos v&iacute;deos parciais que ir&atilde;o compor o v&iacute;deo final representado a escola e suas diferentes perspectivas. Dentre os crit&eacute;rios apresentados a seguir, selecione o que parece menos adequado: <<< explicar/incluir negocia&ccedil;&atilde;o neste processo >>>.",
                    statement: "",
                    options: [
                        {
                            value: "1",
                            key: "1",
                            text: "Sorteio.",
                            tip: ""
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "Representativo - faixa etária.",
                            tip: ""
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "Representativo - grupo de interesses.",
                            tip: ""
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "Representativo - pontuação em critérios.",
                            tip: ""
                        },
                        {
                            value: "0",
                            key: "5",
                            text: "Representativo - indicações positivas X negativas em redes sociais.",
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