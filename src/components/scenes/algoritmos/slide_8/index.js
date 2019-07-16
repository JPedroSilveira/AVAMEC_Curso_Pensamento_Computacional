import React, { Fragment } from 'react'
import TextSimpleJustify from '../../../generics/text/simple-justify'
import AlgorithmBox from '../../../generics/text/algorithm-box'
import ExampleBox from '../../../generics/text/example-box'
import Image from '../../../generics/image'
import YouTubePlayer from '../../../generics/youtube_player'
import FontRed from '../../../generics/font/red'
import FontBlue from '../../../generics/font/blue'
import FontGreen from '../../../generics/font/green'

import IntroEight from '../../../../images/content/algoritmos/intro-eight.svg'
import ListsL1L2L3 from '../../../../images/content/algoritmos/listsL1L2L3.svg'

class Slide8 extends React.Component {
    render() {
        return (
            <Fragment>
                <Image marginTop="100px" marginBottom="50px" height="auto" width="900px" src={IntroEight} />
                <TextSimpleJustify marginBottom="100px">
                    <ExampleBox marginBottom="50px" title={"Exemplo 3"} exampleTitle={"Uma experiência escolar em tempo de Cultura Digital"}>
                        <p>Professores diariamente precisam propor atividades para seus alunos, buscando apoiá-los na construção de conhecimento sobre determinados assuntos. No caso a seguir, estamos supondo que os alunos tenham acesso a computadores e Internet, seja no laboratório de Informática da escola ou mesmo em suas residências. Assim, estamos considerando a possibilidade do uso de editor de texto, consultas à Internet e troca de mensagens por email.</p>
                        <AlgorithmBox marginTop="25px" title="Algoritmo 10" algorithmTitle="Explorando um tema sala de aula">
                            <p><FontBlue>(uma experiência de aprendizagem cooperativa na cultura digital)</FontBlue></p>
                            <p><FontGreen>Pré condições: sentados em suas mesas, dispostas em círculo, os alunos recebem um texto selecionado pelo(a) professor(a).</FontGreen></p>
                            <ul>
                                <li>Ler o texto atentamente;</li>
                                <li>Elaborar e registrar, em uma folha com seu nome, 2 questões sobre o texto lido;</li>
                                <li>Passar as suas questões para o colega que está à sua esquerda;</li>
                                <li>Receber a lista de questões que lhe foi passada pelo colega que está à sua direita;</li>
                                <li>Responder uma das questões;</li>
                                <li>Passar a lista para o colega que está à sua esquerda;</li>
                                <li>Receber uma nova lista que lhe foi passada pelo colega que está à sua direita;</li>
                                <li>Responder uma das questões ainda não respondidas;</li>
                                <li>Entregar a lista que está em suas mãos ao colega que a escreveu;</li>
                                <li>Em casa, digitar a sua questão e as respostas recebidas e compartilhá-lhas por email com o professor;</li>
                                <li>Fazer pesquisas nos livros e na Internet e escrever um pequeno texto com as respostas às suas perguntas e enviar por email para todos os colegas e para o professor.</li>
                            </ul>
                            <p><FontGreen>Posteriormente o professor fará uma compilação das perguntas e respostas e distribuirá para todos os alunos. Em outro momento presencial, a turma discutirá sobre as questões que surgiram e as diferentes respostas, para consolidar as aprendizagens.</FontGreen></p>
                        </AlgorithmBox>
                    </ExampleBox>
                    <ExampleBox marginBottom="50px" title={"Exemplo 4"} exampleTitle={"Mesclagem de duas listas ordenadas"}>
                        <p>No contexto escolar, quando temos duas filas de alunos, organizadas do maior para o menor, pode ser que surja a necessidade de fazer uma mesclagem das duas, para produzir uma única fila, mantendo ainda os alunos em ordem decrescente de altura.</p>
                        <p>Vamos ilustrar essa ideia de mesclagem com uma aplicação em um contexto ligeiramente diferente. Suponha que temos duas listas ordenadas de recipientes cilíndricos com as mesmas dimensões, altura e raio da base, portanto com mesmo volume. Cada um deles guarda um conteúdo diferente, o quê os faz ter pesos diferentes. A lista começa pelo cilindro mais pesado e termina pelo cilindro mais leve. Como podemos obter uma lista totalmente ordenada com todos os cilindros das duas listas? Observe na Figura 1, a seguir, um exemplo de duas listas, L1 e L2, com seus cilindros em ordem decrescente de peso e a lista resultante, L3, com todos os cilindros ordenados.</p>
                        <Image marginTop="25px" marginBottom="25px" height="auto" width="600px" src={ListsL1L2L3} />
                        <AlgorithmBox marginTop="25px" marginBottom="25px" title="Algoritmo 11" algorithmTitle="Mesclagem listas ordenadas">
                            <p><FontGreen>Vamos chamar de L1 e L2 as duas listas ordenadas e de L3 uma nova lista a ser construída com os elementos de L1 e L2, garantindo que os elementos de L3 também estarão ordenados. A lista L3 inicialmente estará sem elementos (vazia).</FontGreen></p>
                            <ul>
                                <li><FontRed>Enquanto</FontRed> L1 tem elementos e L2 tem elementos <FontRed>faça</FontRed>:
                                    <ul>
                                        <li><FontRed>Se</FontRed> primeiro de L1 é mais pesado do que primeiro de L2:
                                            <ul>
                                                <li><FontRed>então</FontRed> passe o primeiro de L1 para o final de L3;</li>
                                                <li><FontRed>senão</FontRed> passe o primeiro de L2 para o final de L3;</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>Se L1 possui elementos:
                                    <ul>
                                        <li><FontRed>Se</FontRed> primeiro de L1 é mais pesado do que primeiro de L2:
                                            <ul>
                                                <li><FontRed>então</FontRed> passe todos os elementos de L1 para o final de L3;</li>
                                                <li><FontRed>senão</FontRed> passe todos os elementos de L2 para o final de L3;</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>Divulgue L3.</li>
                            </ul>
                        </AlgorithmBox>
                        <YouTubePlayer videoId="Yiq-M8-ZC-U" />
                    </ExampleBox>
                </TextSimpleJustify>
            </Fragment>
        )
    }
}

export default Slide8
