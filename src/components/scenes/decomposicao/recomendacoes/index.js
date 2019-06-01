import React, { Fragment } from 'react'
import CenterBoxContainer from '../../../generics/center_box_container'
import Color from '../../../../constants/color'
import Box from '../../../generics/box'
import Image from '../../../generics/image'
import ExternalLink from '../../../generics/external_link'
import IMGDecomposicao3 from '../../../../images/decomposicao-3.png'
import Strong from '../../../generics/font/strong'

const Recomendacoes = () => (
    <Fragment>
        <h2>RECOMENDAÇÕES</h2>
        <p>A decomposi&ccedil;&atilde;o de um sistema em subsistemas, ou de um todo em partes, requer cuidados especiais para simplificar o processo de composi&ccedil;&atilde;o dos subsistemas ou partes, para representar o todo. Destaque especial deve ser dado &agrave; descri&ccedil;&atilde;o da funcionalidade (ou prop&oacute;sitos) de cada parte. Cada parte deve ter um &uacute;nico prop&oacute;sito.</p>
        <p>Considere por exemplo a decomposi&ccedil;&atilde;o de uma casa em c&ocirc;modos, apresentada no Quadro 2.2. Se um dos c&ocirc;modos tiver o r&oacute;tulo &ldquo;Sala de jantar e de estudo&rdquo;, temos um claro ind&iacute;cio de que ele servir&aacute; para dois prop&oacute;sitos e que por certo, algumas vezes haver&aacute; conflito no uso do espa&ccedil;o. A interface entre duas partes quaisquer deve ser o mais simples poss&iacute;vel, de forma que a intera&ccedil;&atilde;o entre as partes esteja restrita &agrave; interface, ent&atilde;o, no caso dos dormit&oacute;rios, quando em funcionamento normal, que ela ocorra apenas pelas portas. Imagine o desconforto que ocorrer&aacute; em uma casa onde um dos quartos tem su&iacute;te e o banheiro comum est&aacute; em manuten&ccedil;&atilde;o, obrigando ao uso do banheiro da su&iacute;te como um banheiro coletivo. Imagine ainda que houvesse dois dormit&oacute;rios, com uma porta interna entre os dois, mas que apenas um deles tivesse porta externa, qual n&atilde;o seria o desconforto para o morador do quarto que tivesse a porta de acesso ao restante da resid&ecirc;ncia. </p>
        <p>No cotidiano encontramos muitos exemplos de decomposi&ccedil;&atilde;o, em atividades em que buscamos separar o todo em subsistemas. Um exemplo bem familiar &eacute; a organiza&ccedil;&atilde;o de uma moradia (Figura 3).</p>
        <h3>Quadro 2.2 - Organização do interior de uma residência</h3>
        <CenterBoxContainer>
            <Box backgroundColor={Color.BLUE_BOX}>
                <Image src={IMGDecomposicao3} alt="Planta baixa de uma residência.">
                    <p>
                        <Strong>Figura 3: Planta baixa de uma residência</Strong><br />
                        <ExternalLink href="https://www.passeidireto.com/arquivo/42697341/planta-baixa">
                            Fonte: https://www.passeidireto.com/arquivo/42697341/planta-baixa</ExternalLink>
                    </p>
                </Image>
                <p>Uma decomposi&ccedil;&atilde;o bastante familiar &eacute; a divis&atilde;o interna de uma habita&ccedil;&atilde;o em cozinha, sala, quartos e banheiro (Figura 3). Essa divis&atilde;o cria espa&ccedil;os espec&iacute;ficos, no que diz respeito &agrave; funcionalidade, &agrave; mob&iacute;lia, &agrave; decora&ccedil;&atilde;o, aos frequentadores e aos hor&aacute;rios de uso e, de certa forma, ela tamb&eacute;m tem repercuss&otilde;es na organiza&ccedil;&atilde;o do trabalho. Por exemplo, quando s&atilde;o os pr&oacute;prios habitantes que cuidam da limpeza, &eacute; comum se organizar determinando data, tarefa e respons&aacute;vel. Pensando ainda na divis&atilde;o de trabalho, podemos considerar que durante uma nova pintura da casa, cada compartimento pode ser pintado por um profissional diferente, reduzindo com isso o tempo necess&aacute;rio para a manuten&ccedil;&atilde;o.</p>
            </Box>
        </CenterBoxContainer>
    </Fragment>
)

export default Recomendacoes