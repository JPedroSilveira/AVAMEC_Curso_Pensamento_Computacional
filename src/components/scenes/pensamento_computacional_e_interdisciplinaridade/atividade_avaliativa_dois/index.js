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
            id: "atividade_2_pensamento_computacional_e_interdisciplinaridade",
            questions: [
                {
                    id: "q1_a2_pensamento_computacional_e_interdisciplinaridade",
                    title: "",
                    statement: "<span class=\"negrito\">A2.</span> Considere o documento indicado no quadro &quot;Para saber mais...&quot;. Aquele documento discute diversas a&ccedil;&otilde;es e resultados na preven&ccedil;&atilde;o e tratamento de problemas decorrentes da obesidade. As afirma&ccedil;&otilde;es abaixo foram constru&iacute;das associando trechos do documento aos pilares do PC. Escolha a op&ccedil;&atilde;o com a associa&ccedil;&atilde;o menos adequada.",
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "&quot;O peso corporal saud&aacute;vel depende de gatilhos culturais ou ambientais que produzem efeitos sobre a sa&uacute;de individual [abstra&ccedil;&atilde;o], tais como as condi&ccedil;&otilde;es de seguran&ccedil;a, as caracter&iacute;sticas do com&eacute;rcio local e global de alimentos, a qualidade e acesso ao transporte coletivo, acesso &agrave; recrea&ccedil;&atilde;o, servi&ccedil;os e apoio social e educacional, entre outros aspectos do contexto que modulam as pr&aacute;ticas e estilos de vida atual&#8230; [decomposi&ccedil;&atilde;o]&quot;.",
                            tip: ""
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "&quot;Hoje, o desafio &eacute; superar o modelo biom&eacute;dico que v&ecirc; o indiv&iacute;duo e organiza o cuidado de maneira fragmentada, propondo inova&ccedil;&otilde;es e um novo olhar aos indiv&iacute;duos dentro da aten&ccedil;&atilde;o &agrave; sa&uacute;de no SUS.&quot; [abstra&ccedil;&atilde;o].",
                            tip: ""
                        },
                        {
                            value: "1",
                            key: "3",
                            text: "&quot;... oficina faz refer&ecirc;ncia a lugar de trabalho coletivo e a uma experi&ecirc;ncia de atividade realizada em um encontro de pessoas, no qual se procurar&aacute; construir juntos, uma viv&ecirc;ncia coletiva e um saber.&quot; [reconhecimento de padr&otilde;es].",
                            tip: ""
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "&quot;Intercalado aos encontros, ocorre uma oficina denominada &ldquo;Sa&uacute;de no Prato&rdquo;, com o intuito de desenvolver receitas, desmitificar mitos sobre a alimenta&ccedil;&atilde;o e despertar o interesse por uma alimenta&ccedil;&atilde;o saud&aacute;vel, a fim de auxiliar nas escolhas saud&aacute;veis e na mudan&ccedil;a de h&aacute;bitos.&quot; [algoritmos].",
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

export default AtividadeAvaliativaDois