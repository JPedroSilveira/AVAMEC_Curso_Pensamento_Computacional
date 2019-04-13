import React from 'react'
import CenterBoxContainer from '../../../../generics/center_box_container'
import Color from '../../../../../constants/color'
import Box from '../../../../generics/box'

const AplicacoesParteUm = () => (
    <div>
        <h3>Aplicações</h3>
        <p>Um exemplo de aplica&ccedil;&atilde;o j&aacute; mencionado anteriormente nesse texto &eacute; a organiza&ccedil;&atilde;o de eventos: Qualquer evento, tanto no &acirc;mbito pessoal quanto no profissional, requer para sua realiza&ccedil;&atilde;o, da execu&ccedil;&atilde;o de um conjunto de atividades que podem envolver v&aacute;rias pessoas ou equipes e seus conhecimentos e habilidades espec&iacute;ficas. Em atividade avaliativa propusemos considerar a realiza&ccedil;&atilde;o do semin&aacute;rio &quot;O Pensamento Computacional na Escola&quot;, vamos agora refletir agora sobre como a coopera&ccedil;&atilde;o pode auxiliar na consecu&ccedil;&atilde;o desse objetivo.</p>
        <p>Num primeiro momento, &eacute; estrat&eacute;gico a <span className="negrito">Decomposi&ccedil;&atilde;o</span> do problema em diferentes aspectos (tarefas que necessitam ser realizadas, pessoas envolvidas e seus conhecimentos e habilidades espec&iacute;ficas, etapas ou fases e sua aloca&ccedil;&atilde;o no tempo, subeventos e sua distribui&ccedil;&atilde;o espacial, etc.). Os componentes ou aspectos resultantes da decomposi&ccedil;&atilde;o definem subproblemas que podem requerer novas decomposi&ccedil;&otilde;es ou o foco em elementos determinantes, poss&iacute;vel atrav&eacute;s da aplica&ccedil;&atilde;o do pilar abstra&ccedil;&atilde;o. Por exemplo no que diz respeito &agrave; aloca&ccedil;&atilde;o de espa&ccedil;o f&iacute;sico de acordo com a demanda em certo componente de um evento, ou a escolha de um tema para debate a partir da an&aacute;lise do perfil dos participantes.</p>
        <p>Alguns riscos ou situa&ccedil;&otilde;es indesej&aacute;veis caracterizam problemas t&iacute;picos de qualquer evento, e em tal situa&ccedil;&atilde;o o pilar <span className="negrito">Reconhecimento de Padr&otilde;es</span> pode auxiliar a identificar e tratar situa&ccedil;&otilde;es relativas por exemplo a inscri&ccedil;&otilde;es (n&atilde;o encontradas ou com informa&ccedil;&otilde;es conflitantes), aus&ecirc;ncias ou atrasos, material indispon&iacute;vel ou inadequado, ou prover suporte a comportamentos t&iacute;picos dos participantes do evento (inexperiente, ass&iacute;duo, visitante, integrado &agrave;s atividades, representante institucional, etc).</p>
        <p>Por fim, o pilar <span className="negrito">Algoritmo</span> pode apoiar atividades envolvendo o desenvolvimento de defini&ccedil;&otilde;es precisas especialmente importantes em pontos cr&iacute;ticos como a programa&ccedil;&atilde;o do evento, a correspondente aloca&ccedil;&atilde;o do espa&ccedil;o f&iacute;sico, o detalhamento das atividades anteriores e posteriores ao evento, os roteiros/procedimentos gerais (acesso, seguran&ccedil;a, deslocamentos, etc) e espec&iacute;ficos (equipamentos, pessoal de apoio, layout, etc).</p>

        <CenterBoxContainer>
            <h3>Quadro 1: Conceituando Cooperação</h3>
            <Box backgroundColor={Color.BLUE_BOX}>
                <p>Em uma descri&ccedil;&atilde;o simples, cooperar &eacute; trabalhar junto para atingir objetivos compartilhados. Em atividades cooperativas indiv&iacute;duos buscam resultados que sejam ben&eacute;ficos para eles pr&oacute;prios bem como para os demais membros do grupo. (Johnson e Johnson, 2017).</p>
            </Box>
        </CenterBoxContainer>
    </div>
)

export default AplicacoesParteUm