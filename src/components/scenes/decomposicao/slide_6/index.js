import React, { Fragment } from 'react'
import TextWithImageLeft from '../../../generics/text/with-image-left'
import TextWithImageRight from '../../../generics/text/with-image-right'
import TextSimpleJustify from '../../../generics/text/simple-justify'
import CenterBoxContainer from '../../../generics/center_box_container'
import Strong from '../../../generics/font/strong'
import Image from '../../../generics/image'
import ProblemBox from '../../../generics/text/problem_box'

import ManuscriptIcon from '../../../../images/content/decomposicao/manuscript-icon.svg'
import IntroSix from '../../../../images/content/decomposicao/intro-six.svg'
import ExampleSix from '../../../../images/content/decomposicao/example-six.svg'

class Slide6 extends React.Component {
    render() {
        return (
            <Fragment>
                <Image marginTop="100px" marginBottom="-100px" height="auto" width="700px" src={IntroSix} />
                <TextSimpleJustify>
                    <ProblemBox title={"Problema 1"}>
                        <CenterBoxContainer>
                            <TextWithImageLeft paddingTop="10px" marginRight="20px" height="auto" width="50px" src={ManuscriptIcon}>
                                <p><Strong>Cálculo de área de um polígono irregular usando o Geoplano</Strong></p>
                            </TextWithImageLeft>
                        </CenterBoxContainer>
                        <p>Como poderíamos calcular a área de um polígono irregular, ou seja, que não tem uma forma conhecida? Você tem alguma ideia?</p><br/>
                        <TextWithImageRight height="auto" width="310px" src={ExampleSix}>
                            <p>Veja este em um geoplano:</p>
                            <p>Tente determinar sua área e note que decompô-lo em partes regulares é fundamental!</p>
                        </TextWithImageRight><br/>
                    </ProblemBox>
                </TextSimpleJustify>
                <TextSimpleJustify marginTop="50px">
                    <ProblemBox title={"Problema 2"}>
                        <CenterBoxContainer>
                            <TextWithImageLeft paddingTop="10px" marginRight="20px" height="auto" width="50px" src={ManuscriptIcon}>
                                <p><Strong>Organização e realização de Feira de Ciências</Strong></p>
                            </TextWithImageLeft>
                        </CenterBoxContainer>
                        <p>Elabore uma decomposição em equipes, para a organização e realização da Feira de Ciências da sua escola.</p>
                    </ProblemBox>
                </TextSimpleJustify>
                <TextSimpleJustify marginTop="50px" marginBottom="100px">
                    <ProblemBox title={"Problema 2"}>
                        <CenterBoxContainer>
                            <TextWithImageLeft paddingTop="10px" marginRight="20px" height="auto" width="50px" src={ManuscriptIcon}>
                                <p><Strong>Pilar Decomposição apoiando soluções de situação-problema</Strong></p>
                            </TextWithImageLeft>
                        </CenterBoxContainer>
                        <p>Apresente uma situação-problema, preferencialmente de sua área de interesse, em que você identifica a possibilidade de utilização do pilar Decomposição do pensamento computacional, para apoiar a elaboração de soluções.</p>
                    </ProblemBox>
                </TextSimpleJustify>
            </Fragment>
        )
    }
}

export default Slide6
