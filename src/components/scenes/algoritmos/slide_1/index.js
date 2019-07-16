import React, { Fragment } from 'react'
import TextStandardBox from '../../../generics/text/standard-box'
import AlgorithmBox from '../../../generics/text/algorithm-box'
import Image from '../../../generics/image'
import FontGreen from '../../../generics/font/green'

import InfoOne from '../../../../images/content/algoritmos/info-one.svg'  
import InfoTwo from '../../../../images/content/algoritmos/info-two.svg'  

class Slide1 extends React.Component {
    render() {
        return (
            <Fragment>
                <TextStandardBox marginBottom="50px">
                    <p>Conseguindo planejar bem o dia, otimizamos o uso do nosso tempo! O dia parece mais longo. Inicialmente vamos examinar a rotina diária, em tempos de treinamento,  do Fidípides.</p>
                    <AlgorithmBox title="Algoritmo 01" algorithmTitle="Rotina diária">
                        <FontGreen><p>Após o sol raiar</p></FontGreen>
                        <ul>
                            <li>Despertar;</li>
                            <li>Calçar as sandálias;</li>
                            <li>Colocar a roupa de treinos;</li>
                            <li>Ir até o campo de treinamento;</li>
                            <li>Apresentar-se para o soldado da vigília;</li>
                            <li>Começar aquecimentos;</li>
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
                    <Image marginTop="50px" marginBottom="50px" height="auto" width="600px" src={InfoOne} />
                </TextStandardBox>
                <TextStandardBox marginBottom="100px">
                    <p>Algoritmo: uma sequência finita de etapas (passos), cada qual executável em um tempo finito, por um agente computacional, natural (humano) ou sintético (computador).</p>
                    <Image marginTop="50px" marginBottom="50px" height="auto" width="600px" src={InfoTwo} />
                </TextStandardBox>
            </Fragment>
        )
    }
}

export default Slide1
