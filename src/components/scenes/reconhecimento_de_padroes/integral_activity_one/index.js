import React from 'react'
import IntegralActivity from '../../../generics/activity/integral_activity'

/*ESTE COMPONENTE DEVE RECEBER COMO PROPRIEDADE O SEGUINTE ITEM:
    unitId: String, representa o id da unidade em que a atividade se encontra
.*/
class AtividadeAvaliativa1 extends React.Component {
    constructor(props) {
        super(props)

        this.validarPropriedades()
    }

    validarPropriedades = () => {
        if (this.props.unitId === undefined) {
            throw Error("Property 'unitId' can't be undefined!")
        }
    }

    getActivity = () => {
        return {
            unitId: this.props.idUnidade,
            id: "atividade_1_reconhecimento_de_padroes",
            questions: [
                {
                    id: "q1_a1_reconhecimento_de_padroes",
                    title: "",
                    statement: "<span class=\"negrito\">A1.</span> Passeando pelo centro de uma cidade conhecida, digamos que no Rio de Janeiro, você se depara com um aglomerado de pessoas. De repente um desconhecido estabelece uma conversa buscando também entender o que está acontecendo. Nessa conversa, levantando hipóteses e trocando opiniões quando percebem já se passaram uns 30 minutos e se despedem sem descobrirem o motivo da aglomeração. Pensando na conversa com o estranho, você se dá conta que o mesmo não parecia ser carioca nato ou criado naquela cidade. Motivado pela curiosidade, você tenta reconhecer em qual estado aquela pessoa teria nascido e/ou sido criada. Qual, dentre os elementos a seguir, seria o menos provável de estabelecer um padrão adequado a tal propósito?",
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
                            tip: "Com certeza um \"bah\" ou um \"tchê\" revelaria um gaúcho."
                        },
                        {
                            value: "1",
                            key: "3",
                            text: "Aspecto físicos.",
                            tip: "Embora alguns biotipos sejam frequentes em certas regiões, a miscigenação da população torna o aspecto físico menos indicativo."
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
                            tip: "Certos estilos musicais são bem característicos de certos estados e regiões do país."
                        }
                    ]
                },
                {
                    id: "q2_a1_reconhecimento_de_padroes",
                    title: "",
                    statement: "<span class=\"negrito\">A2.</span> Pense em alguma vez que você ou alguém próximo adoeceu e a natureza da enfermidade foi sugerida por alguém e confirmada posteriormente por diagnóstico médico. Em contexto similar, diga qual, dentre os elementos a seguir, seria o menos provável de auxiliar a estabelecer um padrão adequado a tal propósito?",
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "Histórico de doenças.",
                            tip: "Através do histórico médico é possível considerar a propenção a certas doenças."
                        },
                        {
                            value: "1",
                            key: "2",
                            text: "Limpeza da pele e cabelo.",
                            tip: "Embora a alteração de nutrientes no corpo possa provocar alterações na textura da pele e aspecto do cabelo, a limpeza não deveria ser influenciada diretamente por alguma doença."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "Mudança involuntária de comportamento (apetite, por exemplo).",
                            tip: "A perda de apetite repentina está associada com a grande maioria das enfermidades."
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "Dores no corpo.",
                            tip: "Dores de cabeça, nas costas e nas articulações por exemplo são associadas com determinadas enfermidades."
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
                    id: "q3_a1_reconhecimento_de_padroes",
                    title: "",
                    statement: "<span class=\"negrito\">A3.</span> Considere que uma telenovela que você acompanha aproxima-se dos capítulos finais e você, como vários de seus conhecidos, tentam prever como será o final da mesma e discutem entre si, as possibilidades de desfecho baseado nos acontecimentos dos capítulos anteriores. Considere qual, dentre os acontecimentos de capítulos recentes, seria o menos provável de ter impacto direto no final da novela.",
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
                            text: "Nascimento de gêmeos.",
                            tip: "Embora trate-se de evento feliz, não haveria grande chance de causar impacto no capítulo final."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "Fuga/Soltura de um personagem preso na etapa inicial.",
                            tip: "Aquele personagem que você achou que foi preso injustamente sendo libertado é um final feliz."
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "Aproximação entre casal de personagens que antes eram adversários.",
                            tip: "Adversários que se tornam um casal é uma mudança que agrada o público, poderiam unir forças para enfrentar e superar os vilões."
                        },
                        {
                            value: "0",
                            key: "5",
                            text: "Revelação de fatos sobre o nascimento do protagonista.",
                            tip: "Revelações sobre a origem do protagonista podem ter grande impacto inclusive justificando comportamentos e situações entre personagens, especialmente que se descobrem familiares."
                        }
                    ]
                },
                {
                    id: "q4_a1_reconhecimento_de_padroes",
                    title: "",
                    statement: "<span class=\"negrito\">A4.</span> Retomando ao cenário da questão 1, considere o propósito de identificar a profissão do desconhecido. Qual, dentre os elementos a seguir, seria o menos provável de estabelecer um padrão adequado a tal propósito?",
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "Curso formal na área.",
                            tip: "Optar por um curso formal geralmente está alinhado com a profisão que queremos seguir."
                        },
                        {
                            value: "1",
                            key: "2",
                            text: "Habilidades sociais.",
                            tip: "Várias profissões exigem habilidades sociais, inclusive pessoas sem uma ocupação específica podem possuir tais habilidades."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "Contato com o público.",
                            tip: "Demonstrar habilidade no contato com o público pode revelar que a pessoa adquiriu a mesma atuando com vendas ou atendente."
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
                },
                {
                    id: "q5_a1_reconhecimento_de_padroes",
                    title: "",
                    statement: "<span class=\"negrito\">A5.</span> Num mercado, determinar se o peixe está de fato fresco envolve analisar se cada exemplar está em conformidade com certos elementos, como os mencionados a seguir. Qual, dentre os aspectos abaixo, parece menos provável de caracterizar a frescura de um certo pescado?",
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "Cor dos olhos.",
                            tip: "A cor dos olhos do peixe pode revelar que o mesmo está mal acondicionado em uma temperatura inadequada por exemplo."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "Brilho das escamas.",
                            tip: "O brilho das escamas do peixe pode revelar que o mesmo está mal acondicionado em uma temperatura inadequada por exemplo."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "Firmeza da carne.",
                            tip: "A carne não estando firme pode evidenciar que a mesma já entrou em um estado de decomposição."
                        },
                        {
                            value: "1",
                            key: "4",
                            text: "Peso.",
                            tip: "Diferentes espécimes de peixe possuem tamanhos e pesos diferenciados, não servindo como indicação da frescura da carne."
                        }, 
                        {
                            value: "0",
                            key: "5",
                            text: "Cor/Estado das vísceras.",
                            tip: "A cor das vísceras será bem avermelhada e viva para pescados fescos, perdendo a coloração à medida em que fica estocado."
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

export default AtividadeAvaliativa1