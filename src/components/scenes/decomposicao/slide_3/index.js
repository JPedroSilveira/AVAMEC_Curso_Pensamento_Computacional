import React, { Fragment } from 'react'
import TextSimpleJustify from '../../../generics/text/simple-justify'
import Image from '../../../generics/image'
import ExampleBox from '../../../generics/text/example-box'
import ExampleIntroOne from '../../../../images/content/decomposicao/examples-one.svg'

class Slide3 extends React.Component {
    render() {
        return (
            <Fragment>
                <Image marginTop="100px" marginBottom="50px" height="auto" width="900px" src={ExampleIntroOne} />
                <TextSimpleJustify marginBottom="100px">
                    <ExampleBox title={"Exemplo 1"}>
                        <p>Grandes mestres gregos entendem que o problema da decomposição é essencial para um bom planejamento de uma aula. Se dividirmos o planejamento em partes, ele pode ser elaborado de forma mais fácil: </p>
                        <ul>
                            <li>definição de objetivos educacionais;</li>
                            <li>identificação de conteúdos;</li>
                            <li>levantamento do conhecimento prévio dos alunos;</li>
                            <li>proposta de atividades individuais e cooperativas;</li>
                            <li>definição do plano de mediação;</li>
                            <li>seleção de recurso materiais;</li>
                            <li>estudo de espaços e tempos;</li>
                            <li>planejamento da avaliação das aprendizagens.</li>
                        </ul>
                    </ExampleBox>
                </TextSimpleJustify>
            </Fragment>
        )
    }
}

export default Slide3
