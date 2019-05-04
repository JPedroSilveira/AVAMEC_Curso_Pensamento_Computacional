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
        if(this.props.unitId === undefined){
            throw Error("Property 'unitId' can't be undefined!")
        }
    }

    getActivity = () => {
        return {
            unitId: this.props.unitId,
            id: "atividade_1_abstracao",
            questions: [
                {
                    id: "q1_a1_abstracao",
                    title: "",
                    statement: "<strong>A1.</strong> Para falar das atividades necessárias para detalhar a abstração “Organizar o seu guarda-roupa”, identifique a atividade que lhe parece menos adequada:",
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "Separar as peças de roupa por tipo.",
                            tip: "Essa atividade é adequada, pois garante assertividade na hora de escolher um tipo determinado de roupa."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "Para cada tipo de peça, organizar por cores.",
                            tip: "Essa atividade é interessante, pois garante que além do tipo de peça você tenha a divisão por cores."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "Guardar cada peça no espaço reservado para o seu tipo.",
                            tip: "Essa atividade é totalmente adequada, garantindo que você saiba a posição exata de cada tipo."
                        },
                        {
                            value: "1",
                            key: "4",
                            text: "Separar as peças por cor, independentemente do tipo.",
                            tip: "Separar as peças por cores provavelmente vai ajudar a deixar seu guarda-roupas com um \"layout\" bonito, mas não vai ser nada prático na hora que você for se vestir."
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