import React from 'react'
import CenterBoxContainer from '../../../generics/center_box_container'
import Color from '../../../../constants/color'
import Box from '../../../generics/box'

const ParaSaberMais = () => (
    <div>
        <CenterBoxContainer>
            <p><span className="negrito">Para Saber Mais:</span></p>
            <Box backgroundColor={Color.ORANGE_BOX}>
                <p>A&ccedil;&otilde;es cooperativas t&ecirc;m sido retratadas de diversas formas, inclusive atrav&eacute;s de filmes dispon&iacute;veis em diferentes plataformas. Nesse contexto sugerimos Spare Parts [Pe&ccedil;as Sobressalentes] (http://www.adorocinema.com/filmes/filme-225201/) que &eacute; baseado em fatos reais e ilustra a coopera&ccedil;&atilde;o em contextos dentro e fora da escola.</p>
            </Box>
        </CenterBoxContainer>
    </div>
)

export default ParaSaberMais