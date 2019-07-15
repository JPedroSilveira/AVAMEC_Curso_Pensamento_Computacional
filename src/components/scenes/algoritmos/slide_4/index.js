import React, { Fragment } from 'react'
import TextStandardBox from '../../../generics/text/standard-box'
import SimpleJustify from '../../../generics/text/simple-justify'
import AlgorithmBox from '../../../generics/text/algorithm-box'
import Image from '../../../generics/image'
import FontGreen from '../../../generics/font/green'
import FontRed from '../../../generics/font/red'

import IntroFour from '../../../../images/content/algoritmos/intro-four.svg'

class Slide4 extends React.Component {
    render() {
        return (
            <Fragment>
                <Image marginTop="100px" marginBottom="50px" height="auto" width="700px" src={IntroFour} />
                <SimpleJustify marginBottom="50px">
                    <AlgorithmBox title="Algoritmo 03" algorithmTitle="Rotina diária">
                        <FontGreen><p>Após o sol raiar</p></FontGreen>
                        <ul>
                            <li>Despertar;</li>
                            <li>Calçar as sandálias;</li>
                            <li>Colocar a roupa de treinos;</li>
                            <li>Ir até o campo de treinamento;</li>
                            <li>Apresentar-se para o soldado da vigília;</li>
                            <li><FontRed>Se</FontRed> for um dia frio:
                                <ul>
                                    <li><FontRed>então</FontRed> fazer 1h de aquecimento;</li>
                                    <li><FontRed>senão</FontRed> fazer 40 min de aquecimento;</li>
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
                    <p>Na nova versão, perceba que o passo “Começar aquecimentos;” ganhou um detalhamento, considerando que a ação a ser realizada depende da temperatura do dia. Isso precisa ser observado por nosso agente computacional, introduzindo-se o que costumamos chamar de uma “seleção”. Nesse caso estamos ilustrando com uma seleção básica, que considera apenas duas possibilidades, ou seja, tem-se uma pergunta cuja resposta só pode ser “verdadeiro” ou “falso”.</p>
                    <p>Durante a execução do novo algoritmo, se a sentença “Se for um dia frio” for satisfeita, a ação que sucede o termo “então”, “fazer 1h de aquecimento”, será realizada e, se a sentença não for satisfeita, a ação que sucede o termo “senão”, “fazer 40 min de aquecimento”, será realizada.</p>
                </TextStandardBox>
            </Fragment>
        )
    }
}

export default Slide4
