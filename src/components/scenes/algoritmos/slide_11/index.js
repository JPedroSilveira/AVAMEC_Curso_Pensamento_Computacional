import React, { Fragment } from 'react'
import TextSimpleJustify from '../../../generics/text/simple-justify'
import AlgorithmBox from '../../../generics/text/algorithm-box'
import ActivityBox from '../../../generics/text/activity-box'
import Image from '../../../generics/image'
import FontRed from '../../../generics/font/red'
import FontBlue from '../../../generics/font/blue'
import IntegralActivity from '../../../generics/activity/new_integral_activity'

import IntroEleven from '../../../../images/content/algoritmos/intro-eleven.svg'

class Slide11 extends React.Component {

    getActivityFour = () => {
        return {
            unitId: this.props.unitId,
            id: "atividade_4_algoritmos",
            questions: [
                {
                    id: "q1_a4_algoritmos",
                    options: [
                        {
                            value: "0",
                            key: "1",
                            text: "A Operação 7 descreve uma repetição que nunca termina, pois a Operação 7.c tem efeito contrário ao que é realizado na Operação 7.a.",
                            tip: "De fato pois  na Operação 7.a um dos parafusos é retirado e em 7.c um parafuso é colocado. Dessa forma, em cada repetição, a roda estará sempre com a mesma quantidade de parafusos."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "Pela Operação 7 é possível que, a cada vez,  o parafuso a ser  retirado seja diferente do parafuso retirado na repetição anterior.",
                            tip: "Sim, pela Operação 7 é possível que a cada ciclo de repetição o parafuso a ser retirado seja diferente do parafuso retirado no ciclo anterior."
                        },
                        {
                            value: "1",
                            key: "3",
                            text: "No mesmo ciclo, é possível que o parafuso retirado seja diferente do colocado.",
                            tip: "Não é possível que isso aconteça, pois sempre que a ação for executada, só haverá um buraco em aberto e, portanto, o parafuso que for retirado é o que será devolvido."
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "A exclusão da Operação 7.c torna o algoritmo correto para os objetivos pretendido.",
                            tip: "De fato, a repetição permitirá que todos os parafusos sejam retirados e assim, após uma quantidade de repetições idêntica ao número de parafusos, o pneu deverá ficar livre para ser retirado."
                        }
                    ]
                }
            ]
        }
    }

    render() {
        return (
            <Fragment>
                <Image marginTop="100px" marginBottom="50px" height="auto" width="900px" src={IntroEleven} />
                <TextSimpleJustify marginBottom="100px">
                    <ActivityBox title={"Atividade Avaliativa 4"} activityTitle={"Troca de pneu"}>
                        <p>O Algoritmo 14 abaixo descreve o processo de retirada de um dos 4 pneus de um automóvel. Fazemos a seguir algumas afirmações sobre ele. Selecione a afirmação que você considera menos apropriada para se referir a este algoritmo.</p><br/>
                        <AlgorithmBox marginBottom="50px" title="Algoritmo 14" algorithmTitle="Trocar o pneu">
                            <ul>
                                <li>Pegue o macaco;</li>
                                <li>Pegue um recipiente vazio onde serão colocados os parafusos da roda;</li>
                                <li>Posicione o macaco no ponto indicado para levantar o carro com respeito a uma dada roda;</li>
                                <li>Acione um pouco o macaco, sem tirar o carro do piso;</li>
                                <li>Afrouxe todos os parafusos da roda;</li>
                                <li>Levante o carro, deixando-o cerca de 10 centímetros acima do piso;</li>
                                <li><FontRed>Enquanto</FontRed> <FontBlue>houver parafuso por retirar da roda</FontBlue> <FontRed>faça</FontRed>:
                                    <ul>
                                        <li>Retire um dos parafusos restantes na roda;</li>
                                        <li>Coloque o parafuso retirado da roda dentro de um recipiente;</li>
                                        <li>Coloque na roda um dos parafusos disponíveis no recipiente.</li>
                                    </ul>
                                </li>
                                <li>Tire o pneu.</li>
                            </ul>
                        </AlgorithmBox>
                        <IntegralActivity activity={this.getActivityFour()} />
                    </ActivityBox>
                </TextSimpleJustify>
            </Fragment>
        )
    }
}

export default Slide11
