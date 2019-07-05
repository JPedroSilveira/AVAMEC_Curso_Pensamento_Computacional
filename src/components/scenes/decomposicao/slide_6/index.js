import React, { Fragment } from 'react'
import TextWithImageLeft from '../../../generics/text/with-image-left'
import TextWithImageRight from '../../../generics/text/with-image-right'
import TextStandardBox from '../../../generics/text/standard-box'
import CenterBoxContainer from '../../../generics/center_box_container'
import Strong from '../../../generics/font/strong'
import Image from '../../../generics/image'
import ManuscriptIcon from '../../../../images/content/decomposicao/manuscript-icon.svg'
import IntroSix from '../../../../images/content/decomposicao/intro-six.svg'
import InfoSix from '../../../../images/content/decomposicao/info-six.svg'
import ExampleSix from '../../../../images/content/decomposicao/example-six.svg'
import BorderSix from '../../../../images/content/decomposicao/border-six.svg'

class Slide6 extends React.Component {
    render() {
        return (
            <Fragment>
                <Image marginTop="100px" marginBottom="-100px" height="auto" width="auto" src={IntroSix} />
                <TextStandardBox image={BorderSix}>
                    <CenterBoxContainer>
                        <TextWithImageLeft paddingTop="30px" marginRight="20px" height="auto" width="50px" src={ManuscriptIcon}>
                            <p><Strong>Cálculo de área de um polígono irregular usando o Geoplano</Strong></p>
                        </TextWithImageLeft>
                    </CenterBoxContainer>
                    <p>Como poderíamos calcular a área de um polígono irregular, ou seja, que não tem uma forma conhecida? Você tem alguma ideia?</p>
                    <TextWithImageRight height="auto" width="310px" src={ExampleSix}>
                        <p>Veja este em um geoplano:</p>
                        <p>Tente determinar sua área e note que decompô-lo em partes regulares é fundamental!</p>
                    </TextWithImageRight>
                    <p>Um geoplano pode ser feito de maneira artesanal em um pedaço de madeira, de forma quadrada, com vários pregos cravados a meia altura, formando um quadriculado. É importante ressaltar que a distância de um prego para outro, tanto na horizontal quanto na vertical, é a mesma. Para desenhar os polígonos podemos usar borrachinhas de dinheiro.</p>
                    <p>Ou ainda trabalhar de forma digital em sites como o <Strong>Math Playground</Strong> e o <Strong>Toy Teather</Strong>.</p>
                </TextStandardBox>
                <Image marginTop="25px" height="auto" width="auto" src={InfoSix} />
                <TextWithImageLeft paddingTop="30px" marginRight="20px" height="auto" width="50px" src={ManuscriptIcon}>
                    <p>Elabore uma decomposição em equipes, para a organização e realização da Feira de Ciências da sua escola.</p>
                </TextWithImageLeft>
                <TextWithImageLeft marginBottom="100px" paddingTop="30px" marginRight="20px" height="auto" width="50px" src={ManuscriptIcon}>
                    <p>Apresente uma situação-problema, preferencialmente de sua área de interesse, em que você identifica a possibilidade de utilização do pilar Decomposição do pensamento computacional, para apoiar a elaboração de soluções.</p>
                </TextWithImageLeft>
            </Fragment>
        )
    }
}

export default Slide6
