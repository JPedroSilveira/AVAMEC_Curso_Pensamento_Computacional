import React from 'react'
import Title from '../../../../generics/title'
import CenterBoxContainer from '../../../../generics/center_box_container'
import AlgorithmLevel from '../../../../generics/algorithm_level'
import AlgorithmBox from '../../../../generics/algorithm_box'

const ConceituacaoParte3 = () => (
    <div>
        <h3>REPETIÇÃO DE ATIVIDADES</h3>
        <p>Com muita frequência, a realização de uma atividade requer a execução de atividades mais simples, por várias vezes. Assim, além da tomada de decisão, precisamos desse outro padrão de ação, conhecido como repetição. A ideia é simples e consiste na realização da mesma atividade, ou sequência de atividades, por várias vezes. </p>
        <p>Prosseguindo no mesmo tema, ou seja, “do acordar até chegar no no local de trabalho”, vamos retomar o nosso <strong>Algoritmo 02</strong>. Nele encontramos a atividade “comprar pães”, que na verdade, como já dissemos antes, é uma <strong>abstração</strong>, dado que ela agrega outras atividades. Vamos considerar que nosso agente compra sempre uma mesma quantidade de pães, digamos cinco (5). No quadro a seguir, apresentamos o Algoritmo 03, uma nova versão do <strong>Algoritmo 02</strong>.</p>
        <CenterBoxContainer>
            <AlgorithmBox>
                <Title>Algoritmo 03 <br /> Iniciação - Do acordar até chegar no local de trabalho</Title>
                <AlgorithmLevel> 
                    <span className="textdarkgreen">Após o barulho do despertador:</span>
                    <AlgorithmLevel showStyle={true}>
                       <li>Despertar.</li>
                       <li>Calçar um chinelo</li>
                       <li>Vestir uma roupa </li>
                       <li>Escovar os dentes</li>
                       <li>Tomar banho</li>
                       <li>Trocar de roupa</li>
                       <li>Ir à padaria</li>
                       <li><span className="textblue">Pegar os pães =</span> <br/>
                            <AlgorithmLevel>
                                <span className="textred">Se </span>encontrar pão integral<br/>
                                <AlgorithmLevel>
                                    <span className="textred">então </span> <span className="textblue">pegar os pães integrais =</span><br/>
                                    <AlgorithmLevel>
                                        <li>pegar um pão integral</li>
                                        <li>pegar um pão integral</li>
                                        <li>pegar um pão integral</li>
                                        <li>pegar um pão integral</li>
                                        <li>pegar um pão integral</li>
                                    </AlgorithmLevel>
                                    <span className="textred">senão </span>pegar os pães comuns.
                                </AlgorithmLevel>
                            </AlgorithmLevel>
                        </li>
                        <li>pagar a conta</li>
                        <li>voltar para casa</li>
                        <li>fazer o café</li>
                        <li>escovar os dentes</li>
                        <li>fazer o desjejum </li>
                        <li>pegar a pasta de trabalho</li>
                        <li>sair de casa</li>
                        <li>pegar o veículo</li>
                        <li>deslocar-se para o trabalho.</li>
                    </AlgorithmLevel>
                </AlgorithmLevel>
            </AlgorithmBox>
        </CenterBoxContainer>
        <p>Podemos observar no nosso novo algoritmo que a atividade <span className="textblue">"pegar os pães integrais"</span>, usando mais uma vez a ideia de refinamento,  foi desdobrada em cinco outras semelhantes: <strong>"pegar um pão integral"</strong>.</p>
        <p>O que temos aqui de novidade é que as cinco atividades usadas para compor a definição de <span className="textblue">"pegar os pães integrais"</span> são idênticas, ou seja, é uma repetição da mesma operação. Do ponto de vista operacional, nada de errado, pois é isso mesmo que desejamos. Já do ponto de vista da escrita, podem surgir inconvenientes. Imaginem que, ao invés de 5 pães, quiséssemos fazer um algoritmo que envolvesse a compra de cem (100) pães. Nesse caso precisaríamos escrever esse algoritmo colocando 100 linhas de texto idênticas. Introduzindo o termo mágico <span className="textblue">"repita <span className="textred">n</span> vezes"</span>, podemos simplificar a escrita, nesse caso, o trecho do Algoritmo 3 poderia ser reescrito como:</p>
        <CenterBoxContainer>
            <AlgorithmBox>
                <AlgorithmLevel>
                    8.<span className="textblue"> pegar os pães =</span>
                    <AlgorithmLevel>   
                        <span className="textred">Se </span>encontrar pão integral<br/>
                        <AlgorithmLevel>
                            <span className="textred">então </span><span className="textblue">pegar os pães integrais = </span><br/>
                            <AlgorithmLevel>
                                <span className="textred">Repita 5 </span><span className="textblue">vezes</span> pegar um pão integral;<br/>
                            </AlgorithmLevel>
                            <span className="textred">senão </span>pegar os pães comuns
                        </AlgorithmLevel>
                    </AlgorithmLevel> 
                </AlgorithmLevel>
            </AlgorithmBox>
		</CenterBoxContainer>
        <p>Procedendo da mesma maneira para o caso dos pães comuns, chegaríamos então a uma nova versão de nosso algoritmo, obtendo o <strong>Algoritmo 4</strong>.</p>
        <CenterBoxContainer>
            <AlgorithmBox>
                <Title>Algoritmo 04 <br /> Iniciação - Do acordar até chegar no local de trabalho</Title>
                <AlgorithmLevel>
                    <span className="textdarkgreen">Após o barulho do despertador: </span>
                    <AlgorithmLevel showStyle={true}>
                        <li>Despertar.</li>
                        <li>Calçar um chinelo.</li>
                        <li>Vestir uma roupa.</li>
                        <li>Escovar os dentes.</li>
                        <li>Tomar banho.</li>
                        <li>Trocar de roupa.</li>
                        <li>Ir à padaria.</li>
                        <li><span className="textblue">pegar os pães =</span> <br/>
                            <AlgorithmLevel>
                                <span className="textred">Se </span>encontrar pão integral<br/>
                                <AlgorithmLevel>
                                    <span className="textred">então </span> <span className="textblue">pegar os pães integrais =</span> <br/>
                                    <AlgorithmLevel>
                                        <span className="textred">Repita 5 vezes:</span> pegar um pão integral.<br/>
                                    </AlgorithmLevel>
                                    <span className="textred">senão </span>pegar os pães comuns <br/>
                                    <AlgorithmLevel>
                                        <span className="textred">Repita 5 vezes:</span> pegar um pão comum.<br/>
                                    </AlgorithmLevel>
                                </AlgorithmLevel>
                            </AlgorithmLevel>
                        </li>
                        <li>Pagar a conta.</li>
                        <li>Voltar para casa.</li>
                        <li>Fazer o café.</li>
                        <li>Escovar os dentes.</li>
                        <li>Fazer o desjejum.</li>
                        <li>Pegar a pasta de trabalho.</li>
                        <li>Sair de casa.</li>
                        <li>Pegar o veículo.</li>
                        <li>Deslocar-se para o trabalho.</li>
                    </AlgorithmLevel>
                </AlgorithmLevel>
            </AlgorithmBox>
        </CenterBoxContainer>
    </div>
)

export default ConceituacaoParte3