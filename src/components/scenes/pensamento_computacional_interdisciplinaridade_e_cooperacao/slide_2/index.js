import React, { Fragment } from 'react'
import TextStandardBox from '../../../generics/text/standard-box'
import ColoredBox from '../../../generics/text/colored-box'
import Title from '../../../generics/title'
import Strong from '../../../generics/font/strong'
import Image from '../../../generics/image'

import IntroOne from '../../../../images/content/pensamento_computacional_interdisciplinaridade_e_cooperacao/intro-one.svg'
import Graph from '../../../../images/content/pensamento_computacional_interdisciplinaridade_e_cooperacao/graph.svg'

class Slide2 extends React.Component {
    render() {
        return (
            <Fragment>
                <Image marginTop="100px" marginBottom="50px" height="auto" width="900px" src={IntroOne} />
                <TextStandardBox marginBottom="50px">
                    <Title>INTERDISCIPLINARIDADE E PENSAMENTO COMPUTACIONAL</Title>
                    <ColoredBox backgroundColor="#D2DAFF" borderColor="#A8B4E2" marginTop="25px" marginBottom="25px">
                        <p>O <Strong>Pilar Abstração</Strong> contribui para que, dado um objeto que interessa a várias disciplinas, sejam levadas em conta as diferentes formas de percebê-lo. A abstração permite identificar os aspectos que interessam mais a uma área de estudo, propiciando um melhor entendimento do problema e de sua solução.</p>
                        <p>O <Strong>Pilar Abstração</Strong> apoia ainda a identificação de formas de representarmos informações, de interesse das mais variadas disciplinas, de forma inteligível por todos. A figura a seguir, por exemplo, chamada de grafo, pode representar uma rede de transportes entre cidades diferentes, onde os círculos representam cidades e as retas que os conectam representam a existência de transporte entre as cidades. Esse grafo também podem representar interações entre os participantes de uma rede social, onde os círculos representam as pessoas e as retas que os ligam representam conexões diretas entre elas.</p>
                        <Image marginTop="25px" marginBottom="25px" height="auto" width="400px" src={Graph} />
                    </ColoredBox>
                    <ColoredBox backgroundColor="#D2DAFF" borderColor="#A8B4E2" marginBottom="25px">
                        <p>O <Strong>Pilar Decomposição</Strong> está diretamente relacionado com a Interdisciplinaridade, tanto pelo fato da fragmentação estar na base de ambos, como pelo fato de que as ideias integradoras basicamente corresponderem à composição da solução de todas as partes resultando na solução de todo o problema.</p>
                    </ColoredBox>
                    <ColoredBox backgroundColor="#D2DAFF" borderColor="#A8B4E2" marginBottom="25px">
                        <p>O <Strong>Pilar Reconhecimento</Strong> de Padrões apoia a modelagem de objetos decompostos, na busca pela identificação de estruturas conhecidas nas mais diversas disciplinas, que possam facilitar a exploração dos elementos resultantes da decomposição.</p>
                    </ColoredBox>
                    <ColoredBox backgroundColor="#D2DAFF" borderColor="#A8B4E2" marginBottom="25px">
                        <p>O <Strong>Pilar Algoritmos</Strong> possibilita um intercâmbio entre saberes das diversas disciplinas, ao usar uma linguagem comum para falar sobre processos, permitindo uma forma precisa de especificar soluções e integrar as partes componentes.</p>
                    </ColoredBox>
                </TextStandardBox>
            </Fragment>
        )
    }
}

export default Slide2
