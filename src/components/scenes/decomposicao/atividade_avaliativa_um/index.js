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
            id: "atividade_1_decomposicao",
            questions: [
                {
                    id: "q1_a1_decomposicao",
                    title: "",
                    statement: "<strong>A1.</strong> Qual das afirmativas abaixo lhe parece menos apropriada para se falar sobre o Pilar “Decomposição”?",
                    options: [
                        {
                            value: "1",
                            key: "1",
                            text: "É uma atividade totalmente subjetiva, pois uma boa decomposição independe do objeto ou sistema que desejamos decompor e das finalidades às quais ela servirá.",
                            tip: "Diferentes pessoas provavelmente definirão diferentes decomposições. Entretanto, independentemente de como a decomposição seja realizada, a natureza do objeto ou sistema a ser decomposto obrigatoriamente deve ser considerada."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "O resultado de uma decomposição são partes ou sistemas mais simples os quais podem ser adequados a novas  decomposições.",
                            tip: "De fato, um ou mais elementos de uma decomposição podem ainda serem complexos e com isso requererem novas decomposições."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "Quando um mesmo sistema é decomposto isoladamente por duas ou mais pessoas, é  possível que tenhamos decomposições diferentes.",
                            tip: "Certamente, o nosso olhar sobre o objeto que vamos decompor além da nossa compreensão sobre os objetivos da situação-problema podem contribuir para diferentes decomposições e ainda assim ambas serem apropriadas aos propósito da situação-problema."
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "É possível comparar duas decomposições de um mesmo sistema ou objeto e com isso identificar entre elas a que parece mais adequada aos propósitos do problema a ser resolvido.",
                            tip: "De fato, duas ou mais pessoas, ao decompor um sistema ou objeto, apesar de levarem em conta a situação-problema, sem dúvida podem produzir decomposições diferente. Uma avaliação e comparação das soluções pode resultar que uma delas se mostre superior ou até que uma nova decomposição ainda melhor do que as incialmente produzidas possa ser identificada."
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
