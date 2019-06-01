import React, { Fragment } from 'react'
import Title from '../../../generics/title'
import CenterBoxContainer from '../../../generics/center_box_container'
import AlgorithmLevel from '../../../generics/algorithm_level'
import AlgorithmBox from '../../../generics/algorithm_box'
import Box from '../../../generics/box'
import Color from '../../../../constants/color'
import Strong from '../../../generics/font/strong'

const Conceituacao = () => (
    <Fragment>
        <p>Muitas atividades que realizamos com frequ&ecirc;ncia, individualmente ou em grupo, s&atilde;o chamadas de rotinas. Desde quando acordamos at&eacute; deitar, realizamos um grande n&uacute;mero desse tipo de atividades ao longo do dia. &Eacute; bem verdade que n&atilde;o necessariamente as realizamos de forma igual todos os dias. Em geral as fazemos com ligeiras varia&ccedil;&otilde;es, em fun&ccedil;&atilde;o das esta&ccedil;&otilde;es do ano, do dia da semana, de nossas ocupa&ccedil;&otilde;es etc.</p>
        <p>No quadro a seguir, apresentamos uma rotina executada por uma grande quantidade de pessoas, em diferentes locais do planeta, quando trabalham no turno matutino. Para se referenciar rotinas, &eacute; comum usar-se tamb&eacute;m os termos procedimento e algoritmo. Neste texto, usaremos preferencialmente o termo algoritmo, embora seu conceito, no sentido t&eacute;cnico, requeira mais precis&atilde;o, como veremos em um quadro mais adiante.</p>
        <CenterBoxContainer>
            <AlgorithmBox>
                <Title>Algoritmo 01 - Do acordar at&eacute; chegar no local de trabalho</Title>
                <AlgorithmLevel>
                    <span className="textdarkgreen">Ap&oacute;s o barulho do despertador:</span>
                    <AlgorithmLevel showStyle={true}>
                       <li>Despertar.</li>
                       <li>Calçar um chinelo.</li>
                       <li>Vestir uma roupa.</li>
                       <li>Escovar os dentes.</li>
                       <li>Tomar banho.</li>
                       <li>Trocar de roupa.</li>
                       <li>Ir à padaria.</li>
                       <li>Pegar os pães.</li>
                       <li>Pagar a conta.</li>
                       <li>Voltar para casa.</li>
                       <li>Fazer o café.</li>
                       <li>Fazer o desjejum.</li>
                       <li>Escovar os dentes.</li>
                       <li>Pegar a pasta de trabalho.</li>
                       <li>Sair de casa.</li>
                       <li>Pegar o veículo.</li>
                       <li>Deslocar-se para o trabalho.</li>
                    </AlgorithmLevel>
                </AlgorithmLevel>
            </AlgorithmBox>
        </CenterBoxContainer>
        <p>No Algoritmo 01 podemos observar a presen&ccedil;a de v&aacute;rias <Strong>abstra&ccedil;&otilde;es</Strong>, como a atividade &ldquo;deslocar-se para at&eacute; o local de trabalho&rdquo;, que pode ser desdobrada em v&aacute;rias atividades menores, que aqui estamos deixando de detalhar.</p>
        <CenterBoxContainer>
            <h3>Quadro 5.1: Conceituando Algoritmo</h3>
            <Box backgroundColor={Color.BLUE_BOX}>
                <p><Strong>Algoritmo</Strong>: uma sequ&ecirc;ncia finita de etapas (passos), para serem executadas por um agente, natural (humano) ou sint&eacute;tico (computador), em uma quantidade finita de tempo.</p>
            </Box>
        </CenterBoxContainer>
        <br/>
        <p>Analisando em detalhes o Quadro 5.1, encontramos dois requisitos muito especiais: quantidade finita de passos e quantidade finita de tempo, para execu&ccedil;&atilde;o de um passo. Esses requisitos s&atilde;o essenciais para que possamos de fato chamar de algoritmo uma sequ&ecirc;ncia de passos.</p>
        <p>O <Strong>Algoritmo 01</Strong> &eacute; t&atilde;o repetido por n&oacute;s, que o executamos automaticamente, ou seja, sem refletir. N&atilde;o &eacute; por acaso que, quando observamos algu&eacute;m repetir uma sequ&ecirc;ncia de etapas muito concentrado, dizemos &ldquo;hoje ele/ela est&aacute; no autom&aacute;tico&rdquo;. N&atilde;o se assuste, isso n&atilde;o faz de n&oacute;s uma m&aacute;quina, mas traz a evid&ecirc;ncia de que isso n&atilde;o &eacute; algo que apenas o pessoal da Ci&ecirc;ncia da Computa&ccedil;&atilde;o precisa conhecer.</p>
    </Fragment>
)

export default Conceituacao