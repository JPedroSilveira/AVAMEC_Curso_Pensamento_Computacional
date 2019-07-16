import React, { Fragment } from 'react'
import TextSimpleJustify from '../../../generics/text/simple-justify'
import StandartTextBox from '../../../generics/text/standard-box'
import AlgorithmBox from '../../../generics/text/algorithm-box'
import TextWithImageRight from '../../../generics/text/with-image-right'
import ActivityBox from '../../../generics/text/activity-box'
import Image from '../../../generics/image'
import YouTubePlayer from '../../../generics/youtube_player'
import FontGreen from '../../../generics/font/green'

import IntroTwo from '../../../../images/content/algoritmos/intro-two.svg'
import IntegralActivity from '../../../generics/activity/new_integral_activity'
import Robot from '../../../../images/content/algoritmos/robot.svg'

class Slide3 extends React.Component {

    getActivityOne = () => {
        return {
            unitId: this.props.unitId,
            id: "atividade_1_algoritmos",
            questions: [
                {
                    id: "q1_a1_algoritmos",
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "O algoritmo descreve uma sequência de operações cuja execução completa nos permite obter exatos 4 litros de água no recipiente R5.",
                            tip: "De fato, seguindo essa sequência serão obtidos 4 litros de água no recipiente R5."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "Se retirarmos a Operação 7, o algoritmo passa a descrever uma solução para se obter 7 litros de água.",
                            tip: "De fato, no recipiente R5 teremos 4 litros e no recipiente R3 teremos 3 litros, considerando a adição do conteúdo de R5 com o conteúdo de R3, obteremos 7 litros. Executando a Operação 4, obteremos 2 litros em R3 e 0 litros em R5 e, finalmente executando a Operação 5, teremos 5 litros em R5 e 2 litros em R3. A soma dos conteúdos dos 2 recipientes totalizará 5."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "Para obter 7 litros de água podemos retirar as duas últimas operações do Algoritmo 02.",
                            tip: "De fato, executando a Operação 1 obteremos 5 litros de água em R5 e o recipiente R3 continuará vazio. Executando a Operação 2, obteremos 2 litros em R5 e 3 litros em R3. Executando a Operação 3, obteremos 2 litros em R5 e 0 litros em R3."
                        },
                        {
                            value: "1",
                            key: "4",
                            text: "A execução do algoritmo resultará em 4 litros de água no recipiente R3.",
                            tip: "É impossível obter 4 litros em um recipiente que só comporta 3 litros."
                        }
                    ]
                }
            ]
        }
    }

    render() {
        return (
            <Fragment>
                <Image marginTop="100px" marginBottom="50px" height="auto" width="900px" src={IntroTwo} />
                <StandartTextBox marginBottom="50px">
                    <TextWithImageRight width="300px" src={Robot}>
                        <p>Alguns algoritmos são tão repetidos por nós, que os executamos automaticamente, ou seja, sem refletir. Não é por acaso que, quando observamos alguém repetir uma sequência de etapas muito concentrado, dizemos “hoje ele/ela está no automático”. Mas não se assuste, isso não faz de nós uma máquina.</p>
                    </TextWithImageRight>
                </StandartTextBox>
                <TextSimpleJustify marginBottom="100px">
                    <ActivityBox title={"Atividade Avaliativa 1"} activityTitle={"Algoritmo com recipientes"}>
                        <p>Considere o Algoritmo 02 a seguir, sobre o qual fazemos algumas afirmações. Identifique a alternativa que parece menos apropriada para se referir a este algoritmo.</p><br/>
                        <AlgorithmBox marginBottom="50px" title="Algoritmo 02" algorithmTitle="Recipientes">
                            <FontGreen>
                                <p>Considere que:</p>
                                &nbsp;&nbsp;a) Dois recipientes denominados R5 e R3 têm capacidade para 5 e 3 litros &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;respectivamente;<br/>
                                &nbsp;&nbsp;b) Os dois recipientes estão inicialmente vazios.
                            </FontGreen>
                            <ul>
                                <li>Encha de água o recipiente R5;</li>
                                <li>Despeje o conteúdo de R5 no recipiente R3</li>
                                <li>Esvazie R3;</li>
                                <li>Despeje o conteúdo de R5 em R3;</li>
                                <li>Encha de água o R5;</li>
                                <li>Respeje o conteúdo de R5 necessário para completar a capacidade de R3;</li>
                                <li>Esvazie R3.</li>
                            </ul>
                        </AlgorithmBox>
                        <YouTubePlayer videoId="k-BCRDDC5gA" />
                        <IntegralActivity activity={this.getActivityOne()} />
                    </ActivityBox>
                </TextSimpleJustify>
            </Fragment>
        )
    }
}

export default Slide3
