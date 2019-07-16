import React, { Fragment } from 'react'
import TextStandardBox from '../../../generics/text/standard-box'
import Title from '../../../generics/title'
import Image from '../../../generics/image'

import InfoOne from '../../../../images/content/pensamento_computacional_interdisciplinaridade_e_cooperacao/info-one.svg'

class Slide1 extends React.Component {
    render() {
        return (
            <Fragment>
                <TextStandardBox marginBottom="50px">
                    <Title>Interdisciplinaridade e cooperação</Title>
                    <p>Muitos dos problemas do mundo real são, por natureza, interdisciplinares, ou seja, suas soluções requerem o conhecimento de temas tratados em mais de uma disciplina. No contexto escolar, a crescente fragmentação dos campos de estudo tem dificultado a elaboração de propostas integradoras para o conhecimento. Esses fatos têm motivado os educadores a buscarem propostas pedagógicas interdisciplinares.</p>
                    <Image marginTop="25px" marginBottom="25px" height="auto" width="650px" src={InfoOne} />
                </TextStandardBox>
            </Fragment>
        )
    }
}

export default Slide1
