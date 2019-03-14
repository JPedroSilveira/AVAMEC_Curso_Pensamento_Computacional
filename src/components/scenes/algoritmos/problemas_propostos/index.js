import React from 'react'
import ProblemasGenerico from '../../../generics/problemas_generico'

/*ESTE COMPONENTE DEVE RECEBER COMO PROPRIEDADE O SEGUINTE ITEM:
    unitId: String, representa o id da unidade em que a atividade se encontra
.*/
class ProblemasPropostos extends React.Component{
    constructor(props) {
        super(props)

        this.validarPropriedades()
    }

    validarPropriedades = () => {
        if (this.props.unitId === undefined) {
            throw Error("Property 'unitId' can't be undefined!")
        }
    }

    montarProblemas = () => {
        return {
            idUnidade: this.props.unitId,
            titulo: "Elabore um algoritmo para cada um dos problemas a seguir descritos:",
            problemas: [
                {
                    id: "problema_um_algoritmos",
                    titulo: "Problema 1",
                    texto: "Preparando o peru assado para a ceia de natal.",
                    tamanhoMaximoResposta: 1000
                },
                {
                    id: "problema_dois_algoritmos",
                    titulo: "Problema 2",
                    texto: "Escrevendo o nome de um filme em uma Smart TV para buscar um filme no YouTube.",
                    tamanhoMaximoResposta: 1000
                },
                {
                    id: "problema_tres_algoritmos",
                    titulo: "Problema 3",
                    subtitulo: "Como sabemos, para preservar a qualidade dos pneus de seu carros, é recomendado que, a cada 10.000 km, se faça um rodízio dos pneus. Existem diferentes recomendações. Procurem uma na internet e a seguir elabore um algoritmo para realizá-la.",
                    texto: "Fazendo rotação de pneus.",
                    tamanhoMaximoResposta: 1000
                },
                {
                    id: "problema_quatro_algoritmos",
                    titulo: "Problema 4",
                    texto: "Prepare uma simulação da execução do algoritmo <strong>ALG 08</strong> para Mesclagem de Listas de cilindros, apresentado anteriormente.",
                    subtitulo: "<span class=\"textred\">Dica:</span> veja o problema da ordenação de cilindros nos Tópicos avançados e inspire-se na simulação apresentada para aquele algoritmo. ",
                    tamanhoMaximoResposta: 1000
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

export default ProblemasPropostos