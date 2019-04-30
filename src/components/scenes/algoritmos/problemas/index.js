import React from 'react'
import ProblemActivity from '../../../generics/activity/problem_activity'

/*ESTE COMPONENTE DEVE RECEBER COMO PROPRIEDADE O SEGUINTE ITEM:
    unitId: String, representa o id da unidade em que a atividade se encontra
.*/
class Problemas extends React.Component{
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
                    id: "problema_um_algoritmos",
                    title: "Problema 1",
                    text: "Elaboração de uma história, produzida de forma  cooperativa por um grupo de no máximo 5 alunos: considere que a história será escrita por todos os 5 alunos, mas que cada um deverá escrever parágrafos individualmente (sem conversar com os seus pares), tomando por base apenas o texto que já está escrito e dando continuidade ao mesmo. Os participantes devem estar separados, sem contato direto, e o texto deverá circular em uma determinada ordem. Cada um terá sua vez para escrever e, para tanto, terá em mãos o que foi escrito até o momento, e com base nesse material deverá produzir um novo parágrafo de até 5 linhas. O título, o gênero e o primeiro parágrafo da história devem ser produzidos a partir de uma conversa inicial entre os participantes. A escrita deverá ser completada em até 5 rodadas.",
                    maxAnswerLength: 1000
                },
                {
                    id: "problema_dois_algoritmos",
                    title: "Problema 2",
                    text: "Descreva a construção de um círculo, dividido em 8 partes iguais, usando um compasso, uma régua e um lápis.",
                    maxAnswerLength: 1000
                },
                {
                    id: "problema_tres_algoritmos",
                    title: "Problema 3",
                    text: "Descreva o algoritmo para determinação do máximo divisor comum entre dois números.",
                    maxAnswerLength: 1000
                },
                {
                    id: "problema_quatro_algoritmos",
                    title: "Problema 4",
                    text: "Descreva a preparação de uma sopa de legumes. Considere seus ingredientes prediletos.",
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