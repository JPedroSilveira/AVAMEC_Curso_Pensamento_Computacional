import React, { Fragment } from 'react'
import TextStandardBox from '../../../generics/text/standard-box'
import Title from '../../../generics/title'
import Image from '../../../generics/image'

import IntroNine from '../../../../images/content/pensamento_computacional_interdisciplinaridade_e_cooperacao/intro-nine.svg'
import InfoTextNineOne from '../../../../images/content/pensamento_computacional_interdisciplinaridade_e_cooperacao/loading.png'
import InfoTextNineTwo from '../../../../images/content/pensamento_computacional_interdisciplinaridade_e_cooperacao/loading.png'

class Slide9 extends React.Component {
    render() {
        return (
            <Fragment>
                <Image marginTop="100px" marginBottom="50px" height="auto" width="900px" src={IntroNine} />
                <TextStandardBox marginBottom="50px">
                    <Title>Uso de Arquitetura Pedagógica (AP)</Title>
                    <p>Ao longo do tempo, a Cooperação tem sido utilizada em contextos educacionais, tendo motivado, a partir dos anos 1970, o surgimento de vários métodos de aprendizagem cooperativa, que são recursos dos quais os professores podem fazer uso e cuja apropriação pode ser apoiada pelos Pilares do Pensamento Computacional. Usualmente cada método é estruturado em etapas:</p>
                    <Image marginTop="25px" marginBottom="25px" height="auto" width="700px" src={InfoTextNineOne} />
                    <p>Métodos de aprendizagem cooperativa podem também ser investigados segundo uma linha paradigmática, que vem sendo denominada Arquitetura Pedagógica (AP), que busca pensar propostas pedagógicas em sintonia com as possibilidades oferecidas pela tecnologia. Nessa perspectiva, ao invés de olharmos uma proposta pedagógica concebida independentemente dos elementos tecnológicos e tentarmos inserir a tecnologia, consideramos os dois aportes para pensar novas soluções. Sem entrar em detalhes das APs, podemos resumidamente relacionar o uso com os quatro pilares como segue:</p>
                    <Image marginTop="25px" marginBottom="25px" height="auto" width="700px" src={InfoTextNineTwo} />
                </TextStandardBox>
            </Fragment>
        )
    }
}

export default Slide9
