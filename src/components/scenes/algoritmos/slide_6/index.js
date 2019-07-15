import React, { Fragment } from 'react'
import TextSimpleJustify from '../../../generics/text/simple-justify'
import AlgorithmBox from '../../../generics/text/algorithm-box'
import ActivityBox from '../../../generics/text/activity-box'
import Image from '../../../generics/image'
import FontGreen from '../../../generics/font/green'
import FontRed from '../../../generics/font/red'
import FontBlue from '../../../generics/font/blue'

import IntroSix from '../../../../images/content/algoritmos/intro-six.svg'
import IntegralActivity from '../../../generics/activity/new_integral_activity'

class Slide6 extends React.Component {

    getActivityTwo = () => {
        return {
            unitId: this.props.unitId,
            id: "atividade_2_algoritmos",
            questions: [
                {
                    id: "q1_a2_algoritmos",
                    options: [
                        {
                            value: "1",
                            key: "1",
                            text: "Se a operação 2.1 for substituída por \"procure o produto em cada banca da feira\", o algoritmo descreve uma sequência de operações para a realização de compras em uma feira.",
                            tip: "Não é o caso, uma vez que em uma feira, em geral, não existe um caixa central e assim cada produto é pago diretamente na banca em que o produto foi encontrado."
                        },
                        {
                            value: "0",
                            key: "2",
                            text: "Algumas vezes a operação “procure o produto …” não será bem sucedida.",
                            tip: "Certamente é possível que um ou mais produtos de uma lista estejam em falta em um determinado supermercado."
                        },
                        {
                            value: "0",
                            key: "3",
                            text: "Podemos dividir a lista de compras em duas ou mais partes, obtendo outras listas, que podem ser atribuídas a compradores diferentes. Se solicitarmos que cada um execute o Algoritmo 07, cada comprador terá que pagar a conta relativa a sua própria compra.",
                            tip: "Sim, pois a execução do algoritmo seria independente para cada lista parcial e, nesse caso, para completar a execução do algoritmo, cada agente precisará executar todas as operações, para concluir sua tarefa."
                        },
                        {
                            value: "0",
                            key: "4",
                            text: "Se nenhum dos produtos de sua lista forem encontrados no supermercado, você chegará ao caixa com seu carrinho vazio e, portanto, nada terá que pagar. Ou seja, as ações “dirija-se ao caixa”  e “pague a conta”  são desnecessárias para esse caso e os Passos 3 e 4 do nosso algoritmo poderiam ser substituídos pelo trecho a seguir: <br /><br /><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Se o carrinho de compras está vazio:<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"textred\">então</span> devolva o carrinho;<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"textred\">senão</span> dirija-se ao caixa.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. Pague a conta</strong>",
                            tip: "De fato, a ida ao caixa com o carrinho sem compras é uma ação desnecessária, dado que nada precisará ser pago. Dessa forma nosso comprador poderá deixar o carro em qualquer lugar no supermercado e ir embora. Entretanto é um ato de gentileza deixar o carrinho no local onde são depositados os carrinhos vazios para o uso de novos clientes compradores."
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
                    <ActivityBox title={"Atividade Avaliativa 2"} activityTitle={"Lista de compras"}>
                        <p>Considere a sequência de operações denominada de Algoritmo 07. Selecione a afirmação a seguir que lhe parece ser a menos indicada para se referir ao Algoritmo 07.</p><br/>
                        <AlgorithmBox marginBottom="50px" title="Algoritmo 07" algorithmTitle="Lista de compras">
                            <FontGreen>
                                <p>Considere que se tenha uma lista de compras e que um agente está com ela em um supermercado.</p>
                            </FontGreen>
                            <ul>
                                <li>Pegue a lista de compras;</li>
                                <li><FontRed>Enquanto</FontRed> <FontBlue>houver um item ainda não riscado na lista</FontBlue> <FontRed>faça</FontRed>:
                                    <ul>
                                        <li>Selecione o primeiro item ainda não riscado;</li>
                                        <li>Procure o produto nas prateleiras do supermercado;</li>
                                        <li><FontRed>Se</FontRed> o produto foi encontrado
                                            <ul>
                                                <li><FontRed>então</FontRed>:
                                                    <ul>
                                                        <li>Coloque o produto em seu carrinho de compras;</li>
                                                        <li>risque o item de sua lista de compras;</li>
                                                    </ul>
                                                </li>
                                                <li><FontRed>senão</FontRed>:
                                                    <ul>
                                                        <li>risque o item de sua lista de compras;</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>Dirija-se ao caixa;</li>
                                <li>Pague a conta.</li>
                            </ul>
                        </AlgorithmBox>
                        <IntegralActivity activity={this.getActivityTwo()} />
                    </ActivityBox>
                </TextSimpleJustify>
            </Fragment>
        )
    }
}

export default Slide6
