import React from 'react'
import YouTubePlayer from '../../../generics/youtube-player'
import Alg12Simulacao from '../../../../images/alg_12_simulacao.png'

const TopicosAvancados = () => (
    <div>
        <h3>TÓPICOS AVANÇADOS</h3>
        <p>A seguir apresentamos a resolução de problemas mais complexos.</p>
        <p>Considere que desejamos transportar vários recipientes cilíndricos, de mesmo volume, onde estão guardados diferentes produtos, o que resulta em diferentes pesos para os cilindros. Considere que: a) o conteúdo de cada cilindro está inacessível; b) quanto mais pesado for um cilindro, maior é o seu valor e, c) que a altura do compartimento de cargas de nosso veículo não permite o empilhamento de cilindros.</p>
        <p>Suponha ainda que temos uma balança de dois pratos, mas que não possuímos pesos padronizados, para medir o peso de cada cilindro isoladamente. Essa balança consegue comparar o peso do que estiver nos dois pratos, acendendo uma luz para indicar qual o lado que está mais pesado.</p>
        <h4>SOLUCIONANDO - CONSIDERAÇÕES INICIAIS</h4>
        <p>Dado que temos um limite de tempo para fazer o transporte dos cilindros, desejamos transportá-los levando primeiro os mais pesados.</p>
        <div className="box">
            <div className="boxed algoritmos bg-orange">
                <p className="titulo">ALG 10:  ALGORITMO PRINCIPAL</p>
                <div className="nivel-1">
                    <ol>
                        <li>Coloque os cilindros em uma fila, considerando que os mais pesados devem vir primeiro, </li>
                        <li>Preencha o compartimento de cargas com os cilindros que estão na fila de “cilindros ordenados”.</li>
                    </ol>
                </div>
            </div>
        </div>
        <div className="box">
            <div className="boxed algoritmos bg-orange">
                <p className="titulo">ALG 11: ORDENAÇÃO DOS CILINDROS POR PESO</p>
                <div className="nivel-1">
                    <ol>
                        <li><span className="textred">Enquanto</span> houver cilindros na coleção “cilindros desordenados” <span className="textred">faça</span>
                            <div className="subnivel">
                                a.  escolha o cilindro de maior peso na coleção de “cilindros desordenados”;<br />
                                b.  coloque-o no final da fila de “cilindros ordenados”.
                    </div>
                        </li>
                        <li><span className="textred">Divulgue</span> a lista “cilindros ordenados”</li>
                    </ol>
                </div>
            </div>
        </div>
        <div className="box">
            <div className="boxed algoritmos bg-orange">
                <p className="titulo">ALG 12: ESCOLHER O CILINDRO MAIS PESADO DE UMA COLEÇÃO</p>
                <div className="nivel-1">
                    <ol>
                        <li>Coloque um cilindro da coleção "cilindros desordenados"  em um prato qualquer da balança.</li>
                        <li><span className="textred">Enquanto</span> houver cilindros na coleção “cilindros desordenados” <span className="textred">faça</span>
                            <div className="subnivel">
                                a.  pegue um cilindro qualquer da “cilindros desordenados” e coloque no prato livre da balança;<br />
                                b.  esvazie o prato mais leve deixando na balança o cilindro mais pesado até o momento.
                    </div>
                        </li>
                        <li>Divulgue o cilindro que está na balança.</li>
                    </ol>
                </div>
            </div>
        </div>
        <div className="box">
            <div className="boxed algoritmos bg-orange">
                <p className="titulo">ALG 13: PREENCHER O COMPARTILHAMENTO DE CARGAS</p>
                <div className="nivel-1">
                    <ol>
                        <li><span className="textred">Enquanto</span> houver espaço no compartimento de cargas e cilindros na fila “cilindros ordenados” <span className="textred">faça</span>
                            <div className="subnivel">
                                a.  pegue o primeiro cilindro da fila;<br />
                                b.  coloque o cilindro no espaço livre no chão do porta carga.
                    </div>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
        <h4>SIMULANDO A EXECUÇÃO DO ALG 12</h4>
        <p>Na simulação a seguir temos uma lista de 15 cilindros, desordenada por pesos. Para facilitar a compreensão colocamos rótulos indicando os pesos anteriormente medidos.  Dispomos de uma balança que, quando seus dois pratos estão com pesos, ela indica o mais pesado acendendo uma luz vermelha. Os pesos foram sendo usados aleatoriamente. Quando a luz acende, retornamos o cilindro menor para a posição de onde foi retirado e pegamos um outro.</p>
        <p>Os cilindros foram usados na seguinte ordem 38, <span className="textred">67</span>, <span className="textred">75</span>, 58, 37, 17, 67, <span className="textred">79</span>, 39, 60, 63, 56, <span className="textred">97</span>. </p>
        <div className="imagem-centralizada">
            <img src={Alg12Simulacao} alt="Representação ilustrativa da execução do algoritmo 12" />
        </div>
        <p>Para executar a 1a. rodada do algoritmo, com os 12 cilindros, realizamos 11 comparações;</p>
        <p>Para executar a 2a. rodada do algoritmo, com 11 cilindros, realizaremos 10 comparações;</p>
        <p>Para executar a 3a. rodada do algoritmo, com 10 cilindros, realizaremos 9 comparações;</p>
        <p>Assim prosseguindo, a cada vez reduzindo de 1 a quantidade de cilindros, teremos a seguinte sequência de comparações: 11, 10, 9, 8, 7, 6 , 5, 4, 3, 2. Somando todas as comparações, obtemos um total de 65 comparações.</p>
        <p>Se tivéssemos 500 cilindros, o total de comparações seria 124.749.</p>
        <p><span className="textred">Alerta:</span> Parece que essa quantidade de comparações está ficando muito grande.</p>
        <h4>ORDENAÇÃO DE CILINDROS</h4>
        <p>A ordenação de dados é um problema recorrente nas atividades técnicas mas também nas cotidianas. Existem muitas maneiras de fazer ordenação. No vídeo a seguir são apresentadas duas maneiras de realizar a ordenação, cada uma delas com um desempenho diferente.</p>
        <YouTubePlayer videoId="cVMKXKoGu_Y"/>
        <br/>
        <p>Ordenando Cilindros de diferentes pesos:</p>
        <p><span className="textred">Desafio:</span> Que tal escrever  os dois algoritmos? Quando conseguir, compartilhe com seus colegas.</p>
    </div>
)

export default TopicosAvancados