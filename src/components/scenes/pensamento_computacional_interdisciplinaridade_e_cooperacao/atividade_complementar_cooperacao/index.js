import React, { Fragment } from 'react'
import ComplementaryActivity from '../../../generics/activity/complementary_activity'

const MIN_EXAMPLES_AMOUNT = 0
const MAX_EXAMPLES_AMOUNT = 3

class AtividadeComplementarCooperacao extends React.Component {
    constructor(props) {
        super(props)

        this.validateProps()
    }

    validateProps = () => {
        if (this.props.unitId === undefined) {
            throw Error("Property \"unitId\" can't be undefined!")
        }
    }

    generateActivity = () => {
        return {
            id: "atividade_completamentar_dois_pensamento_computacional_interdisciplinaridade_e_cooperacao",
            unitId: this.props.unitId,
            statement: "<strong>AC3</strong>: Apresente até 3 situações-problema, onde a resolução seja realizada por duas ou mais pessoas, pelas quais estejam representadas duas ou mais áreas do conhecimento, nas quais você identifica a possibilidade de utilização do pensamento computacional, para apoiar a elaboração de soluções. Em cada exemplo, justifique o uso e argumente sobre a importância.",
            minExamplesAmount: MIN_EXAMPLES_AMOUNT,
            maxExamplesAmount: MAX_EXAMPLES_AMOUNT,
            questions: [
                {
                    title: "Sua área de interesse",
                    maxAnswerLength: 100
                },
                {
                    title: "A situação problema",
                    maxAnswerLength: 400
                },
                {
                    title: "Identifique duas ou mais áreas de conhecimento envolvidas",
                    maxAnswerLength: 300
                },
                {
                    title: "A forma de uso de um ou mais  Pilares do Pensamento Computacional no apoio à resolução cooperativa",
                    maxAnswerLength: 400
                },
                {
                    title: "Justifique o uso e argumente sobre a sua importância",
                    maxAnswerLength: 800
                }
            ]
        }
    }

    render() {
        return (
            <Fragment>
                <ComplementaryActivity activity={this.generateActivity()} />
                <p><strong>AC4</strong>: Revisar propostas de dois ou mais colegas, indicando poss&iacute;veis equ&iacute;vocos e/ou sugerindo mudan&ccedil;as e amplia&ccedil;&otilde;es.</p>            
            </Fragment>
        )
    }
}

export default AtividadeComplementarCooperacao