import React from 'react'
import CenterBoxContainer from '../../../../generics/center_box_container'
import AlgorithmBox from '../../../../generics/algorithm_box'
import AlgorithmLevel from '../../../../generics/algorithm_level'
import Title from '../../../../generics/title'

const AplicacoesParteDois = () => (
    <div>
        <p>Vamos agora utilizar um cen&aacute;rio comum aos temas Interdisciplinaridade (7) e Coopera&ccedil;&atilde;o (8): As escolas de um certo munic&iacute;pio foram convidadas a participar de um esfor&ccedil;o conjunto para alavancar a atividade tur&iacute;stica na regi&atilde;o. A proposta consiste da elabora&ccedil;&atilde;o de um v&iacute;deo em cada escola, descrevendo v&aacute;rios aspectos da cidade com destaque &agrave;queles considerados mais relevantes segundo as diferentes perspectivas de cada institui&ccedil;&atilde;o.</p>
        <p>O produto desejado (v&iacute;deo com um objetivo espec&iacute;fico, elaborado de modo a representar a perspectiva coletiva da escola) poderia ser obtido como resultado de v&aacute;rias abordagens, por exemplo pela escolha ou designa&ccedil;&atilde;o de algu&eacute;m com conhecimento especializado, possivelmente da pr&oacute;pria escola, que munido de certos recursos, se encarregaria de desenvolver a maioria sen&atilde;o todas as atividades envolvidas em tal processo. Entretanto, vamos considerar outra op&ccedil;&atilde;o e, tomar a proposta como uma oportunidade de envolver toda a escola em uma a&ccedil;&atilde;o cooperativa e ilustrar como o Pensamento Computacional poderia auxiliar nesse prop&oacute;sito.</p>
        <p>Uma configura&ccedil;&atilde;o poss&iacute;vel para a a&ccedil;&atilde;o cooperativa seria que, seguindo uma estrat&eacute;gia previamente acordada, os estudantes poderiam se organizar em grupos para submeterem contribui&ccedil;&otilde;es em v&iacute;deo descrevendo atra&ccedil;&otilde;es que considerassem interessantes segundo sua pr&oacute;pria perspectiva (faixa et&aacute;ria, interesses, microrregi&otilde;es conhecidas, etc.). Essas contribui&ccedil;&otilde;es seriam ent&atilde;o socializadas e submetidas a um processo eletivo para definir quais seriam usadas no v&iacute;deo representando a escola. Um grupo (ou grupos) composto por estudantes mais experientes, professores, t&eacute;cnicos, ou membros da comunidade no entorno ficaria respons&aacute;vel pela composi&ccedil;&atilde;o e p&oacute;s-produ&ccedil;&atilde;o do produto final.</p>
        <p>De imediato percebemos que a <span className="negrito">Decomposi&ccedil;&atilde;o</span> do problema em subproblemas possibilitaria um melhor entendimento dos elementos envolvidos na produ&ccedil;&atilde;o do v&iacute;deo. &Eacute; interessante observarmos que v&aacute;rias decomposi&ccedil;&otilde;es s&atilde;o poss&iacute;veis e poderiam auxiliar em diferentes momentos do processo, por exemplo, a decomposi&ccedil;&atilde;o [A] em pr&eacute;-produ&ccedil;&atilde;o, produ&ccedil;&atilde;o, e p&oacute;s-produ&ccedil;&atilde;o, definem fases gerais do processo, que por sua vez podem ser decompostos em etapas, por exemplo a pr&eacute;-produ&ccedil;&atilde;o poderia envolver [A.1] defini&ccedil;&atilde;o de argumentos e estrat&eacute;gias, elabora&ccedil;&atilde;o do roteiro, lista de loca&ccedil;&otilde;es, cen&aacute;rios e equipamentos, forma&ccedil;&atilde;o de equipes, etc. Outros exemplos de decomposi&ccedil;&atilde;o poderiam se referir a n&uacute;cleos de tarefas (art&iacute;stico, tecnol&oacute;gico, de gest&atilde;o, de qualidade do produto, etc.) ou a pap&eacute;is na estrat&eacute;gia de coopera&ccedil;&atilde;o utilizada (especialistas, mediadores, autores, revisores, etc.).</p>
        <p>Uma vez que o objetivo do v&iacute;deo seria dar destaque a elementos da cidade que tenham potencial tur&iacute;stico, o <span className="negrito">Reconhecimento de Padr&otilde;es</span> &eacute; outro dos pilares que poderia ser usado por exemplo na identifica&ccedil;&atilde;o de atra&ccedil;&otilde;es tur&iacute;sticas adequadas a idosos. Esse tipo de atra&ccedil;&atilde;o usualmente n&atilde;o apresenta obst&aacute;culos ao deslocamento f&iacute;sico dos visitantes e conta com facilidades como locais para descanso, banheiros nas proximidades, pessoal de apoio e orienta&ccedil;&atilde;o, organiza&ccedil;&atilde;o de atividades em grupo, etc. No caso de atra&ccedil;&otilde;es relacionadas ao &ldquo;ecoturismo&rdquo;, &eacute; de se esperar que haja grande integra&ccedil;&atilde;o com a natureza, em ambientes com pouca interven&ccedil;&atilde;o humana ou onde apesar desta, h&aacute; redutos fielmente preservados. Seria caracter&iacute;stico desse tipo de atra&ccedil;&atilde;o, um repert&oacute;rio de atividades que respeite o ecossistema original, n&atilde;o causando interfer&ecirc;ncias ou preju&iacute;zos ao mesmo. Note que numa mesma atra&ccedil;&atilde;o podemos identificar padr&otilde;es pr&oacute;prios a diferentes tipos de turismo, o que aumentaria a relev&acirc;ncia da atra&ccedil;&atilde;o no cen&aacute;rio local.</p>
        <p>Ainda no cen&aacute;rio de eleger as atra&ccedil;&otilde;es que ir&atilde;o compor o v&iacute;deo, o pilar <span className="negrito">Abstra&ccedil;&atilde;o</span> pode ser &uacute;til por exemplo para descrever uma atra&ccedil;&atilde;o com elementos t&iacute;picos do turismo &ldquo;de aventura&rdquo;. Nesse caso, seria importante abstrair os aspectos menos relevantes a nossos prop&oacute;sitos. Imagine que um parque na cidade conta com elementos como pista de skate, tirolesa, encosta para escalada, trilha para caminhada, etc. Nesse caso, s&atilde;o importantes aspectos como as dimens&otilde;es (extens&atilde;o, angula&ccedil;&atilde;o, etc.) da pista de skate, os acess&oacute;rios (barras, pinos, etc.), de modo an&aacute;logo s&atilde;o relevantes para a tirolesa suas dimens&otilde;es, acess&oacute;rios, restri&ccedil;&otilde;es (de peso ou idade, por exemplo). N&atilde;o seriam relevantes para nosso prop&oacute;sito, aspectos como a cor dos revestimentos, o material usado na constru&ccedil;&atilde;o, a precisa disposi&ccedil;&atilde;o dentro do parque, o trajeto espec&iacute;fico da pista de caminhada, etc.</p>
        <p>Por fim, o pilar <span className="negrito">Algoritmo</span> facilitaria a organiza&ccedil;&atilde;o e o apoio das atividades cooperativas. Por exemplo a primeira parte da a&ccedil;&atilde;o descrita poderia ser estruturado segundo o seguinte algoritmo:</p>
        <CenterBoxContainer>
            <AlgorithmBox>
                <Title>Algoritmo [A1]: Constru&ccedil;&atilde;o de v&iacute;deos com atra&ccedil;&otilde;es candidatas</Title>
                <AlgorithmLevel showStyle={true}>
                    <li>Enquanto n&atilde;o atingido o limite _1 de tempo fa&ccedil;a:
                        <AlgorithmLevel child={true}>
                            <li>a. Receber sugest&atilde;o de atra&ccedil;&atilde;o.</li>
                        </AlgorithmLevel>
                    </li>
                    <li>Escolher "n" melhores candidatos.</li>
                    <li>Para cada candidato fa&ccedil;a:
                        <AlgorithmLevel child={true}>
                            <li>a. Enquanto n&atilde;o atingido o limite _2 de tempo fa&ccedil;a:
                                <AlgorithmLevel child={true}>
                                    <li>i. Receber contribui&ccedil;&otilde;es com imagens, filmagens, texto, m&uacute;sica de fundo.</li>
                                </AlgorithmLevel>
                            </li>
                        </AlgorithmLevel>
                    </li>
                    <li>Escolher o melhor candidato.</li>
                    <li>Distribuir tarefas para composi&ccedil;&atilde;o de v&iacute;deo sobre atra&ccedil;&atilde;o selecionada.</li>
                    <li>Compor v&iacute;deo sobre atra&ccedil;&atilde;o selecionada.</li>
                    <li>Avaliar v&iacute;deo produzido.</li>
                    <li>Enviar v&iacute;deo &agrave; equipe de coordena&ccedil;&atilde;o.</li>
                </AlgorithmLevel>
            </AlgorithmBox>
        </CenterBoxContainer>
        <p>Cabe observar que v&aacute;rios dos itens em [A1] podem ser detalhados atrav&eacute;s de outros algoritmos &ndash; o item (2) por exemplo, poderia seguir um protocolo espec&iacute;fico, facilitando aos estudantes, a constru&ccedil;&atilde;o e aplica&ccedil;&atilde;o de habilidades importantes como argumenta&ccedil;&atilde;o, objetividade, an&aacute;lise e negocia&ccedil;&atilde;o de significados, prioriza&ccedil;&atilde;o de interesses, dentre outras.</p>
        <p>Caso ainda n&atilde;o o tenha feito, acompanhe a an&aacute;lise desse mesmo cen&aacute;rio sob a perspectiva da Interdisciplinaridade (8).</p>
    </div>
)

export default AplicacoesParteDois