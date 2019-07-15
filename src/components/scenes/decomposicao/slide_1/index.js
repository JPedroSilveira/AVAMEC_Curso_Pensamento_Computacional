import React, { Fragment } from 'react'
import TextStandardBox from '../../../generics/text/standard-box'
import Image from '../../../generics/image'
import Strong from '../../../generics/font/strong'
import GreekMap from '../../../../images/content/decomposicao/greek-map.svg'
import DiagramOne from '../../../../images/content/decomposicao/diagram-one.svg'

class Slide1 extends React.Component {
    render() {
        return (
            <Fragment>
                <TextStandardBox>
                    <p>Já pensou o que poderia acontecer com Fidípides se ele não pensasse no trajeto para chegar a Atenas?</p>
                    <p>Se ele tivesse que cruzar as montanhas, levaria muito mais tempo e provavelmente não conseguiria cumprir a sua missão, por isso é importante ter ideia do problema como um todo e dividi - lo em partes, de modo a conseguir resolvê - lo em problemas menores.</p>  
                </TextStandardBox>
                <Image marginTop="50px" marginBottom="50px" height="auto" width="700px" src={GreekMap}/>
                <TextStandardBox marginBottom="100px">
                    <p>Dividindo o problema em <Strong>“subproblemas”</Strong>, Fidípides consegue mentalizar cada uma das partes do caminho, e se em alguma delas ele não conseguir fazer isso, pode dividir essa parte em outros “subproblemas” e a assim sucessivamente, até que tenha a solução para cada uma das partes.</p>
                    <p>Chamamos isso de estratégia da <Strong>“divisão e conquista”</Strong>.</p>
                    <Image height="auto" width="600px" src={DiagramOne} />
                </TextStandardBox>
            </Fragment>
        )
    }
}

export default Slide1
