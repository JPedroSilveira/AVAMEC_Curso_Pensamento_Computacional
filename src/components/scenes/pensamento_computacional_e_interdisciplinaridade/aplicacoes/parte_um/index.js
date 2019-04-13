import React from 'react'
import Image from '../../../../generics/image'
import ExternalLink from '../../../../generics/external_link'
import IMGQualidadeDeVida from '../../../../../images/qualidade-de-vida.png'
import CenterBoxContainer from '../../../../generics/center_box_container'
import Color from '../../../../../constants/color'
import Box from '../../../../generics/box'

class AplicacoesParteUm extends React.Component {
    render() {
        return (
            (
                <div>
                    <h2>APLICAÇÕES</h2>
                    <h3>Qualidade de vida:</h3>

                    <Image src={IMGQualidadeDeVida} alt="Imagem representando o equilíbrio como qualidade de vida.">
                        <p>
                            <strong>O que é qualidade de vida?</strong>
                            <br />
                            <ExternalLink href="https://cdn-images-1.medium.com/max/1000/1*qtMvDFFkvRyY-xzoI3Xb3w.jpeg">
                                Fonte: https://cdn-images-1.medium.com/max/1000/1*qtMvDFFkvRyY-xzoI3Xb3w.jpeg
                            </ExternalLink>
                        </p>
                    </Image>

                    <p>Nos tempos modernos, morando nas grandes cidades, temos cada vez mais dificuldades em garantir uma vida saud&aacute;vel. Os desafios s&atilde;o os mais diversos poss&iacute;veis. Os deslocamentos s&atilde;o cada vez maiores, os transportes p&uacute;blicos s&atilde;o insuficientes, os locais de trabalhos nem sempre ficam perto da escola dos filhos. A oferta de alimentos de boa qualidade &eacute; cada vez mais prec&aacute;ria. A marca&ccedil;&atilde;o de consultas no sistema p&uacute;blico &eacute; cada vez mais dif&iacute;cil. O tempo que nos resta para o lazer e atividades f&iacute;sicas nem sempre &eacute; suficiente. Gerenciar todos estes fatores, do ponto de vista individual j&aacute; &eacute; trabalhoso, imagine para quem tem filhos.</p>

                    <p>Uma das consequ&ecirc;ncia disso &eacute; que a quantidade de pessoas com o peso acima do recomend&aacute;vel para garantir uma boa sa&uacute;de, est&aacute; sempre crescendo. O ideal &eacute; ter uma rotina que inclua cuidados para uma vida saud&aacute;vel incluindo neste caso um acompanhamento m&eacute;dico peri&oacute;dico. Mas, quando n&atilde;o conseguimos, colocamos em risco a vida, e temos que nos cuidar para retomar uma boa rotina. Este &eacute; um dos grandes problemas de nosso tempo. O conhecimento necess&aacute;rio tanto para a manuten&ccedil;&atilde;o de uma vida saud&aacute;vel quanto para a recupera&ccedil;&atilde;o de uma situa&ccedil;&atilde;o de desequil&iacute;brio envolve uma s&eacute;rie de conhecimento por parte dos interessados. Muitas vezes &eacute; necess&aacute;rio recorrer ao apoio de especialistas de diferentes especialidades profissionais. Em todos os casos h&aacute; uma necessidade em comum, conhecermos nosso pr&oacute;prio corpo, o que envolve diversos aspectos. Um primeiro passo &eacute; identificar os diferentes aspectos de nosso corpo e quais os cuidados que precisamos ter. Por exemplo, um aspecto importante &eacute; se manter dentro de um peso compat&iacute;vel com nossa altura e idade. A manuten&ccedil;&atilde;o dessa compatibilidade vai requerer um conhecimento sobre as quantidades adequadas de elementos nutricionais em nossa alimenta&ccedil;&atilde;o compat&iacute;veis com o esfor&ccedil;o f&iacute;sico di&aacute;rio e as nossas caracter&iacute;sticas gen&eacute;ticas. Quais tipos de exames precisamos realizar e com que periodicidade para garantir uma boa sa&uacute;de? Que exerc&iacute;cios f&iacute;sicos s&atilde;o compat&iacute;veis com minha atividade de trabalho? Quais s&atilde;o compat&iacute;veis com minhas condi&ccedil;&otilde;es f&iacute;sicas? Quais alimentos podem ser incorporados &agrave; minha alimenta&ccedil;&atilde;o?</p>

                    <p>Onde podemos compr&aacute;-los a um pre&ccedil;o compat&iacute;vel com as condi&ccedil;&otilde;es financeiras? Que tipo de lazer devo me propiciar considerando o tipo de trabalho que realizo, a disponibilidade na minha cidade e custo? Enfim, uma mir&iacute;ade de temas para serem estudados, cada um envolvendo um ou mais objetos de estudo.</p>

                    <CenterBoxContainer>
                        <Box backgroundColor={Color.ORANGE_BOX}>
                            <p><span className="negrito">Para saber mais: </span></p>
                            <p>O documento dispon&iacute;vel <ExternalLink href="http://bvsms.saude.gov.br/bvs/publicacoes/perspectivas_desafios_cuidado_pessoas_obesidade.pdf">neste link</ExternalLink> oferece melhores informa&ccedil;&otilde;es sobre cuidados com a sa&uacute;de para pessoas fora do peso ideal. </p>
                        </Box>
                    </CenterBoxContainer>

                    <p>O Pensamento Computacional, atrav&eacute;s de seus quatro pilares, disp&otilde;e de elementos que podem ajudar a organizar nosso cuidado com a sa&uacute;de e nosso bem estar. Vejamos a seguir uma breve identifica&ccedil;&atilde;o do uso desses Pilares.</p>

                    <p><span className="negrito">Pilar Decomposi&ccedil;&atilde;o</span>: podemos us&aacute;-lo para identificar os diferentes aspectos a serem considerados na manuten&ccedil;&atilde;o de nossa sa&uacute;de; mas tamb&eacute;m podemos us&aacute;-lo para identificar as categorias de alimentos e as especialidades profissionais que podem nos ajudar.</p>

                    <p><span className="negrito">Pilar Abstra&ccedil;&atilde;o</span>: podemos us&aacute;-lo para identificar para cada aspecto os &iacute;ndices que devemos observar, de forma id&ecirc;ntica para os alimentos e, com respeito aos profissionais, quais caracter&iacute;stica devemos considerar quando formos escolher um. Com respeitos aos alimentos, precisamos selecionar atributos importantes tanto quanto ao seu uso quanto &agrave; disponibilidade durante o ano.</p>

                    <p><span className="negrito">Pilar Reconhecimento de Padr&otilde;es</span>: reconhecer situa&ccedil;&otilde;es adversas ou oportunidades para adquirir produtos e servi&ccedil;os.</p>

                    <p><span className="negrito">Pilar Algoritmos</span>: importante para definir diversas rotinas, tais como a alimenta&ccedil;&atilde;o, como distribuir os alimentos ao longo do dia, as rotinas de exerc&iacute;cios, a prepara&ccedil;&atilde;o dos alimentos, a visita aos especialistas, etc.</p>
                </div>
            )
        )
    }
}

export default AplicacoesParteUm