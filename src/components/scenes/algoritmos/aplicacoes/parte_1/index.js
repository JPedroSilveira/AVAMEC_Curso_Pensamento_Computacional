import React, { Fragment } from 'react'
import Title from '../../../../generics/title'
import CenterBoxContainer from '../../../../generics/center_box_container'
import AlgorithmLevel from '../../../../generics/algorithm_level'
import AlgorithmBox from '../../../../generics/algorithm_box'

const AplicacoesParte1 = () => (
    <Fragment>
        <h3>Aplicações</h3>
        <p>A seguir ser&atilde;o apresentados outros exemplos de algoritmos relacionados com a vida cotidiana. A inten&ccedil;&atilde;o &eacute; criar uma familiaridade do leitor com o conceito, buscando desmistificar o clima de tecnicismo que envolve um tema bem presente nas nossas atividades cotidianas, e tamb&eacute;m nas escolas, em particular nas salas de aula.</p>
        <h3>Subindo escadas</h3>
        <p>Comecemos por uma atividade, subir uma escada, que de t&atilde;o corriqueira nem nos damos conta dela quando precisamos realiz&aacute;-la, a menos em casos como quando a escada &eacute; muito alta e nos provoca preocupa&ccedil;&otilde;es. Nessas situa&ccedil;&otilde;es, em geral perguntamos &ldquo;ser&aacute; que n&atilde;o tem um elevador por perto?&rdquo; </p>
        <CenterBoxContainer>
            <AlgorithmBox>
                <Title>Algoritmo 08 - Subir uma escada</Title>
                <AlgorithmLevel>
                    <AlgorithmLevel showStyle={true}>
                        <li><span className="textred">Enquanto</span> houver degrau à sua frente <span className="textred">faça</span>
                            <AlgorithmLevel child={true}>
                                Suba o degrau à sua frente.
                            </AlgorithmLevel>
                        </li>
                    </AlgorithmLevel>
                </AlgorithmLevel>
            </AlgorithmBox>
		</CenterBoxContainer>
    </Fragment>
)

export default AplicacoesParte1