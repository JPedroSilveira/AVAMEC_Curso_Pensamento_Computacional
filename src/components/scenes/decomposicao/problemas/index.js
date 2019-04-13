import React from 'react'
import CenterBoxContainer from '../../../generics/center_box_container'
import IMGDecomposicao5 from '../../../../images/decomposicao-5.jpg'
import Image from '../../../generics/image'
import Box from '../../../generics/box'
import Color from '../../../../constants/color'
import ExternalLink from '../../../generics/external_link'

const Problemas = () => (
    <div>
        <h2>PROBLEMAS</h2>
        <h3>PROBLEMA 1: CÁLCULO DE ÁREA DE UM POLÍGONO IRREGULAR USANDO O GE</h3>
        <CenterBoxContainer>
            <Box backgroundColor={Color.GRAY_BOX}>
                <p>O Geoplano é um pedaço de madeira, de forma quadrada, com vários pregos cravados, a meia altura, formando um quadriculado. É importante ressaltar que a distância de um prego para outro, tanto na horizontal quanto na vertical, é a mesma.</p>
                <p>No Geoplano, podemos construir polígonos variados, cujas áreas e perímetros podem ser calculados com facilidade. Os polígonos podem ser construídos com borrachinhas, passando pelos pregos.</p>
                <p>Em tempos de cultura digital, podemos encontrar sites onde são disponibilizadas versões digitais do Geoplano.</p>
                <p>Por exemplo, o <ExternalLink href="https://www.mathplayground.com/geoboard.html">Math Playground</ExternalLink> e o <ExternalLink href="https://toytheater.com/geoboard/">Toy Teather</ExternalLink></p>
            </Box>
        </CenterBoxContainer>
        <Image src={IMGDecomposicao5} alt="Geoplano 10 x 10 onde está representado um polígono irregular montado ligando os pontos (2,4) e (3,3) e (4,4) e (5,3) e (5,4) e (6,3) e (7,3) e (8,4) e (9,6) e (10,6) e (9,9) e (8.8) e (7,7) e (7,8) e (7,9) e (6,9) e (6,8) e (5,8) e (5.7) e (4,6) e (3,7) e por fim voltando a origem (2,4)">
            <p> <strong> Figura 5 : Geoplano 10 x 10 onde está representado um polígono irregular.  </strong> </p>
        </Image>
        <p>Que tal determinar a área do Polígono irregular da Figura 5?</p>
        <p><strong>DICA:</strong> Decomponha o polígono irregular da Figura em polígonos regulares para calcular a área do polígono irregular com facilidade.</p>
        <h3>PROBLEMA 2:</h3> Elabore uma decomposição em equipes para a organização e realização da Feira de Ciências da sua escola.
    </div>
)

export default Problemas