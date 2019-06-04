import React, { Fragment } from 'react'
import CenterBoxContainer from '../../../generics/center_box_container'
import IMGDecomposicao5 from '../../../../images/decomposicao-4.jpg'
import Image from '../../../generics/image'
import Box from '../../../generics/box'
import Color from '../../../../constants/color'
import ExternalLink from '../../../generics/external_link'
import Strong from '../../../generics/font/strong'

const Problemas = () => (
    <Fragment>
        <h2>PROBLEMAS</h2>
        <p><Strong>Problema 1.</Strong> C&aacute;lcular a &aacute;rea do pol&iacute;gono irregular inscrito no Geoplano da Figura 4. Dica: decomponha o pol&iacute;gono irregular da Figura 4 em pol&iacute;gonos regulares, para calcular a &aacute;rea do pol&iacute;gono irregular com facilidade.</p>        
        <CenterBoxContainer>
            <Box backgroundColor={Color.BLUE_BOX}>
                <p>Um Geoplano &eacute; um peda&ccedil;o de madeira, de forma quadrada, com v&aacute;rios pregos cravados, a meia altura, formando um quadriculado. &Eacute; importante ressaltar que a dist&acirc;ncia de um prego para outro, tanto na horizontal quanto na vertical, &eacute; a mesma.</p>
                <p>No Geoplano, podemos construir pol&iacute;gonos variados, cujas &aacute;reas e per&iacute;metros podem ser calculados com facilidade. Os pol&iacute;gonos podem ser constru&iacute;dos com borrachinhas, passando pelos pregos.</p>
                <p>Em tempos de cultura digital, podemos encontrar sites onde s&atilde;o disponibilizadas vers&otilde;es digitais do Geoplano. Por exemplo, o <ExternalLink href="https://www.mathplayground.com/geoboard.html">Math Playground</ExternalLink> e o <ExternalLink href="https://toytheater.com/geoboard/">Toy Teather</ExternalLink>.</p>
            </Box>
        </CenterBoxContainer>
        <Image src={IMGDecomposicao5} alt="Geoplano 10 x 10 onde está representado um polígono irregular montado ligando os pontos (2,4) e (3,3) e (4,4) e (5,3) e (5,4) e (6,3) e (7,3) e (8,4) e (9,6) e (10,6) e (9,9) e (8.8) e (7,7) e (7,8) e (7,9) e (6,9) e (6,8) e (5,8) e (5.7) e (4,6) e (3,7) e por fim voltando a origem (2,4)">
            <p><Strong>Figura 4 : Geoplano 10 x 10 onde está representado um polígono irregular.</Strong></p>
        </Image>
        <p>Que tal determinar a &aacute;rea do Pol&iacute;gono irregular da Figura 4?</p>
        <p><Strong>DICA:</Strong> Decomponha o pol&iacute;gono irregular da Figura 4 em pol&iacute;gonos regulares, para calcular a &aacute;rea do pol&iacute;gono irregular com facilidade.</p>
        <p><Strong>Problema 2.</Strong> Elabore uma decomposi&ccedil;&atilde;o em equipes para a organiza&ccedil;&atilde;o e realiza&ccedil;&atilde;o da Feira de Ci&ecirc;ncias da sua escola.</p>
        <p><Strong>Problema 3.</Strong> Apresente uma situa&ccedil;&atilde;o-problema, preferencialmente de sua &aacute;rea de interesse, em que voc&ecirc; identifica a possibilidade de utiliza&ccedil;&atilde;o do pilar Decomposi&ccedil;&atilde;o do pensamento computacional, para apoiar a elabora&ccedil;&atilde;o de solu&ccedil;&otilde;es.</p>
    </Fragment>
)

export default Problemas