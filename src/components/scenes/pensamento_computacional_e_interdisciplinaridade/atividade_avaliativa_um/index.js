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
            id: "atividade_1_pensamento_computacional_e_interdisciplinaridade",
            questions: [
                {
                    id: "q1_a1_pensamento_computacional_e_interdisciplinaridade",
                    title: "",
                    statement: "<span class=\"negrito\">A1.</span> Considere o cen&aacute;rio sugerido no item 5 da lista de exemplos.  O objeto em quest&atilde;o (Campanha sobre cuidados na compra de alimentos) dificilmente poderia ser tratado sob apenas uma perspectiva, sendo necess&aacute;rias v&aacute;rias contribui&ccedil;&otilde;es a partir de conhecimento de diferentes especialidades, compet&ecirc;ncias e experi&ecirc;ncias. Escolha dentre as op&ccedil;&otilde;es abaixo, a lista de profissionais que parece mais adequada para apoiar na elabora&ccedil;&atilde;o das recomenda&ccedil;&otilde;es.",
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "Vendedor, m&eacute;dico pediatra, dono de mercado, engenheiro sanit&aacute;rio, advogado.",
                            tip: ""
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "Dono de mercado, economista, m&eacute;dico cardiologista, nutricionista, jornalista.",
                            tip: ""
                        },
                        {
                            value: "1",
                            key: "3",
                            text: "Nutr&oacute;logo, jornalista, dono de mercado, economista, publicit&aacute;rio.",
                            tip: ""
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "Dona de casa, transportador, advogado, publicit&aacute;rio, engenheiro sanit&aacute;rio.",
                            tip: ""
                        },
                        {
                            value: "0",
                            key: "5",
                            text: "Organizador de eventos, advogado, dona de casa, transportador, vendedor.",
                            tip: ""
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