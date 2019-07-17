import React, { Fragment } from 'react'
import TextStandardBox from '../../../generics/text/standard-box'
import AlgorithmBox from '../../../generics/text/algorithm-box'
import Strong from '../../../generics/font/strong'
import Image from '../../../generics/image'
import Title from '../../../generics/title'
import FontGreen from '../../../generics/font/green'
import FontBlue from '../../../generics/font/blue'

import IntroTen from '../../../../images/content/algoritmos/intro-ten.svg'  
import AlgTwo from '../../../../images/content/algoritmos/alg-two.svg'

class Slide10 extends React.Component {
    render() {
        return (
            <Fragment>
                <Image marginTop="100px" marginBottom="50px" height="auto" width="900px" src={IntroTen} />
                <TextStandardBox marginBottom="50px">
                    <p>Ao elaborarmos um algoritmo, é importante usar técnicas que facilitem o processo de <Strong>construção</Strong>, que ajudem a <Strong>testar</Strong> se o algoritmo obtido resolve o problema e, ainda, que permitam aferir o <Strong>desempenho</Strong> da solução. Nos tópicos a seguir, faremos uma breve apresentação desses temas.</p>
                    <Title>Refinamentos sucessivos</Title>
                    <p>Uma técnica muito usada para o desenvolvimento de algoritmos é a que chamamos de Refinamentos Sucessivos. Um exemplo disso foi apresentado no início desta unidade (Algoritmo 01), quando substituímos a tarefa de fazer o aquecimento por uma condição em relação ao clima:</p>
                    <Image marginTop="25px" marginBottom="25px" height="auto" width="400px" src={AlgTwo} />
                    <p>Essa técnica consiste em ocultar os detalhes de uma determinada ação e apresentá-los em novas versões do algoritmo. Podemos dizer que nesse caso estamos usando o pilar “Abstração” do Pensamento Computacional, ou seja, ocultamos detalhes desnecessários para a compreensão da ação. Essa é uma técnica muito importante do ponto de vista do Pensamento Computacional, pois oferece ao autor de algoritmos a possibilidade de ir acrescentando detalhes progressivamente. Com isso podemos, em cada momento do processo de elaboração, dosar o nível da preocupação com detalhes.</p>
                </TextStandardBox>
                <TextStandardBox marginBottom="50px">
                    <Title>Modularização de Algoritmos</Title>
                    <p>Problemas de maior porte podem ser desdobrados em problemas menores, para facilitar a resolução. Usando o pilar “Decomposição”, podemos modularizar um algoritmo, definindo com isso novos problemas menores. Vejamos a seguir o algoritmo com a preparação do almoço de domingo, desdobrado em novos problemas. A solução apresentada a seguir considera uma decomposição formada por três módulos auxiliares, onde se prepara diferentes partes do cardápio e um módulo principal que organiza o uso dos módulos auxiliares.</p>
                    <AlgorithmBox marginBottom="50px" title="Algoritmo 13" algorithmTitle="Almoço de domingo">
                        <p><FontBlue>(Porção para 4 pessoas)</FontBlue></p>
                        <p><FontGreen>Cardápio: Filé de peixe, assado com molho de cogumelo, acompanhado de risoto de alho poró.</FontGreen></p>
                        <ul>
                            <li>Preparar o filé de peixe;</li>
                            <li>Preparar o molho de cogumelos;</li>
                            <li>Preparar o risoto de alho poró;</li>
                            <li>Servir o almoço.</li>
                        </ul>
                    </AlgorithmBox>
                    <AlgorithmBox marginBottom="50px" title="Algoritmo 13.1" algorithmTitle="Preparando o filé">
                        <ul>
                            <li>Obtenha um quilo de filé de peixe;</li>
                            <li>Lave com suco de um limão;</li>
                            <li>Cubra com 4 dentes de alho amassados;</li>
                            <li>Deixe pegar o tempero por 30 minutos;</li>
                            <li>Pré-aqueça o forno por 15 minutos, a uma temperatura de 200 graus;</li>
                            <li>Unte com azeite de oliva um prato de vidro próprio para ir ao forno;</li>
                            <li>Coloque o filé de peixe no prato e cubra com uma colher de azeite de oliva;</li>
                            <li>Leve o prato ao forno e deixe assar por 25 minutos.</li>
                        </ul>
                    </AlgorithmBox>
                    <AlgorithmBox marginBottom="50px" title="Algoritmo 13.2" algorithmTitle="Preparar o molho de cogumelos">
                        <ul>
                            <li>Corte uma cebola média, bem picada;</li>
                            <li>Corte um tomate médio, bem picado;</li>
                            <li>Corte em tiras 5 azeitonas pequenas descaroçadas;</li>
                            <li>Corte em fatias 12 cogumelos paris médios;</li>
                            <li>Cozinhe os cogumelos por 15 minutos;</li>
                            <li>Doure a cebola em duas colheres de azeite de oliva;</li>
                            <li>Junte o tomate, as azeitonas e o cogumelo cozido;</li>
                            <li>Refogue por 5 minutos;</li>
                            <li>Coloque uma xícara de água quente;</li>
                            <li>Mantenha no fogo até reduzir a água, dando a textura de molho.</li>
                        </ul>
                    </AlgorithmBox>
                    <AlgorithmBox title="Algoritmo 13.3" algorithmTitle="Preparar o risoto de alho poró">
                        <ul>
                            <li>Pique uma cebola;</li>
                            <li>Corte em anéis o tronco do pé de um alho poró (a raiz e as folha são deixadas de fora);</li>
                            <li>Doure a cebola em uma colher de azeite;</li>
                            <li>Refogue o arroz na cebola dourada;</li>
                            <li>Acrescente duas xícaras de água fervente, deixe ferver sem secar completamente;</li>
                            <li>Em outra panela, esquente 2 colheres de azeite, refogue os anéis de alho poró.</li>
                            <li>Acrescente queijo ralado e dissolva-o, sem queimar ou grudar;</li>
                            <li>Acrescente o arroz já cozido, misture, e desligue o fogo.</li>
                        </ul>
                    </AlgorithmBox>               
                </TextStandardBox>
                <TextStandardBox marginBottom="50px">
                    <Title>Teste das Soluções</Title>
                    <p>A elaboração de um algoritmo é um passo importante na resolução de um problema, entretanto, não basta: é importante testá-lo. Assim, após elaborar um algoritmo, antes de divulgá-lo, devemos simular a sua execução para adquirirmos confiança de que ele produzirá o resultado esperado. Esse processo de teste pode revelar erros e o algoritmo deve então ser corrigido.</p>
                    <p>É importante destacar que algoritmos que contêm tomadas de decisão e repetições requerem cuidados especiais, pois possuem mais de um caminho possível durante a execução. Por exemplo, no caso do aquecimento, temos duas possibilidades de resultados esperados ao final da execução, aquecer por 1h ou aquecer por 40 min.</p>
                </TextStandardBox>
                <TextStandardBox marginBottom="100px">
                    <Title>Desempenho das Soluções</Title>
                    <p>Em geral, para um mesmo problema existem diversos algoritmos que produzem resultados corretos. Ter uma solução correta para um problema é fundamental, mas não basta. É necessário também que ela possa ser executada em um tempo que nos permita esperar pelos resultados. Problemas que tratam com grande quantidade de dados são alguns dos que podem nos apresentar essa dificuldade. Desses, um dos mais conhecidos é o problema da ordenação de dados. Considere, por exemplo, criar uma lista ordenada dos alunos de uma turma, por ordem decrescente das alturas. Os dados podem estar registrado sem fichas, uma ficha por aluno, com nome e altura. O problema da ordenação de dados segundo algum critério é muito importante em diversas aplicações. Existem vários algoritmos bem conhecidos para resolvê-lo e sabe-se que a diferença de desempenho entre esses algoritmos pode ser da ordem de 100, ou seja, um algoritmo pode ser 100 vezes mais lento do que outros.</p>
                </TextStandardBox>
            </Fragment>
        )
    }
}

export default Slide10
