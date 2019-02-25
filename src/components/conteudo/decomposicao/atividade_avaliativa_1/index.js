import React from 'react'
import AtividadeIntegralGenerica from '../../utils/atividade_integral_generica'

/*ESTE COMPONENTE DEVE RECEBER COMO PROPRIEDADE O SEGUINTE ITEM:
    idUnidade: String, representa o id da unidade em que a atividade se encontra
*/
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
            id: "atividade_1_decomposicao",
            questoes: [
                {
                    id: "q1_a1_decomposicao",
                    titulo: "1. AVALIANDO UM FESTIVAL FOLCLÓRICO",
                    enunciado: "Considere que você precisa definir como deve ser realizada a avaliação das danças apresentadas por grupos em um festival folclórico. Considere ainda que este festival pode estar sendo realizado pela comunidade de uma escola, de um bairro ou até de uma cidade inteira. Reflita sobre como a avaliação poderia ser decomposta em elementos e indique qual, dentre os seguintes, seria menos adequado para esse fim.",
                    alternativas: [
                        {
                            valor: "0",
                            chave: "1",
                            texto: "Tempo da apresentação.",
                            dica: "Com certeza seria possível estabelecer um tempo máximo de apresentação e utilizar esta métrica para avaliar a performance do grupo."
                        },
                        {
                            valor: "0",
                            chave: "2",
                            texto: "Sincronia.",
                            dica: "Um grupo que treinou adequadamente deve estar em sintonia, com sincronia de movimentos, sendo esta uma boa alternativa de avaliação."
                        },
                        {
                            valor: "0",
                            chave: "3",
                            texto: "Precisão de movimentos.",
                            dica: "Movimentos precisos estão associados com dedicação aos treinos e podem ser uma ótima forma de avaliar os grupos."
                        },
                        {
                            valor: "0",
                            chave: "4",
                            texto: "Participação da audiência.",
                            dica: "Os participantes da audiência não tem influência direta na dança apresentada pelos grupos não sendo uma forma correta de avaliar os grupos."
                        },
                        {
                            valor: "1",
                            chave: "5",
                            texto: "Figurino.",
                            dica: "O figurino está geralmente associado com o tema a ser apresentado pelos grupos e seria uma boa forma de avaliar os mesmos."
                        },
                    ]
                },
                {
                    id: "q2_a1_decomposicao",
                    titulo: "2. ORGANIZANDO UM EVENTO",
                    enunciado: "Qualquer evento, seja no âmbito pessoal (aniversários, casamentos, festas religiosas, etc.) quanto no profissional (congressos, seminários, premiações, etc.), requer, para sua realização, da execução de um conjunto de atividades que podem, dependendo da dimensão do evento em questão, envolver várias pessoas ou equipes, responsáveis pelos diferentes aspectos que constituem o evento. Considere a realização do seminário \"O Pensamento Computacional na Escola\", e dentre os conjuntos abaixo, indique qual lhe parece uma decomposição adequada de elementos envolvidos neste evento?",
                    alternativas: [
                        {
                            valor: "0",
                            chave: "1",
                            texto: "Convidados; Local; Refrigeração; Mídia/Transmissão; Comissão julgadora.",
                            dica: "Esta decomposição está mais adequada para um desfile de modas do que para um seminário."
                        },
                        {
                            valor: "0",
                            chave: "2",
                            texto: "Divulgação; Patrocínio; Local; Atrações; Licenciamento; Ingressos; Segurança.",
                            dica: "Esta decomposição está mais adequada para um show de música do que para um seminário."
                        },
                        {
                            valor: "0",
                            chave: "3",
                            texto: "Local; Convites; Figurino; Sonorização; Apresentação.",
                            dica: "Esta decomposição está mais adequada para uma apresentação em um teatro do que para um seminário."
                        },
                        {
                            valor: "1",
                            chave: "4",
                            texto: "Inscrições; Data; Patrocínio; Comitês; Local; Transporte; Programação.",
                            dica: "Esta é uma decomposição adequada para um seminário."
                        },
                        {
                            valor: "0",
                            chave: "5",
                            texto: "Convites; Cardápio; Música; Bolo decorado; Doces; Salgados; Bebidas; Lembranças.",
                            dica: "Esta decomposição está mais adequada para uma festa de aniversário do que para um seminário."
                        },
                    ]
                },
                {
                    id: "q3_a1_decomposicao",
                    titulo: "3. ENTENDENDO O CORPO HUMANO",
                    enunciado: "Com o propósito de diagnosticar a origem de um problema de saúde a partir de sintomas diversos, um médico usualmente analisa o corpo humano segundo seus sistemas ou elementos constituintes. Em tal cenário, qual dos seguintes conjuntos lhe parece menos adequado?",
                    alternativas: [
                        {
                            valor: "0",
                            chave: "1",
                            texto: "Cardiovascular, respiratório, digestivo, nervoso, sensorial, endócrino, excretor, urinário, reprodutor, esquelético, muscular, imunológico, linfático, tegumentar.",
                            dica: "Esta decomposição possui uma quantidade de elementos que pode ajudar em um diagnóstico de um clínico geral."
                        },
                        {
                            valor: "0",
                            chave: "2",
                            texto: "Cavidades nasais, faringe, laringe, traquéia, brônquios, pulmões.",
                            dica: "Esta decomposição possui uma quantidade de elementos que pode ajudar em um diagnóstico do sistema respiratório."
                        },
                        {
                            valor: "1",
                            chave: "3",
                            texto: "Cabeça, tronco, membros.",
                            dica: "Este decomposição possui poucos elementos e dificultaria um diagnóstico."
                        },
                        {
                            valor: "0",
                            chave: "4",
                            texto: "Visão, audição, olfato, paladar, tato.",
                            dica: "Esta decomposição possui uma quantidade de elementos que pode ajudar em um diagnóstico de um otorrinolaringologista."
                        },
                        {
                            valor: "0",
                            chave: "5",
                            texto: "Artérias, veias, vasos capilares.",
                            dica: "Esta decomposição possui uma quantidade de elementos que pode ajudar em um diagnóstico do sistema circulatório."
                        },
                    ]
                },
                {
                    id: "q4_a1_decomposicao",
                    titulo: "4. PLANEJANDO AS PRÓXIMAS FÉRIAS",
                    enunciado: "Qual, dentre as opções que seguem, não lhe parece adequada para decompor o planejamento das férias de uma família",
                    alternativas: [
                        {
                            valor: "0",
                            chave: "1",
                            texto: "Transporte; hospedagem; alimentação; atrações.",
                            dica: "Esta decomposição é adequada para planejar trechos da viagem."
                        },
                        {
                            valor: "0",
                            chave: "2",
                            texto: "Caminhar; pescar; jogar futebol; nadar; cochilar, ir ao teatro.",
                            dica: "Esta decomposição é adequada para planejar atividades recreativas durante a viagem."
                        },
                        {
                            valor: "1",
                            chave: "3",
                            texto: "Armários abastecidos; acendimento de luzes; retirada de correspondência.",
                            dica: "Esta decomposição é adequada para cuidar da casa, mas não no período de férias."
                        },
                        {
                            valor: "0",
                            chave: "4",
                            texto: "Compra de passagem de avião, reserva de hotel, aluguel de carro.",
                            dica: "Esta decomposição é adequada para planejar trechos da viagem."
                        },
                        {
                            valor: "0",
                            chave: "5",
                            texto: "Atividades na primeira cidade visitada, atividades na segunda cidade visitada, atividades na última cidade.",
                            dica: "Esta decomposição é adequada para planejar as atividades nos locais a serem visitados durante a viagem."
                        },
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
