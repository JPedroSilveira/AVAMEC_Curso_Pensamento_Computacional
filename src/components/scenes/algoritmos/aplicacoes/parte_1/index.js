import React from 'react'
import Title from '../../../../generics/title'
import CenterBoxContainer from '../../../../generics/center_box_container'
import AlgorithmLevel from '../../../../generics/algorithm_level'
import AlgorithmBox from '../../../../generics/algorithm_box'

const AplicacoesParte1 = () => (
    <div>
        <h3>APLICAÇÕES</h3>
        <p>Na seção anterior apresentamos um algoritmo específico para introduzir os conceitos básicos da construção de algoritmo. Neste ponto apresentamos alguns outros relacionados com a vida cotidiana. A intenção é criar uma familiaridade com o conceito, buscando a desmistificar o clima de tecnicismo que envolve algo tão comum em nossas vidas.									</p>
        <h3>SUBINDO ESCADAS</h3>
        <CenterBoxContainer>
            <AlgorithmBox>
                <Title>ALG 05 - Subir uma escada</Title>
                <AlgorithmLevel>
                    <li><span className="textred">Enquanto</span> houver degrau à sua frente <span className="textred">faça</span>
                        <AlgorithmLevel>
                            Suba o degrau à sua frente.
                        </AlgorithmLevel>
                    </li>
                </AlgorithmLevel>
            </AlgorithmBox>
		</CenterBoxContainer>
        <h3>TROCANDO UM PNEU DO CARRO</h3>
        <CenterBoxContainer>
            <AlgorithmBox>
                <Title>ALG 06 - Trocando um pneu</Title>
                <AlgorithmLevel showStyle={true}>
                   <li>Estacione o carro junto à margem da via;</li>
                   <li>Coloque o triângulo sinalizador na posição apropriada;</li>
                   <li>Identifique a posição do pneu furado;</li>
                   <li>Pegue o macaco;</li>
                   <li>Coloque o macaco na posição adequada para retirada do pneu furado;</li>
                   <li>Levante o macaco até a posição que o peso do carro esteja sob o macaco, sem levantá-lo;</li>
                   <li>Afrouxe cada parafuso da roda, usando a chave de roda;</li>
                   <li>Levante o carro até uma altura que possibilite a colocação de um pneu nas condições de uso;</li>
                   <li>Retire os parafusos, um por um, usando a chave de roda;</li>
                   <li>Retire o pneu furado;</li>
                   <li>Pegue o pneu sobressalente;</li>
                   <li>Coloque o pneu sobressalente, na posição do pneu furado;</li>
                   <li>Coloque os parafusos um por um, sem dar o aperto final;</li>
                   <li>Baixe o carro;</li>
                   <li>Retire o macaco;</li>
                   <li>Dê um aperto final em cada parafuso;</li>
                   <li>Guarde o pneu furado no local para pneu reserva;</li>
                   <li>Tire o triângulo;</li>
                   <li>Guarde o triângulo;</li>
                   <li>Prossiga a viagem.</li>
                </AlgorithmLevel>
            </AlgorithmBox>
        </CenterBoxContainer>
    </div>
)

export default AplicacoesParte1