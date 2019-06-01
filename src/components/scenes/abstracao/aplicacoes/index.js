import React, { Fragment } from 'react'
import Image from '../../../generics/image'
import ExternalLink from '../../../generics/external_link'
import IMGMapaParqueFarroupilha from '../../../../images/mapa-farroupilha.png'
import IMGParqueFarroupilha from '../../../../images/parque-farroupilha.png'
import Strong from '../../../generics/font/strong'

const Aplicacoes = () => (
    <Fragment>
        <h2>Aplicações</h2>
        <h3>Conhecendo o Bairro onde Moro</h3>
        <p>Quando mudamos de resid&ecirc;ncia, muitas vezes ocorre de irmos morar em um bairro desconhecido, ou mesmo em uma outra cidade. Nessa situa&ccedil;&atilde;o, n&oacute;s e nossos familiares ficamos um tanto perdidos, sem saber exatamente onde fica a padaria, o supermercado, a escola dos filhos, etc. Se escolhermos ir passeando pelo bairro, para conhecer in loco esses diferentes lugares, precisaremos de um pouco de ajuda, perguntando aos moradores onde ficam os locais onde desejamos ir. Uma outra estrat&eacute;gia &eacute; desenhar um mapa de nosso bairro, indicando as ruas que nos interessam e marcando bem onde fica cada local importante para n&oacute;s. O mapa &eacute; uma abstra&ccedil;&atilde;o do nosso bairro, no qual colocaremos apenas as informa&ccedil;&otilde;es que necessitamos para nos localizarmos. Isso inclui as ruas e os locais importantes para n&oacute;s. Nas Figuras 1 e 2 apresentamos dois mapas de uma regi&atilde;o conhecida da cidade de Porto Alegre, o entorno do Parque Farroupilha. Em uma das imagens, na Figura 1, est&atilde;o em destaque as vias. Na Figura 2, est&atilde;o mais n&iacute;tidas as constru&ccedil;&otilde;es e &aacute;reas de vegeta&ccedil;&atilde;o.</p>        
        <Image src={IMGMapaParqueFarroupilha} alt="Mapa do Parque Farroupilha">
            <p>
                <Strong>Figura 1: Sistema viário no entorno do Parque Farroupilha, Porto Alegre-RS</Strong>
                <br />
                <ExternalLink href="https://www.google.com/maps/place/Farroupilha+Park/@-30.0445546,-51.2044402,15z/data=!4m5!3m4!1s0x951978534879152d:0xa9522f5e1a9af85b!8m2!3d-30.0368367!4d-51.2160596">
                    Fonte: Google Maps
                </ExternalLink>
            </p>
        </Image>
        <Image src={IMGParqueFarroupilha} alt="Construções e áreas de vegetação no entorno do Parque Farroupilha">
            <p>
                <Strong>Figura 2: Construções e áreas de vegetação no entorno do Parque Farroupilha, Porto Alegre-RS</Strong>
                <br />
                <ExternalLink href="https://www.google.com/maps/place/Farroupilha+Park/@-30.0445546,-51.2044402,4067m/data=!3m1!1e3!4m5!3m4!1s0x951978534879152d:0xa9522f5e1a9af85b!8m2!3d-30.0368367!4d-51.2160596">
                    Fonte: Google Maps
                </ExternalLink>
            </p>
        </Image>
        <h3>Organizando uma biblioteca particular (ou coletiva)</h3>
        <p>Vejamos um contexto bem familiar, o mundo dos livros. Professores em geral convivem com muitos livros e em consequ&ecirc;ncia deparam-se com o problema de organiz&aacute;-los. Quando temos poucos, quantidade n&atilde;o superior a 20, &eacute; f&aacute;cil encontrarmos o exemplar que estamos procurando, com apenas uma r&aacute;pida olhada em uma ou mais prateleiras. Mas, se tivermos uns 200 ou mais livros, j&aacute; fica trabalhoso encontrar exatamente aquele que nos interessa num dado instante. Nessa situa&ccedil;&atilde;o &eacute; indicado criarmos categorias para organizar nossa(s) estante(s). Isso vai requerer o uso de um processo de abstra&ccedil;&atilde;o, para identificar os detalhes que importam para resolver o nosso problema. Uma solu&ccedil;&atilde;o de imediato, &eacute; a organiza&ccedil;&atilde;o pelo conte&uacute;do dos textos, o que pode nos levar &agrave; cria&ccedil;&atilde;o de uma lista de g&ecirc;neros liter&aacute;rios ou a uma lista de t&oacute;picos por disciplinas. Quem &eacute; usu&aacute;rio frequente de bibliotecas ou funcion&aacute;rio de uma, conhece o problema: Onde encontrar um determinado livro? Quando chega um livro novo, comprado ou doado, precisamos fazer o caminho inverso, ou seja, decidir onde guard&aacute;-lo, considerando o seu conte&uacute;do ou outras caracter&iacute;sticas consideradas na biblioteca.</p>
        <h3>Mantendo a escola em ordem</h3>
        <p>Da mesma forma que abstra&iacute;mos detalhes de objetos, podemos abstrair detalhes de atividades, a&ccedil;&otilde;es e processos de uma maneira mais geral. Considere por exemplo a garantia do funcionamento di&aacute;rio de uma escola. &Eacute; necess&aacute;rio identificar uma lista de rotinas necess&aacute;rias, para que se possa distribuir tarefas aos membros da equipe de apoio. Embora haja um padr&atilde;o nessas rotinas no contexto escolar, &eacute; sempre poss&iacute;vel optar por uma nova organiza&ccedil;&atilde;o. Assim, podemos pensar nas rotinas &ldquo;manter os equipamentos digitais da escola&rdquo;, &ldquo;manter a despensa abastecida&rdquo; ou ainda &ldquo;manter o registro escolar atualizado&rdquo;. Essas rotinas, expressas por uma frase, s&atilde;o obtidas por um processo de abstra&ccedil;&atilde;o que consistiu em separar, de todas as atividades realizadas para &ldquo;manter a escola em ordem&rdquo;, aquelas que pudessem se encaixar em uma dessas denomina&ccedil;&otilde;es.</p>
    </Fragment>
)
export default Aplicacoes