import React, { Fragment } from 'react'
import TextSimpleJustify from '../../../generics/text/simple-justify'
import Strong from '../../../generics/font/strong'
import Image from '../../../generics/image'
import ExampleIntroOne from '../../../../images/content/decomposicao/examples-one.svg'
import MoreExamples from '../../../../images/component/more-examples.svg'

class Slide3 extends React.Component {
    render() {
        return (
            <Fragment>
                <Image marginTop="100px" marginBottom="-100px" height="auto" width="auto" src={ExampleIntroOne} />
                <TextSimpleJustify>
                    <p>Grandes mestres gregos entendem que o problema da decomposição é essencial para um bom planejamento de uma aula, mas se o dividirmos em partes, ele pode ficar bem mais fácil de pensar, como: </p>
                    <p>
                        <Strong>a)</Strong> definição de objetivos educacionais;<br/>
                        <Strong>b)</Strong> identificação de conteúdos;<br/>
                        <Strong>c)</Strong> levantamento do conhecimento prévio dos aluno;<br />
                        <Strong>d)</Strong> proposta de atividades individuais e cooperativas;<br />
                        <Strong>e)</Strong> definição do plano de mediação;<br />
                        <Strong>f)</Strong> seleção de recurso matérias;<br />
                        <Strong>g)</Strong> estudo de espaços e tempos;<br />
                        <Strong>h)</Strong> planejamento da avaliação das aprendizagens.<br />
                    </p>
                    <Image marginTop="50px" marginBottom="100px" height="auto" width="190px" src={MoreExamples} />
                </TextSimpleJustify>
            </Fragment>
        )
    }
}

export default Slide3
