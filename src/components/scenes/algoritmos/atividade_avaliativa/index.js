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
            id: "atividade_1_algoritmos",
            statement: "Considere os procedimentos P01 a P05 a seguir. Sobre cada um deles fazemos algumas afirmações. Identifique a que parece menos apropriada para aquele procedimento específico.",
            questions: [
                {
                    id: "q1_a1_algoritmos",
                    title: "P01",
                    statement: "",
                    algorithm: true,
                    instructions: [
                        {
                            text: "Pegue o livro desejado;"
                        },
                        {
                            text: "<span class=\"textred\">Enquanto</span> <span class=\"textblue\">houver páginas não lidas </span><span class=\"textred\">faça</span>:",
                            instructions: [
                                {
                                    text: "a. abra a primeira página não lida;"
                                },
                                {
                                    text: "b. leia a página aberta do início ao fim;"
                                }
                            ]
                        },
                        {
                            text: "Guarde o livro."
                        }
                    ],
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "Descreve uma sequência de operações para a leitura completa de um determinado livro;",
                            tip: "Sim pois permite procedimentar a leitura."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "Todas as suas operações podem ser realizadas em um tempo finito;",
                            tip: "Pode-se verificar que a leitura de uma página leva uma quantidade determinada de minutos e estimar o tempo total de leitura."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "Não pode ser usado para a leitura completa mas intercalada de dois livros;",
                            tip: "Pode sendo que a etapa 2 seria efetuada simultaneamente intercalando os livros."
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "Pode ser usado mesmo quando o livro é um e-book;",
                            tip: "Mesmo no caso do e-book há uma estrutura de páginas."
                        },
                        {
                            value: "1",
                            key: "5",
                            text: "Não poderia ser usado se o livro estivesse escrito em um papiro.",
                            tip: "No caso do papiro não há necessariamente, uniformidade na extensão dos mesmos correspondendo a unidades (páginas)."
                        }
                    ]
                },
                {
                    id: "q2_a1_algoritmos",
                    title: "P02",
                    statement: "",
                    algorithm: true,
                    instructions: [
                        {
                            text: "Pegue a lista de compras;"
                        },
                        {
                            text: "<span class=\"textred\">Enquanto</span><span class=\"textblue\"> houver um item ainda não encontrado</span><span class=\"textred\"> faça:</span>",
                            instructions: [
                                {
                                    text: "a. selecione o primeiro item ainda não comprado;"
                                },
                                {
                                    text: "b. encontre o produto nas prateleiras do supermercado;"
                                },
                                {
                                    text: "c. <span class=\"textred\">Se</span> o produto foi encontrado:",
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
                            value: "0",
                            key: "1",
                            text: "Se a operação 2.b for substituida por \"procure o produto em cada banca da feira\", o procedimento descreve uma sequência de operações para a realização de compras em uma feira;",
                            tip: "Sim, este algorithm ajudaria nas compras em uma feira, mercados e similares desde que se faça as substituições necessárias da operação 2.b."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "Algumas vezes a operação \"procure o produto …\", não será bem sucedida.",
                            tip: "Com certeza vai ser comum não encontrar determinado produto que estará em falta."
                        },
                        {
                            value: "1",
                            key: "3",
                            text: "Só pode ser usada para compra de produtos alimentícios;",
                            tip: "Não, este algorithm pode ser utilizado para compras de qualquer tipo de produto."
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "Se a lista de compras for dividida em 2 partes, é possível dar uma parte cada pessoa e cada uma pode usar o mesmo procedimento reduzindo com isso o tempo no supermercado;",
                            tip: "Sim, e cada pessoa vai realizar o mesmo algorithm para dar conta de sua lista particular. Neste caso, cada agente (humano) está realizando uma compra específica."
                        },
                        {
                            value: "0",
                            key: "5",
                            text: "A divisão da lista de compras em duas ou mais partes, deixando que diferentes pessoas realizem a compra para sua lista espedífica,  implica que cada comprador tenha que pagar a conta relativa a sua própria compra.",
                            tip: "Sim, pois a execução do algorithm seria independente para cada lista parcial."
                        }
                    ]
                },
                {
                    id: "q3_a1_algoritmos",
                    title: "P03",
                    statement: "",
                    algorithm: true,
                    instructions: [
                        {
                            text: "<span class=\"textred\">Enquanto</span> <span class=\"textblue\">a pilha de pratos sujos não estiver vazia</span> <span class=\"textred\">faça</span>:",
                            instructions: [
                                {
                                    text: "a. Pegue o prato que está no topo da pilha de pratos sujos; "
                                },
                                {
                                    text: "b. Lave o prato;"
                                },
                                {
                                    text: "c. Coloque o prato limpo no topo da pilha de pratos limpos."
                                }
                            ]
                        },
                    ],
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "Descreve uma sequência de operações para a realização da tarefa de lavar pratos.",
                            tip: "Sim, conforme descrição do algorithm."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "Funciona para uma pilha de pratos de qualquer tamanho.",
                            tip: "Sim, pois o laço \"enquanto\" garante que todos os pratos serão lavados."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "Funciona com outros tipos de louças, desde que organizadas de modo análogo.",
                            tip: "Pode ser, porém para talheres por exemplo seja prudente substituir a pilha por uma fila."
                        },
                        {
                            value: "1",
                            key: "4",
                            text: "No caso de quebra de um prato, P03 falharia.",
                            tip: "Não necessariamente, pois se o prato estiver sujo e quebrar não será lavado e se estiver limpo apenas deixou de fazer parte da pilha."
                        },
                        {
                            value: "0",
                            key: "5",
                            text: "O resultado é uma pilha de pratos limpos.",
                            tip: "Sim, mesmo no caso de quebras durante a lavagem, o resultado é sempre uma pilha com unidades (pratos ou outras louças) limpas"
                        }
                    ]
                },
                {
                    id: "q4_a1_algoritmos",
                    title: "P04",
                    statement: "",
                    algorithm: true,
                    instructions: [
                        {
                            text: "Pegue o macaco elevatório;"
                        },
                        {
                            text: "Posicione o macaco no ponto indicado para levantar o carro;"
                        },
                        {
                            text: "Acione um pouco o macaco, sem tirar o carro do piso;"
                        },
                        {
                            text: "Afrouxe todos os parafusos da roda;"
                        },
                        {
                            text: "Levante o carro deixando-o cerca de 5 centímetros acima do piso;"
                        },
                        {
                            text: "<span class=\"textred\">Enquanto</span> <span class=\"textblue\">houver parafuso por retirar</span> <span class=\"textred\">faça</span>:",
                            instructions: [
                                {
                                    text: "a. Retire um dos parafusos restantes na roda;"
                                },
                                {
                                    text: "b. Coloque o parafuso retirado dentro de um recipiente;"
                                },
                                {
                                    text: "c. Coloque na roda um dos parafusos disponíveis no recipiente."
                                }
                            ]
                        },
                        {
                            text: "Tire o pneu."
                        }
                    ],
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "Ao excluir a operação 6.c., o algorotimo descreve uma sequência de operações para a retirada de uma roda de um carro.",
                            tip: " Sim, pois conforme a descrição do algorithm, após 4 repetições da ação \"6.\", a roda ficaria solta e poderia ser retirada."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "O acionamento do macaco precisa ser precisamente detalhado.",
                            tip: "Sim, a quantidade de movimentos (de rotação, de pressão, ou equivalente) determina a altura atingida pelo macaco."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "Excluindo-se a operação 6.c., o algorithm pode ser usado como base para definir a colocação de uma roda invertendo-se a ordem (7-6-5-4-3-2-1) e as ações originais (retirar/colocar; levantar/abaixar; afrouxar/apertar, etc).",
                            tip: "Sim, se esta ordem for seguida o pneu será colocado."
                        },
                        {
                            value: "1",
                            key: "4",
                            text: "Todas as ações serão, em algum momento, concluídas.",
                            tip: "Não, a ação \"6.\" nunca é concluída, pois envolve tirar e recolocar um parafuso da roda, deixando a quantidade de parafusos a retirar inalterada."
                        },
                        {
                            value: "0",
                            key: "5",
                            text: "Descreve uma ação que nunca é concluída.",
                            tip: "Sim, a ação \"6.\" nunca é concluída, pois envolve tirar e recolocar um parafuso da roda, deixando a quantidade de parafusos a retirar inalterada."
                        }
                    ]
                },
                {
                    id: "q5_a1_algoritmos",
                    title: "P05",
                    statement: "",
                    algorithm: true,
                    instructions: [
                        {
                            text: "Encha de água um recipiente de 5 litros (R5);"
                        },
                        {
                            text: "Despeje o conteúdo de R5 num recipiente de 3 litros (R3);"
                        },
                        {
                            text: "Esvazie R3;"
                        },
                        {
                            text: "Despeje o conteúdo de R5 em R3;"
                        },
                        {
                            text: "Encha de água o R5;"
                        },
                        {
                            text: "Respeje o conteúdo de R5 necessário para completar a capacidade de R3"
                        },
                        {
                            text: "Esvazie R3"
                        },
                    ],
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "Descreve uma sequência de operações para obter exatos 4 litros de água em R5.",
                            tip: "Sim, seguindo esta sequência serão obtidos 4 litros exatos de água em R5."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "O volume de água desejado está contido em R5.",
                            tip: "Sim, pois é onde serão obtidos os 4 litros."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "O objetivo poderia ser obtido através de uma sequência diferente.",
                            tip: "Sim, inúmeras sequencias poderiam resultar no objetivo - basta pensar que as ações de encher e em seguida esvaziar o mesmo recipiente, embora sem efeito prático, poderiam ser repetidas várias vezes, definindo diferentes sequências."
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "Obter exatos 4 litros de água poderia ser alcançado usando recipientes de 7 e 5 litros e outra sequência.",
                            tip: "Sim. Considere (R7,R5) a representação dos volumes: (0,0) -> encher R7 -> (7,0) -> despejar R7 em R5 -> (2,5) -> despejar R5 -> (2,0) -> despejar R7 em R5 -> (0,2) -> encher R7 -> (7,2) -> despejar R7 em R5 -> (4,5)."
                        },
                        {
                            value: "1",
                            key: "5",
                            text: "O volume de água desejado está contido em R3.",
                            tip: "Não, a sequencia buscou obter exatos 4 litros de água (conteúdo final de R5)."
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