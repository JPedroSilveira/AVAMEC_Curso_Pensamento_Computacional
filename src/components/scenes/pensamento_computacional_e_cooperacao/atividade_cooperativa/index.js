import React from 'react'
import ComplementaryActivity from '../../../generics/activity/complementary_activity'

const MIN_EXAMPLES_AMOUNT = 0
const MAX_EXAMPLES_AMOUNT = 3

class AtividadeCooperativa extends React.Component {
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
            id: "atividade_cooperativa_um_pensamento_computacional_e_cooperacao",
            unitId: this.props.unitId,
            statement: "<span class=\"negrito\">AC3</span>: Apresente at&eacute; 3 situa&ccedil;&otilde;es-problema, onde a resolu&ccedil;&atilde;o seja realizada por duas ou mais pessoas, nas quais eventualmente estejam presente duas ou mais &aacute;reas do conhecimento, nas quais voc&ecirc; identifica a possibilidade de utiliza&ccedil;&atilde;o do pensamento computacional para apoiar a elabora&ccedil;&atilde;o de solu&ccedil;&otilde;es. Em cada exemplo, justifique o uso e argumente sobre a import&acirc;ncia.",
            minExamplesAmount: MIN_EXAMPLES_AMOUNT,
            maxExamplesAmount: MAX_EXAMPLES_AMOUNT,
            questions: [
                {
                    title: "Sua &aacute;rea de interesse:",
                    maxAnswerLength: 100
                },
                {
                    title: "A situa&ccedil;&atilde;o problema:",
                    maxAnswerLength: 400
                },
                {
                    title: "Identifique duas ou mais &aacute;reas de conhecimento envolvidas:",
                    maxAnswerLength: 300
                },
                {
                    title: "A forma de uso de um ou mais Pilares do Pensamento Computacional no apoio &agrave; resolu&ccedil;&atilde;o cooperativa:",
                    maxAnswerLength: 600
                },
                {
                    title: "Justifique o uso e argumente sobre a sua import&acirc;ncia:",
                    maxAnswerLength: 600
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

export default AtividadeCooperativa