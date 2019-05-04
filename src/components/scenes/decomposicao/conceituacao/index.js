import React, { Fragment } from 'react'
import CenterBoxContainer from '../../../generics/center_box_container'
import Color from '../../../../constants/color'
import Box from '../../../generics/box'

const Conceituacao = () => (
    <Fragment>
        <p>O universo que nos rodeia &eacute; demasiadamente complexo para ser analisado como uma &uacute;nica parte e, desde cedo, aprendemos uma estrat&eacute;gia b&aacute;sica: decomp&ocirc;-lo em por&ccedil;&otilde;es menores e potencialmente mais simples. Ap&oacute;s cada parte ser entendida, fazemos a recomposi&ccedil;&atilde;o ao original. Essa estrat&eacute;gia de &quot;divis&atilde;o e conquista&quot; &eacute; essencial tamb&eacute;m na resolu&ccedil;&atilde;o de problemas.</p>
        <p>Para resolver um problema complexo, n&oacute;s o analisamos e buscamos dividi-lo em partes menores e mais f&aacute;ceis de serem tratadas, definindo tais agrupamentos segundo caracter&iacute;sticas ou atributos conhecidos do problema original. Se para a parte do problema considerado conhecemos ou podemos conceber uma ou mais solu&ccedil;&otilde;es, aquele &quot;subproblema&quot; &eacute; considerado resolvido e buscaremos solu&ccedil;&otilde;es para as partes remanescentes. Quando para uma parte do problema considerado n&atilde;o conseguimos definir uma solu&ccedil;&atilde;o, aplicamos novamente a estrat&eacute;gia de divis&atilde;o e conquista, decompondo aquela parte do problema em por&ccedil;&otilde;es menores e assim sucessivamente, de forma recursiva, at&eacute; que tenhamos solu&ccedil;&otilde;es para todos os subproblemas definidos.</p>
        <p>A decomposi&ccedil;&atilde;o pode ent&atilde;o, acontecer em v&aacute;rios n&iacute;veis e, a cada n&iacute;vel considerado, a solu&ccedil;&atilde;o &eacute; obtida a partir da combina&ccedil;&atilde;o das solu&ccedil;&otilde;es das diferentes partes consideradas. Essa perspectiva &quot;modular&quot; &agrave; resolu&ccedil;&atilde;o de problemas nos permite analisar, de uma forma bastante sistem&aacute;tica, desde problemas relativamente simples at&eacute; os mais complexos.</p>
        <CenterBoxContainer>
            <h3>Quadro 2.1 - Conceituando Decomposição</h3>
            <Box backgroundColor={Color.BLUE_BOX}>
                <p>Podemos entender a decomposi&ccedil;&atilde;o como a divis&atilde;o de um todo em partes com um prop&oacute;sito bem definido, tendo em vista a simplifica&ccedil;&atilde;o do problema. Por sua vez, as partes podem ser divididas em subpartes, e assim sucessivamente, at&eacute; que seja atingido o n&iacute;vel de simplifica&ccedil;&atilde;o desejado, de tal forma que gerar uma solu&ccedil;&atilde;o para cada uma das partes seja relativamente f&aacute;cil. A composi&ccedil;&atilde;o da solu&ccedil;&atilde;o de todas as partes, articuladas com suas interfaces, deve resultar na solu&ccedil;&atilde;o de todo o problema.</p>
            </Box>
        </CenterBoxContainer>
    </Fragment>
)

export default Conceituacao
