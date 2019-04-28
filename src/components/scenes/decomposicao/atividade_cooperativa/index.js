import React, { Fragment } from 'react'
import ComplementaryActivity from '../../../generics/activity/complementary_activity'

const MIN_EXAMPLES_AMOUNT = 0
const MAX_EXAMPLES_AMOUNT = 3

class AtividadeCooperativa extends React.Component {
    constructor(props){
        super(props)

        this.validateProps()
    }

    validateProps = () => {
        if (this.props.unitId === undefined) {
            throw Error("Property 'unitId' can't be undefined!")
        }
    }

    generateActivity = () => {
        return {
            id: "atividade_completamentar_decomposicao_exemplos_um",
            unitId: this.props.unitId,
            statement: "<strong>AC1:</strong> Apresente até 3 situações-problema, preferencialmente de sua área de interesse, em que você identifica a possibilidade de utilização deste pilar do pensamento  computacional, para apoiar a elaboração de soluções. Em cada caso, justifique o uso e argumente sobre sua importância.",
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
                    title: "A forma de uso do Pilar “Decomposição”",
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
            <Fragment>
                <ComplementaryActivity activity={this.generateActivity()} />
                <p><strong>AC2:</strong> Revisar propostas de dois ou mais colegas, indicando poss&iacute;veis equ&iacute;vocos e/ou sugerindo mudan&ccedil;as e amplia&ccedil;&otilde;es.</p>
            </Fragment>
        )
    }
}
export default AtividadeCooperativa
