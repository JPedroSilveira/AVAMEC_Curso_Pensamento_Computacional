import React, { Fragment } from 'react'
import TextSimpleJustify from '../../../generics/text/simple-justify'
import ActivityBox from '../../../generics/text/activity-box'
import Image from '../../../generics/image'

import TitleThree from '../../../../images/content/abstracao/title-three.svg'
import IntegralActivity from '../../../generics/activity/new_integral_activity'

class Slide5 extends React.Component {

    getActivityTwo = () => {
        return {
            unitId: this.props.unitId,
            id: "atividade_2_abstracao",
            questions: [
                {
                    id: "q1_a2_abstracao",
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
                }
            ]
        }
    }

    getActivityThree = () => {
        return {
            unitId: this.props.unitId,
            id: "atividade_3_abstracao",
            questions: [
                {
                    id: "q1_a3_abstracao",
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
            <Fragment>
                <Image marginTop="150px" marginBottom="50px" height="auto" width="900px" src={TitleThree} />
                <TextSimpleJustify>
                    <ActivityBox title={"Atividade Avaliativa 2"} activityTitle={"Organizar biblioteca"}>
                        <p>Considere a organização de uma biblioteca e indique o que lhe parece ser uma abstração mais conveniente para falar de livros:</p>
                        <IntegralActivity activity={this.getActivityTwo()} />
                    </ActivityBox>
                </TextSimpleJustify>
                <TextSimpleJustify marginTop="50px">
                    <ActivityBox title={"Atividade Avaliativa 3"} activityTitle={"Área de vendas"}>
                        <p>Para organizar os produtos da área de vendas ao consumidor, o que lhe parece ser um conjunto menos adequado de setores:</p>
                        <IntegralActivity activity={this.getActivityThree()} />
                    </ActivityBox>
                </TextSimpleJustify>
            </Fragment>
        )
    }
}

export default Slide5
