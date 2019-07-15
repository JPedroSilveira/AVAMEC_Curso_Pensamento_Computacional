import React, { Fragment } from 'react'
import TextSimpleJustify from '../../../generics/text/simple-justify'
import ActivityBox from '../../../generics/text/activity-box' 
import IntegralActivity from '../../../generics/activity/new_integral_activity'
import Strong from '../../../generics/font/strong'
import Image from '../../../generics/image'

import IntroTen from '../../../../images/content/pensamento_computacional_interdisciplinaridade_e_cooperacao/intro-ten.svg'

class Slide10 extends React.Component {

    getActivityTwo = () => {
        return {
            unitId: this.props.unitId,
            id: "atividade_2_pensamento_computacional_interdisciplinaridade_e_cooperacao",
            questions: [
                {
                    id: "q1_a2_pensamento_computacional_interdisciplinaridade_e_cooperacao",
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "Estabelece uma clara interdependência entre os membros dos grupo;",
                            tip: "Não é a opção mais adequada, pois, além da interdependência, outras coisas importantes ocorrem, como a aprendizagem cooperativa."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "Permite perceber (e cobrar) responsabilidades individuais;",
                            tip: "Não é a opção mais adequada, uma vez que pelo algoritmo as responsabilidades tendem a recair sobre os subgrupos e não sobre os indivíduos."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "Contempla a negociação de significados;",
                            tip: "Não é a opção mais adequada, pois além da negociação de significados, outras coisas importantes ocorrem, como a aprendizagem cooperativa."
                        },
                        {
                            value: "1",
                            key: "4",
                            text: "O resultado da sua aplicação permite um melhor entendimento sobre o assunto do texto escolhido;",
                            tip: "Opção mais adequada,  uma vez que  esse é exatamente o objetivo do método."
                        },
                        {
                            value: "0",
                            key: "5",
                            text: "Apresenta \"fases\" ou \"estágios\" bem definidos;",
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
                <Image marginTop="100px" marginBottom="50px" height="auto" width="900px" src={IntroTen} />
                <TextSimpleJustify marginBottom="100px">
                    <ActivityBox title={"Atividade Avaliativa 2"} activityTitle={"O método JIGSAW ll"}>
                        <p><Strong>Aprendizagem ativa - o método JIGSAW II (Slavin, 1955) (Pereira, 2003)</Strong> - A lista de ações, a seguir, descreve um método (Algoritmo) de aprendizagem cooperativa, denominado <Strong>JIGSAW II</Strong>.</p>
                        <p><Strong>O Método JIGSAW II</Strong> (Slavin, 1955) (Pereira, 2003)</p>
                        <ul>
                            <li>Escolha um texto que trate do assunto que pretende que os alunos estudem, a partir da leitura de um texto-base;</li>
                            <li>Divida o texto-base em trechos que representem um subtópico do tema a ser estudado;</li>
                            <li>[Grupos de Especialistas] Divida o grupo em subgrupos na mesma quantidade de subtópicos e atribua a cada subgrupo a responsabilidade sobre um dos subtópicos;
                                <ul>
                                    <li>Cada subgrupo deve ler o texto completo com ênfase no subtópico de sua responsabilidade e, a seguir, pesquisar para aprofundar conhecimento sobre seu subtópico;</li>
                                </ul>
                            </li>
                            <li>[Grupos Gerais] Forme novos subgrupos, onde cada um deles deve ter um especialista de cada subtópico;
                                <ul>
                                    <li>Cada grupo deve buscar entender o tema como um todo, a partir da contribuição de cada especialista, ou seja o especialista deve explicar para os demais participantes o tema que aprofundou no estudo da etapa anterior;</li>
                                </ul>
                            </li>
                            <li>[Grupos de Especialistas] Os especialistas voltam aos seus grupos de origem para debater o tema geral;</li>
                            <li>Avalie o conhecimento construído pelos participantes com respeito ao tema como um todo.</li>
                        </ul>
                        <p>Após ler e compreender o algoritmo (método) de aprendizagem cooperativa, denominado JIGSAW II, responda qual das afirmativas a seguir melhor o identifica/caracteriza:</p>
                        <IntegralActivity activity={this.getActivityTwo()} />
                    </ActivityBox>
                </TextSimpleJustify>
            </Fragment>
        )
    }
}

export default Slide10
