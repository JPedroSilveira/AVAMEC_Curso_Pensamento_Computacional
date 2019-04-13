import React from 'react'
import Image from '../../../generics/image'
import ExternalLink from '../../../generics/external_link'
import IMGMapaLolla2015 from '../../../../images/mapa_lolla2015.jpg'
import ItalicText from '../../../generics/italic_text'

const Aplicacoes = () => (
    <div>
        <h2>Aplicações</h2>
        <h4>Organizando uma biblioteca</h4>
        <p>Vejamos outro exemplo, cujo contexto conhecemos bem, pois convivemos, ao longo da vida, com muitos livros. Quando temos poucos, em quantidade não superior a 20, fica fácil encontrarmos o exemplar que estamos procurando, com apenas uma rápida olhada em uma prateleira. Mas, se tivermos uns 200 ou mais livros, já fica trabalhoso encontrar exatamente o livro que nos interessa num dado instante, nessa situação talvez seja bom criar uma abstração para resolver o nosso problema. Por exemplo, criar uma abstração denominada “gênero literário” ou, se tratando de livros técnicos, “disciplina”.</p>

        <h4>Conhecendo o Bairro onde Moro</h4>
        <p>Quando mudamos de residência, muitas vezes ocorre irmos morar em um bairro desconhecido. Nesta situação, nós e nossos familiares ficamos um tanto perdidos, sem saber exatamente onde fica a padaria, o supermercado, a escola de nossos filhos etc. Se escolhermos ir passeando pelo bairro, para conhecer <ItalicText>in loco</ItalicText> esse diferentes lugares, precisaremos de um pouco de ajuda, perguntando aos moradores onde ficam os locais onde desejamos ir. Uma outra estratégia é desenhar um mapa de nosso bairro, indicando as ruas que nos interessam e marcando bem onde fica cada local importante para nós. O mapa é uma abstração do nosso bairro, no qual colocaremos apenas as informações que necessitamos para nos localizarmos. Isso inclui as ruas e os locais importantes para nós. Em outras palavras, uma abstração de nosso bairro considerando apenas os elementos que interessam para nossa circulação. A figura abaixo apresenta o Mapa do Festival La Palooza 2015.</p>
        
        <Image src={IMGMapaLolla2015} alt="Mapa do local de realização do Festival Lolla Palooza de 2015">
            <p>
                <strong> Figura 1: Mapa do local de realização do Festival Lolla Palooza de 2015</strong>
                <br />
                <ExternalLink href="http://breno.freeshell.org/Est_veic.pdf">
                    Fonte: http://breno.freeshell.org/Est_veic.pdf
                </ExternalLink>
            </p>
        </Image>
        
        <h4>Organizando o guarda-roupa</h4>
        <p>Da mesma forma que abstraímos detalhes de objetos, podemos abstrair detalhes de atividades, ações, processos de uma maneira mais geral. Por exemplo, para descrever o trabalho de manter em ordem uma determinada residência, podemos denominar de “Organizar o guarda-roupa” a toda uma lista de atividades menores que são necessárias para colocar um guarda-roupa em ordem, abstraindo os detalhes sobre como essa atividade deve ser realizada.</p>
    </div>
)
export default Aplicacoes