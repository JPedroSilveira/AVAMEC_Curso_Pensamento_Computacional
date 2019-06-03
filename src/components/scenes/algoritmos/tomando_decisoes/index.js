import React, { Fragment } from 'react'
import Title from '../../../generics/title'
import CenterBoxContainer from '../../../generics/center_box_container'
import AlgorithmLevel from '../../../generics/algorithm_level'
import AlgorithmBox from '../../../generics/algorithm_box'
import Strong from '../../../generics/font/strong'

const TomandoDecisoes = () => (
    <Fragment>
        <h3>Tomando decis&otilde;es</h3>
        <p>No <Strong>Algoritmo 01</Strong>, seguimos todos os passos sem a necessidade de tomar qualquer decis&atilde;o entre alternativas diferentes. Isso parece estranho para n&oacute;s humanos, que passamos o tempo todo tomando decis&otilde;es, muitas vezes sobre coisas simples, mas, de vez em quando, sobre coisas de maior complexidade. Por exemplo, &eacute; bem comum que, ao ir &agrave; padaria, possamos ter em mente comprar um tipo de p&atilde;o espec&iacute;fico, mas, chegando l&aacute;, possamos n&atilde;o encontr&aacute;-lo e ent&atilde;o escolhemos um outro. Fa&ccedil;amos de conta que a padaria que frequentamos s&oacute; venda dois tipos de p&atilde;o: &ldquo;p&atilde;o franc&ecirc;s comum&rdquo; e &ldquo;p&atilde;o franc&ecirc;s integral&rdquo;. Podemos ainda supor que ela tenha sempre um deles e que a nossa prefer&ecirc;ncia seja pelo &ldquo;p&atilde;o franc&ecirc;s integral&rdquo;. Vamos reescrever nosso algoritmo, considerando uma escolha simples. No quadro a seguir, apresentamos o <Strong>Algoritmo 03</Strong>, uma nova vers&atilde;o do <Strong>Algoritmo 01</Strong>. </p>
        <p>Na nova vers&atilde;o, podemos observar que a opera&ccedil;&atilde;o &ldquo;pegar os p&atilde;es&rdquo; ganhou um detalhamento, considerando que a a&ccedil;&atilde;o a ser realizada no Passo 8 depende da disponibilidade do tipo de p&atilde;o na padaria que estamos visitando. Isso precisa ser observado por nosso agente computacional, introduzindo-se o que costumamos chamar de uma &ldquo;<Strong>sele&ccedil;&atilde;o</Strong>&rdquo;. Nesse caso estamos ilustrando com uma sele&ccedil;&atilde;o b&aacute;sica, que considera apenas duas possibilidades, ou seja, h&aacute; uma pergunta a ser respondida cuja resposta s&oacute; pode ser &ldquo;<Strong>verdadeiro</Strong>&rdquo; ou &ldquo;<Strong>falso</Strong>&rdquo;.</p>
        <CenterBoxContainer>
            <AlgorithmBox>
                <Title>Algoritmo 03 - Do acordar at&eacute; chegar no local de trabalho</Title>
                <AlgorithmLevel>
                    <span className="textdarkgreen">Ap&oacute;s o barulho do despertador:</span>
                    <AlgorithmLevel showStyle={true} child={true}>
                        <li>Despertar.</li>
                        <li>Calçar um chinelo.</li>
                        <li>Vestir uma roupa.</li>
                        <li>Escovar os dentes.</li>
                        <li>Tomar banho.</li>
                        <li>Trocar de roupa.</li>
                        <li>Ir à padaria.</li>
                        <li><span className="textred">Se</span> encontrar p&atilde;o intergral<br />
                            <AlgorithmLevel child={true}>
                                <span className="textred">então </span>pegar os pães integrais.<br />
                                <span className="textred">senão </span>pegar os pães comuns.
                            </AlgorithmLevel>
                        </li>
                        <li>Pagar a conta.</li>
                        <li>Voltar para casa.</li>
                        <li>Fazer o café.</li>
                        <li>Fazer o desjejum.</li>
                        <li>Escovar os dentes.</li>
                        <li>Pegar a pasta de trabalho.</li>
                        <li>Sair de casa.</li>
                        <li>Pegar o veículo.</li>
                        <li>Deslocar-se para o trabalho.</li>
                    </AlgorithmLevel>
                </AlgorithmLevel>
            </AlgorithmBox>
        </CenterBoxContainer>
        <p>Observe que no Passo 8 do Algoritmo 03 fizemos uma substitui&ccedil;&atilde;o do Passo 8 do Algoritmo 01. Durante a execu&ccedil;&atilde;o do Algoritmo 03, se a senten&ccedil;a &ldquo;encontrar p&atilde;o integral&rdquo; for satisfeita, a a&ccedil;&atilde;o que sucede o termo &ldquo;<Strong>ent&atilde;o</Strong>&rdquo;, &ldquo;pegar os p&atilde;es integrais&rdquo;, ser&aacute; realizada e, se a senten&ccedil;a n&atilde;o for satisfeita, a a&ccedil;&atilde;o que sucede o termo &ldquo;<Strong>sen&atilde;o</Strong>&rdquo;, &ldquo;pegar os p&atilde;es comuns&rdquo;, ser&aacute; realizada.</p>
    </Fragment>
)

export default TomandoDecisoes