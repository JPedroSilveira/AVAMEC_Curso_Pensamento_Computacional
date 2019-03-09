import React from 'react'
import AtividadeIntegralGenerica from '../../../generics/atividade_integral_generica'

/*ESTE COMPONENTE DEVE RECEBER COMO PROPRIEDADE O SEGUINTE ITEM:
    idUnidade: String, representa o id da unidade em que a atividade se encontra
.*/
class AtividadeAvaliativa1 extends React.Component {
    constructor(props) {
        super(props)

        this.validarPropriedades()
    }

    validarPropriedades = () => {
        if (this.props.idUnidade === undefined) {
            throw Error("Propriedade idUnidade não passada como parâmetro!")
        }
    }

    gerarAtividade = () => {
        return {
            idUnidade: this.props.idUnidade,
            id: "atividade_1_reconhecimento_de_padroes",
            questoes: [
                {
                    id: "q1_a1_reconhecimento_de_padroes",
                    titulo: "",
                    enunciado: "<span class=\"negrito\">A1.</span> Passeando pelo centro de uma cidade conhecida, digamos que no Rio de Janeiro, você se depara com um aglomerado de pessoas. De repente um desconhecido estabelece uma conversa buscando também entender o que está acontecendo. Nessa conversa, levantando hipóteses e trocando opiniões quando percebem já se passaram uns 30 minutos e se despedem sem descobrirem o motivo da aglomeração. Pensando na conversa com o estranho, você se dá conta que o mesmo não parecia ser carioca nato ou criado naquela cidade. Motivado pela curiosidade, você tenta reconhecer em qual estado aquela pessoa teria nascido e/ou sido criada. Qual, dentre os elementos a seguir, seria o menos provável de estabelecer um padrão adequado a tal propósito?",
                    alternativas: [
                        {
                            valor: "0",
                            chave: "1",
                            texto: "Sotaque.",
                            dica: "Seria possível diferenciar o sotaque, por exemplo, de um gaúcho ou de um carioca."
                        },
                        {
                            valor: "0",
                            chave: "2",
                            texto: "Uso de expressões idiomáticas.",
                            dica: "Com certeza um \"bah\" ou um \"tchê\" revelaria um gaúcho."
                        },
                        {
                            valor: "1",
                            chave: "3",
                            texto: "Aspecto físicos.",
                            dica: "Embora alguns biotipos sejam frequentes em certas regiões, a miscigenação da população torna o aspecto físico menos indicativo."
                        },
                        {
                            valor: "0",
                            chave: "4",
                            texto: "Referências a elementos regionais.",
                            dica: "Falar de um prato típico ou de um monumento pode indicar a origem de uma pessoa."
                        },
                        {
                            valor: "0",
                            chave: "5",
                            texto: "Preferência por estilo musical.",
                            dica: "Certos estilos musicais são bem característicos de certos estados e regiões do país."
                        }
                    ]
                },
                {
                    id: "q2_a1_reconhecimento_de_padroes",
                    titulo: "",
                    enunciado: "<span class=\"negrito\">A2.</span> Pense em alguma vez que você ou alguém próximo adoeceu e a natureza da enfermidade foi sugerida por alguém e confirmada posteriormente por diagnóstico médico. Em contexto similar, diga qual, dentre os elementos a seguir, seria o menos provável de auxiliar a estabelecer um padrão adequado a tal propósito?",
                    alternativas: [
                        {
                            valor: "0",
                            chave: "1",
                            texto: "Histórico de doenças.",
                            dica: "Através do histórico médico é possível considerar a propenção a certas doenças."
                        },
                        {
                            valor: "1",
                            chave: "2",
                            texto: "Limpeza da pele e cabelo.",
                            dica: "Embora a alteração de nutrientes no corpo possa provocar alterações na textura da pele e aspecto do cabelo, a limpeza não deveria ser influenciada diretamente por alguma doença."
                        },
                        {
                            valor: "0",
                            chave: "3",
                            texto: "Mudança involuntária de comportamento (apetite, por exemplo).",
                            dica: "A perda de apetite repentina está associada com a grande maioria das enfermidades."
                        },
                        {
                            valor: "0",
                            chave: "4",
                            texto: "Dores no corpo.",
                            dica: "Dores de cabeça, nas costas e nas articulações por exemplo são associadas com determinadas enfermidades."
                        },
                        {
                            valor: "0",
                            chave: "5",
                            texto: "Alterações físicas (febre, vômito, diarréia, etc).",
                            dica: "A febre é um dos primeiros sintomas que indicam algum tipo de infecção no corpo."
                        }
                    ]
                },
                {
                    id: "q3_a1_reconhecimento_de_padroes",
                    titulo: "",
                    enunciado: "<span class=\"negrito\">A3.</span> Considere que uma telenovela que você acompanha aproxima-se dos capítulos finais e você, como vários de seus conhecidos, tentam prever como será o final da mesma e discutem entre si, as possibilidades de desfecho baseado nos acontecimentos dos capítulos anteriores. Considere qual, dentre os acontecimentos de capítulos recentes, seria o menos provável de ter impacto direto no final da novela.",
                    alternativas: [
                        {
                            valor: "0",
                            chave: "1",
                            texto: "Morte de um personagem.",
                            dica: "Aquele vilão que parecia sempre se dar bem teve o que mereceu, e o público também!"
                        },
                        {
                            valor: "1",
                            chave: "2",
                            texto: "Nascimento de gêmeos.",
                            dica: "Embora trate-se de evento feliz, não haveria grande chance de causar impacto no capítulo final."
                        },
                        {
                            valor: "0",
                            chave: "3",
                            texto: "Fuga/Soltura de um personagem preso na etapa inicial.",
                            dica: "Aquele personagem que você achou que foi preso injustamente sendo libertado é um final feliz."
                        },
                        {
                            valor: "0",
                            chave: "4",
                            texto: "Aproximação entre casal de personagens que antes eram adversários.",
                            dica: "Adversários que se tornam um casal é uma mudança que agrada o público, poderiam unir forças para enfrentar e superar os vilões."
                        },
                        {
                            valor: "0",
                            chave: "5",
                            texto: "Revelação de fatos sobre o nascimento do protagonista.",
                            dica: "Revelações sobre a origem do protagonista podem ter grande impacto inclusive justificando comportamentos e situações entre personagens, especialmente que se descobrem familiares."
                        }
                    ]
                },
                {
                    id: "q4_a1_reconhecimento_de_padroes",
                    titulo: "",
                    enunciado: "<span class=\"negrito\">A4.</span> Retomando ao cenário da questão 1, considere o propósito de identificar a profissão do desconhecido. Qual, dentre os elementos a seguir, seria o menos provável de estabelecer um padrão adequado a tal propósito?",
                    alternativas: [
                        {
                            valor: "0",
                            chave: "1",
                            texto: "Curso formal na área.",
                            dica: "Optar por um curso formal geralmente está alinhado com a profisão que queremos seguir."
                        },
                        {
                            valor: "1",
                            chave: "2",
                            texto: "Habilidades sociais.",
                            dica: "Várias profissões exigem habilidades sociais, inclusive pessoas sem uma ocupação específica podem possuir tais habilidades."
                        },
                        {
                            valor: "0",
                            chave: "3",
                            texto: "Contato com o público.",
                            dica: "Demonstrar habilidade no contato com o público pode revelar que a pessoa adquiriu a mesma atuando com vendas ou atendente."
                        },
                        {
                            valor: "0",
                            chave: "4",
                            texto: "Local de estágio.",
                            dica: "O local onde a pessoa estagiou é um bom indicativo da sua profissão."
                        },
                        {
                            valor: "0",
                            chave: "5",
                            texto: "Uso de fardamento no dia a dia.",
                            dica: "Usar determinado fardamento indica que a pessoa pertence a determinada corporação."
                        }
                    ]
                },
                {
                    id: "q5_a1_reconhecimento_de_padroes",
                    titulo: "",
                    enunciado: "<span class=\"negrito\">A5.</span> Num mercado, determinar se o peixe está de fato fresco envolve analisar se cada exemplar está em conformidade com certos elementos, como os mencionados a seguir. Qual, dentre os aspectos abaixo, parece menos provável de caracterizar a frescura de um certo pescado?",
                    alternativas: [
                        {
                            valor: "0",
                            chave: "1",
                            texto: "Cor dos olhos.",
                            dica: "A cor dos olhos do peixe pode revelar que o mesmo está mal acondicionado em uma temperatura inadequada por exemplo."
                        },
                        {
                            valor: "0",
                            chave: "2",
                            texto: "Brilho das escamas.",
                            dica: "O brilho das escamas do peixe pode revelar que o mesmo está mal acondicionado em uma temperatura inadequada por exemplo."
                        },
                        {
                            valor: "0",
                            chave: "3",
                            texto: "Firmeza da carne.",
                            dica: "A carne não estando firme pode evidenciar que a mesma já entrou em um estado de decomposição."
                        },
                        {
                            valor: "1",
                            chave: "4",
                            texto: "Peso.",
                            dica: "Diferentes espécimes de peixe possuem tamanhos e pesos diferenciados, não servindo como indicação da frescura da carne."
                        }, 
                        {
                            valor: "0",
                            chave: "5",
                            texto: "Cor/Estado das vísceras.",
                            dica: "A cor das vísceras será bem avermelhada e viva para pescados fescos, perdendo a coloração à medida em que fica estocado."
                        }
                    ]
                }
            ]
        }
    }

    render() {
        return (
            <AtividadeIntegralGenerica atividade={this.gerarAtividade()} />
        )
    }
}

export default AtividadeAvaliativa1