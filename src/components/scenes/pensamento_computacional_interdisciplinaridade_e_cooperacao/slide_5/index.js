import React, { Fragment } from 'react'
import StandardTextBox from '../../../generics/text/standard-box'
import ColoredBox from '../../../generics/text/colored-box'
import Strong from '../../../generics/font/strong'
import Image from '../../../generics/image'

import IntroFour from '../../../../images/content/pensamento_computacional_interdisciplinaridade_e_cooperacao/intro-four.svg'

class Slide5 extends React.Component {
    render() {
        return (
            <Fragment>
                <Image marginTop="100px" marginBottom="50px" height="auto" width="900px" src={IntroFour} />
                <StandardTextBox marginBottom="100px">
                    <ColoredBox backgroundColor="#FFF6CA" borderColor="#E0D0A9" marginTop="25px" marginBottom="25px">
                        <p>O <Strong>Pilar Abstração</Strong>: Embora isso possa à primeira vista parecer simples, a distribuição das tarefas a membros do grupo envolve a identificação dos requisitos da tarefa e das características (habilidades, competências, potencialidades, preferências, etc.) dos envolvidos em sua realização. Essa necessidade de representar os elementos da realidade considerada, com foco na realização da tarefa por um agente humano, é um exemplo da importância do pilar <Strong>Abstração</Strong> no planejamento de atividades cooperativas.</p>
                    </ColoredBox>
                    <ColoredBox backgroundColor="#FFF6CA" borderColor="#E0D0A9" marginTop="25px" marginBottom="25px">
                        <p>O <Strong>Pilar Decomposição</Strong>: A decomposição de um problema em partes mais elementares possibilita tornar explícitas as tarefas requeridas para a solução de um problema, além de facilitar a comunicação entre os atores envolvidos e a percepção do progresso individual e total.</p>
                    </ColoredBox>
                    <ColoredBox backgroundColor="#FFF6CA" borderColor="#E0D0A9" marginTop="25px" marginBottom="25px">
                        <p>O <Strong>Pilar Reconhecimento de Padrões</Strong>: ações cooperativas necessariamente envolvem a interação entre os membros do grupo e a realização de atividades coordenadas que são resultado dessas interações. Há, entretanto, padrões de interação que não contribuem ou prejudicam o trabalho, como a conversa cíclica (sem avanços), o debate estagnado (impasse), a discussão desordenada, dentre vários outros. Identificar tais situações através dos recursos discutidos no pilar <Strong>Reconhecimento de Padrões</Strong> também é determinante para a cooperação.</p>
                    </ColoredBox>
                    <ColoredBox backgroundColor="#FFF6CA" borderColor="#E0D0A9" marginTop="25px" marginBottom="25px">
                        <p>O <Strong>Pilar Algoritmo</Strong>: ainda considerando a dinâmica de interações mencionada no parágrafo anterior, podemos pensar em como organizá-la, segundo um conjunto de instruções precisas de passos a serem seguidos: um Algoritmo.</p>
                    </ColoredBox>
                </StandardTextBox>
            </Fragment>
        )
    }
}

export default Slide5
