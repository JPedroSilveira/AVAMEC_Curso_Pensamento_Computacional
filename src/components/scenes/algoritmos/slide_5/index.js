import React, { Fragment } from 'react'
import TextStandardBox from '../../../generics/text/standard-box'
import SimpleJustify from '../../../generics/text/simple-justify'
import AlgorithmBox from '../../../generics/text/algorithm-box'
import Strong from '../../../generics/font/strong'
import Image from '../../../generics/image'
import FontGreen from '../../../generics/font/green'
import FontRed from '../../../generics/font/red'
import FontBlue from '../../../generics/font/blue'

import IntroFive from '../../../../images/content/algoritmos/intro-five.svg'
import InfoThree from '../../../../images/content/algoritmos/info-three.svg'
import InfoFour from '../../../../images/content/algoritmos/info-four.svg'
import AlgOne from '../../../../images/content/algoritmos/alg-one.svg'

class Slide5 extends React.Component {
    render() {
        return (
            <Fragment>
                <Image marginTop="100px" marginBottom="50px" height="auto" width="900px" src={IntroFive} />
                <TextStandardBox marginBottom="50px">
                    <p>Com muita frequência, a realização de uma atividade requer a execução de atividades mais simples, por várias vezes. Assim, além da tomada de decisão, precisamos desse outro padrão de ação, conhecido como <Strong>repetição</Strong>. A ideia é simples e consiste na realização da mesma atividade, ou sequência de atividades, várias vezes.</p>
                </TextStandardBox>
                <Image marginBottom="50px" height="auto" width="700px" src={InfoThree} />
                <SimpleJustify marginBottom="50px">
                    <AlgorithmBox title="Algoritmo 04" algorithmTitle="Rotina diária">
                        <FontGreen><p>Após o sol raiar</p></FontGreen>
                        <ul>
                            <li>Despertar;</li>
                            <li>Calçar as sandálias;</li>
                            <li>Colocar a roupa de treinos;</li>
                            <li>Ir até o campo de treinamento;</li>
                            <li>Apresentar-se para o soldado da vigília;</li>
                            <li><FontRed>Se</FontRed> for um dia frio:
                                <ul>
                                    <li><FontRed>então</FontRed>:
                                        <ul>
                                            <li>aquecer por 20 min;</li>
                                            <li>aquecer por 20 min;</li>
                                            <li>aquecer por 20 min;</li>
                                        </ul>
                                    </li>
                                    <li><FontRed>senão</FontRed>:
                                        <ul>
                                            <li>aquecer por 20 min;</li>
                                            <li>aquecer por 20 min;</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>Cumprimentar o general que passará o treinamento;</li>
                            <li>Executar as rotinas de treinamento;</li>
                            <li>Parada para o almoço;</li>
                            <li>Executar os movimentos de posicionamento militar;</li>
                            <li>Estudar as demandas do general;</li>
                            <li>Parada para a janta;</li>
                            <li>Conversa com os colegas soldados;</li>
                            <li>Tomar banho;</li>
                            <li>Retornar ao alojamento.</li>
                        </ul>
                    </AlgorithmBox>
                </SimpleJustify>
                <Image marginBottom="50px" height="auto" width="700px" src={InfoFour} />
                <SimpleJustify marginBottom="50px">
                    <AlgorithmBox title="Algoritmo 05" algorithmTitle="Rotina diária">
                        <FontGreen><p>Após o sol raiar</p></FontGreen>
                        <ul>
                            <li>Despertar;</li>
                            <li>Calçar as sandálias;</li>
                            <li>Colocar a roupa de treinos;</li>
                            <li>Ir até o campo de treinamento;</li>
                            <li>Apresentar-se para o soldado da vigília;</li>
                            <li><FontRed>Se</FontRed> for um dia frio:
                                <ul>
                                    <li><FontRed>então</FontRed> repita 3 vezes aquecer por 20 min;</li>
                                    <li><FontRed>senão</FontRed> repita 2 vezes aquecer por 20 min;</li>
                                </ul>
                            </li>
                            <li>Cumprimentar o general que passará o treinamento;</li>
                            <li>Executar as rotinas de treinamento;</li>
                            <li>Parada para o almoço;</li>
                            <li>Executar os movimentos de posicionamento militar;</li>
                            <li>Estudar as demandas do general;</li>
                            <li>Parada para a janta;</li>
                            <li>Conversa com os colegas soldados;</li>
                            <li>Tomar banho;</li>
                            <li>Retornar ao alojamento.</li>
                        </ul>
                    </AlgorithmBox>
                </SimpleJustify>
                <TextStandardBox marginBottom="100px">
                    <p>A estrutura <Strong>repita</Strong> auxilia-nos a simplificar a escrita de algoritmos quando sabemos a quantidade de vezes que desejamos realizar determinadas ações. Essa estrutura permite evitar a escrita da mesma sequência de ações repetidas vezes. Entretanto, nem sempre o número de repetições é conhecido. Nesses casos, podemos fazer uso da estrutura:</p>
                    <Image height="auto" width="600px" src={AlgOne} />
                    <p>Suponha que lhe foi encomendada a revisão completa de um determinado texto. O Algoritmo 06, apresentado a seguir, detalha os passos necessários para essa tarefa.</p>
                    <AlgorithmBox marginTop="25px" title="Algoritmo 06" algorithmTitle="Revisão completa de um texto">
                        <ul>
                            <li>Obtenha o texto;</li>
                            <li><FontRed>Enquanto</FontRed> <FontBlue>houver uma página por ler</FontBlue> <FontRed>faça</FontRed>:
                                <ul>
                                    <li>Revise a página corrente;</li>
                                    <li>Vire a página;</li>
                                </ul>
                            </li>
                            <li>Devolva o texto.</li>
                        </ul>
                    </AlgorithmBox>
                </TextStandardBox>
            </Fragment>
        )
    }
}

export default Slide5
