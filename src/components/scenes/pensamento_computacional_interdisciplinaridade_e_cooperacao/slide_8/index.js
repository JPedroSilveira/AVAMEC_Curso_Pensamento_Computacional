import React, { Fragment } from 'react'
import TextSimpleJustify from '../../../generics/text/simple-justify'
import Image from '../../../generics/image'
import ProblemBox from '../../../generics/text/problem-box'

import IntroEight from '../../../../images/content/pensamento_computacional_interdisciplinaridade_e_cooperacao/intro-eight.svg'
import InfoThree from '../../../../images/content/pensamento_computacional_interdisciplinaridade_e_cooperacao/info-three.svg'
import InfoFour from '../../../../images/content/pensamento_computacional_interdisciplinaridade_e_cooperacao/info-four.svg'

class Slide8 extends React.Component {
    render() {
        return (
            <Fragment>
                <Image marginTop="100px" marginBottom="50px" height="auto" width="900px" src={IntroEight} />
                <TextSimpleJustify marginBottom="100px">
                    <ProblemBox marginBottom="50px" title="Problema 1" problemTitle="Plano de alimentação">
                        <p>Elaborar um plano de alimentação para alguém que deseja perder peso, a partir de seus dados, destacando as diferentes disciplinas envolvidas.</p>
                        <Image marginTop="25px" marginBottom="25px" height="auto" width="700px" src={InfoThree} />
                    </ProblemBox>
                    <ProblemBox title="Problema 2" problemTitle="Plano de alimentação">
                        <p>Uma campanha de esclarecimento sobre cuidados na compra de alimentos dificilmente poderia ser tratada sob apenas uma perspectiva, sendo necessárias contribuições de diferentes especialidades, competências e experiências.</p>
                        <Image marginTop="25px" marginBottom="25px" height="auto" width="700px" src={InfoFour} />
                    </ProblemBox>
                </TextSimpleJustify>
            </Fragment>
        )
    }
}

export default Slide8
