import React from 'react'
import ProblemActivity from '../../../generics/activity/problem_activity'

/*ESTE COMPONENTE DEVE RECEBER COMO PROPRIEDADE O SEGUINTE ITEM:
    unitId: String, representa o id da unidade em que a atividade se encontra
.*/
class ProblemsOne extends React.Component{
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
            title: "Elabore um algoritmo para cada um dos problemas a seguir descritos:",
            problems: [
                {
                    id: "problema_um_algoritmos",
                    title: "Problema 1",
                    text: "Preparando o peru assado para a ceia de natal.",
                    maxAnswerLength: 1000
                },
                {
                    id: "problema_dois_algoritmos",
                    title: "Problema 2",
                    text: "Escrevendo o nome de um filme em uma Smart TV para buscar um filme no YouTube.",
                    maxAnswerLength: 1000
                },
                {
                    id: "problema_tres_algoritmos",
                    title: "Problema 3",
                    subtitle: "Como sabemos, para preservar a qualidade dos pneus de seu carros, é recomendado que, a cada 10.000 km, se faça um rodízio dos pneus. Existem diferentes recomendações. Procurem uma na internet e a seguir elabore um algoritmo para realizá-la.",
                    text: "Fazendo rotação de pneus.",
                    maxAnswerLength: 1000
                },
                {
                    id: "problema_quatro_algoritmos",
                    title: "Problema 4",
                    text: "Prepare uma simulação da execução do algoritmo <strong>ALG 08</strong> para Mesclagem de Listas de cilindros, apresentado anteriormente.",
                    subtitle: "<span class=\"textred\">Dica:</span> veja o problema da ordenação de cilindros nos Tópicos avançados e inspire-se na simulação apresentada para aquele algoritmo. ",
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

export default ProblemsOne