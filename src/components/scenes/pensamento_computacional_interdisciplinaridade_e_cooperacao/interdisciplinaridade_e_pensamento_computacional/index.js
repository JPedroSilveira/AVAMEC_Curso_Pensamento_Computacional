import React, { Fragment } from 'react'
import Image from '../../../generics/image'
import ExternalLink from '../../../generics/external_link'
import Petersen from '../../../../images/petersen-graph-example.png'
import Strong from '../../../generics/font/strong'

class InterdisciplinaridadeEPensamentoComputacional extends React.Component {
    render() {
        return (
            <Fragment>
                <p>Ao longo de sua hist&oacute;ria, a Ci&ecirc;ncia da Computa&ccedil;&atilde;o tem contribu&iacute;do para a solu&ccedil;&atilde;o de problemas de diferentes &aacute;reas do conhecimento. Como resultado, algumas li&ccedil;&otilde;es foram aprendidas, com respeito n&atilde;o s&oacute; &agrave; ess&ecirc;ncia dos problemas, mas tamb&eacute;m quanto &agrave; forma de resolv&ecirc;-los, criando assim um rico acervo de estrat&eacute;gias e modelos que foram agrupados para compor os quatro pilares do Pensamento Computacional.</p>
                <p>Esses quatro pilares, vistos nas unidades anteriores deste curso, podem ser aplicados na resolu&ccedil;&atilde;o de problemas em um n&uacute;mero variado de contextos, o que pode contribuir para a realiza&ccedil;&atilde;o de estudos interdisciplinares.</p>
                <p>O <Strong>Pilar Abstra&ccedil;&atilde;o</Strong> contribui para que, dado um objeto que interessa a v&aacute;rias disciplinas, sejam levadas em conta as diferentes formas de perceb&ecirc;-lo. A abstra&ccedil;&atilde;o permite identificar os aspectos que interessam mais a uma &aacute;rea de estudo, propiciando um melhor entendimento do problema e de sua solu&ccedil;&atilde;o.</p>
                <p>O <Strong>Pilar Abstra&ccedil;&atilde;o</Strong> apoia ainda a identifica&ccedil;&atilde;o de formas de representarmos informa&ccedil;&otilde;es, de interesse das mais variadas disciplinas, de forma intelig&iacute;vel por todos. A figura a seguir, por exemplo, chamada de grafo, pode representar uma rede de transportes entre cidades diferentes, onde os c&iacute;rculos representam cidades e as retas que os conectam representam a exist&ecirc;ncia de transporte entre as cidades. Esse grafo tamb&eacute;m podem representar intera&ccedil;&otilde;es entre os participantes de uma rede social, onde os c&iacute;rculos representam as pessoas e as retas que os ligam representam conex&otilde;es diretas entre elas.</p>
                <Image src={Petersen} alt="Diagrama de Petersen">
                    <p>
                        <Strong>Figura 1: Grafo</Strong>
                        <br />
                        <ExternalLink href="https://br.depositphotos.com/226152018/stock-photo-example-graph-called-petersen-graph.html">
                            Fonte: Depositphotos
                        </ExternalLink>
                    </p>
                </Image>
                <p>O <Strong>Pilar Decomposi&ccedil;&atilde;o</Strong> est&aacute; diretamente relacionado com a Interdisciplinaridade, tanto pelo fato da fragmenta&ccedil;&atilde;o estar na base de ambos, como pelo fato de que as ideias integradoras basicamente corresponderem &agrave; composi&ccedil;&atilde;o da solu&ccedil;&atilde;o de todas as partes, articuladas com suas interfaces, resultando na solu&ccedil;&atilde;o de todo o problema.</p>
                <p>O <Strong>Pilar Reconhecimento de Padr&otilde;es</Strong> apoia a modelagem de objetos decompostos, na busca pela identifica&ccedil;&atilde;o de estruturas conhecidas nas mais diversas disciplinas, que possam facilitar a explora&ccedil;&atilde;o dos elementos resultantes da decomposi&ccedil;&atilde;o.</p>
                <p>O <Strong>Pilar Algoritmos</Strong> possibilita um interc&acirc;mbio entre saberes das diversas disciplinas, ao usar uma linguagem padronizada para falar sobre processos, permitindo uma forma precisa de especificar solu&ccedil;&otilde;es e integrar as partes componentes.</p>
            </Fragment>
        )
    }
}
export default InterdisciplinaridadeEPensamentoComputacional
