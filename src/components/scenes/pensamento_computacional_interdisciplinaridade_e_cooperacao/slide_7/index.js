import React, { Fragment } from 'react'
import TextSimpleJustify from '../../../generics/text/simple-justify'
import ActivityBox from '../../../generics/text/activity-box' 
import IntegralActivity from '../../../generics/activity/new_integral_activity'
import Strong from '../../../generics/font/strong'
import Image from '../../../generics/image'

import IntroSix from '../../../../images/content/pensamento_computacional_interdisciplinaridade_e_cooperacao/intro-six.svg'

class Slide7 extends React.Component {

    getActivityOne = () => {
        return {
            unitId: this.props.unitId,
            id: "atividade_1_pensamento_computacional_interdisciplinaridade_e_cooperacao",
            questions: [
                {
                    id: "q1_a1_pensamento_computacional_interdisciplinaridade_e_cooperacao",
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
            <Fragment>
                <Image marginTop="100px" marginBottom="50px" height="auto" width="900px" src={IntroSix} />
                <TextSimpleJustify marginBottom="100px">
                    <ActivityBox title={"Atividade Avaliativa 1"} activityTitle={"Cuidados com a saúde"}>
                        <p>As alternativas a seguir contêm trechos de um documento do Ministério da Saúde,  com informações sobre cuidados com a saúde para pessoas fora do peso ideal, e foram associadas aos pilares do Pensamento Computacional. Escolha a opção com a associação <Strong>menos adequada</Strong>:</p>
                        <IntegralActivity activity={this.getActivityOne()} />
                    </ActivityBox>
                </TextSimpleJustify>
            </Fragment>
        )
    }
}

export default Slide7
