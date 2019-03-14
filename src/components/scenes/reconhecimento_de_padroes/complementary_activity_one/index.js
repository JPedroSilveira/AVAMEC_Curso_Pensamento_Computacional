import React from 'react'
import ComplementaryActivity from '../../../generics/activity/complementary_activity'

const MIN_EXAMPLES_AMOUNT = 0
const MAX_EXAMPLES_AMOUNT = 3

class ComplementaryActivityOne extends React.Component {
    constructor(props) {
        super(props)

        this.validarPropriedades()
    }

    validarPropriedades = () => {
        if (this.props.unitId === undefined) {
            throw Error("Property 'unitId' can't be undefined!")
        }
    }

    generateActivity = () => {
        return {
            id: "atividade_completamentar_exemplos_reconhecimento_de_padroes_um",
            unitId: this.props.unitId,
            statement: "Apresente até 3 exemplos, preferencialmente de sua área de interesse, onde você identifica a utilização deste pilar do pensamento computacional. Em cada exemplo, justifique o uso e argumente sobre a importância.",
            minExamplesAmount: MIN_EXAMPLES_AMOUNT,
            maxExamplesAmount: MAX_EXAMPLES_AMOUNT,
            questions: [
                {
                    title: "Área de interesse",
                    maxAnswerLength: 200
                },
                {
                    title: "A situação problema",
                    maxAnswerLength: 400
                },
                {
                    title: "A forma de uso do Pilar \"Reconhecimento de Padrões\"",
                    maxAnswerLength: 400
                },
                {
                    title: "Justifique o uso e argumente sobre a sua importância",
                    maxAnswerLength: 1000
                }
            ]
        }
    }

    render() {
        return (
            <ComplementaryActivity activity={this.generateActivity()} />
        )
    }
}

export default ComplementaryActivityOne