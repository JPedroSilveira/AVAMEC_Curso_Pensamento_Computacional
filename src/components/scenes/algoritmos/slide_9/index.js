import React, { Fragment } from 'react'
import TextSimpleJustify from '../../../generics/text/simple-justify'
import AlgorithmBox from '../../../generics/text/algorithm-box'
import ActivityBox from '../../../generics/text/activity-box'
import Image from '../../../generics/image'
import FontGreen from '../../../generics/font/green'
import FontRed from '../../../generics/font/red'
import FontBlue from '../../../generics/font/blue'
import IntegralActivity from '../../../generics/activity/new_integral_activity'

import IntroNine from '../../../../images/content/algoritmos/intro-nine.svg'

class Slide9 extends React.Component {

    getActivityThree = () => {
        return {
            unitId: this.props.unitId,
            id: "atividade_3_algoritmos",
            questions: [
                {
                    id: "q1_a3_algoritmos",
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "A execução do algoritmo certamente produzirá uma pilha vazia de pratos sujos e uma pilha de pratos limpos com a mesma quantidade de pratos que existia na pilha de pratos sujos.",
                            tip: "De fato, podemos observar que: a) o algoritmo só é interrompido quando não há mais pratos na pilha de pratos sujos e que, como cada vez que  um prato sujo é retirado, diminui de um o tamanho dessa pilha, em um determinado momento todos os pratos terão sido retirados; b) cada vez que um prato sujo é retirado, na operação seguinte ele é lavado e a seguir colocado no topo da pilha de pratos limpos; disso se pode concluir que, como a quantidade de pratos limpos cresce de forma inversa ao decréscimo da quantidade de pratos sujos, ao final o número de pratos limpos deverá ser igual ao número de pratos sujos iniciais."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "O algoritmo funciona para qualquer pilha de pratos sujos, independentemente da quantidade de pratos.",
                            tip: "De fato, pois a repetição \"enquanto\" será executada para todos os pratos ainda sujos, independente da quantidade de pratos restantes."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "O tempo necessário para executar o Algoritmo 12, do início ao fim, é  proporcional à quantidade de pratos sujos e depende ainda do tempo médio necessário para lavar 1 prato.",
                            tip: "De fato, a cada ciclo da repetição teremos o tempo para tirar o prato da pilha de sujos, o tempo para lavá-lo e o tempo para colocá-lo na pilha de pratos limpos. Se chamarmos a soma desses tempos de Tp e de Qp a quantidade de pratos, então o tempo total Tt pode ser obtido pelo produto de Tp por Qp, ou seja Tt = Tp x Qp."
                        },
                        {
                            value: "1",
                            key: "4",
                            text: "Se ao executarmos a Operação 1.b, quebrarmos o prato, a execução pode prosseguir sem qualquer problema.",
                            tip: "Se o prato for quebrado na lavagem, então a operação 1.c não pode ser executada, pois não há operação prevista quando não há prato limpo a ser colocado na pilha de limpos."
                        }
                    ]
                }
            ]
        }
    }

    render() {
        return (
            <Fragment>
                <Image marginTop="100px" marginBottom="50px" height="auto" width="900px" src={IntroNine} />
                <TextSimpleJustify marginBottom="100px">
                    <ActivityBox title={"Atividade Avaliativa 3"} activityTitle={"Pilha de pratos"}>
                        <p>Considere o Algoritmo 12, sobre o qual se fazem algumas afirmações. Selecione aquela que lhe parece com menos possibilidade de estar correta.</p><br/>
                        <AlgorithmBox marginBottom="50px" title="Algoritmo 12" algorithmTitle="Pilha de pratos">
                            <FontGreen>
                                <p>Considere uma pilha de pratos sujos e a inexistência de uma pilha de pratos limpos.</p>
                            </FontGreen>
                            <ul>
                                <li><FontRed>Enquanto</FontRed> <FontBlue>pilha de pratos sujos não estiver vazia</FontBlue> <FontRed>faça</FontRed>:
                                    <ul>
                                        <li>Retire o prato que está no topo da pilha de pratos sujos;</li>
                                        <li>Lave o prato sujo recém-retirado da pilha;</li>
                                        <li>Coloque o prato limpo no topo da pilha de pratos limpos.</li>
                                    </ul>
                                </li>
                            </ul>
                        </AlgorithmBox>
                        <IntegralActivity activity={this.getActivityThree()} />
                    </ActivityBox>
                </TextSimpleJustify>
            </Fragment>
        )
    }
}

export default Slide9
