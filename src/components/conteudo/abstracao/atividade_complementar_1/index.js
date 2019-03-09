import React from 'react'
import AtividadeComplementarExemplosGenerica from '../../utils/atividade_complementar_exemplos_generica'

const QUANTIDADE_MINIMA_DE_RESPOSTAS_ATIVIDADE_COMPLEMENTAR = 1
const QUANTIDADE_MAXIMA_DE_RESPOSTAS_ATIVIDADE_COMPLEMENTAR = 3

/*ESTE COMPONENTE DEVE RECEBER COMO PROPRIEDADE O SEGUINTE ITEM:
    idUnidade: String, representa o id da unidade em que a atividade se encontra
.*/
class AtividadeComplementar1 extends React.Component {
    constructor(props){
        super(props)

        this.validarPropriedades()
    }

    validarPropriedades = () => {
        if (this.props.idUnidade === undefined) {
            throw Error("Propriedade idUnidade não passada como parâmetro!")
        }
    }

    montarAtividade = () => {
        return {
            id: "atividade_completamentar_exemplos_abstracao_um",
            idUnidade: this.props.idUnidade,
            enunciado: "Apresente até 3 exemplos, preferencialmente de sua área de interesse, onde você identifica a utilização deste pilar do pensamento computacional. Em cada exemplo, justifique o uso e argumente sobre a importância.",
            quantidadeMinimaExemplos: QUANTIDADE_MINIMA_DE_RESPOSTAS_ATIVIDADE_COMPLEMENTAR,
            quantidadeMaximaExemplos: QUANTIDADE_MAXIMA_DE_RESPOSTAS_ATIVIDADE_COMPLEMENTAR,
            questoes: [
                {
                    titulo: "Área de interesse",
                    tamanhoMaximoResposta: 200
                },
                {
                    titulo: "A situação problema",
                    tamanhoMaximoResposta: 400
                },
                {
                    titulo: "A forma de uso do Pilar \"Abstração\"",
                    tamanhoMaximoResposta: 400
                },
                {
                    titulo: "Justifique o uso e argumente sobre a sua importância",
                    tamanhoMaximoResposta: 1000
                }
            ]
        }
    }

    render() {
        return (
            <AtividadeComplementarExemplosGenerica atividade={this.montarAtividade()}/>
        )
    }
}  

export default AtividadeComplementar1