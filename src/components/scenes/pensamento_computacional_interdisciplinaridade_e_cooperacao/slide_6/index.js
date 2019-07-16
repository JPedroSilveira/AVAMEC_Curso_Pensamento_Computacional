import React, { Fragment } from 'react'
import TextSimpleJustify from '../../../generics/text/simple-justify'
import TextWithImageRight from '../../../generics/text/with-image-right'
import ExampleBox from '../../../generics/text/example-box'
import FontLightBlue from '../../../generics/font/light-blue'
import Strong from '../../../generics/font/strong'
import Image from '../../../generics/image'

import IntroFive from '../../../../images/content/pensamento_computacional_interdisciplinaridade_e_cooperacao/intro-five.svg'
import WellBeing from '../../../../images/content/pensamento_computacional_interdisciplinaridade_e_cooperacao/well-being.svg'

class Slide6 extends React.Component {
    render() {
        return (
            <Fragment>
                <Image marginTop="100px" marginBottom="50px" height="auto" width="900px" src={IntroFive} />
                <TextSimpleJustify marginBottom="100px">
                    <ExampleBox title="Exemplo" exampleTitle="Manter o peso corporal">
                        <TextWithImageRight width="300px" src={WellBeing}>
                            <p>O Pensamento Computacional, através de seus quatro pilares, dispõe de elementos que podem ajudar na tarefa interdisciplinar que é a organização do nosso cuidado com a saúde e nosso bem estar. Vejamos a seguir uma breve identificação do uso desses pilares nessa atividade, em particular no controle do nosso peso corporal.</p>
                        </TextWithImageRight>
                        <p><Strong><FontLightBlue>Pilar Decomposição</FontLightBlue></Strong>: podemos usá-lo para identificar os diferentes aspectos a serem considerados na manutenção de nossa saúde; mas também podemos usá-lo para identificar as categorias de alimentos e as especialidades profissionais que podem nos ajudar.</p>
                        <p><Strong><FontLightBlue>Pilar Abstração</FontLightBlue></Strong>: podemos usá-lo para identificar, para cada aspecto, os índices (por exemplo: índice de massa corporal) que devemos observar e as características que devemos considerar, quando formos escolher um profissional da saúde. Com respeitos aos alimentos, precisamos selecionar atributos importantes, tanto quanto ao seu uso, quanto à disponibilidade durante o ano.</p>
                        <p><Strong><FontLightBlue>Pilar Reconhecimento de Padrões</FontLightBlue></Strong>: reconhecer situações adversas, como peso incompatível com altura e idade, ou reconhecer a relação existente entre diversos aspectos, como por exemplo,   sazonalidade, preço e valor nutricional dos alimentos.</p>
                        <p><Strong><FontLightBlue>Pilar Algoritmos</FontLightBlue></Strong>: importante para definir diversas rotinas, tais como as relativas à alimentação, como distribuir os alimentos ao longo do dia, as rotinas de exercícios, a preparação dos alimentos, a visita aos especialistas, etc.</p>
                    </ExampleBox>
                </TextSimpleJustify>
            </Fragment>
        )
    }
}

export default Slide6
