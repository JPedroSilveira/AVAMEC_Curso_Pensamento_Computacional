import React, { Fragment } from 'react'
import TextSimpleJustify from '../../../generics/text/simple-justify'
import AlgorithmBox from '../../../generics/text/algorithm-box'
import ExampleBox from '../../../generics/text/example-box'
import Image from '../../../generics/image'
import FontRed from '../../../generics/font/red'
import FontBlue from '../../../generics/font/blue'

import IntroSeven from '../../../../images/content/algoritmos/intro-seven.svg'

class Slide7 extends React.Component {
    render() {
        return (
            <Fragment>
                <Image marginTop="100px" marginBottom="50px" height="auto" width="900px" src={IntroSeven} />
                <TextSimpleJustify marginBottom="100px">
                    <ExampleBox marginBottom="50px" title={"Exemplo 1"} exampleTitle={"Subindo as escadas"}>
                        <p>Comecemos por uma atividade, subir uma escada, que de tão corriqueira nem nos damos conta dela quando precisamos realizá-la, a menos em casos como quando a escada é muito alta e nos provoca preocupações. Nessas situações, em geral perguntamos “será que não tem um elevador por perto?”</p>
                        <AlgorithmBox marginTop="25px" title="Algoritmo 08" algorithmTitle="Subir as escadas">
                            <ul>
                                <li><FontRed>Enquanto</FontRed> <FontBlue>houver degrau à sua frente</FontBlue> <FontRed>faça</FontRed>:
                                    <ul>
                                        <li>Suba o degrau à sua frente.</li>
                                    </ul>
                                </li>
                            </ul>
                        </AlgorithmBox>
                    </ExampleBox>
                    <ExampleBox marginBottom="50px" title={"Exemplo 2"} exampleTitle={"Trocando o pneu de um carro"}>
                        <p>Essa também é uma rotina bem corriqueira, mas alguns motoristas precisam recorrer ao manual, enquanto outros chamam o socorro do seguro ou alguém com experiência no assunto. Seja como for, quem for trocar o pneu de um carro precisa executar essa rotina.</p>
                        <AlgorithmBox marginTop="25px" title="Algoritmo 09" algorithmTitle="Trocando pneu de um carro">
                            <ul>
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
                            </ul>
                        </AlgorithmBox>
                    </ExampleBox>
                </TextSimpleJustify>
            </Fragment>
        )
    }
}

export default Slide7
