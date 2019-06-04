import React, { Fragment } from 'react'
import Image from '../../../generics/image'
import ExternalLink from '../../../generics/external_link'
import QualidadeVida from '../../../../images/qualidade-de-vida.png'
import CenterBoxContainer from '../../../generics/center_box_container'
import Box from '../../../generics/box'
import Color from '../../../../constants/color' 
import Strong from '../../../generics/font/strong'

class AplicacaoInterdisciplinaridade extends React.Component {
    render() {
        return (
            <Fragment>
                <h2>Manter o peso corporal adequado</h2>
                <Image src={QualidadeVida} alt="Ilustração sobre o equilíbrio que mantem a qualidade de vida.">
                    <p>
                        <Strong>Figura 2: Qualidade de Vida</Strong>
                        <br />
                        <ExternalLink href="https://medium.com/@amarcoscrf/o-que-%C3%A9-qualidade-de-vida-4cdb8ab7c4cc">
                            Fonte: O que é qualidade de vida? (Medium)
                        </ExternalLink>
                    </p>
                </Image>
                <p>Nos tempos modernos, morando nas grandes cidades, temos cada vez mais dificuldades em garantir uma vida saud&aacute;vel. O ideal &eacute; ter uma rotina que inclua os devidos cuidados e um acompanhamento m&eacute;dico peri&oacute;dico. Mas, quando n&atilde;o conseguimos, colocamos em risco a nossa sa&uacute;de, e temos que nos esfor&ccedil;ar para retomar o equil&iacute;brio. Esse &eacute; um dos grandes problemas de nosso tempo.</p>
                <p>O conhecimento necess&aacute;rio, tanto para a manuten&ccedil;&atilde;o de uma vida saud&aacute;vel, quanto para a recupera&ccedil;&atilde;o de uma situa&ccedil;&atilde;o de desequil&iacute;brio, envolve uma s&eacute;rie de conhecimentos por parte dos interessados. Muitas vezes &eacute; necess&aacute;rio recorrer ao apoio de profissionais de diferentes especialidades. Em todos os casos, por&eacute;m, h&aacute; uma necessidade em comum, conhecermos nosso pr&oacute;prio corpo.</p>
                <p>Um primeiro passo &eacute; identificar os diferentes aspectos de nosso corpo e quais os cuidados que precisamos ter. Por exemplo, um aspecto importante &eacute; manter-se dentro de um peso compat&iacute;vel com nossa altura e idade. A manuten&ccedil;&atilde;o dessa compatibilidade vai requerer um conhecimento sobre as quantidades adequadas de elementos nutricionais em nossa alimenta&ccedil;&atilde;o, compat&iacute;veis com o esfor&ccedil;o f&iacute;sico di&aacute;rio e as nossas caracter&iacute;sticas gen&eacute;ticas. Quais tipos de exames preciso realizar e com que periodicidade, para garantir uma boa sa&uacute;de? Que exerc&iacute;cios f&iacute;sicos s&atilde;o compat&iacute;veis com minha atividade de trabalho? Quais s&atilde;o compat&iacute;veis com minhas condi&ccedil;&otilde;es f&iacute;sicas? Quais alimentos podem ser incorporados &agrave; minha alimenta&ccedil;&atilde;o? Onde posso compr&aacute;-los a um pre&ccedil;o de acordo com as minhas condi&ccedil;&otilde;es financeiras? Enfim, uma mir&iacute;ade de temas a serem estudados, cada um envolvendo um ou mais objetos de estudo.</p>
                <CenterBoxContainer>
                    <Box backgroundColor={Color.ORANGE_BOX}>
                        <h3>Para saber mais:</h3>
                        <p>O documento dispon&iacute;vel <ExternalLink href="http://bvsms.saude.gov.br/bvs/publicacoes/perspectivas_desafios_cuidado_pessoas_obesidade.pdf">neste link</ExternalLink> oferece melhores informa&ccedil;&otilde;es sobre cuidados com a sa&uacute;de, para pessoas fora do peso ideal.</p> 
                    </Box>
                </CenterBoxContainer>
                <p>O Pensamento Computacional, atrav&eacute;s de seus quatro pilares, disp&otilde;e de elementos que podem ajudar nessa tarefa interdisciplinar que &eacute; a organiza&ccedil;&atilde;o do nosso cuidado com a sa&uacute;de e nosso bem estar. Vejamos a seguir uma breve identifica&ccedil;&atilde;o do uso desses pilares nessa atividade.</p>
                <p><Strong>Pilar Decomposi&ccedil;&atilde;o:</Strong> podemos us&aacute;-lo para identificar os diferentes aspectos a serem considerados na manuten&ccedil;&atilde;o de nossa sa&uacute;de; mas tamb&eacute;m podemos us&aacute;-lo para identificar as categorias de alimentos e as especialidades profissionais que podem nos ajudar.</p>
                <p><Strong>Pilar Abstra&ccedil;&atilde;o:</Strong> podemos us&aacute;-lo para identificar, para cada aspecto, os &iacute;ndices (por exemplo: &iacute;ndice de massa corporal) que devemos observar e as caracter&iacute;sticas que devemos considerar, quando formos escolher um profissional da sa&uacute;de. Com respeitos aos alimentos, precisamos selecionar atributos importantes, tanto quanto ao seu uso, quanto &agrave; disponibilidade durante o ano.</p>
                <p><Strong>Pilar Reconhecimento de Padr&otilde;es:</Strong> reconhecer situa&ccedil;&otilde;es adversas, como peso incompat&iacute;vel com altura e idade, ou reconhecer oportunidades para adquirir servi&ccedil;os e produtos, por exemplo, combinando sazonalidade, pre&ccedil;o e valor nutricional dos alimentos.</p>
                <p><Strong>Pilar Algoritmos:</Strong> importante para definir diversas rotinas, tais como as relativas &agrave; alimenta&ccedil;&atilde;o, como distribuir os alimentos ao longo do dia, as rotinas de exerc&iacute;cios, a prepara&ccedil;&atilde;o dos alimentos, a visita aos especialistas, etc.</p>
            </Fragment>
        )
    }
}
export default AplicacaoInterdisciplinaridade
