import React from 'react'
import Title from '../../../../generics/title'
import CenterBoxContainer from '../../../../generics/center_box_container'
import AlgorithmLevel from '../../../../generics/algorithm_level'
import AlgorithmBox from '../../../../generics/algorithm_box'

const ConceituacaoParte2 = () => (
    <div>
        <h3>TOMANDO DECISÕES</h3>
        <p>No <strong>Algoritmo 01</strong>, não precisamos tomar nenhuma decisão para avançar para o próximo passo. Isso parece estranho para nós humanos, que passamos o tempo todo tomando decisões, muitas vezes, sobre coisas simples, mas, de vez em quando, sobre coisas de maior complexidade. Por exemplo, é bem comum que, ao ir à padaria, podemos ter em mente comprar um tipo de pão específico, mas, chegando lá, podemos não encontrá-lo e então escolhemos um outro. Façamos de conta que a padaria que frequentamos só venda dois tipos de pão: “pão  francês comum”  e “pão francês integral”. Podemos ainda supor que ela tenha sempre um deles e que a nossa preferência seja pelo “pão francês integral”. Vamos reescrever nosso algoritmo, apresentando uma nova versão, no quadro a seguir.</p>
        <p>Nessa nova versão podemos observar que a operação “pegar os pães” ganhou um detalhamento, considerando que, de fato, a nova ação a ser realizada depende da disponibilidade do tipo de pão na padaria que estamos visitando. Isto precisa ser observado por nosso agente computacional, introduzindo-se o que costumamos chamar de uma <strong>"seleção"</strong>. Nesse caso estamos ilustrando com uma seleção básica, que considera apenas duas possibilidades, ou seja, há uma pergunta a ser respondida cuja resposta só pode ser <strong>"verdadeiro"</strong> ou <strong>"falso"</strong>. </p>
        <CenterBoxContainer>
            <AlgorithmBox>
                <Title>Algoritmo 02 <br /> Iniciação - Do acordar até chegar no local de trabalho</Title>
                <AlgorithmLevel>
                    <span className="textdarkgreen">Após o barulho do despertador:</span>
                    <AlgorithmLevel showStyle={true}>
                        <li>Despertar.</li>
                        <li>Calçar um chinelo.</li>
                        <li>Vestir uma roupa.</li>
                        <li>Escovar os dentes.</li>
                        <li>Tomar banho.</li>
                        <li>Trocar de roupa.</li>
                        <li>Ir à padaria.</li>
                        <li><span className="textblue">Pegar os pães =</span><br/>
                            <AlgorithmLevel>
                                <span className="textred">Se </span>encontrar pão integral<br/>
                                <AlgorithmLevel>
                                    <span className="textred">então </span>pegar os pães integrais.<br/>
                                    <span className="textred">senão </span>pegar os pães comuns.
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
        <p>No momento da execução do Passo 8 do algoritmo, se a pergunta feita pelo “agente” tiver resultado verdadeiro, a ação precedida pelo termo <strong>"então"</strong>  será realizada e, se a resposta à pergunta tiver como resposta <strong>"falso"</strong>, a ação precedida pelo termo <strong>"senão"</strong> será realizada.</p>
        <h3>REFINAMENTOS SUCESSIVOS</h3>
        <p>No <strong>Algoritmo 02</strong>, a atividade “pegar os pães” do <strong>Algoritmo 01</strong> foi detalhada a partir da criação de uma definição, indicada aqui pelo símbolo da igualdade (“=”):</p>
        <CenterBoxContainer>
            <AlgorithmBox>
                <AlgorithmLevel>
                        <li>8. <span className="textblue"> pegar os pães =</span>
                            <AlgorithmLevel>
                                <span className="textred">Se </span>encontrar pão integral<br/>
                                <AlgorithmLevel>
                                    <span className="textred">então </span>pegar os pães integrais.<br/>
                                    <span className="textred">senão </span>pegar os pães comuns.
                                </AlgorithmLevel>
                            </AlgorithmLevel>
                        </li>
                </AlgorithmLevel>
            </AlgorithmBox>
        </CenterBoxContainer>
        <p>Essa ação que acabamos de realizar, ou seja, detalhar uma determinada atividade, é conhecida no contexto da escrita de algoritmos por “refinamento”. Essa é uma técnica muito importante do ponto de vista do Pensamento Computacional, pois oferece ao autor de algoritmos a possibilidade de ir acrescentando detalhes progressivamente. Com isso podemos, em cada momento do processo de elaboração, dosar o nível da preocupação com detalhes. </p>
        <p>É importante observar que essa técnica, como todas as demais que exploraremos neste curso, é apropriada à elaboração de qualquer obra, seja ela  técnica, literária, gráfica, científica, etc. </p>
    </div>
)

export default ConceituacaoParte2