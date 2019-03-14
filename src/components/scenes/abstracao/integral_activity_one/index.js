import React from 'react'
import IntegralActivity from '../../../generics/activity/integral_activity'

/*ESTE COMPONENTE DEVE RECEBER COMO PROPRIEDADE O SEGUINTE ITEM:
    unitId: String, representa o id da unidade em que a atividade se encontra
.*/
class IntegralActivityOne extends React.Component {
    constructor(props) {
        super(props)

        this.validateProps()
    }

    validateProps = () => {
        if(this.props.unitId === undefined){
            throw Error("Property 'unitId' can't be undefined!")
        }
    }

    getActivity = () => {
        return {
            unitId: this.props.unitId,
            id: "atividade_1_abstracao",
            questions: [
                {
                    id: "q1_a1_abstracao",
                    title: "",
                    statement: "<span class=\"negrito\">A1.</span> Considere a organização de uma biblioteca e indique o que lhe parece ser uma abstração mais conveniente para falar de livros:",
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "Cores das capas.",
                            tip: "A cor da capa pode despertar nosso lado artístico, mas não vai trazer informações sobre o conteúdo dos livros!"
                        },
                        {
                            value: "1",
                            key: "2",
                            text: "Autores dos livros.",
                            tip: "Se organizarmos os livros pelos seus autores, saberemos qual o estilo de escrita dos mesmos e se escrevem sobre ficção, romances, texts técnicos, etc, sendo uma boa opção de abstração."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "Tamanho das letras.",
                            tip: "O tamanho das letras ajuda na leitura, mas não vai trazer informações sobre o conteúdo dos livros."
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "Gramatura do papel.",
                            tip: "A gramatura do papel, pode revelar traços da qualidade dos livros, mas não vai trazer informações sobre o conteúdo dos mesmos."
                        }
                    ]
                },
                {
                    id: "q2_a1_abstracao",
                    title: "",
                    statement: "<span class=\"negrito\">A2.</span> Para organizar seu guarda-roupas, o que lhe parece ser uma abstração mais conveniente para falar de roupas: ",
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "A grife das peças.",
                            tip: "A grife das peças pode servir para dar status ao seus dono, mas não é uma boa abstração."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "O país onde as peças são fabricadas.",
                            tip: "Saber o país onde as peças são fabricadas ajudariam você em Geografia mas dificilmente vão gerar uma boa abstração."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "O preço das peças.",
                            tip: "O preço de uma peça de roupas muitas vezes não consegue relacionar-se diretamente nem com sua qualidade, e também não é uma boa abstração."
                        },
                        {
                            value: "1",
                            key: "4",
                            text: "O tipo das peças, por exemplo, calça, bermuda, vestido, saia, blazer etc.",
                            tip: "Saber exatamente qual tipo de peça está em qual posição do guarda-roupas vai lhe ajudar a planejar seu \"look\" e é a melhor abstração possível neste caso."
                        },
                    ]
                },
                {
                    id: "q3_a1_abstracao",
                    title: "",
                    statement: "<span class=\"negrito\">A3.</span> Para organizar a circulação de veículos de uma cidade, o que parece ser uma característica irrelevante de suas vias: ",
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "A largura da via.",
                            tip: "A largura da via pode impedir que mais de um veículo circule pela mesma simultaneamente, sendo uma característica muito relevante."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "A altura máxima permitida para o tráfego de veículos.",
                            tip: "A altura máxima garante por exemplo que um caminhão não vá ficar preso em uma passarela ou viaduto, sendo uma característica muito relevante."
                        },
                        {
                            value: "1",
                            key: "3",
                            text: "A idade média dos veículos que trafegam na via.",
                            tip: "A idade média de um veículo (a não ser que este seja muito velho) não vai ser um item que evite sua circulação na via."
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "A tonelagem máxima suportada pela via.",
                            tip: "A tonelagem máxima suportada pela via define se pela mesma podem circular veículos de carga ou de grande capacidade de passeiros, sendo uma característica muito relevante."
                        }
                    ]
                },
                {
                    id: "q4_a1_abstracao",
                    title: "",
                    statement: "<span class=\"negrito\">A4.</span> Para organizar os produtos da área de vendas ao consumidor, o que lhe parece ser um conjunto menos adequado de setores: ",
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "Padaria, Materiais de Limpeza, Congelados, Hortigranjeiros.",
                            tip: "Estes são setores adequados, correspondendo ao que geralmente encontramos em um mercado."
                        },
                        {
                            value: "1",
                            key: "2",
                            text: "Produtos da empresa X, Produtos da Empresa Y, Produtos da Empresa Z.",
                            tip: "Este conjunto não é adequado pois as empresas podem ter segmentos de produtos diferentes, não contribuindo para a organização e facilidade de escolha dos clientes."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "Higiene pessoal, Laticinios, Adega, Bomboniere, Açougue.",
                            tip: "Estes são setores adequados, correspondendo ao que geralmente encontramos em um mercado."
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "Frios, Congelados, Matinais, Materiais Elétricos.",
                            tip: "Estes são setores adequados, correspondendo ao que geralmente encontramos em um mercado."
                        }
                    ]
                },
                {
                    id: "q5_a1_abstracao",
                    title: "",
                    statement: "<span class=\"negrito\">A5.</span> Para falar das atividades necessárias para detalhar a abstração “Organizar o seu guarda-roupa”, identifique a atividade que lhe parece menos adequada: ",
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "Separar as peças de roupa por tipo.",
                            tip: "Esta atividade é adequada pois garante assertividade na hora de escolher um tipo determinado de roupa."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "Para cada tipo de peça, organizar por cores.",
                            tip: "Esta atividade é interessante pois garante que além do tipo de peça você tenha a divisão por cores."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "Guardar cada peça no espaço reservado para o seu tipo.",
                            tip: "Esta atividade é totalmente adequada garantindo que você saibda aposição exata de cada tipo."
                        },
                        {
                            value: "1",
                            key: "4",
                            text: "Separar as peças por cor, independentemente do tipo.",
                            tip: "Separar as peças por cores provavelmente vai ajudar a deixar seu guarda-roupas com um \"layout\" bonito mas não vai ser nada prático na hora em que você for se vestir."
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

export default IntegralActivityOne