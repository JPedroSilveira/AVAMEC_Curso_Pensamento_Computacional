import React, { Fragment } from 'react'
import TextSimpleJustify from '../../../generics/text/simple-justify'
import ActivityBox from '../../../generics/text/activity-box'
import IntegralActivity from '../../../generics/activity/new_integral_activity'
import Image from '../../../generics/image'

import IntroFour from '../../../../images/content/decomposicao/intro-four.svg'

class Slide4 extends React.Component {

    getActivityOne = () => {
        return {
            unitId: this.props.unitId,
            id: "atividade_1_decomposicao",
            questions: [
                {
                    id: "q1_a1_decomposicao",
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "Cardiovascular, respiratório, digestivo, nervoso, sensorial, endócrino, excretor, urinário, reprodutor, esquelético, muscular, imunológico, linfático, tegumentar.",
                            tip: "Essa decomposição possui uma quantidade de elementos que pode ajudar em um diagnóstico de um clínico geral."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "Cavidades nasais, faringe, laringe, traquéia, brônquios, pulmões.",
                            tip: "Essa decomposição possui uma quantidade de elementos que pode ajudar em um diagnóstico do sistema respiratório."
                        },
                        {
                            value: "1",
                            key: "3",
                            text: "Cabeça, tronco, membros.",
                            tip: "Essa decomposição possui poucos elementos e dificultaria um diagnóstico."
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "Visão, audição, olfato, paladar, tato.",
                            tip: "Essa decomposição possui uma quantidade de elementos que pode ajudar em um diagnóstico de um otorrinolaringologista."
                        },
                        {
                            value: "0",
                            key: "5",
                            text: "Artérias, veias, vasos capilares.",
                            tip: "Essa decomposição possui uma quantidade de elementos que pode ajudar em um diagnóstico do sistema circulatório."
                        },
                    ]
                }
            ]
        }
    }

    getActivityTwo = () => {
        return {
            unitId: this.props.unitId,
            id: "atividade_2_decomposicao",
            questions: [
                {
                    id: "q1_a2_decomposicao",
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "Convidados; local; refrigeração; mídia/transmissão; comissão julgadora.",
                            tip: "Essa decomposição está mais adequada para um desfile de modas do que para um seminário."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "Divulgação; patrocínio; local; atrações; licenciamento; ingressos; segurança.",
                            tip: "Essa decomposição está mais adequada para um show de música do que para um seminário."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "Local; convites; figurino; sonorização; apresentação.",
                            tip: "Essa decomposição está mais adequada para uma apresentação em um teatro do que para um seminário."
                        },
                        {
                            value: "1",
                            key: "4",
                            text: "Inscrições; data; patrocínio; comitês; local; transporte; programação.",
                            tip: "Essa é uma decomposição adequada para um seminário."
                        },
                        {
                            value: "0",
                            key: "5",
                            text: "Convites; cardápio; música; bolo decorado; doces; salgados; bebidas; lembranças.",
                            tip: "Essa decomposição está mais adequada para uma festa de aniversário do que para um seminário."
                        },
                    ]
                }
            ]
        }
    }

    render() {
        return (
            <Fragment>
                <Image marginTop="100px" marginBottom="-100px" height="auto" width="900px" src={IntroFour} />
                <TextSimpleJustify>
                    <ActivityBox title={"Atividade Avaliativa 1"} activityTitle={"Diagnose Médica"}>
                        <p>Com o propósito de diagnosticar a origem de um problema de saúde, a partir de sintomas diversos, um médico usualmente analisa o corpo humano segundo seus sistemas ou elementos constituintes. Em tal cenário, qual dos seguintes conjuntos lhe parece menos adequado.</p>
                        <IntegralActivity activity={this.getActivityOne()} />
                    </ActivityBox>
                </TextSimpleJustify>
                <TextSimpleJustify marginBottom="100px" marginTop="50px">
                    <ActivityBox title={"Atividade Avaliativa 2"} activityTitle={"Organizando um evento escolar"}>
                        <p>Qualquer evento, seja no âmbito pessoal (aniversários, casamentos, festas religiosas, etc.) quanto no profissional (congressos, seminários, premiações, etc.), requer, para sua realização, a execução de um conjunto de atividades que podem, dependendo da dimensão do evento em questão, envolver várias pessoas ou equipes, responsáveis pelos diferentes aspectos que constituem o evento. Considere a realização do seminário "O Pensamento Computacional na Escola", e dentre as diferentes listas apresentadas nas alternativas, indique qual lhe parece uma decomposição adequada de elementos envolvidos nesse evento.</p>
                        <IntegralActivity activity={this.getActivityTwo()} />
                    </ActivityBox>
                </TextSimpleJustify>
            </Fragment>
        )
    }
}

export default Slide4
