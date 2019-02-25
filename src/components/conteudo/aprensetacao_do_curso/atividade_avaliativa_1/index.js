import React from 'react'
import AtividadeIntegralGenerica from '../../utils/atividade_integral_generica'

/*ESTE COMPONENTE DEVE RECEBER COMO PROPRIEDADE O SEGUINTE ITEM:
    idUnidade: String, representa o id da unidade em que a atividade se encontra
*/
class AtividadeAvaliativa1 extends React.Component {
    constructor(props){
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
            id: "atividade_1_apresentacao_do_curso",
            questoes: [
                {
                    id: "q1_a1_apresentacao_do_curso",
                    titulo: "",
                    enunciado: "\"Assinale a alternativa que lhe parece mais apropriada com respeito à afirmação a seguir, considerado o quadro \"Uma ida não planejada ao supermercado\". O Pensamento Computacional poderia ajudar o Sr.José a ter planejado suas compras e com isso, aproveitado melhor seu tempo disponível.",
                    alternativas: [
                        {
                            valor: "0",
                            chave: "1",
                            texto: "Não, pois ele sempre segue a mesma rotina e já faz o melhor aproveitamento do seu tempo!",
                            dica: "Podemos verificar que o próprio texto descreve a experiência do Sr. José no mercado como não sendo a ideal."
                        },
                        {
                            valor: "1",
                            chave: "2",
                            texto: "Sim, pois José poderia por exemplo aprender um pouco sobre algoritmos e criar um para sempre buscar o menor caminho no mercado otimizando seu tempo.",
                            dica: "Pensar neste algoritmo levaria José a criar uma lista de compras \"enxuta\" e que pouparia a ele seu precioso tempo!"
                        },
                        {
                            valor: "0",
                            chave: "3",
                            texto: "Sim, José deve obrigatoriamnte comprar um notebook e instalar um programa para ajudá-lo a planejar suas compras e otimizar seu tempo.",
                            dica: "Não é uma má ideia utilizar um software para planejar suas compras, mas podemos resolver esta questão de uma forma mais simples, assim como nossos antepassados faziam antes do advento do computador! E mesmo muita gente ainda faz hoje. Uma simples lista de compra e uma ideia das gôndolas que devem ser visitadas já podem resolver esta questão."
                        },
                        {
                            valor: "0",
                            chave: "4",
                            texto: "Sim, José deve obrigatoriamnte comprar um \"smartphone\" e instalar um aplicativo para ajudá-lo a planejar suas compras e otimizar seu tempo.",
                            dica: "Não é uma má ideia utilizar um software para planejar suas compras, mas podemos resolver esta questão de uma forma mais simples, assim como nossos antepassados faziam antes do advento do computador! E mesmo muita gente ainda faz hoje. Uma simples lista de compra e uma ideia das gôndolas que devem ser visitadas já podem resolver esta questão."
                        },
                    ]
                }
            ]
        }
    }


    render() {
        return (
            <AtividadeIntegralGenerica atividade={this.gerarAtividade()}/>
        )
    }
}

export default AtividadeAvaliativa1
