import React from 'react'
import IntegralActivity from '../../../generics/activity/integral_activity'

/*ESTE COMPONENTE DEVE RECEBER COMO PROPRIEDADE O SEGUINTE ITEM:
    unitId: String, representa o id da unidade em que a atividade se encontra
.*/
class AtividadeAvaliativaUm extends React.Component {
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
            id: "atividade_1_pensamento_computacional_interdisciplinaridade_e_cooperacao",
            questions: [
                {
                    id: "q1_a1_pensamento_computacional_interdisciplinaridade_e_cooperacao",
                    title: "",
                    statement: "<strong>A1:</strong> Considere o cenário sugerido no Item 5 da lista de exemplos. O objeto em questão “Campanha de esclarecimento sobre cuidados na compra de alimentos” dificilmente poderia ser tratado sob apenas uma perspectiva, sendo necessárias várias contribuições, a partir de conhecimento de diferentes especialidades, competências e experiências. Escolha dentre as opções a seguir, a lista de profissionais que parece mais adequada para apoiar na elaboração dessa campanha.",
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "Vendedor, médico pediatra, dono de mercado, engenheiro sanitário, advogado.",
                            tip: "Das profissões acima, é bem pouco provável que um advogado seja necessário em tal campanha."
                        },
                        {
                            value: "1",
                            key: "2",
                            text: "Dono de mercado, economista, médico cardiologista, nutricionista, jornalista.",
                            tip: "Esses profissionais podem dar uma boa contribuição com recomendações sobre preços, como comprar bem,  benefícios para a saúde, valor nutricional e também com a boa divulgação da campanha."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "Nutrólogo, jornalista, dono de mercado, economista, arquiteto.",
                            tip: "Das profissões acima, é bem pouco provável que um arquiteto seja necessário em tal campanha."
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "Dona de casa, transportador, advogado, publicitário, engenheiro sanitário.",
                            tip: "Das profissões acima, é bem pouco provável que um advogado seja necessário em tal campanha."
                        },
                        {
                            value: "0",
                            key: "5",
                            text: "Organizador de eventos, advogado, dona de casa, transportador, vendedor.",
                            tip: "Das profissões acima, é bem pouco provável que um advogado seja necessário em tal campanha."
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

export default AtividadeAvaliativaUm