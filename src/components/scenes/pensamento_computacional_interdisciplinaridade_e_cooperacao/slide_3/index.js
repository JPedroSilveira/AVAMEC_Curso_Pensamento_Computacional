import React, { Fragment } from 'react'
import TextSimpleJustify from '../../../generics/text/simple-justify'
import Image from '../../../generics/image'
import ExampleBox from '../../../generics/text/example-box'

import IntroTwo from '../../../../images/content/pensamento_computacional_interdisciplinaridade_e_cooperacao/intro-two.svg'

class Slide3 extends React.Component {
    render() {
        return (
            <Fragment>
                <Image marginTop="100px" marginBottom="50px" height="auto" width="900px" src={IntroTwo} />
                <TextSimpleJustify marginBottom="100px">
                    <ExampleBox title="Exemplos" styledList={true}>
                        <ul>
                            <li>Planejar uma viagem de férias, considerando a visita a cidades com diferentes características geográficas, artísticas, e culinárias, e considerando os limites de tempo, disponibilidade de datas e recursos financeiros disponíveis.</li>
                            <li>Produzir um curta-metragem, contando a história de um personagem histórico de seu estado, cidade ou bairro.</li>
                            <li>Organizar um almoço para comemoração dos 50 anos de sua escola.</li>
                            <li>Organizar uma campanha de conscientização sobre a produção de lixo doméstico.</li>
                            <li>Organizar uma campanha de esclarecimento sobre cuidados na compra de alimentos.</li>
                        </ul>
                    </ExampleBox>
                </TextSimpleJustify>
            </Fragment>
        )
    }
}

export default Slide3
