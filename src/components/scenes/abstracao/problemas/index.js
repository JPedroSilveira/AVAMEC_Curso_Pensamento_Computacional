import React from 'react'
import ProblemActivity from '../../../generics/activity/problem_activity'

/*ESTE COMPONENTE DEVE RECEBER COMO PROPRIEDADE O SEGUINTE ITEM:
    unitId: String, representa o id da unidade em que a atividade se encontra
.*/
class Problemas extends React.Component {
    constructor(props){
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
            problems: [
                {
                    id: "problema_um_abstracao",
                    title: "Problema 1",
                    text: "Imagine que você é o gerente de um supermercado, ou simplesmente o encarregado pelo salão de vendas. Como você poderia organizar os produtos de um supermercado para facilitar a vida dos clientes ao tentar encontrar os itens de suas listas de compras? Imagine o que aconteceria aos clientes de seu supermercado se tiverem que fazer suas compras em uma loja na qual os produtos estão dispersos, sem qualquer agrupamento para facilitar a localização?",
                    maxAnswerLength: 500
                },
                {
                    id: "problema_dois_abstracao",
                    title: "Problema 2",
                    text: "Imagine que você é o diretor de uma escola e que precisa organizar o trabalho da equipe de apoio. Quais os grandes grupos de atividades que você consegue destacar para garantir o funcionamento de sua escola?",
                    maxAnswerLength: 500
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