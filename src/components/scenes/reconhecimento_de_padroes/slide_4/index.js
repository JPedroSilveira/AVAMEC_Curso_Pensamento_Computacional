import React, { Fragment } from 'react'
import TextSimpleJustify from '../../../generics/text/simple-justify'
import Image from '../../../generics/image'
import ExampleBox from '../../../generics/text/example-box'
import YouTubePlayer from '../../../generics/youtube_player'

import IntroFour from '../../../../images/content/reconhecimento_de_padroes/intro-four.svg'

class Slide4 extends React.Component {
    render() {
        return (
            <Fragment>
                <Image marginTop="100px" marginBottom="50px" height="auto" width="900px" src={IntroFour} />
                <TextSimpleJustify marginBottom="50px">
                    <ExampleBox title="Exemplo 2" exampleTitle="Primeiros socorros em AVC">
                        <p>Várias situações críticas que podem levar à morte podem ser atenuadas pelo reconhecimento de padrões, dessas uma bem conhecida é o AVC (Acidente Vascular Cerebral). Veja o quê diz o Dr Drauzio Varella, um conceituado médico brasileiro, no vídeo a seguir, sobre as providências a serem tomadas.</p>
                        <p>Assista o vídeo "AVC (derrame) | Dicas de Saúde"</p><br/>
                        <YouTubePlayer videoId="fMrJygd-gmw"/>
                    </ExampleBox>
                    <ExampleBox marginTop="50px" title="Exemplo 3" exampleTitle="Epidemia de Cólera">
                        <p>No ano de 1854, em Londres, ocorreu uma grande epidemia de cólera, que foi solucionada pelo médico John Snow. Dr. Snow mapeou os locais onde moravam os doentes e identificou que todos eram servidos por água oriunda de uma determinada bomba pública. Após algumas averiguações, comprovou-se que a água bombeada estava contaminada na origem pela lavagem de uma fralda de um bebê que havia contraído a doença em outro local. Com esse trabalho, contestou-se também a ideia que prevalecia na época de que a cólera era transmitida por correntes de ar, que espalhariam contaminações originadas de matéria orgânica em decomposição. A hipótese de Snow era de que a cólera era provocada por uma bactéria. A hipótese de Snow foi posteriormente verificada.</p>
                    </ExampleBox>
                    <ExampleBox marginTop="50px" title="Exemplo 4" exampleTitle="A Mediação da Aprendizagem">
                        <p>Nos parágrafos anteriores, apresentamos situações que podem ser encontradas no cotidiano de qualquer cidadão e citamos também algumas situações típicas de certas profissões. Não poderíamos deixar de citar o importante papel que o reconhecimento de padrões tem no processo de mediação da aprendizagem, desde os primeiros momentos até os níveis mais avançados da escolarização. Certamente aprendemos muito pela imitação, pela análise, pelas tentativas e erros, individualmente ou em grupo, mas, para atingir níveis superiores, precisamos de mediadores com conhecimento mais avançado, que nos ajudem a identificar situações onde ainda temos dificuldades de compreensão, onde ainda precisamos construir níveis mais avançados de “padrões”. Esse é um dos papéis importantes nas atividades de um professor, identificar as situações para as quais o estudante ainda não está preparado e oferecer propostas de trabalho que lhe permitam ir além.</p>
                        <p>Em particular, na mediação da aprendizagem de pessoas com necessidades especiais, é muito importante que o professor saiba identificar as particularidades de seus estudantes para que, com seu próprio conhecimento ou em companhia de outros profissionais, possa elaborar a mediação mais apropriada.</p>
                        <p>No filme “Como uma Estrela na Terra - Toda Criança é Especial”, Isham, o personagem principal, uma criança de 9 anos, encontra-se em dificuldades com a repetência, por não conseguir se alfabetizar. Seus pais e também seus professores não conseguem compreender suas dificuldade na escola e em consequência não conseguem ajudá-lo. Com isso, os pais são orientados a procurar uma outra escola. A solução vem quando um de seus professores na nova escola identifica a dificuldade. Isham é disléxico. A partir desse reconhecimento, o professor prepara materiais didáticos específicos que viabilizam a alfabetização do aluno.</p>
                    </ExampleBox>
                </TextSimpleJustify>
            </Fragment>
        )
    }
}

export default Slide4
