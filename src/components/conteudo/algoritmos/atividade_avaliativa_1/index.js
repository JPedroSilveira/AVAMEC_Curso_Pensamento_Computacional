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
            id: "atividade_1_algoritmos",
            enunciado: "Considere os procedimentos P01 a P05 a seguir. Sobre cada um deles fazemos algumas afirmações. Identifique a que parece menos apropriada para aquele procedimento específico.",
            questoes: [
                {
                    id: "q1_a1_algoritmos",
                    titulo: "P01",
                    enunciado: "",
                    algoritmo: true,
                    instrucoes: [
                        {
                            texto: "Pegue o livro desejado;"
                        },
                        {
                            texto: "Enquanto houver páginas não lidas faça:",
                            instrucoes: [
                                {
                                    texto: "a. abra a primeira página não lida;"
                                },
                                {
                                    texto: "b. leia a página aberta do início ao fim;"
                                }
                            ]
                        },
                        {
                            texto: "Guarde o livro."
                        }
                    ],
                    alternativas: [
                        {
                            valor: "0",
                            chave: "1",
                            texto: "Descreve uma sequência de operações para a leitura completa de um determinado livro;",
                            dica: "Sim pois permite procedimentar a leitura."
                        },
                        {
                            valor: "1",
                            chave: "2",
                            texto: "Todas as suas operações podem ser realizadas em um tempo finito;",
                            dica: "Pode-se verificar que a leitura de uma página leva uma quantidade determinada de minutos e estimar o tempo total de leitura."
                        },
                        {
                            valor: "0",
                            chave: "3",
                            texto: "Não pode ser usado para a leitura completa mas intercalada de dois livros;",
                            dica: "Pode sendo que a etapa 2 seria efetuada simultaneamente intercalando os livros."
                        },
                        {
                            valor: "0",
                            chave: "4",
                            texto: "Pode ser usado mesmo quando o livro é um e-book;",
                            dica: "Mesmo no caso do e-book há uma estrutura de páginas."
                        },
                        {
                            valor: "1",
                            chave: "5",
                            texto: "Não poderia ser usado se o livro estivesse escrito em um papiro.",
                            dica: "No caso do papiro não há necessariamente, uniformidade na extensão dos mesmos correspondendo a unidades (páginas)."
                        }
                    ]
                },
                {
                    id: "q2_a1_algoritmos",
                    titulo: "P02",
                    enunciado: "",
                    algoritmo: true,
                    instrucoes: [
                        {
                            texto: "Pegue a lista de compras;"
                        },
                        {
                            texto: "Enquanto houver um item ainda não encontrado faça:",
                            instrucoes: [
                                {
                                    texto: "a. selecione o primeiro item ainda não comprado;"
                                },
                                {
                                    texto: "b. encontre o produto nas prateleiras do supermercado;"
                                },
                                {
                                    texto: "c. Se o produto foi encontrado:",
                                    instrucoes: [
                                        {
                                            texto: "então",
                                            instrucoes: [
                                                {
                                                    texto: "coloque o produto em seu carrinho de compras;"
                                                },
                                                {
                                                    texto: "risque o item de sua lista de compras;"
                                                }
                                            ]
                                        },
                                        {
                                            texto: "senão",
                                            instrucoes:  [
                                                {
                                                    texto: "risque o item de sua lista de compras;"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            texto: "Dirija-se ao caixa;"
                        },
                        {
                            texto: "Pague a conta."
                        }
                    ],
                    alternativas: [
                        {
                            valor: "0",
                            chave: "1",
                            texto: "Se a operação 2.b for substituida por \"procure o produto em cada banca da feira\", o procedimento descreve uma sequência de operações para a realização de compras em uma feira;",
                            dica: "Sim, este algoritmo ajudaria nas compras em uma feira, mercados e similares desde que se faça as substituições necessárias da operação 2.b."
                        },
                        {
                            valor: "0",
                            chave: "2",
                            texto: "Algumas vezes a operação \"procure o produto …\", não será bem sucedida.",
                            dica: "Com certeza vai ser comum não encontrar determinado produto que estará em falta."
                        },
                        {
                            valor: "1",
                            chave: "3",
                            texto: "Só pode ser usada para compra de produtos alimentícios;",
                            dica: "Não, este algoritmo pode ser utilizado para compras de qualquer tipo de produto."
                        },
                        {
                            valor: "0",
                            chave: "4",
                            texto: "Se a lista de compras for dividida em 2 partes, é possível dar uma parte cada pessoa e cada uma pode usar o mesmo procedimento reduzindo com isso o tempo no supermercado.",
                            dica: "Sim, e cada pessoa vai realizar o mesmo algoritmo para dar conta de sua lista particular. Neste caso, cada agente (humano) está realizando uma compra específica."
                        },
                        {
                            valor: "0",
                            chave: "5",
                            texto: "A divisão da lista de compras em duas ou mais partes, deixando que diferentes pessoas realizem a compra para sua lista espedífica,  implica que cada comprador tenha que pagar a conta relativa a sua própria compra.",
                            dica: "Sim, pois a execução do algoritmo seria independente para cada lista parcial."
                        }
                    ]
                },
                {
                    id: "q3_a1_algoritmos",
                    titulo: "P03",
                    enunciado: "",
                    algoritmo: true,
                    instrucoes: [
                        {
                            texto: "Enquanto a pilha de pratos sujos não estiver vazia faça:",
                            instrucoes: [
                                {
                                    texto: "a. Pegue o prato que está no topo da pilha de pratos sujos; "
                                },
                                {
                                    texto: "b. Lave o prato;"
                                },
                                {
                                    texto: "c. Coloque o prato limpo no topo da pilha de pratos limpos."
                                }
                            ]
                        },
                    ],
                    alternativas: [
                        {
                            valor: "0",
                            chave: "1",
                            texto: "Descreve uma sequência de operações para a realização da tarefa de lavar pratos",
                            dica: "Sim, conforme descrição do algoritmo."
                        },
                        {
                            valor: "0",
                            chave: "2",
                            texto: "Funciona para uma pilha de pratos de qualquer tamanho.",
                            dica: "Sim, pois o laço \"enquanto\" garante que todos os pratos serão lavados."
                        },
                        {
                            valor: "0",
                            chave: "3",
                            texto: "Funciona com outros tipos de louças, desde que organizadas de modo análogo.",
                            dica: "Pode ser, porém para talheres por exemplo seja prudente substituir a pilha por uma fila."
                        },
                        {
                            valor: "1",
                            chave: "4",
                            texto: "No caso de quebra de um prato, P03 falharia.",
                            dica: "Não necessariamente, pois se o prato estiver sujo e quebrar não será lavado e se estiver limpo apenas deixou de fazer parte da pilha."
                        },
                        {
                            valor: "0",
                            chave: "5",
                            texto: "O resultado é uma pilha de pratos limpos.",
                            dica: "Sim, mesmo no caso de quebras durante a lavagem, o resultado é sempre uma pilha com unidades (pratos ou outras louças) limpas"
                        }
                    ]
                },
                {
                    id: "q4_a1_algoritmos",
                    titulo: "P04",
                    enunciado: "",
                    algoritmo: true,
                    instrucoes: [
                        {
                            texto: "Pegue o macaco elevatório;"
                        },
                        {
                            texto: "Posicione o macaco no ponto indicado para levantar o carro;"
                        },
                        {
                            texto: "Acione um pouco o macaco, sem tirar o carro do piso;"
                        },
                        {
                            texto: "Afrouxe todos os parafusos da roda;"
                        },
                        {
                            texto: "Levante o carro deixando-o cerca de 5 centímetros acima do piso;"
                        },
                        {
                            texto: "Enquanto houver parafuso por retirar faça:",
                            instrucoes: [
                                {
                                    texto: "a. Retire um dos parafusos restantes na roda;"
                                },
                                {
                                    texto: "b. Coloque o parafuso retirado dentro de um recipiente;"
                                },
                                {
                                    texto: "c. Coloque na roda um dos parafusos disponíveis no recipiente."
                                }
                            ]
                        },
                        {
                            texto: "Tire o pneu."
                        }
                    ],
                    alternativas: [
                        {
                            valor: "0",
                            chave: "1",
                            texto: "Ao excluir a operação 6.c., o algorotimo descreve uma sequência de operações para a retirada de uma roda de um carro.",
                            dica: " Sim, pois conforme a descrição do algoritmo, após 4 repetições da ação \"6.\", a roda ficaria solta e poderia ser retirada."
                        },
                        {
                            valor: "0",
                            chave: "2",
                            texto: "O acionamento do macaco precisa ser precisamente detalhado.",
                            dica: "Sim, a quantidade de movimentos (de rotação, de pressão, ou equivalente) determina a altura atingida pelo macaco."
                        },
                        {
                            valor: "0",
                            chave: "3",
                            texto: "Excluindo-se a operação 6.c., o algoritmo pode ser usado como base para definir a colocação de uma roda invertendo-se a ordem (7-6-5-4-3-2-1) e as ações originais (retirar/colocar; levantar/abaixar; afrouxar/apertar, etc).",
                            dica: "Sim, se esta ordem for seguida o pneu será colocado."
                        },
                        {
                            valor: "1",
                            chave: "4",
                            texto: "Todas as ações serão, em algum momento, concluídas.",
                            dica: "Não, a ação \"6.\" nunca é concluída, pois envolve tirar e recolocar um parafuso da roda, deixando a quantidade de parafusos a retirar inalterada."
                        },
                        {
                            valor: "0",
                            chave: "5",
                            texto: "Descreve uma ação que nunca é concluída.",
                            dica: "Sim, a ação \"6.\" nunca é concluída, pois envolve tirar e recolocar um parafuso da roda, deixando a quantidade de parafusos a retirar inalterada."
                        }
                    ]
                },
                {
                    id: "q5_a1_algoritmos",
                    titulo: "P05",
                    enunciado: "",
                    algoritmo: true,
                    instrucoes: [
                        {
                            texto: "Encha de água um recipiente de 5 litros (R5);"
                        },
                        {
                            texto: "Despeje o conteúdo de R5 num recipiente de 3 litros (R3);"
                        },
                        {
                            texto: "Esvazie R3;"
                        },
                        {
                            texto: "Despeje o conteúdo de R5 em R3;"
                        },
                        {
                            texto: "Encha de água o R5;"
                        },
                        {
                            texto: "Respeje o conteúdo de R5 necessário para completar a capacidade de R3"
                        },
                        {
                            texto: "Esvazie R3"
                        },
                    ],
                    alternativas: [
                        {
                            valor: "0",
                            chave: "1",
                            texto: "Descreve uma sequência de operações para obter exatos 4 litros de água em R5.",
                            dica: "Sim, seguindo esta sequência serão obtidos 4 litros exatos de água em R5."
                        },
                        {
                            valor: "0",
                            chave: "2",
                            texto: "O volume de água desejado está contido em R5.",
                            dica: "Sim, pois é onde serão obtidos os 4 litros."
                        },
                        {
                            valor: "0",
                            chave: "3",
                            texto: "O objetivo poderia ser obtido através de uma sequência diferente.",
                            dica: "Sim, inúmeras sequencias poderiam resultar no objetivo - basta pensar que as ações de encher e em seguida esvaziar o mesmo recipiente, embora sem efeito prático, poderiam ser repetidas várias vezes, definindo diferentes sequências."
                        },
                        {
                            valor: "0",
                            chave: "4",
                            texto: "Obter exatos 4 litros de água poderia ser alcançado usando recipientes de 7 e 5 litros e outra sequência.",
                            dica: "Sim. Considere (R7,R5) a representação dos volumes: (0,0) -> encher R7 -> (7,0) -> despejar R7 em R5 -> (2,5) -> despejar R5 -> (2,0) -> despejar R7 em R5 -> (0,2) -> encher R7 -> (7,2) -> despejar R7 em R5 -> (4,5)."
                        },
                        {
                            valor: "1",
                            chave: "5",
                            texto: "O volume de água desejado está contido em R3.",
                            dica: "Não, a sequencia buscou obter exatos 4 litros de água (conteúdo final de R5)."
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