import React, { Fragment } from 'react'
import Title from '../../../generics/title'
import Box from '../../../generics/box'
import CenterBoxContainer from '../../../generics/center_box_container'
import AlgorithmLevel from '../../../generics/algorithm_level'
import AlgorithmBox from '../../../generics/algorithm_box'
import Color from '../../../../constants/color'

const TomandoDecisoes = () => (
    <Fragment>
        <h3>Repeti&ccedil;&atilde;o de atividades</h3>
        <p>Com muita frequ&ecirc;ncia, a realiza&ccedil;&atilde;o de uma atividade requer a execu&ccedil;&atilde;o de atividades mais simples, por v&aacute;rias vezes. Assim, al&eacute;m da tomada de decis&atilde;o, precisamos desse outro padr&atilde;o de a&ccedil;&atilde;o, conhecido como <strong>repeti&ccedil;&atilde;o</strong>. A ideia &eacute; simples e consiste na realiza&ccedil;&atilde;o da mesma atividade, ou sequ&ecirc;ncia de atividades, v&aacute;rias vezes.</p>
        <p>Prosseguindo no mesmo tema, ou seja, &ldquo;do acordar at&eacute; chegar no local de trabalho&rdquo;, vamos retomar o nosso <strong>Algoritmo 03</strong>. Nele encontramos as atividades &ldquo;pegar os p&atilde;es integrais&rdquo; e &ldquo;pegar os p&atilde;es comuns&rdquo;, que na verdade, como j&aacute; dissemos antes, s&atilde;o <strong>abstra&ccedil;&otilde;es</strong>, dado que agregam outras atividades. Vamos considerar que nosso agente compra sempre uma mesma quantidade de cinco p&atilde;es, se forem integrais e apenas tr&ecirc;s, se forem comuns. No quadro a seguir, apresentamos o Algoritmo 04, uma nova vers&atilde;o do <strong>Algoritmo 03</strong>, onde fazemos um detalhamento da atividade &ldquo;pegar os p&atilde;es integrais&rdquo; e &ldquo;pegar os p&atilde;es comuns&rdquo;.</p>
        <CenterBoxContainer>
            <AlgorithmBox>
                <Title>Algoritmo 04 <br /> Do acordar at&eacute; chegar no local de trabalho</Title>
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
                                <span className="textred">ent&atilde;o </span>pegar um p&atilde;o integral.<br />
                                <AlgorithmLevel child={true}>
                                    <li>pegar um p&atilde;o integral.</li>
                                    <li>pegar um p&atilde;o integral.</li>
                                    <li>pegar um p&atilde;o integral.</li>
                                    <li>pegar um p&atilde;o integral.</li>
                                </AlgorithmLevel>
                                <span className="textred">sen&atilde;o </span>pegar um p&atilde;o comum.<br />
                                <AlgorithmLevel child={true}>
                                    <li>pegar um p&atilde;o comum.</li>
                                    <li>pegar um p&atilde;o comum.</li>
                                </AlgorithmLevel>
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
        <p>Podemos observar no nosso novo algoritmo que a atividade <span className="textblue"><strong>&ldquo;pegar os p&atilde;es integrais&rdquo;</strong></span>, foi desdobrada em cinco repeti&ccedil;&otilde;es da atividade mais simples <strong>&ldquo;pegar um p&atilde;o integral&rdquo;</strong>.</p>
        <p>O que temos aqui de novidade &eacute; que as cinco atividades usadas para compor a defini&ccedil;&atilde;o de <span className="textblue"><strong>&ldquo;pegar os p&atilde;es integrais&rdquo;</strong></span> s&atilde;o id&ecirc;nticas, ou seja, temos cinco repeti&ccedil;&otilde;es da mesma opera&ccedil;&atilde;o. Do ponto de vista operacional, nada de errado, pois &eacute; isso mesmo que desejamos. J&aacute; do ponto de vista da escrita, podem surgir inconvenientes. Imaginem que, ao inv&eacute;s de 5 p&atilde;es integrais, quis&eacute;ssemos fazer um algoritmo que envolvesse a compra de cem (100) p&atilde;es integrais. Nesse caso precisar&iacute;amos escrever esse algoritmo colocando 100 linhas de texto id&ecirc;nticas com a atividade &quot;pegar um p&atilde;o integral&quot;. Introduzindo a express&atilde;o <strong>&ldquo;<span className="textblue">repita</span> <span className="textred">n</span> <span className="textblue">vezes</span>&rdquo;</strong>, podemos simplificar a escrita do algoritmo. Nesse caso, a atividade 8 do Algoritmo 4 poderia ser reescrita como:</p>
        <CenterBoxContainer>
            <AlgorithmBox>
                <AlgorithmLevel>
                    <li>8. <span className="textred">Se</span> encontrar p&atilde;o integral
                        <AlgorithmLevel child={true}>
                            <li><span className="textred">Então repita</span> 5 <span className="textred">vezes</span> pegar um pão integral.</li>
                            <li><span className="textred">Senão repita</span> 3 <span className="textred">vezes</span> pegar um pão comum.</li>
                        </AlgorithmLevel>
                    </li>
                </AlgorithmLevel>
            </AlgorithmBox>
        </CenterBoxContainer>
        <p>Chegar&iacute;amos ent&atilde;o a uma nova vers&atilde;o de nosso algoritmo, obtendo o <strong>Algoritmo 05</strong>.</p>
        <CenterBoxContainer>
            <AlgorithmBox>
                <Title>Algoritmo 05 <br /> Do acordar at&eacute; chegar no local de trabalho</Title>
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
                                <li><span className="textred">Então repita</span> 5 <span className="textred">vezes</span> pegar um pão integral.</li>
                                <li><span className="textred">Senão repita</span> 3 <span className="textred">vezes</span> pegar um pão comum.</li>
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
        <p>A estrutura <span className="textred">repita</span> auxilia-nos a simplificar a escrita de algoritmos quando sabemos a quantidade de vezes que desejamos realizar determinadas a&ccedil;&otilde;es. Essa estrutura permite evitar a escrita da mesma sequ&ecirc;ncia de a&ccedil;&otilde;es por repetidas vezes. Entretanto, nem sempre o n&uacute;mero de repeti&ccedil;&otilde;es &eacute; conhecido. Nesses casos, podemos fazer uso da estrutura:</p>
        <CenterBoxContainer>
            <Box backgroundColor={Color.BLUE_BOX}>
                <p className="pcenter"><strong><span className="textred">enquanto</span> &ldquo;<span className="textblue">express&atilde;o</span>&rdquo; <span className="textred">fa&ccedil;a</span> &ldquo;lista de a&ccedil;&otilde;es&rdquo;</strong></p>
            </Box>
        </CenterBoxContainer>
        <p>que executa uma determinada lista de a&ccedil;&otilde;es enquanto uma determinada express&atilde;o for avaliada de forma positiva e, caso contr&aacute;rio, segue para o passo seguinte.</p>
        <p>Suponha que lhe foi encomendada a revis&atilde;o completa de um determinado texto. <strong>O Algoritmo 06</strong>, apresentado a seguir, detalha os passos necess&aacute;rios para essa tarefa.</p>
        <CenterBoxContainer>
            <AlgorithmBox>
                <Title>Algoritmo 06 <br /> Revis&atilde;o completa de um texto</Title>
                <AlgorithmLevel showStyle={true}>
                    <li>Obtenha o texto.</li>
                    <li><span className="textred"><strong>Enquanto</strong></span> <span className="textblue">houver uma página por ler</span> <span className="textred"><strong>faça</strong></span><br />
                        <AlgorithmLevel child={true}>
                            <li>a. Revise a página corrente.</li>
                            <li>b. Vire a página.</li>
                        </AlgorithmLevel>
                    </li>
                    <li>Devolva o texto.</li>
                </AlgorithmLevel>
            </AlgorithmBox>
        </CenterBoxContainer>
    </Fragment>
)

export default TomandoDecisoes