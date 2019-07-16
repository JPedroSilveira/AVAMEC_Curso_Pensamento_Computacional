import React, { Fragment } from 'react'
import TextSimpleJustify from '../../../generics/text/simple-justify'
import Image from '../../../generics/image'
import ExampleBox from '../../../generics/text/example-box'

import TitleTwo from '../../../../images/content/abstracao/title-two.svg'
import ExampleOne from '../../../../images/content/abstracao/example-one.svg'
import ExampleTwo from '../../../../images/content/abstracao/example-two.svg'
import InfoTwo from '../../../../images/content/abstracao/info-two.svg' 

class Slide4 extends React.Component {
    render() {
        return (
            <Fragment>
                <TextSimpleJustify marginTop="150px">
                    <Image marginLeft="-30px" marginBottom="50px" height="auto" width="900px" src={TitleTwo} />
                    <ExampleBox title={"Exemplo 1"} exampleTitle={"Mapa"} >
                        <p>Lembra do mapa que fizemos para o planejamento da nossa viagem? Ele é uma abstração da região que estamos percorrendo. Nele apontamos todos os pontos importantes para chegarmos até Atenas.</p>
                        <p>O que acha de fazer um mapa semelhante para o bairro onde você mora? Com os pontos de seu interesse onde você compra comida, roupas, pratica esportes, faz lanches, encontra com os amigos, enfim pontos relativos a coisas.</p>
                        <Image marginTop="50px" height="auto" width="700px" src={ExampleOne} />
                    </ExampleBox>
                    <ExampleBox marginTop="50px" title={"Exemplo 2"} exampleTitle={"Organizando uma biblioteca particular (ou coletiva)"} >
                        <p>Vejamos um contexto bem familiar aos professores, o mundo dos livros. Quando eles são poucos, pode-se encontrar o exemplar que se procura com apenas uma rápida olhada em uma ou mais prateleiras. Mas, se houver uns 200 ou mais livros, já pode ser mais trabalhoso encontrar-se exatamente aquele que interessa num dado instante. Assim, quem convive com muitos livros, depara-se com o problema de como organizá-los, para garantir sua fácil localização.</p>
                        <p>Nessa situação é indicada a criação de categorias para organizar os livros. Isso vai requerer o uso de um processo de abstração, para identificar os detalhes que importam para resolver esse problema.</p>
                        <Image marginTop="50px" marginBottom="50px" height="auto" width="700px" src={ExampleTwo} />
                        <p>Em uma biblioteca organizada dessa forma, tanto a busca por determinados livros quanto o armazenamento de novos livros tendem a ocorrer de forma mais simples.</p>
                    </ExampleBox>
                    <ExampleBox marginTop="50px" title={"Exemplo 3"} exampleTitle={"Mantendo a escola em ordem"} >
                        <p>Da mesma forma que abstraímos detalhes de objetos, podemos abstrair detalhes de atividades, ações e processos de uma maneira mais geral. Considere por exemplo a garantia do funcionamento diário de uma escola. É necessário identificar uma lista de rotinas necessárias, para que se possa distribuir tarefas aos membros da equipe de apoio.</p>
                        <p>Assim, podemos pensar nas rotinas “manter os equipamentos digitais da escola”, “manter a despensa abastecida”, ou ainda “manter o registro escolar atualizado”. Essas rotinas expressas por uma frase foram obtidas por um processo de abstração que consistiu em selecionar, dentre as atividades realizadas para “manter a escola em ordem”, aquelas que pudessem se encaixar em uma dessas denominações.</p>
                    </ExampleBox>
                    <Image marginTop="50px" marginBottom="50px" height="auto" width="700px" src={InfoTwo} />
                </TextSimpleJustify>
            </Fragment>
        )
    }
}

export default Slide4
