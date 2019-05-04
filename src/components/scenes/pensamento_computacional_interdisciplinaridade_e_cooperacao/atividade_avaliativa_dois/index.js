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
            id: "atividade_2_pensamento_computacional_interdisciplinaridade_e_cooperacao",
            questions: [
                {
                    id: "q1_a2_pensamento_computacional_interdisciplinaridade_e_cooperacao",
                    title: "",
                    statement: "<strong>A2:</strong> Considere o documento indicado no quadro \"Para saber mais...\". Aquele documento discute diversas ações e resultados na prevenção e tratamento de problemas decorrentes da obesidade. As afirmações a seguir foram construídas associando trechos do documento aos pilares do Pensamento Computacional. Escolha a opção com a associação <strong>menos adequada</strong>.",
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "\"O peso corporal saudável depende de gatilhos culturais ou ambientais que produzem efeitos sobre a saúde individual, tais como as condições de segurança, as características do comércio local e global de alimentos, a qualidade e acesso ao transporte coletivo, acesso à recreação, serviços e apoio social e educacional <strong>[abstração]</strong>, entre outros aspectos do contexto que modulam as práticas e estilos de vida atual…<strong>[decomposição]</strong>\"",
                            tip: "Opção com associações pertinentes, tanto na parte inicial, quando se trata da abstração induzida por gatilhos, quanto na final, em que a modulação de práticas e estilos induz decomposição."
                        },
                        {
                            value: "1",
                            key: "2",
                            text: "\"Hoje, o desafio é superar o modelo biomédico que vê o indivíduo e organiza o cuidado de maneira fragmentada, propondo inovações e um novo olhar aos indivíduos, dentro da atenção à saúde no SUS.\" <strong>[decomposição]</strong>",
                            tip: "Opção está incorreta, uma vez que a fragmentação é exatamente o que se está propondo mudar."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "\"...oficina faz referência a lugar de trabalho coletivo e a uma experiência de atividade realizada em um encontro de pessoas, no qual se procurará construir juntos, uma vivência coletiva e um saber.\" <strong>[reconhecimento de padrões]</strong>",
                            tip: "Opção com associação pertinente, uma vez que vivência coletiva induz definição de padrões."
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "\"Intercalado aos encontros, ocorre uma oficina denominada “Saúde no Prato”, com o intuito de desenvolver receitas, desmitificar mitos sobre a alimentação e despertar o interesse por uma alimentação saudável, a fim de auxiliar nas escolhas saudáveis e na mudança de hábitos.\" <strong>[algoritmos]</strong>",
                            tip: "Opção com associação pertinente, sobretudo porque, entre outros elementos, são trabalhadas receitas, que são roteiros bem definidos."
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