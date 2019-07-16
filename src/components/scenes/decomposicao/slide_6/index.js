import React, { Fragment } from 'react'
import TextSimpleJustify from '../../../generics/text/simple-justify'
import ActivityBox from '../../../generics/text/activity-box'
import IntegralActivity from '../../../generics/activity/new_integral_activity'
import Image from '../../../generics/image'

import IntroLastActivity from '../../../../images/content/decomposicao/intro-last-activity.svg'

class Slide6 extends React.Component {

    getActivityThree = () => {
        return {
            unitId: this.props.unitId,
            id: "atividade_3_decomposicao",
            questions: [
                {
                    id: "q1_a3_decomposicao",
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "Tempo da apresentação.",
                            tip: "Com certeza seria possível estabelecer um tempo máximo de apresentação e utilizar essa métrica para avaliar a performance do grupo."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "Sincronia.",
                            tip: "Um grupo que treinou adequadamente deve estar em sintonia, com sincronia de movimentos, sendo essa uma boa alternativa de avaliação."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "Precisão de movimentos.",
                            tip: "Movimentos precisos estão associados com dedicação aos treinos e podem ser uma ótima forma de avaliar os grupos."
                        },
                        {
                            value: "1",
                            key: "4",
                            text: "Participação da audiência.",
                            tip: "A participação da audiência não tem influência direta na dança apresentada pelos grupos não sendo uma forma correta de avaliar os grupos."
                        },
                        {
                            value: "0",
                            key: "5",
                            text: "Figurino.",
                            tip: "O figurino está geralmente associado com o tema a ser apresentado pelos grupos e seria uma boa forma de avaliar os mesmos."
                        }
                    ]
                }
            ]
        }
    }

    render() {
        return (
            <Fragment>
                <Image marginTop="100px" marginBottom="50px" height="auto" width="900px" src={IntroLastActivity} />
                <TextSimpleJustify>
                    <ActivityBox title={"Atividade Avaliativa 3"} activityTitle={"Avaliando um festival folclórico"}>
                        <p>Considere que você precisa definir como deve ser realizada a avaliação das danças apresentadas por grupos em um festival folclórico. Considere ainda que esse festival seja realizado pela comunidade de uma escola, de um bairro ou até de uma cidade inteira. Reflita sobre como a avaliação poderia ser decomposta em elementos e indique qual, dentre os seguintes elementos, seria menos adequado para esse fim.</p>
                        <IntegralActivity activity={this.getActivityThree()} />
                    </ActivityBox>
                </TextSimpleJustify>
            </Fragment>
        )
    }
}

export default Slide6
