import React, { Fragment } from 'react'
import TextStandardBox from '../../../generics/text/standard-box'
import Title from '../../../generics/title'
import Image from '../../../generics/image'
import FontLightBlue from '../../../generics/font/light-blue'
import Strong from '../../../generics/font/strong'

import IntroNine from '../../../../images/content/pensamento_computacional_interdisciplinaridade_e_cooperacao/intro-nine.svg'

class Slide9 extends React.Component {
    render() {
        return (
            <Fragment>
                <Image marginTop="100px" marginBottom="50px" height="auto" width="900px" src={IntroNine} />
                <TextStandardBox marginBottom="50px">
                    <Title>Uso de Arquitetura Pedagógica (AP)</Title>
                    <p>Ao longo do tempo, a Cooperação tem sido utilizada em contextos educacionais, tendo motivado, a partir dos anos 1970, o surgimento de vários métodos de aprendizagem cooperativa, que são recursos dos quais os professores podem fazer uso e cuja apropriação pode ser apoiada pelos Pilares do Pensamento Computacional. Usualmente cada método é estruturado em etapas pelos Pilares do Pensamento Computacional, pois:</p>
                    <p>
                        - usualmente casa método é estruturado em etapas (<Strong><FontLightBlue>Decomposição</FontLightBlue></Strong>)<br/>
                        - desenvolve suas dinâmicas segundo certos scripts (<Strong><FontLightBlue>Algoritmos</FontLightBlue></Strong>)<br />
                        - têm papéis ou funções bem definidos (<Strong><FontLightBlue>Reconhecimento de Padrões</FontLightBlue></Strong>)<br />
                        - e tem foco e prioridade em aspectos específicos (<Strong><FontLightBlue>Abstração</FontLightBlue></Strong>)
                    </p>
                    <p>Métodos de aprendizagem cooperativa podem também ser investigados segundo uma linha paradigmática, que vem sendo denominada Arquitetura Pedagógica (AP), que busca pensar propostas pedagógicas em sintonia com as possibilidades oferecidas pela tecnologia. Nessa perspectiva, ao invés de olharmos uma proposta pedagógica concebida independentemente dos elementos tecnológicos e tentarmos inserir a tecnologia, consideramos os dois aportes para pensar novas soluções. Sem entrar em detalhes das APs, podemos resumidamente relacionar o uso com os quatro pilares como segue:</p>
                    <p>
                        <FontLightBlue>Decomposição</FontLightBlue>: a caracterização segundo elementos essenciais como: domínio de conhecimento, objetivos educacionais, conhecimento prévio, dinâmicas interacionistas-problematizadoras, mediações pedagógicas distribuídas, avaliação processual e cooperativa das aprendizagens, suporte computacional.<br />
                        <FontLightBlue>Abstração</FontLightBlue>: a escolha das dinâmicas interacionistas pressupõem uma postura ativa, pesquisa, atividades interativas e autorais, com apoio em suportes informáticos e abordagens problematizadoras por parte do professor.<br />
                        <FontLightBlue>Algoritmos</FontLightBlue>: as dinâmicas interacionistas são caracterizadas segundo rotinas diversas.<br />
                        <FontLightBlue>Reconhecimento de Padrões</FontLightBlue>: a caracterização de requisitos para o suporte informático que integra a definição das APs, constitui elemento norteador para as novas gerações tecnológicas.
                    </p>
                </TextStandardBox>
            </Fragment>
        )
    }
}

export default Slide9
