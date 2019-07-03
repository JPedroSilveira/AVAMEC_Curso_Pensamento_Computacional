import React, { Fragment } from 'react'
import Title from '../../../../generics/title'
import CenterBoxContainer from '../../../../generics/center_box_container'
import Alg08 from '../../../../../images/alg-08.png'
import AlgorithmLevel from '../../../../generics/algorithm_level'
import AlgorithmBox from '../../../../generics/algorithm_box'
import Image from '../../../../generics/image'
import Strong from '../../../../generics/font/strong'
import YouTubePlayer from '../../../../generics/youtube_player'

const AplicacoesParte4 = () => (
    <Fragment>
        <h3>Mesclagem de duas listas ordenadas</h3>
        <p>No contexto escolar, quando temos duas filas de alunos, organizadas do maior para o menor, pode ser que surja a necessidade de fazer uma mesclagem das duas, para produzir uma &uacute;nica fila, mantendo ainda os alunos em ordem decrescente de altura. </p>
        <p>Vamos ilustrar essa ideia de mesclagem com uma aplica&ccedil;&atilde;o em um contexto ligeiramente diferente. Suponha que temos duas listas ordenadas de recipientes cil&iacute;ndricos com as mesmas dimens&otilde;es, altura e raio da base, portanto com mesmo volume. Cada um deles guarda um conte&uacute;do diferente, o qu&ecirc; os faz ter pesos diferentes. A lista come&ccedil;a pelo cilindro mais pesado e termina pelo cilindro mais leve. Como podemos obter uma lista totalmente ordenada com todos os cilindros das duas listas? Observe na Figura 1, a seguir, um exemplo de duas listas, L1 e L2, com seus cilindros em ordem decrescente de peso e a lista resultante, L3, com todos os cilindros ordenados.</p>
        <Image wide={true} src={Alg08} alt="Representação de três listas ordenadas de números em ordem decrescente">
            <p><Strong>Figura 1: Tr&ecirc;s filas de cilindros em ordem decrescente de peso.</Strong></p>
        </Image>
        <CenterBoxContainer>
            <AlgorithmBox>
                <Title>Algoritmo 11 - Mesclagem de duas listas ordenadas</Title>
                <AlgorithmLevel>
                    <span className="textdarkgreen">Vamos chamar de L1 e L2 as duas listas ordenadas e de L3 uma nova lista a ser construída com os elementos de L1 e L2, garantindo que os elementos de L3 também estarão ordenados.  A lista L3 inicialmente estará sem elementos (vazia).</span><br />
                    <AlgorithmLevel showStyle={true}>
                        <li><span className="textred">Enquanto</span> L1 tem elementos e L2 tem elementos <span className="textred">faça</span> <br />
                            <AlgorithmLevel child={true}>
                                a. <span className="textred">Se</span> primeiro de L1 é mais pesado do que primeiro de L2<br />
                                b. <span className="textred">então </span> passe o primeiro de L1 para o final de L3<br />
                                c. <span className="textred">senão </span> passe o primeiro de L2 para o final de L3<br />
                            </AlgorithmLevel>
                        </li>
                        <li><span className="textred">Se</span> L1 possui elementos <br />
                            <AlgorithmLevel child={true}>
                                a. <span className="textred"> então </span> passe todos os elementos de L1 para o final de L3<br />
                                b. <span className="textred"> senão </span> passe todos os elementos de L2 para o final de L3<br />
                            </AlgorithmLevel>
                        </li>
                        <li><span className="textred">Divulgue </span>L3.</li>
                    </AlgorithmLevel>
                </AlgorithmLevel>
            </AlgorithmBox>
        </CenterBoxContainer>
        <YouTubePlayer videoId="Yiq-M8-ZC-U" />
    </Fragment>
)

export default AplicacoesParte4