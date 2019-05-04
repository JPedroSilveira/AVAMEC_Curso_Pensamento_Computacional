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
            id: "atividade_completamentar_reconhecimento_de_padroes_um",
            unitId: this.props.unitId,
            statement: "<strong>AC1:</strong> Apresente at&eacute; 3 situa&ccedil;&otilde;es-problema, preferencialmente de sua &aacute;rea de interesse, nas quais voc&ecirc; identifica a possibilidade de utiliza&ccedil;&atilde;o do pilar &ldquo;Reconhecimento de Padr&otilde;es&rdquo; do Pensamento Computacional, para apoiar a elabora&ccedil;&atilde;o de solu&ccedil;&otilde;es. Em cada caso, justifique o uso e argumente sobre sua import&acirc;ncia.",
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
                    title: "A forma de uso do Pilar “Reconhecimento de Padrões”",
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
