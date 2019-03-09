import React from 'react'
import AtividadeIntegralGenerica from '../../utils/atividade_integral_generica'

/*ESTE COMPONENTE DEVE RECEBER COMO PROPRIEDADE O SEGUINTE ITEM:
    idUnidade: String, representa o id da unidade em que a atividade se encontra
.*/
class AtividadeAvaliativa1 extends React.Component {
    constructor(props) {
        super(props)

        this.validarPropriedades()
    }

    validarPropriedades = () => {
        if(this.props.idUnidade === undefined){
            throw Error("Propriedade idUnidade não passada como parâmetro!")
        }
    }

    gerarAtividade = () => {
        return {
            idUnidade: this.props.idUnidade,
            id: "atividade_1_abstracao",
            questoes: [
                {
                    id: "q1_a1_abstracao",
                    titulo: "",
                    enunciado: "<span class=\"negrito\">A1.</span> Considere a organização de uma biblioteca e indique o que lhe parece ser uma abstração mais conveniente para falar de livros:",
                    alternativas: [
                        {
                            valor: "0",
                            chave: "1",
                            texto: "Cores das capas.",
                            dica: "A cor da capa pode despertar nosso lado artístico, mas não vai trazer informações sobre o conteúdo dos livros!"
                        },
                        {
                            valor: "1",
                            chave: "2",
                            texto: "Autores dos livros.",
                            dica: "Se organizarmos os livros pelos seus autores, saberemos qual o estilo de escrita dos mesmos e se escrevem sobre ficção, romances, textos técnicos, etc, sendo uma boa opção de abstração."
                        },
                        {
                            valor: "0",
                            chave: "3",
                            texto: "Tamanho das letras.",
                            dica: "O tamanho das letras ajuda na leitura, mas não vai trazer informações sobre o conteúdo dos livros."
                        },
                        {
                            valor: "0",
                            chave: "4",
                            texto: "Gramatura do papel.",
                            dica: "A gramatura do papel, pode revelar traços da qualidade dos livros, mas não vai trazer informações sobre o conteúdo dos mesmos."
                        }
                    ]
                },
                {
                    id: "q2_a1_abstracao",
                    titulo: "",
                    enunciado: "<span class=\"negrito\">A2.</span> Para organizar seu guarda-roupas, o que lhe parece ser uma abstração mais conveniente para falar de roupas: ",
                    alternativas: [
                        {
                            valor: "0",
                            chave: "1",
                            texto: "A grife das peças.",
                            dica: "A grife das peças pode servir para dar status ao seus dono, mas não é uma boa abstração."
                        },
                        {
                            valor: "0",
                            chave: "2",
                            texto: "O país onde as peças são fabricadas.",
                            dica: "Saber o país onde as peças são fabricadas ajudariam você em Geografia mas dificilmente vão gerar uma boa abstração."
                        },
                        {
                            valor: "0",
                            chave: "3",
                            texto: "O preço das peças.",
                            dica: "O preço de uma peça de roupas muitas vezes não consegue relacionar-se diretamente nem com sua qualidade, e também não é uma boa abstração."
                        },
                        {
                            valor: "1",
                            chave: "4",
                            texto: "O tipo das peças, por exemplo, calça, bermuda, vestido, saia, blazer etc.",
                            dica: "Saber exatamente qual tipo de peça está em qual posição do guarda-roupas vai lhe ajudar a planejar seu \"look\" e é a melhor abstração possível neste caso."
                        },
                    ]
                },
                {
                    id: "q3_a1_abstracao",
                    titulo: "",
                    enunciado: "<span class=\"negrito\">A3.</span> Para organizar a circulação de veículos de uma cidade, o que parece ser uma característica irrelevante de suas vias: ",
                    alternativas: [
                        {
                            valor: "0",
                            chave: "1",
                            texto: "A largura da via.",
                            dica: "A largura da via pode impedir que mais de um veículo circule pela mesma simultaneamente, sendo uma característica muito relevante."
                        },
                        {
                            valor: "0",
                            chave: "2",
                            texto: "A altura máxima permitida para o tráfego de veículos.",
                            dica: "A altura máxima garante por exemplo que um caminhão não vá ficar preso em uma passarela ou viaduto, sendo uma característica muito relevante."
                        },
                        {
                            valor: "1",
                            chave: "3",
                            texto: "A idade média dos veículos que trafegam na via.",
                            dica: "A idade média de um veículo (a não ser que este seja muito velho) não vai ser um item que evite sua circulação na via."
                        },
                        {
                            valor: "0",
                            chave: "4",
                            texto: "A tonelagem máxima suportada pela via.",
                            dica: "A tonelagem máxima suportada pela via define se pela mesma podem circular veículos de carga ou de grande capacidade de passeiros, sendo uma característica muito relevante."
                        }
                    ]
                },
                {
                    id: "q4_a1_abstracao",
                    titulo: "",
                    enunciado: "<span class=\"negrito\">A4.</span> Para organizar os produtos da área de vendas ao consumidor, o que lhe parece ser um conjunto menos adequado de setores: ",
                    alternativas: [
                        {
                            valor: "0",
                            chave: "1",
                            texto: "Padaria, Materiais de Limpeza, Congelados, Hortigranjeiros.",
                            dica: "Estes são setores adequados, correspondendo ao que geralmente encontramos em um mercado."
                        },
                        {
                            valor: "1",
                            chave: "2",
                            texto: "Produtos da empresa X, Produtos da Empresa Y, Produtos da Empresa Z.",
                            dica: "Este conjunto não é adequado pois as empresas podem ter segmentos de produtos diferentes, não contribuindo para a organização e facilidade de escolha dos clientes."
                        },
                        {
                            valor: "0",
                            chave: "3",
                            texto: "Higiene pessoal, Laticinios, Adega, Bomboniere, Açougue.",
                            dica: "Estes são setores adequados, correspondendo ao que geralmente encontramos em um mercado."
                        },
                        {
                            valor: "0",
                            chave: "4",
                            texto: "Frios, Congelados, Matinais, Materiais Elétricos.",
                            dica: "Estes são setores adequados, correspondendo ao que geralmente encontramos em um mercado."
                        }
                    ]
                },
                {
                    id: "q5_a1_abstracao",
                    titulo: "",
                    enunciado: "<span class=\"negrito\">A5.</span> Para falar das atividades necessárias para detalhar a abstração “Organizar o seu guarda-roupa”, identifique a atividade que lhe parece menos adequada: ",
                    alternativas: [
                        {
                            valor: "0",
                            chave: "1",
                            texto: "Separar as peças de roupa por tipo.",
                            dica: "Esta atividade é adequada pois garante assertividade na hora de escolher um tipo determinado de roupa."
                        },
                        {
                            valor: "0",
                            chave: "2",
                            texto: "Para cada tipo de peça, organizar por cores.",
                            dica: "Esta atividade é interessante pois garante que além do tipo de peça você tenha a divisão por cores."
                        },
                        {
                            valor: "0",
                            chave: "3",
                            texto: "Guardar cada peça no espaço reservado para o seu tipo.",
                            dica: "Esta atividade é totalmente adequada garantindo que você saibda aposição exata de cada tipo."
                        },
                        {
                            valor: "1",
                            chave: "4",
                            texto: "Separar as peças por cor, independentemente do tipo.",
                            dica: "Separar as peças por cores provavelmente vai ajudar a deixar seu guarda-roupas com um \"layout\" bonito mas não vai ser nada prático na hora em que você for se vestir."
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