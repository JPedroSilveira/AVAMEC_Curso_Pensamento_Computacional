import React from 'react'
import IntegralActivity from '../../../generics/activity/integral_activity'

/*ESTE COMPONENTE DEVE RECEBER COMO PROPRIEDADE O SEGUINTE ITEM:
    unitId: String, representa o id da unidade em que a atividade se encontra
.*/
class AtividadeAvaliativaUm extends React.Component {
    constructor(props) {
        super(props)

        this.validateProps()
    }

    validateProps = () => {
        if (this.props.unitId === undefined) {
            throw Error("Property 'unitId' can't be undefined!")
        }
    }

    getActivity = () => {
        return {
            unitId: this.props.unitId,
            id: "atividade_1_reconhecimento_de_padroes",
            questions: [
                {
                    id: "q1_a1_reconhecimento_de_padroes",
                    title: "",
                    statement: "<strong>A1.</strong> Passeando pelo centro de uma cidade conhecida, digamos, o Rio de Janeiro, você se depara com um aglomerado de pessoas. De repente um desconhecido estabelece uma conversa com você, buscando também entender o que está acontecendo. Essa conversa segue, levantando hipóteses e trocando opiniões, quando percebem que já se passaram uns 30 minutos e se despedem sem descobrirem o motivo da aglomeração. Pensando na conversa com o estranho, você se dá conta que o mesmo não parecia ser carioca nato ou criado no Rio. Motivado pela curiosidade, você tenta reconhecer em qual estado aquela pessoa teria nascido e/ou sido criada. Qual, dentre os elementos a seguir, seria o menos provável de estabelecer um padrão adequado a tal propósito?",
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

    render() {
        return (
            <IntegralActivity activity={this.getActivity()} />
        )
    }
}

export default AtividadeAvaliativaUm