import React, { Fragment } from 'react'
import TextStandardBox from '../../../generics/text/standard-box'
import TextWithImageRight from '../../../generics/text/with-image-right'
import Image from '../../../generics/image'

import Aristotle from '../../../../images/content/abstracao/aristotle.svg'
import InfoOne from '../../../../images/content/abstracao/info-one.svg'  
import InfoOneTwo from '../../../../images/content/abstracao/info-one-two.svg'  
import Trash from '../../../../images/content/abstracao/trash.svg'

class Slide1 extends React.Component {
    render() {
        return (
            <Fragment>
                <TextStandardBox>
                    <p>Diferentes tipos de vegetação possuem características distintivas que permitem sua identificação mais fácil, o que pode ser útil para os mais variados propósitos. O mesmo observa-se nos animais.</p>
                    <TextWithImageRight marginTopImage="50px" marginTopText="100px" width="350px" src={Aristotle}>
                        <p>Aristóteles foi o primeiro a desenvolver um sistema de classificação dos seres vivos, organizando-os em categorias a partir de suas características comuns e relações de parentesco evolutivo, ou seja, com base em abstrações desses seres.</p>
                    </TextWithImageRight>
                </TextStandardBox>
                <Image marginTop="50px" marginBottom="50px" height="auto" width="700px" src={InfoOne} />
                <TextStandardBox>
                    <p>Assim como na Biologia, em todos os campos do saber, seja com fins científicos, empresariais e até mesmo para as nossas atividades cotidianas, é importante organizar os objetos e os processos de forma conveniente e, para isso, a abstração é com frequência utilizada. Para tratar de um problema do mundo atual, o cuidado com a preservação do meio ambiente, procuramos separar o lixo que produzimos. Para facilitar a tarefa, criamos abstrações, assim ao invés de enumerar todos os itens que podemos encontrar no lixo, agrupamos os resíduos pelo tipo de tratamento que pretendemos dar a eles, como papel, vidro, orgânico, plástico, etc.</p>
                    <Image marginTop="25px" marginBottom="25px" height="auto" width="550px" src={Trash} />
                </TextStandardBox>
                <Image marginTop="50px" marginBottom="100px" height="auto" width="700px" src={InfoOneTwo} />
            </Fragment>
        )
    }
}

export default Slide1
