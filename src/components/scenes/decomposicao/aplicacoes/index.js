import React, { Fragment } from 'react'
import IMGDecomposicao1 from '../../../../images/decomposicao-1.jpg'
import IMGDecomposicao2 from '../../../../images/decomposicao-2.png'
import Image from '../../../generics/image'
import ExternalLink from '../../../generics/external_link'
import Strong from '../../../generics/font/strong'

const Aplicacoes = () => (
    <Fragment>
        <h2>APLICAÇÕES</h2>
        <p>Nesta se&ccedil;&atilde;o, veremos alguns exemplos do uso do Pilar &ldquo;Decomposi&ccedil;&atilde;o&rdquo; buscando apoiar a familiariza&ccedil;&atilde;o do leitor com essa ideia.</p>
        <h3>Aplicação 1: Planos de aula</h3>
        <p>O pilar decomposi&ccedil;&atilde;o possui v&aacute;rias aplica&ccedil;&otilde;es de grande import&acirc;ncia no contexto escolar. Uma delas &eacute; na elabora&ccedil;&atilde;o de um plano de aula que, como sabem todos os professores, &eacute; uma atividade bastante trabalhosa. V&aacute;rios s&atilde;o os aspectos envolvidos ao planejarmos nossas aulas, assim, para descomplicar, podemos separar os aspectos envolvidos. Embora existam diferentes formas de fazer uma decomposi&ccedil;&atilde;o, apresentamos aqui uma poss&iacute;vel: a) defini&ccedil;&atilde;o de objetivos educacionais, b) identifica&ccedil;&atilde;o de conte&uacute;dos; c) levantamento do conhecimento pr&eacute;vio dos aluno, d) proposta de atividades individuais e cooperativas, e) defini&ccedil;&atilde;o do plano de media&ccedil;&atilde;o, f) sele&ccedil;&atilde;o de recurso mat&eacute;rias; g) estudo de espa&ccedil;os e tempos e, h) planejamento da avalia&ccedil;&atilde;o das aprendizagens.</p>
        <h3>Aplicação 2: Diagnóstico médico</h3>
        <p>O corpo humano pode ser analisado segundo alguns de seus sistemas (Figura 1) - nervoso, digestivo, circulat&oacute;rio, muscular etc - e qualquer problema de sa&uacute;de, afetando um ou mais desses sistemas, poderia ser identificado atrav&eacute;s de um processo baseado em uma consulta m&eacute;dica seguida de exames laboratoriais e exames especiais como ultrassonografia, raio x, colonoscopia, endoscopia, eletrocardiograma etc. Em geral, as consultas s&atilde;o realizadas por especialistas nas &aacute;reas espec&iacute;ficas.</p>
        <Image src={IMGDecomposicao2} alt="Seis images do corpo humano, primeira com o esqueleto, segunda com o sistema nervoso, terceira com o sistema sanguíneo, quarta com o sistema respiratório, quinta com o sistema digestivo e sexta com o sistema muscular">
            <p>
                <Strong>Figura 1 : Corpo humano - Resumo dos Subsistemas</Strong><br />
                <ExternalLink href="https://www.anatomiadocorpo.com">
                    Fonte: https://www.anatomiadocorpo.com/</ExternalLink>
            </p>
        </Image>
        <h3>Aplicação 3: Reparação de automóveis</h3>
        <p>Pensemos, por exemplo, no uso do princ&iacute;pio da decomposi&ccedil;&atilde;o para resolver um problema relativamente comum: corrigir o defeito em um carro cujo motor n&atilde;o funciona (n&atilde;o liga). Apesar de nosso conhecimento limitado sobre ve&iacute;culos automotores convencionais, sabemos que os mesmos podem ser decompostos segundo seus v&aacute;rios &quot;sistemas&quot; (Figura 2), como el&eacute;trico, mec&acirc;nico e de combust&iacute;vel, todos relacionados ao funcionamento do motor, al&eacute;m, &eacute; claro, de existirem outros n&atilde;o relacionados diretamente ao motor, como carroceria, estofamento, equipamento de som, etc. Cada um dos sistemas mencionados poderia ser decomposto em outros sistemas mais simples: o mec&acirc;nico, por exemplo, poderia ser dividido em suspens&atilde;o, dire&ccedil;&atilde;o, transmiss&atilde;o, etc. A transmiss&atilde;o, por sua vez, compreenderia o c&acirc;mbio (marchas), eixos e juntas de movimento, e assim por diante.</p>
        <p>Para descobrir o problema do carro que n&atilde;o funciona, podemos iniciar eliminando de nossa an&aacute;lise os elementos n&atilde;o diretamente relacionados com o funcionamento do motor, analisando ent&atilde;o cada sistema que potencialmente poderia gerar o defeito, verificando se seu funcionamento est&aacute; como esperado e, se n&atilde;o for o caso, identificando e corrigindo o defeito encontrado.</p>
        <Image src={IMGDecomposicao1} alt="Carro com a carroceria transparente, exibindo freios, sistema elétrico, motor, transmissão, suspensão e sistema de direção.">
            <p>
                <Strong>Figura 2: Componentes de um Veículo automotor</Strong><br />
                <ExternalLink href="http://breno.freeshell.org/Est_veic.pdf">
                    Fonte: http://breno.freeshell.org/Est_veic.pdf</ExternalLink>
            </p>
        </Image>
    </Fragment>
)

export default Aplicacoes