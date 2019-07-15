import React, { Fragment } from 'react'
import TextSimpleJustify from '../../../generics/text/simple-justify'
import ActivityBox from '../../../generics/text/activity-box'
import Image from '../../../generics/image'

import TitleFive from '../../../../images/content/abstracao/title-five.svg'
import IntegralActivity from '../../../generics/activity/new_integral_activity'

class Slide6 extends React.Component {

    getActivityOne = () => {
        return {
            unitId: this.props.unitId,
            id: "atividade_1_abstracao",
            questions: [
                {
                    id: "q1_a1_abstracao",
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "Separar as peças de roupa por tipo.",
                            tip: "Essa atividade é adequada, pois garante assertividade na hora de escolher um tipo determinado de roupa."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "Para cada tipo de peça, organizar por cores.",
                            tip: "Essa atividade é interessante, pois garante que além do tipo de peça você tenha a divisão por cores."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "Guardar cada peça no espaço reservado para o seu tipo.",
                            tip: "Essa atividade é totalmente adequada, garantindo que você saiba a posição exata de cada tipo."
                        },
                        {
                            value: "1",
                            key: "4",
                            text: "Separar as peças por cor, independentemente do tipo.",
                            tip: "Separar as peças por cores provavelmente vai ajudar a deixar seu guarda-roupas com um \"layout\" bonito, mas não vai ser nada prático na hora que você for se vestir."
                        }
                    ]
                }
            ]
        }
    }

    render() {
        return (
            <Fragment>
                <Image marginTop="150px" marginBottom="50px" height="auto" width="900px" src={TitleFive} />
                <TextSimpleJustify marginBottom="50px">
                    <ActivityBox title={"Atividade Avaliativa 3"} activityTitle={"Organizar guarda-roupa"}>
                        <p>Para falar das atividades necessárias para detalhar a abstração “Organizar o seu guarda-roupa”, identifique a atividade que lhe parece menos adequada:</p>
                        <IntegralActivity activity={this.getActivityOne()} />
                    </ActivityBox>
                </TextSimpleJustify>
            </Fragment>
        )
    }
}

export default Slide6
