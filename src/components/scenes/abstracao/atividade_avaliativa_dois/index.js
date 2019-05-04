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
        if(this.props.unitId === undefined){
            throw Error("Property 'unitId' can't be undefined!")
        }
    }

    getActivity = () => {
        return {
            unitId: this.props.unitId,
            id: "atividade_2_abstracao",
            questions: [
                {
                    id: "q1_a2_abstracao",
                    title: "",
                    statement: "<strong>A2.</strong> Considere a organização de uma biblioteca e indique o que lhe parece ser uma abstração mais conveniente para falar de livros:",
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
                            tip: "Se organizarmos os livros pelos seus autores, saberemos qual o estilo de escrita dos mesmos e se escrevem sobre ficção, romances, textos técnicos, etc, sendo uma boa opção de abstração."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "Tamanho das letras.",
                            tip: "O tamanho das letras ajuda na leitura, mas não vai trazer informações sobre o conteúdo dos livros!"
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "Gramatura do papel.",
                            tip: "A gramatura do papel, pode revelar traços da qualidade dos livros, mas não vai trazer informações sobre o conteúdo dos mesmos!"
                        }
                    ]
                },
                {
                    id: "q2_a2_abstracao",
                    title: "",
                    statement: "<strong>A3.</strong> Para organizar os produtos da área de vendas ao consumidor, o que lhe parece ser um conjunto menos adequado de setores:",
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "Padaria, Materiais de Limpeza, Congelados, Hortigranjeiros.",
                            tip: "Esses são setores adequados, correspondendo ao que geralmente encontramos em um mercado."
                        },
                        {
                            value: "1",
                            key: "2",
                            text: "Produtos da empresa X, Produtos da Empresa Y, Produtos da Empresa Z.",
                            tip: "Este conjunto não é adequado, pois as empresas podem ter segmentos de produtos diferentes, não contribuindo para a organização e facilidade de escolha dos clientes."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "Higiene pessoal, Laticinios, Adega, Bomboniere, Açougue.",
                            tip: "Esses são setores adequados, correspondendo ao que geralmente encontramos em um mercado."
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "Frios, Congelados, Matinais, Materiais Elétricos.",
                            tip: "Esses são setores adequados, correspondendo ao que geralmente encontramos em um mercado."
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