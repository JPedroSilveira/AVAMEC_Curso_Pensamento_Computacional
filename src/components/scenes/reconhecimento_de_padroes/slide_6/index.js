import React, { Fragment } from 'react'
import StandardBox from '../../../generics/text/standard-box'
import TextSimpleJustify from '../../../generics/text/simple-justify'
import Image from '../../../generics/image'
import ProblemBox from '../../../generics/text/problem-box'
import ExternalLink from '../../../generics/external_link'

import IntroSix from '../../../../images/content/reconhecimento_de_padroes/intro-six.svg'
import Tangram from '../../../../images/content/reconhecimento_de_padroes/tangram.svg'
import Problem1Image from '../../../../images/content/reconhecimento_de_padroes/problem-one.svg'
import Problem2Image from '../../../../images/content/reconhecimento_de_padroes/problem-two.svg'
import Problem3Image from '../../../../images/content/reconhecimento_de_padroes/problem-three.svg'

class Slide6 extends React.Component {
    render() {
        return (
            <Fragment>
                <Image marginTop="100px" marginBottom="50px" height="auto" width="900px" src={IntroSix} />
                <StandardBox>
                    <p>Um tipo de quebra-cabeça bastante famoso é o Tangram. O Tangram é formado por uma coleção de 7 peças geométricas, obtidas por um processo específico, a partir da subdivisão de um quadrado. São 5 triângulos, 1 quadrado e 1 paralelogramo.</p>
                    <p>Existe grande variedade de figuras que podem ser formadas com essas 7 peças. Uma questão central que se coloca é a cobertura de uma determinada imagem com as peças de um Tangram.</p>
                    <Image marginTop="50px" height="auto" width="250px" src={Tangram} />
                </StandardBox>
                <TextSimpleJustify marginTop="50px" marginBottom="50px">
                    <ProblemBox title="Problema 1" problemTitle="Como produzir as peças de um Tangram">
                        <p>Escreva uma sequência de instruções, explicando como produzir as peças de um Tangram a partir de uma folha de papel em forma de quadrado.</p>
                        <Image marginTop="50px" height="auto" width="300px" src={Problem1Image} />
                    </ProblemBox>
                    <ProblemBox marginTop="50px" title="Problema 2" problemTitle="Cobrir área com peças de um Tangram">
                        <p>Fazer a cobertura de uma imagem com as peças de um Tangram, conforme o molde da imagem a seguir.</p>
                        <Image marginTop="50px" height="auto" width="300px" src={Problem2Image} />
                        <p>DICA: Você pode fazer online no site <ExternalLink href="https://rachacuca.com.br/raciocinio/tangram/1/">Rachacuca</ExternalLink>.</p>
                    </ProblemBox>
                    <ProblemBox marginTop="50px" title="Problema 3" problemTitle="Situação-problema">
                        <p>Apresente 1 situação-problema, preferencialmente de sua área de interesse, na qual você identifica a possibilidade de utilização do pilar Reconhecimento de Padrões do Pensamento Computacional, para apoiar a elaboração de soluções.</p>
                        <Image marginTop="50px" height="auto" width="300px" src={Problem3Image} />
                    </ProblemBox>
                </TextSimpleJustify>
            </Fragment>
        )
    }
}

export default Slide6
