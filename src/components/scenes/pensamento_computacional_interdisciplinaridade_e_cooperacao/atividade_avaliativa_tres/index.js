import React, { Fragment } from 'react'
import IntegralActivity from '../../../generics/activity/integral_activity'
import CenterBoxContainer from '../../../generics/center_box_container'
import Box from '../../../generics/box'
import Color from '../../../../constants/color'

/*ESTE COMPONENTE DEVE RECEBER COMO PROPRIEDADE O SEGUINTE ITEM:
    unitId: String, representa o id da unidade em que a atividade se encontra
.*/
class AtividadeAvaliativaTres extends React.Component {
    constructor(props) {
        super(props)

        this.validateProps()
    }

    validateProps = () => {
        if (this.props.unitId === undefined) {
            throw Error("Property 'unitId' can't be undefined!")
        }
    }

    getActivity = () => {
        return {
            unitId: this.props.unitId,
            id: "atividade_3_pensamento_computacional_interdisciplinaridade_e_cooperacao",
            questions: [
                {
                    id: "q1_a3_pensamento_computacional_interdisciplinaridade_e_cooperacao",
                    title: "<strong>A3:</strong> <strong>Aprendizagem ativa - o método JIGSAW II (Slavin, 1955) (Pereira, 2003)</strong> - A lista de ações, a seguir, descreve um método (Algoritmo) de aprendizagem cooperativa, denominado <strong>JIGSAW II</strong>.",
                    smaller: true,
                    statement: "<strong>O Método JIGSAW II</strong> (Slavin, 1955) (Pereira, 2003)<ul><li>Escolha um texto que trate do assunto que pretende que os alunos estudem, a partir da leitura de um texto-base;</li><li>Divida o texto-base em trechos que representem um subtópico do tema a ser estudado;</li><li>[Grupos de Especialistas] Divida o grupo em subgrupos na mesma quantidade de subtópicos e atribua a cada subgrupo a responsabilidade sobre um dos subtópicos;<ul><li>Cada subgrupo deve ler o texto completo com ênfase no subtópico de sua responsabilidade e, a seguir, pesquisar para aprofundar conhecimento sobre seu subtópico;</li></ul></li><li>[Grupos Gerais] Forme novos subgrupos, onde cada um deles deve ter um especialista  de cada subtópico;<ul><li>Cada grupo deve buscar entender o tema como um todo, a partir da contribuição de cada especialista, ou seja o especialista deve explicar para os demais participantes o tema que aprofundou no estudo da etapa anterior;</li></ul></li><li>[Grupos de Especialistas] Os especialistas voltam aos seus grupos de origem para debater o tema geral;</li><li>Avalie o conhecimento construído pelos participantes com respeito ao tema como um todo.</li></ul><strong>Qual das afirmativas parece mais adequada para descrever o método?</strong><br /><br />",
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "Há uma clara interdependência entre os membros do grupo;",
                            tip: "Não é a opção mais adequada, pois, além da interdependência, outras coisas importantes ocorrem, como a aprendizagem cooperativa."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "É possível perceber (e cobrar) responsabilidades individuais;",
                            tip: "Não é a opção mais adequada, uma vez que pelo algoritmo as responsabilidades tendem a recair sobre os subgrupos e não sobre os indivíduos."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "A negociação de significados é contemplada;",
                            tip: "Não é a opção mais adequada, pois além da negociação de significados, outras coisas importantes ocorrem, como a aprendizagem cooperativa."
                        },
                        {
                            value: "1",
                            key: "4",
                            text: "Um melhor entendimento sobre o assunto resulta do método;",
                            tip: "Opção mais adequada,  uma vez que  esse é exatamente o objetivo do método."
                        },
                        {
                            value: "0",
                            key: "5",
                            text: "Há \"fases\" ou \"estágios\" bem definidos.",
                            tip: "Não é essa a afirmativa mais adequada para descrever o método, uma vez que só essa característica não é suficiente para descrevê-lo."
                        }
                    ]
                }
            ]
        }
    }

    render() {
        return (
            <Fragment>
                <IntegralActivity activity={this.getActivity()} />
                <CenterBoxContainer>
                    <Box backgroundColor={Color.ORANGE_BOX}>
                        <h3>Para Saber Mais:</h3>
                        <p>A&ccedil;&otilde;es cooperativas t&ecirc;m sido retratadas de diversas formas, inclusive atrav&eacute;s de filmes dispon&iacute;veis em diferentes plataformas. Nesse contexto sugerimos Spare Parts [Pe&ccedil;as Sobressalentes] (http://www.adorocinema.com/filmes/filme-225201/) que &eacute; baseado em fatos reais e ilustra a coopera&ccedil;&atilde;o em contextos dentro e fora da escola.</p>
                    </Box>
                </CenterBoxContainer>
            </Fragment>
        )
    }
}

export default AtividadeAvaliativaTres