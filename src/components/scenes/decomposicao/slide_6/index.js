import React, { Fragment } from 'react'
import TextWithImageRight from '../../../generics/text/with-image-right'
import TextSimpleJustify from '../../../generics/text/simple-justify'
import Image from '../../../generics/image'
import ProblemBox from '../../../generics/text/problem-box'

import IntroSix from '../../../../images/content/decomposicao/intro-six.svg'
import ExampleSix from '../../../../images/content/decomposicao/example-six.svg'
import GeoplanoTalk from '../../../../images/content/decomposicao/geoplano-talk.svg'

class Slide6 extends React.Component {
    render() {
        return (
            <Fragment>
                <Image marginTop="100px" marginBottom="-100px" height="auto" width="900px" src={IntroSix} />
                <TextSimpleJustify marginBottom="100px">
                    <ProblemBox title="Problema 1" problemTitle="Cálculo de área de um polígono irregular usando o Geoplano">
                        <p>Como poderíamos calcular a área de um polígono irregular, ou seja, que não tem uma forma conhecida? Você tem alguma ideia?</p><br/>
                        <TextWithImageRight height="auto" width="310px" src={ExampleSix}>
                            <p>Veja este em um geoplano:</p>
                            <p>Tente determinar sua área e note que decompô-lo em partes regulares é fundamental!</p>
                        </TextWithImageRight><br/>
                    </ProblemBox>
                    <Image marginTop="50px" height="auto" width="700px" src={GeoplanoTalk} />
                    <ProblemBox marginTop="50px" title="Problema 2" problemTitle="Organização e realização de Feira de Ciências">
                        <p>Elabore uma decomposição em equipes, para a organização e realização da Feira de Ciências da sua escola.</p>
                    </ProblemBox>
                    <ProblemBox marginTop="50px" title="Problema 2" problemTitle="Pilar Decomposição apoiando soluções de situação-problema">
                        <p>Apresente uma situação-problema, preferencialmente de sua área de interesse, em que você identifica a possibilidade de utilização do pilar Decomposição do pensamento computacional, para apoiar a elaboração de soluções.</p>
                    </ProblemBox>
                </TextSimpleJustify>
            </Fragment>
        )
    }
}

export default Slide6
