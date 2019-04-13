import React from 'react'
import IntegralActivity from '../../../generics/activity/integral_activity'

/*ESTE COMPONENTE DEVE RECEBER COMO PROPRIEDADE O SEGUINTE ITEM:
    unitId: String, representa o id da unidade em que a atividade se encontra
.*/
class AtividadeAvaliativa extends React.Component {
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
            id: "atividade_1_decomposicao",
            questions: [
                {
                    id: "q1_a1_decomposicao",
                    title: "1. AVALIANDO UM FESTIVAL FOLCLÓRICO",
                    statement: "Considere que você precisa definir como deve ser realizada a avaliação das danças apresentadas por grupos em um festival folclórico. Considere ainda que este festival pode estar sendo realizado pela comunidade de uma escola, de um bairro ou até de uma cidade inteira. Reflita sobre como a avaliação poderia ser decomposta em elementos e indique qual, dentre os seguintes, seria menos adequado para esse fim.",
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "Tempo da apresentação.",
                            tip: "Com certeza seria possível estabelecer um tempo máximo de apresentação e utilizar esta métrica para avaliar a performance do grupo."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "Sincronia.",
                            tip: "Um grupo que treinou adequadamente deve estar em sintonia, com sincronia de movimentos, sendo esta uma boa alternativa de avaliação."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "Precisão de movimentos.",
                            tip: "Movimentos precisos estão associados com dedicação aos treinos e podem ser uma ótima forma de avaliar os grupos."
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "Participação da audiência.",
                            tip: "Os participantes da audiência não tem influência direta na dança apresentada pelos grupos não sendo uma forma correta de avaliar os grupos."
                        },
                        {
                            value: "1",
                            key: "5",
                            text: "Figurino.",
                            tip: "O figurino está geralmente associado com o tema a ser apresentado pelos grupos e seria uma boa forma de avaliar os mesmos."
                        },
                    ]
                },
                {
                    id: "q2_a1_decomposicao",
                    title: "2. ORGANIZANDO UM EVENTO",
                    statement: "Qualquer evento, seja no âmbito pessoal (aniversários, casamentos, festas religiosas, etc.) quanto no profissional (congressos, seminários, premiações, etc.), requer, para sua realização, da execução de um conjunto de atividades que podem, dependendo da dimensão do evento em questão, envolver várias pessoas ou equipes, responsáveis pelos diferentes aspectos que constituem o evento. Considere a realização do seminário \"O Pensamento Computacional na Escola\", e dentre os conjuntos abaixo, indique qual lhe parece uma decomposição adequada de elementos envolvidos neste evento?",
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "Convidados; Local; Refrigeração; Mídia/Transmissão; Comissão julgadora.",
                            tip: "Esta decomposição está mais adequada para um desfile de modas do que para um seminário."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "Divulgação; Patrocínio; Local; Atrações; Licenciamento; Ingressos; Segurança.",
                            tip: "Esta decomposição está mais adequada para um show de música do que para um seminário."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "Local; Convites; Figurino; Sonorização; Apresentação.",
                            tip: "Esta decomposição está mais adequada para uma apresentação em um teatro do que para um seminário."
                        },
                        {
                            value: "1",
                            key: "4",
                            text: "Inscrições; Data; Patrocínio; Comitês; Local; Transporte; Programação.",
                            tip: "Esta é uma decomposição adequada para um seminário."
                        },
                        {
                            value: "0",
                            key: "5",
                            text: "Convites; Cardápio; Música; Bolo decorado; Doces; Salgados; Bebidas; Lembranças.",
                            tip: "Esta decomposição está mais adequada para uma festa de aniversário do que para um seminário."
                        },
                    ]
                },
                {
                    id: "q3_a1_decomposicao",
                    title: "3. ENTENDENDO O CORPO HUMANO",
                    statement: "Com o propósito de diagnosticar a origem de um problema de saúde a partir de sintomas diversos, um médico usualmente analisa o corpo humano segundo seus sistemas ou elementos constituintes. Em tal cenário, qual dos seguintes conjuntos lhe parece menos adequado?",
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "Cardiovascular, respiratório, digestivo, nervoso, sensorial, endócrino, excretor, urinário, reprodutor, esquelético, muscular, imunológico, linfático, tegumentar.",
                            tip: "Esta decomposição possui uma quantidade de elementos que pode ajudar em um diagnóstico de um clínico geral."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "Cavidades nasais, faringe, laringe, traquéia, brônquios, pulmões.",
                            tip: "Esta decomposição possui uma quantidade de elementos que pode ajudar em um diagnóstico do sistema respiratório."
                        },
                        {
                            value: "1",
                            key: "3",
                            text: "Cabeça, tronco, membros.",
                            tip: "Este decomposição possui poucos elementos e dificultaria um diagnóstico."
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "Visão, audição, olfato, paladar, tato.",
                            tip: "Esta decomposição possui uma quantidade de elementos que pode ajudar em um diagnóstico de um otorrinolaringologista."
                        },
                        {
                            value: "0",
                            key: "5",
                            text: "Artérias, veias, vasos capilares.",
                            tip: "Esta decomposição possui uma quantidade de elementos que pode ajudar em um diagnóstico do sistema circulatório."
                        },
                    ]
                },
                {
                    id: "q4_a1_decomposicao",
                    title: "4. PLANEJANDO AS PRÓXIMAS FÉRIAS",
                    statement: "Qual, dentre as opções que seguem, não lhe parece adequada para decompor o planejamento das férias de uma família",
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "Transporte; hospedagem; alimentação; atrações.",
                            tip: "Esta decomposição é adequada para planejar trechos da viagem."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "Caminhar; pescar; jogar futebol; nadar; cochilar, ir ao teatro.",
                            tip: "Esta decomposição é adequada para planejar atividades recreativas durante a viagem."
                        },
                        {
                            value: "1",
                            key: "3",
                            text: "Armários abastecidos; acendimento de luzes; retirada de correspondência.",
                            tip: "Esta decomposição é adequada para cuidar da casa, mas não no período de férias."
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "Compra de passagem de avião, reserva de hotel, aluguel de carro.",
                            tip: "Esta decomposição é adequada para planejar trechos da viagem."
                        },
                        {
                            value: "0",
                            key: "5",
                            text: "Atividades na primeira cidade visitada, atividades na segunda cidade visitada, atividades na última cidade.",
                            tip: "Esta decomposição é adequada para planejar as atividades nos locais a serem visitados durante a viagem."
                        },
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

export default AtividadeAvaliativa
