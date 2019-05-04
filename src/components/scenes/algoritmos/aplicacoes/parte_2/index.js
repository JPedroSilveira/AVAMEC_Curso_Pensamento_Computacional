import React, { Fragment } from 'react'
import Title from '../../../../generics/title'
import CenterBoxContainer from '../../../../generics/center_box_container'
import AlgorithmLevel from '../../../../generics/algorithm_level'
import AlgorithmBox from '../../../../generics/algorithm_box'

const AplicacoesParte2 = () => (
    <Fragment>
        <h3>Trocando um pneu do carro</h3>
        <p>Essa tamb&eacute;m &eacute; uma rotina bem corriqueira, mas alguns motoristas precisam recorrer ao manual, enquanto outros chamam o socorro do seguro ou algu&eacute;m com experi&ecirc;ncia no assunto. Seja como for, quem for trocar o pneu de um carro precisa executar essa rotina.</p>
        <CenterBoxContainer>
            <AlgorithmBox>
                <Title>Algoritmo 09 - Trocando um pneu</Title>
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
    </Fragment>
)

export default AplicacoesParte2