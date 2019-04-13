import React from 'react'
import CenterBoxContainer from '../../../../generics/center_box_container'
import Box from '../../../../generics/box'
import AlgorithmBox from '../../../../generics/algorithm_box'
import AlgorithmLevel from '../../../../generics/algorithm_level'
import Title from '../../../../generics/title'
import ExternalLink from '../../../../generics/external_link'
import Color from '../../../../../constants/color'

const AplicacoesParteDois = () => (
    <div>
        <h3>Produção de vídeos:</h3>
        
        <p>Vamos agora utilizar um cen&aacute;rio comum aos temas Interdisciplinaridade (7) e Coopera&ccedil;&atilde;o (8):</p>

        <p>Vamos supor que as escolas de um certo munic&iacute;pio foram convidadas a participar de um esfor&ccedil;o conjunto para promover o turismo da regi&atilde;o. A proposta consiste na elabora&ccedil;&atilde;o de um v&iacute;deo em cada escola, descrevendo v&aacute;rios aspectos da cidade com destaque &agrave;queles considerados mais relevantes segundo as diferentes perspectivas de cada institui&ccedil;&atilde;o. </p>

        <p>O produto desejado (v&iacute;deo com um objetivo espec&iacute;fico, elaborado de modo a representar uma constru&ccedil;&atilde;o coletiva da escola) &eacute; uma oportunidade interessante para ilustrarmos vantagens de analisar o entendimento e solu&ccedil;&atilde;o do problema sob a perspectiva interdisciplinar e ilustrar como o Pensamento Computacional poderia auxiliar nesse prop&oacute;sito.</p>

        <p>O desenvolvimento de um v&iacute;deo, qualquer que seja sua finalidade, envolve diferentes saberes inter-relacionados e o pilar decomposi&ccedil;&atilde;o pode nos auxiliar a entend&ecirc;-los. Por exemplo poderia ser adequado analisar o problema segundo conhecimentos espec&iacute;ficos envolvidos, como aspectos art&iacute;sticos, t&eacute;cnicos, ou de elabora&ccedil;&atilde;o do enredo/argumento central. Aspectos t&eacute;cnicos por sua vez, poderiam ser categorizados segundo recursos necess&aacute;rios relacionados ao v&iacute;deo, som, edi&ccedil;&atilde;o de imagens, sincronismo e efeitos digitais. A natureza da atividade (ator, diretor, produtor, respons&aacute;vel pela filmagem, sonoplasta, etc.) seria outra categoria &uacute;til para o processo.</p>

        <p>O prop&oacute;sito do v&iacute;deo considerado &eacute; apresentar atra&ccedil;&otilde;es com potencial tur&iacute;stico em certa regi&atilde;o. Nesse sentido, tamb&eacute;m poder&iacute;amos usar o pilar decomposi&ccedil;&atilde;o para elencar diferentes categorias de turismo existentes ou que poderiam existir no local (ecoturismo, de aventura, cultural, agroturismo, urbano, hist&oacute;rico, etc.). Essa estrutura&ccedil;&atilde;o &eacute; importante para definir o qu&ecirc; na regi&atilde;o j&aacute; &eacute; ou poderia ser uma &ldquo;atra&ccedil;&atilde;o&rdquo;, e para identificar caracter&iacute;sticas relacionadas a cada categoria tur&iacute;stica poder&iacute;amos usar o pilar reconhecimento de padr&otilde;es. </p>

        <p>Consideremos uma das categorias mencionadas, por exemplo a de &ldquo;turismo hist&oacute;rico&rdquo; para ilustrar o uso de outro pilar do Pensamento Computacional no apoio &agrave; estrutura&ccedil;&atilde;o de um conhecimento espec&iacute;fico, nesse caso a Hist&oacute;ria. Partindo da premissa que o objetivo &eacute; caracterizar uma atra&ccedil;&atilde;o a partir de elementos hist&oacute;ricos a ela relacionados, &eacute; poss&iacute;vel aplicar o pilar abstra&ccedil;&atilde;o para definir aspectos relevantes a esse prop&oacute;sito (acontecimentos com maior repercuss&atilde;o, personalidades relacionadas, grupos sociais envolvidos, etc.) bem como aspectos menos relevantes ao prop&oacute;sito (estrat&eacute;gias e recursos para recupera&ccedil;&atilde;o e manuten&ccedil;&atilde;o, n&uacute;mero t&iacute;pico de visitantes, ou a equipe de gest&atilde;o). Abordagem similar poderia ser aplicada a outras categorias. </p>

        <p>Em qualquer das categorias ilustradas, &eacute; interessante lembrar que h&aacute; diferentes elementos constituintes e que apesar das especificidades de cada um, precisam ser integrados para adequadamente formar uma atra&ccedil;&atilde;o. O uso dos pilares do Pensamento Computacional por apoiar essa integra&ccedil;&atilde;o por exemplo tornando expl&iacute;citos elementos comuns a dois ou mais elementos, ou ligando-os segundo determinados crit&eacute;rios &ndash; por exemplo, sequ&ecirc;ncias de atividades ou &ldquo;circuitos&rdquo; adequados a diferentes perfis e interesses, que podem ser representados por um algoritmo, como ilustrado a seguir. </p>

        <CenterBoxContainer>
            <AlgorithmBox>
                <Title>Algoritmo [I1]: Circuito de Aventura Tipo 1</Title>
                <AlgorithmLevel showStyle={true}>
                    <li>Defina o conjunto de elementos da aventura.</li>
                    <li>Defina o nível de intensidade (n).</li>
                    <li>Enquanto houver elementos não percorridos faça:
                        <AlgorithmLevel child={true}>
                            <li>Repita n vezes.
                                <AlgorithmLevel child={true}>
                                    <li>i. Faça o percurso do elemento.</li>
                                    <li>ii. Registre o tempo do percurso.</li>
                                </AlgorithmLevel>
                            </li>
                        </AlgorithmLevel>
                    </li>
                    <li>Calcule o índice de desempenho.</li>
                    <li>Gere souvenir com os elementos percorridos, tempos e desempenho.</li>
                </AlgorithmLevel>
            </AlgorithmBox>
        </CenterBoxContainer>

        <p>Como a descri&ccedil;&atilde;o de [I1] sugere, v&aacute;rios tipos de &ldquo;circuitos&rdquo; podem ser criados e muitas variantes podem ser geradas simplesmente alterando a forma de percorrer os elementos.</p>

        <p>Caso ainda n&atilde;o o tenha feito, acompanhe a an&aacute;lise desse mesmo cen&aacute;rio sob a perspectiva da Coopera&ccedil;&atilde;o. </p>

        <CenterBoxContainer>
            <Box backgroundColor={Color.ORANGE_BOX}>
                <p><span className="negrito">Para saber mais: </span></p>
                <p>O Algoritmo [I1] foi usado como base para a produ&ccedil;&atilde;o da anima&ccedil;&atilde;o dispon&iacute;vel em <ExternalLink href="https://scratch.mit.edu/projects/295752734/">https://scratch.mit.edu/projects/295752734/</ExternalLink> - tente acompanhar as etapas nela representadas com aquelas descritas em [I1]. Caso queira saber mais sobre o processo de desenvolvimento deste produto, acesse [Adicionar Link].</p>
            </Box>
        </CenterBoxContainer>
    </div>
)

export default AplicacoesParteDois