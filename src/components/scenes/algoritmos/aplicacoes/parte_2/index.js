import React from 'react'
import CenterBox from '../../../../generics/center_box'
import Alg08 from '../../../../../images/alg_08.png'
import AlgorithmLevel from '../../../../generics/algorithm_level'
import AlgorithmBox from '../../../../generics/algorithm_box'

const AplicacoesParte2 = () => (
    <div>
        <h3>PREPARANDO O ALMOÇO DE DOMINGO</h3>
        <CenterBox>
            <AlgorithmBox>
                <p className="title">ALG 07 - Preparando o almoço de domingo</p>
                <AlgorithmLevel>
                    <span className="textdarkgreen">Salmão assado com molho parisiense acompanhado de risoto de alho poró:</span><br/>
                    <AlgorithmLevel showStyle={true}>
                        <li>Prepare o salmão;</li>
                        <li>Prepare o molho;</li>
                        <li>Prepare o risoto;</li>
                        <li>Sirva o almoço</li>
                    </AlgorithmLevel>
                    <p className="title">ALG 07.1 - Preparando o salmão</p>
                    <AlgorithmLevel showStyle={true}>
                        <li>Obtenha um kilo de filé de salmão;</li>
                        <li>Lave com água de um limão;</li>
                        <li>Cubra com 4 dentes de alho amassado;</li>
                        <li>Deixe pegar o tempero por 30 minutos;</li>
                        <li>Pré aqueca o forno por 15 minutos a uma temperatua de 200 graus;</li>
                        <li>Unte com azeite de oliva  uma prato de vidro próprio par ir ao forno;</li>
                        <li>Coloque o peixe no prato e cubra com uma colher de azeite de oliva;</li>
                        <li>Leve o prato ao forno de deixe assar por trinta minutos.</li>
                    </AlgorithmLevel>
                    <p className="title">ALG 07.2 - Preparando o molho</p>
                    <AlgorithmLevel showStyle={true}>
                        <li>Corte uma cebola média bem picada;</li>
                        <li>Corte um tomate médio, bem picado</li>
                        <li>Corte em tiras 7 azeitonas pequena descadoraças</li>
                        <li>Corte em tiras 7 cogumelos paris médios.</li>
                        <li>Doure a cebola em duas colheres de azeite de oliva;</li>
                        <li>Junte a azeitona e o cogumelo</li>
                        <li>Refogue por 5 minutos</li>
                        <li>Coloque uma xícara de água quente;</li>
                        <li>Mantenha no fogo até reduzir a água, danto a textura de molho.</li>
                    </AlgorithmLevel>
                </AlgorithmLevel>										
		    </AlgorithmBox>
        </CenterBox>
        <h3>MESCLAGEM DE DUAS LISTAS ORDENADAS</h3>
        <p>Suponhamos que temos duas listas ordenadas de cilindros de recipientes cilíndricos de mesmo volume, cada um deles com um conteúdo diferente os que os faz ter pesos diferentes. começando pelo cilindros mais pesado e terminado pelo cilindro mais leve. Como podemos obter uma lista totalmente ordenada com todos os cilindros das duas listas?</p>
        <div className="imagem-centralizada">
            <img src={Alg08} alt="Representação de três listas ordenadas de números em ordem decrescente" />
        </div>
        <CenterBox>
            <AlgorithmBox>
                <p className="title">ALG 08 - Mesclagem de duas listas ordenadas</p>
                <AlgorithmLevel>
                    <span className="textdarkgreen">Vamos chamar de  L1 e L2 as duas listas ordenadas e de L3 a lista a ser construída, com  os elementos de L1 e L2, garantindo que os elementos de L3 também estarão ordenados. A lista L3 inicialmente estará sem elementos.</span><br/>
                    <AlgorithmLevel showStyle={true}>
                        <li><span className="textred">Enquanto</span> L1 tem elementos e L2 tem elementos <span className="textred">faça</span> <br/>
                            <AlgorithmLevel>
                                <span className="textred"> Se</span> primeiro da lista L1 é maior que primeiro da lista 2<br/>
                                <AlgorithmLevel> 
                                    <span className="textred"> então </span> passe o primeiro da lista L1 para o final da lista L3<br/>
                                    <span className="textred"> senão </span> passe o primeiro da lista L2 para o final da lista L3<br/>
                                </AlgorithmLevel>
                            </AlgorithmLevel>
                        </li>
                        <li><span className="textred">Se</span> L1 possui elementos <br/>
                            <AlgorithmLevel>
                                <span className="textred"> então </span> passe todos os elementos de L1 para o final de L3<br/>
                                <span className="textred"> senão </span> passe todos os elementos de L2 para o final de L3<br/>
                            </AlgorithmLevel>                                    
                        </li>
                        <li><span className="textred">Divulgue </span> L3 </li>
                    </AlgorithmLevel>
                </AlgorithmLevel>
            </AlgorithmBox>
        </CenterBox>
    </div>
)

export default AplicacoesParte2