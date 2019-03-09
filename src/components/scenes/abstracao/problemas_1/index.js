import React from 'react'
import ProblemasGenerico from '../../../generics/problemas_generico'

/*ESTE COMPONENTE DEVE RECEBER COMO PROPRIEDADE O SEGUINTE ITEM:
    idUnidade: String, representa o id da unidade em que a atividade se encontra
.*/
class Problemas extends React.Component {
    constructor(props){
        super(props)

        this.validarPropriedades()
    }

    validarPropriedades = () => {
        if (this.props.idUnidade === undefined) {
            throw Error("Propriedade idUnidade não passada como parâmetro!")
        }
    }

    montarProblemas = () => {
        return {
            idUnidade: this.props.idUnidade,
            problemas: [
                {
                    id: "problema_um_abstracao",
                    titulo: "Problema 1",
                    texto: "Imagine que você é o gerente de um supermercado, ou simplesmente o encarregado pelo salão de vendas. Como você poderia organizar os produtos de um supermercado para facilitar a vida dos clientes ao tentar encontrar os itens de suas listas de compras? Imagine o que aconteceria aos clientes de seu supermercado se tiverem que fazer suas compras em uma loja na qual os produtos estão dispersos, sem qualquer agrupamento para facilitar a localização.",
                    tamanhoMaximoResposta: 500
                },
                {
                    id: "problema_dois_abstracao",
                    titulo: "Problema 2",
                    texto: "Imagine que você é o diretor de uma escola e que precisa organizar o trabalho da equipe de apoio. Quais os grandes grupos de atividades que você consegue destacar para garantir o funcionamento de sua escola?",
                    tamanhoMaximoResposta: 500
                }
            ]
        }
    }

    render() {
        return (
            <ProblemasGenerico atividade={this.montarProblemas()}></ProblemasGenerico>
        )
    }
}

export default Problemas