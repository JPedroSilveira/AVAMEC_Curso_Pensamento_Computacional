import React, { Fragment } from 'react'
import StandardTextBox from '../../../generics/text/standard-box'
import Title from '../../../generics/title'
import Image from '../../../generics/image'

import IntroThree from '../../../../images/content/pensamento_computacional_interdisciplinaridade_e_cooperacao/intro-three.svg'
import InfoTwo from '../../../../images/content/pensamento_computacional_interdisciplinaridade_e_cooperacao/info-two.svg'

class Slide4 extends React.Component {
    render() {
        return (
            <Fragment>
                <Image marginTop="100px" marginBottom="50px" height="auto" width="900px" src={IntroThree} />
                <StandardTextBox marginBottom="100px">
                    <Title>Cooperação e Pensamento Computacional</Title>
                    <p>Certamente cada um de nós já tomou parte em uma ação ou atividade em que um objetivo comum foi estabelecido e cada membro de um grupo investiu esforço e/ou recursos para sua concretização. Talvez um "mutirão" para revitalização de um prédio; uma ação para angariar fundos para uma boa causa; a formação de um grupo para realizar trabalhos acadêmicos, o estudo para uma prova ou mesmo para se preparar para um concurso.</p>
                    <Image marginTop="100px" marginBottom="50px" height="auto" width="650px" src={InfoTwo} />
                </StandardTextBox>
            </Fragment>
        )
    }
}

export default Slide4
