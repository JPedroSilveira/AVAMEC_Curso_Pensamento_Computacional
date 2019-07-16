import React, { Fragment } from 'react'
import TextSimpleJustify from '../../../generics/text/simple-justify'
import TextStandardBox from '../../../generics/text/standard-box'
import TextWithImageRight from '../../../generics/text/with-image-right'
import ExampleBox from '../../../generics/text/example-box'

import Image from '../../../generics/image'

import IntroTwo from '../../../../images/content/reconhecimento_de_padroes/intro-two.svg'
import InfoOne from '../../../../images/content/reconhecimento_de_padroes/info-one.svg'
import Health from '../../../../images/content/reconhecimento_de_padroes/health.svg'

class Slide2 extends React.Component {
    render() {
        return (
            <Fragment>
                <Image marginTop="100px" marginBottom="50px" height="auto" width="900px" src={IntroTwo} />
                <TextStandardBox>
                    <TextWithImageRight src={Health}>
                        <p>Você já pensou que quando nos mudamos para uma nova cidade precisamos identificar muitas coisas simples, como onde comprar alimentos, onde encontrar um médico ou até mesmo onde praticar esportes?</p>
                    </TextWithImageRight>
                    <p>Ou que quando vamos à feira examinamos as frutas, as verduras e os legumes, buscando identificar sua qualidade, seu estado de maturidade, sua origem, etc.</p>
                    <p>Se pedirmos para um grupo de pessoas, que não conhecemos pessoalmente e cujas datas de nascimento também desconhecemos, que listem peças de teatro, músicas, modas, tipos de lazeres e acontecimentos que marcaram suas adolescências, é bem provável que consigamos identificar a década em que cada uma delas viveu esse período de suas vidas. Isso porque peças de teatro, músicas, modas, tipos de lazeres e acontecimentos marcantes costumam estabelecer um padrão que permite identificar uma época.</p>
                    <p>Desde criança, o hábito de identificar padrões nos acompanha, é uma construção continuada e o nosso repertório de padrões não para de crescer e de se reconstruir. As situações acima são exemplos onde o reconhecimento de padrões está presente. Somos uma competentíssima fábrica de padrões. Podemos dizer que ao longo da vida não paramos de construir um variadíssimo repertório de padrões, especializando-os quando necessário e sempre buscando generalizá-los para ampliar a gama de situações onde possam ser usados. Ao nos deparamos com um novo problema, é muito comum adotarmos um padrão de comportamento para abordá-lo.</p>  
                </TextStandardBox>
                <TextSimpleJustify marginTop={"50px"}>
                    <ExampleBox title={"Exemplo 1"} exampleTitle={"Já vi alguma situação parecida?"}>
                        <p>Você já se deparou com alguma situação nova e soube como lidar com ela a partir de uma experiência vivida? Isso é possível devido à identificação de padrões.</p>
                        <p>Veja algumas situações onde o reconhecimento de padrões também acontece:</p>
                        <ul>
                            <li>Prever o próximo número em uma dada sequência de números;</li>
                            <li>Identificar uma espécie de pássaro pelo seu padrão de voo;</li>
                            <li>Perceber o que existe de comum em piadas engraçadas e criar uma nova;</li>
                            <li>Estimar a hora a partir da posição do sol;</li>
                            <li>Antecipar uma possível chegada de chuva a partir da configuração das nuvens;</li>
                            <li>Identificar o sentido do vento, olhando para os galhos de uma árvore;</li>
                            <li>Escolher uma fruta pela cor de sua casca;</li>
                            <li>Diagnosticar uma doença com base em sintomas, aparências e comportamentos;</li>
                            <li>Perceber a chegada de uma pessoa pelo ritmo do som de sua pisada;</li>
                            <li>Identificar uma música pelo padrão de notas músicas de seu início (popularmente conhecido por jogo das sete notas);</li>
                            <li>Antecipar o que vai acontecer em um filme ou novela, baseado em eventos anteriores.</li>
                        </ul>
                    </ExampleBox>
                </TextSimpleJustify>
                <Image marginTop="50px" marginBottom="50px" height="auto" width="700px" src={InfoOne} />
            </Fragment>
        )
    }
}

export default Slide2
