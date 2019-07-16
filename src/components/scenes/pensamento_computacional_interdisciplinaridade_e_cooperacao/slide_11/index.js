import React, { Fragment } from 'react'
import TextSimpleJustify from '../../../generics/text/simple-justify'
import Image from '../../../generics/image'
import ProblemBox from '../../../generics/text/problem-box'

import IntroEleven from '../../../../images/content/pensamento_computacional_interdisciplinaridade_e_cooperacao/intro-eleven.svg'
import ProblemThreeImage from '../../../../images/content/pensamento_computacional_interdisciplinaridade_e_cooperacao/problem-three-image.svg'
import ProblemFourImage from '../../../../images/content/pensamento_computacional_interdisciplinaridade_e_cooperacao/problem-four-image.svg'

class Slide11 extends React.Component {
    render() {
        return (
            <Fragment>
                <Image marginTop="100px" marginBottom="50px" height="auto" width="900px" src={IntroEleven} />
                <TextSimpleJustify marginBottom="100px">
                    <ProblemBox marginBottom="50px" title="Problema 3" problemTitle="Projeto Escolar Interdisciplinar">
                        <p>(a) Elaborar um Projeto Escolar Interdisciplinar explorando o bairro onde a escola está localizada: quais são os fundadores; quais os pontos de destaque; suas instituições; sua economia; sua geografia; sua cultura, etc. Procure refletir sobre quais pilares do Pensamento Computacional seriam utilizados na elaboração desse projeto;</p>
                        <p>(b) Como você transformaria esse problema interdisciplinar em um problema cooperativo e interdisciplinar?</p>
                        <Image marginTop="25px" marginBottom="25px" height="auto" width="400px" src={ProblemThreeImage} />
                    </ProblemBox>
                    <ProblemBox title="Problema 4" problemTitle="Situação-Problema">
                        <p>Apresente uma situação-problema, onde a resolução seja realizada por duas ou mais pessoas, pelas quais estejam representadas duas ou mais áreas do conhecimento, nas quais você identifica a possibilidade de utilização do Pensamento Computacional, para apoiar a elaboração de soluções.</p>
                        <Image marginTop="25px" marginBottom="25px" height="auto" width="400px" src={ProblemFourImage} />
                    </ProblemBox>
                </TextSimpleJustify>
            </Fragment>
        )
    }
}

export default Slide11
