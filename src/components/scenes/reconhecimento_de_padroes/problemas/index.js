import React from 'react'
import Tangram1 from '../../../../images/tangram-1.png'
import Tangram2 from '../../../../images/tangram-2.jpg'
import Image from '../../../generics/image'
import CenterBoxContainer from '../../../generics/center_box_container'
import Box from '../../../generics/box'
import Color from '../../../../constants/color'
import ExternalLink from '../../../generics/external_link'

const Problemas = () => (
    <div>
        <h2>Problemas</h2>
        <p><strong>Resolvendo um Quebra-cabe&ccedil;a -</strong> Um tipo de quebra-cabe&ccedil;a bastante famoso &eacute; o Tangram. O Tangram &eacute; formado por uma cole&ccedil;&atilde;o de 7 pe&ccedil;as geom&eacute;tricas, obtidas por um processo espec&iacute;fico, a partir da subdivis&atilde;o de um quadrado. S&atilde;o 5 tri&acirc;ngulos, 1 quadrado e 1 paralelogramo.</p>
        <Image src={Tangram1} alt="Tangram montado com sete peças coloridas em formato de lozango.">
            <p><strong>Figura 1: Um Tangram com suas 7 peças coloridas.</strong></p>
        </Image>
        <p>Existe grande variedade de figuras que podem ser formadas com essas 7 pe&ccedil;as. Uma quest&atilde;o central que se coloca &eacute; a cobertura de uma determinada imagem com as pe&ccedil;as de um Tangram.</p>
        <p><strong>Problema 1:</strong> Escreva uma sequ&ecirc;ncia de instru&ccedil;&otilde;es explicando como produzir as pe&ccedil;as de um Tangram a partir de uma folha de papel em forma de quadrado. </p>
        <p><strong>Problema 2:</strong> Fazer a cobertura de uma imagem com as pe&ccedil;as de um Tangram, conforme o molde na imagem da Figura 2 a seguir. </p>
        <Image src={Tangram2} alt="Tangram desmontado feito com sete peças coloridas.">
            <p><strong>Figura 2: Proposta para cobertura de um fundo com as peças de um Tangram.</strong></p>
        </Image>
        <CenterBoxContainer>
            <Box backgroundColor={Color.ORANGE_BOX}>
                <p><strong>DICA:</strong> (Voc&ecirc; pode fazer online no <ExternalLink href="https://rachacuca.com.br/raciocinio/tangram/1/">site</ExternalLink>, salvar a imagem em arquivo e post&aacute;-lo no site do PC).</p>
            </Box>
        </CenterBoxContainer>
    </div>
)

export default Problemas