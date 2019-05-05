import React, { Fragment } from 'react'
import CenterBoxContainer from '../../../generics/center_box_container'
import Box from '../../../generics/box'
import Color from '../../../../constants/color'

const Texto3 = () => (
    <Fragment>
        <p>A seguir apresentamos outro exemplo de problema cuja solu&ccedil;&atilde;o pode se beneficiar do uso de Pensamento Computacional. Ao contr&aacute;rio do problema do Quadro 1, o pr&oacute;ximo problema, apresentado no Quadro 2, a seguir, possui um conjunto de restri&ccedil;&otilde;es que devem ser seguidas estritamente.</p>
        <h2>Quadro 2</h2>
        <CenterBoxContainer>
            <Box backgroundColor={Color.GRAY_BOX}>
                <h3>O fazendeiro, o lobo, a ovelha e a caixa de repolhos</h3>
                <p>Um fazendeiro foi &agrave;s compras. Comprou um <strong>lobo</strong>, uma <strong>caixa de repolhos</strong> e uma <strong>ovelha</strong>. Na volta para casa precisava atravessar um riacho, com todos os itens adquiridos e precisou alugar um barco. O que conseguiu era muito pequeno, o que n&atilde;o permitia que atravessasse o riacho de uma s&oacute; vez com todos os seus pertences. O barco s&oacute; era capaz de suportar ele e mais um dos itens em cada viagem. J&aacute; estava pronto para come&ccedil;ar a travessia, levando primeiramente o <strong>lobo</strong>, quando se deu conta que se deixasse a <strong>ovelha</strong> sozinha com a <strong>caixa de repolhos</strong>, quando voltasse a <strong>caixa de repolhos</strong> teria sido comida pela <strong>ovelha</strong>. Ent&atilde;o pensou em levar primeiro a <strong>caixa de repolhos</strong> e da&iacute; lembrou que a <strong>ovelha</strong> seria uma bela refei&ccedil;&atilde;o para o <strong>lobo</strong>. Sentou um pouco e come&ccedil;ou a pensar como poderia fazer a travessia. Demorou um pouquinho, mas conseguiu encontrar uma solu&ccedil;&atilde;o.</p>
            </Box>
        </CenterBoxContainer>
        <p>Na página seguinte, tente você mesmo uma estratégia para a travessia do rio, de tal forma que as restrições do problema sejam respeitadas.</p>
    </Fragment>
)

export default Texto3
