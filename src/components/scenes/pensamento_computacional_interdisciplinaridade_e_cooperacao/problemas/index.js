import React from 'react'
import ProblemActivity from '../../../generics/activity/problem_activity'

/*ESTE COMPONENTE DEVE RECEBER COMO PROPRIEDADE O SEGUINTE ITEM:
    unitId: String, representa o id da unidade em que a atividade se encontra
.*/
class Problemas extends React.Component {
    constructor(props) {
        super(props)

        this.validateProps()
    }

    validateProps = () => {
        if (this.props.unitId === undefined) {
            throw Error("Property 'unitId' can't be undefined!")
        }
    }

    getProblems = () => {
        return {
            unitId: this.props.unitId,
            title: "Elabore um algoritmo para cada um dos problemas a seguir descritos.",
            problems: [
                {
                    id: "problema_um_pensamento_computacional_interdisciplinaridade_e_cooperacao",
                    title: "Problema 1",
                    text: "Procure identificar os pilares do Pensamento Computacional que estão presentes no cenário proposto na Atividade Avaliativa A1, referente à campanha de esclarecimentos sobre cuidados na compra de alimentos.",
                    maxAnswerLength: 1000
                },
                {
                    id: "problema_dois_algoritmos",
                    title: "Problema 2",
                    text: "Elaborar um plano de alimentação para alguém que deseja perder peso, a partir de seus dados, destacando as diferentes disciplinas envolvidas. Procure refletir sobre quais pilares do Pensamento Computacional foram utilizados na elaboração desse plano.",
                    maxAnswerLength: 1000
                },
                {
                    id: "problema_tres_algoritmos",
                    title: "Problema 3",
                    text: "Elaboração de um Projeto Escolar Interdisciplinar, partindo do bairro onde a escola está localizada, e planejando a exploração do bairro segundo seu surgimento, quais são os fundadores, quais os pontos de destaque, suas instituições, sua economia, geografia, sua cultura, etc. Procure refletir sobre quais pilares do Pensamento Computacional foram utilizados na elaboração desse projeto.",
                    maxAnswerLength: 1000
                }
            ]
        }
    }

    render() {
        return (
            <ProblemActivity activity={this.getProblems()}></ProblemActivity>
        )
    }
}

export default Problemas