import React from 'react'
import Image from '../../../../generics/image'
import ExternalLink from '../../../../generics/external_link'
import IMGPetersenGraph from '../../../../../images/petersen-graph-example.png'

const ConceituacaoParteDois = () => (
    <div>
        <h3>A Interdisciplinaridade e o Pensamento computacional</h3>

        <p>Ao longo de sua hist&oacute;ria a Ci&ecirc;ncia da Computa&ccedil;&atilde;o tem contribu&iacute;do para solu&ccedil;&atilde;o de problemas de diferentes &aacute;reas do conhecimento, seja com o uso das tecnologias digitais ou com com a elabora&ccedil;&atilde;o de modelos computacionais Como resultado, algumas li&ccedil;&otilde;es foram aprendidas com respeito &agrave; ess&ecirc;ncia dos problemas, criando assim um rico acervo de estrat&eacute;gias e modelos que constituem-se no que hoje tem-se denominado de Pensamento Computacional. Para fins did&aacute;ticos esses modelos e estrat&eacute;gias foram agrupados para compor os Quatro Pilares do PC. Estes pilares podem ser aplicados na resolu&ccedil;&atilde;o de problemas em um n&uacute;mero variado de contextos, o que pode contribuir para a realiza&ccedil;&atilde;o de estudos interdisciplinares.</p>

        <p>O <span class="negrito">Pilar Abstra&ccedil;&atilde;o</span> contribui para que ao modelamos um objeto de estudos de v&aacute;rias disciplinas, sejam consideradas as diferentes forma de perceb&ecirc;-lo, identificando inclusive os aspectos que interessam mais de uma &aacute;rea de estudo, evitando assim o tratamento isolado de um mesmo objeto. Este Pilar apoia ainda a identifica&ccedil;&atilde;o de abstra&ccedil;&otilde;es de dados que podem serem usadas para modelar objetos de diferentes disciplinas, como por exemplo um grafo que pode ser usado para modelar uma rede de transportes ou uma rede de intera&ccedil;&otilde;es entre os participantes de uma rede social. </p>

        <Image src={IMGPetersenGraph} alt="Exemplo do grafo de Petersen">
            <p>
                <ExternalLink href="https://br.depositphotos.com/226152018/stock-photo-example-graph-called-petersen-graph.html">
                    Fonte: https://br.depositphotos.com/226152018/stock-photo-example-graph-called-petersen-graph.html
                </ExternalLink>
            </p>
        </Image>

        <p>O <span class="negrito">Pilar Decomposi&ccedil;&atilde;o</span> auxilia na identifica&ccedil;&atilde;o de diferentes subconjuntos de funcionalidades de um objeto, permitindo a explora&ccedil;&atilde;o enquanto um objeto independente ao mesmo tempo que considera as suas interfaces.</p>

        <p>O <span class="negrito">Pilar Reconhecimento de Padr&otilde;es</span> apoia a modelagem de objetos decompostos na busca pela identifica&ccedil;&atilde;o de estruturas conhecidas, em diferentes areas de conhecimento que possam facilitar a explora&ccedil;&atilde;o de dos elementos resultantes da decomposi&ccedil;&atilde;o.</p>
    
        <p>O <span class="negrito">Pilar Algoritmos</span>, pode facilitar o interc&acirc;mbio entre saberes ao usar uma linguagem padronizada para falar sobre processos.</p>
    </div>
)

export default ConceituacaoParteDois