import React, { Fragment } from 'react'
import TextSimpleJustify from '../../../generics/text/simple-justify'
import Image from '../../../generics/image'
import ProblemBox from '../../../generics/text/problem-box'

import TitleFour from '../../../../images/content/abstracao/title-four.svg'
import Fruits from '../../../../images/content/abstracao/fruits.svg'
import Books from '../../../../images/content/abstracao/books.svg'
import Light from '../../../../images/content/abstracao/light.svg'

class Slide5 extends React.Component {
    render() {
        return (
            <Fragment>
                <Image marginTop="100px" marginBottom="50px" height="auto" width="900px" src={TitleFour} />
                <TextSimpleJustify>
                    <ProblemBox marginBottom="50px" title={"Problema 1"} problemTitle={"Feira em Atenas"}>
                        <p>Você é o coordenador de uma feira em Atenas, de alimentos, vestuário, animais, e muitos outros itens.</p>
                        <p>Já imaginou o que aconteceria se na feira os produtos estivessem dispersos, sem qualquer agrupamento para facilitar sua localização? Utilizando o pilar Abstração, como você organizaria os feirantes, para facilitar a vida dos clientes na busca dos itens de suas listas de compras?</p>
                        <Image marginTop="50px" height="auto" width="350px" src={Fruits} />
                    </ProblemBox>
                    <ProblemBox marginBottom="50px" title={"Problema 2"} problemTitle={"Diretor de escola"}>
                        <p>Você é o diretor de uma escola e precisa organizar o trabalho da equipe de apoio. Quais os grandes grupos de atividades que você consegue destacar para garantir o funcionamento de sua escola?</p>
                        <Image marginTop="50px" height="auto" width="350px" src={Books} />
                    </ProblemBox>
                    <ProblemBox tmarginBottom="50px" itle={"Problema 3"} problemTitle={"Situação-problema"}>
                        <p>Construa uma situação-problema, preferencialmente de sua área de interesse, onde você identifica a possibilidade de utilização do pilar Abstração do Pensamento Computacional, para apoiar a elaboração de soluções.</p>
                        <Image marginTop="50px" height="auto" width="350px" src={Light} />
                    </ProblemBox>
                </TextSimpleJustify>
            </Fragment>
        )
    }
}

export default Slide5
