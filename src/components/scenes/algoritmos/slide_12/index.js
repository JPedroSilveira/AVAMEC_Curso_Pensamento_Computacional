import React, { Fragment } from 'react'
import TextSimpleJustify from '../../../generics/text/simple-justify'
import Image from '../../../generics/image'
import ProblemBox from '../../../generics/text/problem-box'

import IntroTwelve from '../../../../images/content/algoritmos/intro-twelve.svg'
import ProbOne from '../../../../images/content/algoritmos/prob-one.svg'
import ProbThree from '../../../../images/content/algoritmos/prob-three.svg'
import ProbFour from '../../../../images/content/algoritmos/prob-four.svg'

class Slide12 extends React.Component {
    render() {
        return (
            <Fragment>
                <Image marginTop="100px" marginBottom="50px" height="auto" width="900px" src={IntroTwelve} />
                <TextSimpleJustify>
                    <ProblemBox title="Problema 1" problemTitle="Dividir um círculo">
                        <p>Descreva a construção de um círculo, dividido em 8 partes iguais, usando um compasso, uma régua e um lápis.</p><br/>
                        <Image marginTop="25px" marginBottom="25px" height="auto" width="400px" src={ProbOne} />
                    </ProblemBox>
                    <ProblemBox marginTop="50px" title={"Problema 2"} problemTitle="Máximo divisor comum">
                        <p>Descreva o algoritmo para determinação do máximo divisor comum entre dois números.</p>
                    </ProblemBox>
                    <ProblemBox marginTop="50px" title={"Problema 3"} problemTitle="Sopa de legumes">
                        <p>Descreva a preparação de uma sopa de legumes. Considere seus ingredientes prediletos.</p>
                        <Image marginTop="25px" marginBottom="25px" height="auto" width="400px" src={ProbThree} />
                    </ProblemBox>
                    <ProblemBox marginTop="50px" title={"Problema 4"} problemTitle="Situação-problema">
                        <p>Apresente 1 situação-problema, preferencialmente de sua área de interesse, na qual você identifica a possibilidade de utilização do pilar Reconhecimento de Padrões do Pensamento Computacional, para apoiar a elaboração de soluções.</p>
                        <Image marginTop="25px" marginBottom="25px" height="auto" width="400px" src={ProbFour} />
                    </ProblemBox>
                </TextSimpleJustify>
            </Fragment>
        )
    }
}

export default Slide12
