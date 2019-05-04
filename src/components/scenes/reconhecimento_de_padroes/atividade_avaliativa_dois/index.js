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
            id: "atividade_2_reconhecimento_de_padroes",
            questions: [
                {
                    id: "q1_a2_reconhecimento_de_padroes",
                    title: "",
                    statement: "<strong>A2.</strong> Pense em alguma vez que você ou alguém próximo adoeceu e a natureza da enfermidade foi sugerida e confirmada posteriormente por diagnóstico médico. Em contexto similar, diga qual, dentre os elementos a seguir, seria o menos provável de auxiliar a estabelecer um padrão adequado a tal propósito.",
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "Histórico de doenças.",
                            tip: "Através do histórico médico, é possível considerar a propensão a certas doenças."
                        },
                        {
                            value: "1",
                            key: "2",
                            text: "Pele e cabelo limpos.",
                            tip: "Embora a alteração de nutrientes no corpo possa provocar alterações na textura da pele e no aspecto do cabelo, a limpeza não deveria ser influenciada diretamente por alguma doença."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "Mudança involuntária de comportamento (apetite, por exemplo).",
                            tip: "A perda de apetite repentina está associada com grande número de enfermidades."
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "Dores no corpo.",
                            tip: "Dores de cabeça, nas costas e nas articulações, por exemplo são associadas com determinadas enfermidades."
                        },
                        {
                            value: "0",
                            key: "5",
                            text: "Alterações físicas (febre, vômito, diarréia, etc).",
                            tip: "A febre é um dos primeiros sintomas que indicam algum tipo de infecção no corpo."
                        }
                    ]
                },
                {
                    id: "q2_a2_reconhecimento_de_padroes",
                    title: "",
                    statement: "<strong>A3.</strong> Num mercado, determinar se o peixe está de fato fresco envolve analisar se cada exemplar está em conformidade com certos elementos, como os mencionados a seguir. Qual, dentre os aspectos abaixo, parece menos provável de caracterizar a frescura de um certo pescado?",
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "Cor dos olhos.",
                            tip: "A cor dos olhos do peixe pode revelar que o mesmo está mal acondicionado, em uma temperatura inadequada."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "Brilho das escamas.",
                            tip: "O brilho das escamas do peixe pode revelar que o mesmo está mal acondicionado, em uma temperatura inadequada."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "Firmeza da carne.",
                            tip: "A carne não estando firme pode evidenciar que a mesma já entrou em estado de decomposição."
                        },
                        {
                            value: "1",
                            key: "4",
                            text: "Peso.",
                            tip: "Diferentes espécimes de peixe possuem tamanhos e pesos diferenciados, não servindo o peso como indicação da frescura da carne."
                        }, 
                        {
                            value: "0",
                            key: "5",
                            text: "Cor/estado das vísceras.",
                            tip: "A cor das vísceras será bem avermelhada e viva para pescados frescos, perdendo a coloração à medida em que esses ficam estocados."
                        }
                    ]
                },
                {
                    id: "q3_a2_reconhecimento_de_padroes",
                    title: "",
                    statement: "<strong>A4.</strong> Considere que uma telenovela que você acompanha aproxima-se dos capítulos finais. Você, como vários de seus conhecidos, tentam prever como será o final da mesma e discutem entre si as possibilidades de desfecho, baseados nos acontecimentos dos capítulos anteriores. Considere qual, dentre os acontecimentos de capítulos recentes, seria o menos provável de ter impacto direto no final da novela:",
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "Morte de um personagem.",
                            tip: "Aquele vilão que parecia sempre se dar bem teve o que mereceu, e o público também!"
                        },
                        {
                            value: "1",
                            key: "2",
                            text: "Personagem fazendo uso de produto de marca.",
                            tip: "Embora merchandising seja comum em muitas telenovelas, é bem pouco provável que ele impacte diretamente na forma como ela terminará."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "Fuga/soltura de um personagem preso na etapa inicial.",
                            tip: "Aquele personagem que você achou que foi preso injustamente, se for  libertado será um final feliz."
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "Aproximação entre casal de personagens que antes eram adversários.",
                            tip: "Adversários que se tornam um casal é uma mudança que agrada o público."
                        },
                        {
                            value: "0",
                            key: "5",
                            text: "Revelação de fatos sobre o nascimento do protagonista.",
                            tip: "Revelações sobre a origem do protagonista podem ter grande impacto, inclusive justificando comportamentos e situações entre personagens, especialmente os que se descobrem familiares."
                        }
                    ]
                },
                {
                    id: "q4_a2_reconhecimento_de_padroes",
                    title: "",
                    statement: "<strong>A5.</strong> Retomando ao cenário da Atividade Avaliativa A1, considere o propósito de identificar a profissão do desconhecido. Qual, dentre os elementos a seguir, seria o menos provável de estabelecer um padrão adequado a tal propósito?",
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
            <IntegralActivity activity={this.getActivity()} />
        )
    }
}

export default AtividadeAvaliativa