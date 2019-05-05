import React from 'react'
import IntegralActivity from '../../../generics/activity/integral_activity'

/*ESTE COMPONENTE DEVE RECEBER COMO PROPRIEDADE O SEGUINTE ITEM:
    unitId: String, representa o id da unidade em que a atividade se encontra
.*/
class AtividadeAvaliativaDois extends React.Component {
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
            id: "atividade_2_algoritmos",
            statement: "<strong>A02.</strong> Considere a sequência de operações denominada de Algoritmo 07. Selecione a afirmação a seguir que lhe parece ser a menos indicada para se referir ao Algoritmo 07.",
            questions: [
                {
                    id: "q1_a2_algoritmos",
                    title: "Algoritmo 07",
                    statement: "",
                    algorithm: true,
                    preInstructions: "Considere que se tenha uma lista de compras e que um agente está com ela em um supermercado.",
                    instructions: [
                        {
                            text: "Pegue a lista de compras;"
                        },
                        {
                            text: "<span class=\"textred\">Enquanto</span><span class=\"textblue\"> houver um item ainda não riscado na lista</span> <span class=\"textred\">faça:</span>",
                            instructions: [
                                {
                                    text: "1. selecione o primeiro item ainda não riscado;"
                                },
                                {
                                    text: "2. procure o produto nas prateleiras do supermercado;"
                                },
                                {
                                    text: "3. <span class=\"textred\">Se</span> o produto foi encontrado:",
                                    instructions: [
                                        {
                                            text: "<span class=\"textred\">então</span>",
                                            instructions: [
                                                {
                                                    text: "coloque o produto em seu carrinho de compras;"
                                                },
                                                {
                                                    text: "risque o item de sua lista de compras;"
                                                }
                                            ]
                                        },
                                        {
                                            text: "<span class=\"textred\">senão</span>",
                                            instructions:  [
                                                {
                                                    text: "risque o item de sua lista de compras;"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            text: "Dirija-se ao caixa;"
                        },
                        {
                            text: "Pague a conta."
                        }
                    ],
                    options: [
                        {
                            value: "1",
                            key: "1",
                            text: "Se a operação 2.1 for substituída por \"procure o produto em cada banca da feira\", o algoritmo descreve uma sequência de operações para a realização de compras em uma feira.",
                            tip: "Não é o caso, uma vez que em uma feira, em geral, não existe um caixa central e assim cada produto é pago diretamente na banca em que o produto foi encontrado."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "Algumas vezes a operação “procure o produto …” não será bem sucedida.",
                            tip: "Certamente é possível que um ou mais produtos de uma lista estejam em falta em um determinado supermercado."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "Podemos dividir a lista de compras em duas ou mais partes, obtendo outras listas, que podem ser atribuídas a compradores diferentes. Se solicitarmos que cada um execute o Algoritmo 07, cada comprador terá que pagar a conta relativa a sua própria compra.",
                            tip: "Sim, pois a execução do algoritmo seria independente para cada lista parcial e, nesse caso, para completar a execução do algoritmo, cada agente precisará executar todas as operações, para concluir sua tarefa."
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "Se nenhum dos produtos de sua lista forem encontrados no supermercado, você chegará ao caixa com seu carrinho vazio e, portanto, nada terá que pagar. Ou seja, as ações “dirija-se ao caixa”  e “pague a conta”  são desnecessárias para esse caso e os Passos 3 e 4 do nosso algoritmo poderiam ser substituídos pelo trecho a seguir: <br /><br /><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Se o carrinho de compras está vazio<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"textred\">então</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;devolva o carrinho<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"textred\">senão</span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dirija-se ao caixa<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. Pague a conta</strong>",
                            tip: "De fato, a ida ao caixa com o carrinho sem compras é uma ação desnecessária, dado que nada precisará ser pago. Dessa forma nosso comprador poderá deixar o carro em qualquer lugar no supermercado e ir embora. Entretanto é um ato de gentileza deixar o carrinho no local onde são depositados os carrinhos vazios para o uso de novos clientes compradores."
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

export default AtividadeAvaliativaDois