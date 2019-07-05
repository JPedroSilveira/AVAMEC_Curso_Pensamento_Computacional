import React, { Fragment } from 'react'
import TextWithImageLeft from '../../../generics/text/with-image-left'
import TextStandardBox from '../../../generics/text/standard-box'
import CenterBoxContainer from '../../../generics/center_box_container'
import Strong from '../../../generics/font/strong'
import Image from '../../../generics/image'
import IntroFour from '../../../../images/content/decomposicao/intro-four.svg'
import IntoFour from '../../../../images/content/decomposicao/info-four.svg'
import ManuscriptIcon from '../../../../images/content/decomposicao/manuscript-icon.svg'
import IntegralActivity from '../../../generics/activity/new_integral_activity'
import BorderThree from '../../../../images/content/decomposicao/border-three.svg'
import BorderFour from '../../../../images/content/decomposicao/border-four.svg'

class Slide4 extends React.Component {

    getActivity = () => {
        return {
            unitId: this.props.unitId,
            id: "atividade_1_decomposicao",
            questions: [
                {
                    id: "q1_a1_decomposicao",
                    options: [
                        {
                            value: "0",
                            key: "1"
                        },
                        {
                            value: "1",
                            key: "2",
                        },
                        {
                            value: "0",
                            key: "3",
                        },
                        {
                            value: "0",
                            key: "4",
                        },
                        {
                            value: "0",
                            key: "5",
                        }
                    ]
                }
            ]
        }
    }

    render() {
        return (
            <Fragment>
                <Image marginTop="100px" marginBottom="-100px" height="auto" width="auto" src={IntroFour} />
                <TextStandardBox image={BorderThree}>
                    <CenterBoxContainer>
                        <TextWithImageLeft paddingTop="15px" marginRight="20px" height="auto" width="50px" src={ManuscriptIcon}>
                            <p><Strong>Diagnose Médica</Strong></p>
                        </TextWithImageLeft>
                    </CenterBoxContainer>
                    <p>Com o propósito de diagnosticar a origem de um problema de saúde, a partir de sintomas diversos, um médico usualmente analisa o corpo humano segundo seus sistemas ou elementos constituintes. Em tal cenário, qual dos seguintes conjuntos lhe parece menos adequado.</p>
                    <p>
                        <Strong>a)</Strong> Cardiovascular, respiratório, digestivo, nervoso, sensorial, endócrino, excretor, urinário, reprodutor, esquelético, muscular, imunológico, linfático, tegumentar;<br />
                        <Strong>b)</Strong> Cavidades nasais, faringe, laringe, traquéia, brônquios, pulmões;<br />
                        <Strong>c)</Strong> Cabeça, tronco, membros;<br />
                        <Strong>d)</Strong> Visão, audição, olfato, paladar, tato;<br />
                        <Strong>e)</Strong> Artérias, veias, vasos capilares.<br />
                    </p>
                </TextStandardBox>
                <Image marginTop="50px" height="auto" width="auto" src={IntoFour} />
                <TextStandardBox image={BorderFour}>
                    <CenterBoxContainer>
                        <TextWithImageLeft paddingTop="15px" marginRight="20px" height="auto" width="50px" src={ManuscriptIcon}>
                            <p><Strong>Organizando um evento escolar</Strong></p>
                        </TextWithImageLeft>
                    </CenterBoxContainer>
                    <p>Qualquer evento, seja no âmbito pessoal (aniversários, casamentos, festas religiosas, etc.) quanto no profissional (congressos, seminários, premiações, etc.), requer, para sua realização, a execução de um conjunto de atividades que podem, dependendo da dimensão do evento em questão, envolver várias pessoas ou equipes, responsáveis pelos diferentes aspectos que constituem o evento. Considere a realização do seminário "O Pensamento Computacional na Escola", e dentre as diferentes listas apresentadas nas alternativas, indique qual lhe parece uma decomposição adequada de elementos envolvidos nesse evento.</p>
                    <p>
                        <Strong>a)</Strong> Convidados; local; refrigeração; mídia/transmissão; comissão julgadora;<br />
                        <Strong>b)</Strong> Divulgação; patrocínio; local; atrações; licenciamento; ingressos; segurança;<br />
                        <Strong>c)</Strong> Local; convites; figurino; sonorização; apresentação;<br />
                        <Strong>d)</Strong> Inscrições; data; patrocínio; comitês; local; transporte; programação;<br />
                        <Strong>e)</Strong> Convites; cardápio; música; bolo decorado; doces; salgados; bebidas; lembranças.<br />
                    </p>
                </TextStandardBox>
                <IntegralActivity activity={this.getActivity()}/>
            </Fragment>
        )
    }
}

export default Slide4
