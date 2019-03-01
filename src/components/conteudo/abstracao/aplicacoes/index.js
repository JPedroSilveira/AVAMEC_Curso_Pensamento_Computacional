import React from 'react'
import IMGMapaLolla2015 from '../../../../images/mapa_lolla2015.jpg'

const Aplicacoes = () => (
    <div>
        <h2>Aplicações</h2>
        <h4>Organizando uma biblioteca</h4>
        <p>Vejamos outro exemplo, cujo contexto conhecemos bem, pois convivemos, ao longo da vida, com muitos livros. Quando temos poucos, em quantidade não superior a 20, fica fácil encontrarmos o exemplar que estamos procurando, com apenas uma rápida olhada em uma prateleira. Mas, se tivermos uns 200 ou mais livros, já fica trabalhoso encontrar exatamente o livro que nos interessa num dado instante, nessa situação talvez seja bom criar uma abstração para resolver o nosso problema. Por exemplo, criar uma abstração denominada “gênero literário” ou, se tratando de livros técnicos, “disciplina”.</p>

        <h4>Conhecendo o Bairro onde Moro</h4>
        <p>Quando mudamos de residência, muitas vezes ocorre de irmos morar em um bairro desconhecido. Nesta situação, nós e nossos familiares ficamos um tanto perdidos, sem saber exatamente onde fica a padaria, o supermercado, a escola de nossos filhos etc. Se escolhermos ir passeando pelo bairro, para conhecer in loco esse diferentes lugares, precisaremos de um pouco de ajuda, perguntado aos moradores, onde ficam os locais onde desejamos ir. Uma outra estratégia é desenhar um mapa de nosso bairro, indicando as ruas que nos interessam e marcando bem onde fica cada local importante para nós. O mapa é uma abstração do nosso bairro, no qual colocaremos apenas as informações que necessitamos para nos localizarmos. Isto inclui as ruas e os locais importantes para nós. Em outras palavras, uma abstração de nosso bairro considerando apenas os elementos que interessam para nossa circulação. A figura abaixo apresenta o Mapa do Festival La Palooza 2015.</p>
        
        <div className="imagem-centralizada">
            <img src={IMGMapaLolla2015} alt="Mapa do local de realização do Festival Lolla Palooza de 2015"/>
            <p> <strong> Figura 1: Mapa do local de realização do Festival Lolla Palooza de 2015 </strong><br /><a href="http://breno.freeshell.org/Est_veic.pdf" target="_blank" rel="nofollow noopener noreferrer">Fonte: http://breno.freeshell.org/Est_veic.pdf</a> </p>
        </div>
        <h4>Organizando o guarda-roupas</h4>
        <p>Da mesma forma que abstrairmos detalhes de objetos, podemos abstrair detalhes de atividades, ações, processos de uma maneira mais geral. Por exemplo, para descrever o trabalho de manter em ordem uma determinada residência, podemos denominar de “Organizar o guarda-roupa”  à toda uma lista de atividades menores que são necessárias para colocar um guarda-roupa em ordem, abstraindo os detalhes sobre como esta atividade deve ser realizada.</p>
        <h2>Recomendações</h2>
        <ul>
            <li>Embora possa ser reutilizada em diferentes situações, a abstração geralmente atende a um propósito específico, assim, é essencial ter em mente qual o objetivo que se busca atingir com a tarefa que envolve abstração</li>
            <li>Num primeiro instante é importante registrar, possivelmente numa lista ou diagrama, os aspectos relacionados ao tema/objetivo/problema explorado para em seguida, separá-los segundo sua importância. Além de destacar as características mais importantes, várias outras serão identificadas como pouco ou nada importantes para o propósito considerado e podem ser desconsideradas naquele momento 	</li>
        </ul>
    </div>
)

export default Aplicacoes