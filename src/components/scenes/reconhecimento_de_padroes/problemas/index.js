import React, { Fragment } from 'react'
import Tangram1 from '../../../../images/tangram-1.png'
import Tangram2 from '../../../../images/tangram-2.jpg'
import Image from '../../../generics/image'
import CenterBoxContainer from '../../../generics/center_box_container'
import Box from '../../../generics/box'
import Color from '../../../../constants/color'
import ExternalLink from '../../../generics/external_link'
import Strong from '../../../generics/font/strong'

const Problemas = () => (
    <Fragment>
        <h2>Problemas</h2>
        <p><Strong>Resolvendo um Quebra-cabe&ccedil;a -</Strong> Um tipo de quebra-cabe&ccedil;a bastante famoso &eacute; o Tangram. O Tangram &eacute; formado por uma cole&ccedil;&atilde;o de 7 pe&ccedil;as geom&eacute;tricas, obtidas por um processo espec&iacute;fico, a partir da subdivis&atilde;o de um quadrado. S&atilde;o 5 tri&acirc;ngulos, 1 quadrado e 1 paralelogramo.</p>
        <Image src={Tangram1} alt="Tangram montado com sete peças coloridas em formato de lozango.">
            <p><Strong>Figura 1: Um Tangram com suas 7 peças coloridas.</Strong></p>
        </Image>
        <p>Existe grande variedade de figuras que podem ser formadas com essas 7 pe&ccedil;as. Uma quest&atilde;o central que se coloca &eacute; a cobertura de uma determinada imagem com as pe&ccedil;as de um Tangram.</p>
        <p><Strong>Problema 1.</Strong> Escreva uma sequ&ecirc;ncia de instru&ccedil;&otilde;es explicando como produzir as pe&ccedil;as de um Tangram a partir de uma folha de papel em forma de quadrado. </p>
        <p><Strong>Problema 2.</Strong> Fazer a cobertura de uma imagem com as pe&ccedil;as de um Tangram, conforme o molde na imagem da Figura 2 a seguir. </p>
        <Image src={Tangram2} alt="Tangram desmontado feito com sete peças coloridas.">
            <p><Strong>Figura 2: Proposta para cobertura de um fundo com as peças de um Tangram.</Strong></p>
        </Image>
        <CenterBoxContainer>
            <Box backgroundColor={Color.ORANGE_BOX}>
                <p>DICA: Voc&ecirc; pode fazer online no <ExternalLink href="https://rachacuca.com.br/raciocinio/tangram/1/">site</ExternalLink>.</p>
            </Box>
        </CenterBoxContainer>
        <p><Strong>Problema 3.</Strong> Apresente 1 situa&ccedil;&atilde;o-problema, preferencialmente de sua &aacute;rea de interesse, nas quais voc&ecirc; identifica a possibilidade de utiliza&ccedil;&atilde;o do pilar &ldquo;Reconhecimento de Padr&otilde;es&rdquo; do Pensamento Computacional, para apoiar a elabora&ccedil;&atilde;o de solu&ccedil;&otilde;es.</p>
    </Fragment>
)

export default Problemas