import React, { Fragment } from 'react'
import TextSimpleJustify from '../../../generics/text/simple-justify'
import ActivityBox from '../../../generics/text/activity-box'
import Image from '../../../generics/image'

import IntroThree from '../../../../images/content/reconhecimento_de_padroes/intro-three.svg'
import IntegralActivity from '../../../generics/activity/new_integral_activity'

class Slide3 extends React.Component {

    getActivityOne = () => {
        return {
            unitId: this.props.unitId,
            id: "atividade_1_reconhecimento_de_padroes",
            questions: [
                {
                    id: "q1_a1_reconhecimento_de_padroes",
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "Sotaque.",
                            tip: "Seria possível diferenciar o sotaque, por exemplo, de um gaúcho ou de um carioca."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "Uso de expressões idiomáticas.",
                            tip: "Com certeza um \"bah\" ou um \"tchê\" revelaria um gaúcho, “oxente” um nordestino."
                        },
                        {
                            value: "1",
                            key: "3",
                            text: "Uso de roupas formais.",
                            tip: "Embora o uso de trajes típicos de uma região possa identificar a origem de uma pessoa, o uso de roupas formais, como por exemplo terno e gravata para homens, é universal."
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "Referências a elementos regionais.",
                            tip: "Falar de um prato típico ou de um monumento pode indicar a origem de uma pessoa."
                        },
                        {
                            value: "0",
                            key: "5",
                            text: "Preferência por estilo musical.",
                            tip: "Certos estilos musicais são bem característicos de certos estados e regiões do País."
                        }
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
                            text: "Curso formal na área.",
                            tip: "Optar por um curso formal geralmente está alinhado com a profissão que queremos seguir."
                        },
                        {
                            value: "1",
                            key: "2",
                            text: "Marca do celular usado.",
                            tip: "Profissionais das mais diversas áreas usam os mais variados modelos e marcas de celulares."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "Habilidades sociais.",
                            tip: "Demonstrar habilidade no contato com o público pode revelar que a pessoa adquiriu a mesma atuando com vendas ou sendo atendente."
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "Local de estágio.",
                            tip: "O local onde a pessoa estagiou é um bom indicativo da sua profissão."
                        },
                        {
                            value: "0",
                            key: "5",
                            text: "Uso de fardamento no dia a dia.",
                            tip: "Usar determinado fardamento indica que a pessoa pertence a determinada corporação."
                        }
                    ]
                }
            ]
        }
    }

    render() {
        return (
            <Fragment>
                <Image marginTop="100px" marginBottom="50px" height="auto" width="900px" src={IntroThree} />
                <TextSimpleJustify>
                    <ActivityBox title={"Atividade Avaliativa 1"} activityTitle={"O Estranho"}>
                        <p>Passeando pelo centro de uma cidade conhecida, você se depara com um aglomerado de pessoas. De repente um desconhecido estabelece uma conversa com você, buscando também entender o que está acontecendo. Essa conversa segue,  ambos levantando hipóteses e trocando opiniões, quando percebem que já se passaram uns 30 minutos e terminam por se despedir sem terem descoberto o motivo da aglomeração. Após a partida do estranho, você se dá por conta que o mesmo não parecia ser nativo do lugar. Motivado pela curiosidade, você repassa o que lembra ter visto e ouvido durante a conversa, para ver se lhe ocorre em qual região aquela pessoa poderia ter nascido e/ou sido criada. Qual, dentre os elementos a seguir, seria o menos provável de estabelecer um padrão adequado a tal propósito?</p>
                        <IntegralActivity activity={this.getActivityOne()} />
                    </ActivityBox>
                </TextSimpleJustify>
                <TextSimpleJustify marginTop="50px" marginBottom="100px">
                    <ActivityBox title={"Atividade Avaliativa 2"} activityTitle={"Profissão"}>
                        <p>Considere o propósito de identificar a profissão do desconhecido dentro da mesma situação da Atividade Avaliativa 1, acima. Qual, dentre os elementos a seguir, seria o menos provável de estabelecer um padrão adequado a tal propósito? </p>
                        <IntegralActivity activity={this.getActivityTwo()} />
                    </ActivityBox>
                </TextSimpleJustify>
            </Fragment>
        )
    }
}

export default Slide3
