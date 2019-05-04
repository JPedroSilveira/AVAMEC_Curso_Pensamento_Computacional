import React, { Fragment } from 'react'
import CenterBoxContainer from '../../../generics/center_box_container'
import Color from '../../../../constants/color'
import Box from '../../../generics/box'

const Conceituacao = () => (
    <Fragment>
        <p>Habitamos um planeta repleto de diversidades, das quais podemos citar: solos, relevos, climas, acidentes geogr&aacute;ficos, fauna e flora. Cada um desses elementos em si s&atilde;o, por sua vez, repletos de outras diversidades. Al&eacute;m dos objetos naturais, ainda temos os artificiais, ou seja, aqueles constru&iacute;dos pelo homem. Vivemos pois, em espa&ccedil;os populados por objetos, naturais e artificiais (artefatos) de cores, tamanhos, constitui&ccedil;&atilde;o f&iacute;sica, formas, comportamento e funcionalidades bem diferentes.</p>
        <p>Os seres vivos, por exemplo, congregam uma quantidade enorme de exemplares do reino animal e do reino vegetal, dispersos pelo planeta em diferentes regi&otilde;es. Essas regi&otilde;es possuem caracter&iacute;sticas pr&oacute;prias que propiciam melhores condi&ccedil;&otilde;es de vida para alguns e, para outros, nem tanto, constituindo os chamados ecossistemas. Na Biologia, os cientistas t&ecirc;m se empenhado em organizar o conhecimento sobre o mundo dos seres vivos. Para facilitar, ao inv&eacute;s de estudar cada indiv&iacute;duo, foram criadas abstra&ccedil;&otilde;es, buscando identificar agrupamentos que compartilhassem caracter&iacute;sticas relevantes para um determinado tipo de estudo. Nos animais, por exemplo, foi criada uma abstra&ccedil;&atilde;o denominada de mam&iacute;feros e ainda outras de aves, de r&eacute;pteis, de batr&aacute;quios, etc. Sempre que novos desafios surgem, esse processo &eacute; revisitado, identificando novas categorias ou subcategorias.</p>
        <p>Assim como na Biologia, em todos os campos do saber, seja com fins cient&iacute;ficos, empresariais e at&eacute; mesmo para as nossas atividades cotidianas, &eacute; importante organizar os objetos e os processos de forma conveniente. Para tratar de um problema bem atual, o cuidado com a preserva&ccedil;&atilde;o do meio ambiente, combinamos separar o lixo que produzimos. Para facilitar, ao inv&eacute;s de enumerar todos os res&iacute;duos que podemos produzir, criamos abstra&ccedil;&otilde;es, tendo como finalidade separar os res&iacute;duos pelo tipo de tratamento que podemos dar a eles.</p>
        <p>Abstra&ccedil;&atilde;o &eacute;, portanto, uma ferramenta conceitual important&iacute;ssima na organiza&ccedil;&atilde;o da realidade, segundo um determinado interesse.</p>

        <CenterBoxContainer>
            <h3>Quadro 3.1: Conceituando abstração</h3>
            <Box backgroundColor={Color.BLUE_BOX}>
                <p>Denominamos abstra&ccedil;&atilde;o o processo de selecionar os aspectos que interessa considerar, para satisfazer um determinado objetivo.</p>
            </Box>
        </CenterBoxContainer>
    </Fragment>
)

export default Conceituacao