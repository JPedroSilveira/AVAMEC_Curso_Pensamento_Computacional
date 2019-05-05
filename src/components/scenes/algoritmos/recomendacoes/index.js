import React, { Fragment } from 'react'
import CenterBoxContainer from '../../../generics/center_box_container'
import Box from '../../../generics/box'
import Color from '../../../../constants/color'
import AlgorithmBox from '../../../generics/algorithm_box'
import AlgorithmLevel from '../../../generics/algorithm_level'
import Title from '../../../generics/title'

const Recomendacoes = () => (
    <Fragment>
        <h2>Recomendações</h2>
        <p>Ao elaborarmos um algoritmos &eacute; importante usar algumas t&eacute;cnicas que facilitam o processo de <strong>constru&ccedil;&atilde;o</strong>, outras que nos ajudam a <strong>testar</strong> se o algoritmo obtido resolve o problema, e ainda outras para aferir o <strong>desempenho</strong> da solu&ccedil;&atilde;o. Nos t&oacute;picos a seguir, fazemos uma breve apresenta&ccedil;&atilde;o desses temas.</p>
        <h3>Construção de Algoritmos</h3>
        <p>A constru&ccedil;&atilde;o de algoritmos mais sofisticados requer um pouco mais de cuidado na sua elabora&ccedil;&atilde;o. A seguir apresentamos dois bem importantes.</p>
        <p><strong>Refinamentos sucessivos</strong> - Uma t&eacute;cnica muito usada &eacute; a que chamamos de Refinamentos Sucessivos. Um exemplo disso foi apresentado no <strong>Algoritmo 03</strong>, ao substituirmos o Passo 8 do <strong>Algoritmo 01</strong>.</p>
        <CenterBoxContainer>
            <h3>Quadro 5.2 – Substituição do Passo 8 do Algoritmo 01 no Algoritmo 03</h3>
        </CenterBoxContainer>
        <CenterBoxContainer>
            <Box backgroundColor={Color.BLUE_BOX}>
                <strong>Passo 8 do Algoritmo 01</strong>
            </Box>
            <Box backgroundColor={Color.BLUE_BOX}>
                <p>8. Pegar os pães.</p>
            </Box>
        </CenterBoxContainer>
        <CenterBoxContainer>
            <Box backgroundColor={Color.BLUE_BOX}>
                <strong>Passo 8 do Algoritmo 03</strong>
            </Box>
            <Box backgroundColor={Color.BLUE_BOX}>
                <p>8. <span className="textred">Se encontrar pão integral</span></p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="textred">então</span> pegar os pães integrais</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="textred">senão</span> pegar os pães comuns</p>
            </Box>
        </CenterBoxContainer>
        <p>Essa t&eacute;cnica consiste em ocultar os detalhes de uma determinada a&ccedil;&atilde;o e apresent&aacute;-los em novas vers&otilde;es do algoritmo. Podemos dizer que nesse caso estamos usando o pilar &ldquo;<strong>Abstra&ccedil;&atilde;o</strong>&rdquo; do pensamento computacional, ou seja, ocultamos detalhes desnecess&aacute;rios para a compreens&atilde;o da a&ccedil;&atilde;o.</p>
        <p>Essa &eacute; uma t&eacute;cnica muito importante do ponto de vista do Pensamento Computacional, pois oferece ao autor de algoritmos a possibilidade de ir acrescentando detalhes progressivamente. Com isso podemos, em cada momento do processo de elabora&ccedil;&atilde;o, dosar o n&iacute;vel da preocupa&ccedil;&atilde;o com detalhes.</p>
        <p><strong>Modulariza&ccedil;&atilde;o de Algoritmos -</strong> Problemas de maior porte podem ser desdobrados em problemas menores, para facilitar a resolu&ccedil;&atilde;o. Usando o pilar &ldquo;Decomposi&ccedil;&atilde;o&rdquo;, podemos modularizar um algoritmo, definindo com isso novos problemas menores. Vejamos a seguir o algoritmo com a prepara&ccedil;&atilde;o do almo&ccedil;o de domingo, desdobrado em novos problemas.</p>
        <p>A solu&ccedil;&atilde;o apresentada a seguir considera uma decomposi&ccedil;&atilde;o formada por tr&ecirc;s m&oacute;dulos auxiliares, onde se prepara diferentes partes do card&aacute;pio e um m&oacute;dulo principal que organiza o uso dos m&oacute;dulos auxiliares.</p>
        <CenterBoxContainer>
            <AlgorithmBox>
                <Title>Algoritmo 13 - Almoço de domingo </Title>
                <AlgorithmLevel>
                    <span className="textblue">(Porção para 4 pessoas)</span><br /> 
                    <span className="textdarkgreen">Cardápio: Filé de peixe, assado com molho de cogumelo, acompanhado de risoto de alho poró.</span>
                    <AlgorithmLevel showStyle={true}>
                        <li>Preparar o filé de peixe;</li>
                        <li>Preparar o molho de cogumelos;</li>
                        <li>Preparar o risoto de alho poró;</li>
                        <li>Servir o almoço.</li>
                    </AlgorithmLevel>
                </AlgorithmLevel>
            </AlgorithmBox>
        </CenterBoxContainer>
        <CenterBoxContainer>
            <AlgorithmBox>
                <Title>Algoritmo 13.1 - Preparar o filé de peixe</Title>
                <AlgorithmLevel>
                    <AlgorithmLevel showStyle={true}>
                        <li>Obtenha um quilo de filé de peixe;</li>
                        <li>Lave com suco de um limão;</li>
                        <li>Cubra com 4 dentes de alho amassados;</li>
                        <li>Deixe pegar o tempero por 30 minutos;</li>
                        <li>Pré-aqueça o forno por 15 minutos, a uma temperatura de 200 graus;</li>
                        <li>Unte com azeite de oliva um prato de vidro próprio para ir ao forno;</li>
                        <li>Coloque o filé de peixe no prato e cubra com uma colher de azeite de oliva;</li>
                        <li>Leve o prato ao forno e deixe assar por 25 minutos.</li>
                    </AlgorithmLevel>
                </AlgorithmLevel>
            </AlgorithmBox>
        </CenterBoxContainer>
        <CenterBoxContainer>
            <AlgorithmBox>
                <Title>Algoritmo 13.2 - Preparar o molho de cogumelos</Title>
                <AlgorithmLevel>
                    <AlgorithmLevel showStyle={true}>
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
                    </AlgorithmLevel>
                </AlgorithmLevel>
            </AlgorithmBox>
        </CenterBoxContainer>
        <CenterBoxContainer>
            <AlgorithmBox>
                <Title>Algoritmo 13.3 - Preparar o risoto de alho poró</Title>
                <AlgorithmLevel>
                    <AlgorithmLevel showStyle={true}>
                        <li>Pique uma cebola;</li>
                        <li>Corte em anéis o tronco do pé de um alho poró (a raiz e as folha são deixadas de fora);</li>
                        <li>Doure a cebola em uma colher de azeite;</li>
                        <li>Refogue o arroz na cebola dourada;</li>
                        <li>Acrescente duas xícaras de água fervente, deixe ferver sem secar completamente;</li>
                        <li>Em outra panela, esquente 2 colheres de azeite, refogue os  anéis de alho poró.</li>
                        <li>Acrescente queijo ralado e dissolva-o, sem queimar ou grudar;</li>
                        <li>Acrescente o arroz já cozido, misture, e desligue o fogo.</li>
                    </AlgorithmLevel>
                </AlgorithmLevel>
            </AlgorithmBox>
        </CenterBoxContainer>
        <h3>Teste das Soluções</h3>
        <p>A elabora&ccedil;&atilde;o de um algoritmo &eacute; um passo importante na resolu&ccedil;&atilde;o de um problema, entretanto, n&atilde;o basta: &eacute; importante test&aacute;-lo. Assim, ap&oacute;s elaborar um algoritmo, antes de divulg&aacute;-lo, devemos simular a sua execu&ccedil;&atilde;o para adquirirmos confian&ccedil;a de que ele produzir&aacute; o resultado esperado. Esse processo de teste pode revelar erros e o algoritmo deve ent&atilde;o ser corrigido. &Eacute; importante destacar que algoritmos que cont&ecirc;m tomadas de decis&atilde;o e repeti&ccedil;&otilde;es requerem cuidados especiais, pois possuem mais de um caminho poss&iacute;vel durante a execu&ccedil;&atilde;o. Por exemplo, no caso do <strong>Algoritmo 04</strong>, temos duas possibilidades de resultados esperados ao final da execu&ccedil;&atilde;o, comprar cinco p&atilde;es integrais ou comprar tr&ecirc;s p&atilde;es comuns.</p>
        <h3>Desempenho das Soluções</h3>
        <p>Em geral, para um mesmo problema existem diversos algoritmos que produzem resultados corretos. Ter uma solu&ccedil;&atilde;o correta para um problema &eacute; fundamental, mas n&atilde;o basta. &Eacute; necess&aacute;rio tamb&eacute;m que ela possa ser executada em um tempo que permita-nos esperar pelos resultados.</p>
        <p>Problemas que tratam com grande quantidade de dados s&atilde;o alguns dos que podem nos apresentar essa dificuldade. Desses, um dos mais conhecidos &eacute; o problema da ordena&ccedil;&atilde;o de dados. Considere, por exemplo, criar uma lista ordenada dos alunos de uma turma, por ordem decrescente das alturas. Os dados podem estar registrados em fichas, uma ficha por aluno, com nome e altura. O problema da ordena&ccedil;&atilde;o de dados segundo algum crit&eacute;rio &eacute; muito importante em diversas aplica&ccedil;&otilde;es. Existem v&aacute;rios algoritmos bem conhecidos para resolv&ecirc;-lo e sabe-se que a diferen&ccedil;a de desempenho entre esses algoritmos pode ser da ordem de 100, ou seja, um algoritmo pode ser 100 vezes mais lento do que outros.</p>
    </Fragment>
)

export default Recomendacoes