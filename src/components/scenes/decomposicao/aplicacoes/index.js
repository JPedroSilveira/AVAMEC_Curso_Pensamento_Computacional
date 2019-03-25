import React from 'react'
import IMGDecomposicao1 from '../../../../images/decomposicao_1.jpg'
import IMGDecomposicao2 from '../../../../images/decomposicao_2.png'
import IMGDecomposicao3 from '../../../../images/decomposicao_3.png'
import IMGDecomposicao4 from '../../../../images/decomposicao_4.png'
import Image from '../../../generics/image'
import ExternalLink from '../../../generics/external_link'

const Aplicacoes = () => (
    <div>
        <h2>APLICAÇÕES</h2>
        <p>Pensemos, por exemplo, no uso do princípio da decomposição para resolver um problema relativamente comum: corrigir o defeito em um carro cujo motor não funciona (não liga). Ora, apesar de nosso conhecimento limitado sobre veículos automotores convencionais, sabemos que os mesmos podem ser decompostos segundo seus vários "sistemas" (Figura 1), como elétrico, mecânico e de combustível, todos relacionados ao funcionamento do motor, além, é claro, de existirem outros não relacionados diretamente ao motor, como carroçaria, estofamento, equipamento de som, etc. Cada um dos sistemas mencionados poderia ser decomposto em sistemas mais simples: o mecânico, por exemplo, poderia ser dividido em suspensão, direção, transmissão, etc. A transmissão, por sua vez, compreenderia o câmbio (marchas), eixos e juntas de movimento, e assim por diante. </p>
        <Image src={IMGDecomposicao1} alt="Carro com a carroceria transparente, exibindo freios, sistema elétrico, motor, transmissão, suspensão e sistema de direção.">
            <p> 
                <strong>Figura 1: Componentes de um Veículo automotor </strong><br/>
                <ExternalLink href="http://breno.freeshell.org/Est_veic.pdf">
                    Fonte: http://breno.freeshell.org/Est_veic.pdf</ExternalLink> 
            </p>
        </Image>
        <p>Então, para descobrir o problema do carro que não funciona, iniciaríamos por abstrair de nossa análise os elementos não diretamente relacionados com o funcionamento do motor, analisando então cada sistema que potencialmente poderia gerar o defeito, verificando se seu funcionamento está como esperado e, se não for o caso, identificando e corrigindo o defeito encontrado.</p>
        <p>Guardadas as devidas proporções, o corpo humano poderia ser analisado segundo alguns de seus sistemas (Figura 2) - nervoso, digestivo, circulatório, muscular etc - e qualquer problema de saúde, afetando um ou mais desses sistemas, poderia ser identificado através de um processo análogo (embora muito mais rigoroso) ao citado acima.</p>
        <Image src={IMGDecomposicao2} alt="Seis images do corpo humano, primeira com o esqueleto, segunda com o sistema nervoso, terceira com o sistema sanguíneo, quarta com o sistema respiratório, quinta com o sistema digestivo e sexta com o sistema muscular">
            <p> 
                <strong>Figura 2 : Corpo humano - Resumo dos Subsistemas </strong><br/>
                <ExternalLink href="https://www.anatomiadocorpo.com">
                    Fonte: https://www.anatomiadocorpo.com/</ExternalLink>
            </p>
        </Image>
        <p>No cotidiano encontramos muitos exemplos de decomposição, em atividades em que buscamos separar o todo em subsistemas. Um exemplo bem familiar é a organização de uma moradia.  Um arranjo frequente é a divisão de uma habitação em sala de estar, escritório, sala de jantar, cozinha, banheiro  e dormitórios (Figura 3).</p>
        <Image src={IMGDecomposicao3} alt="Casa vista de cima, sem o teto, exibindo dois quartos, um banheiro, uma área de serviço, uma cozinha, uma sala, uma varanda com um carro e um pátio de grama verde em torno da casa.">
            <p> 
                <strong> Figura 3: Planta Baixa de uma casa </strong><br/>
                <ExternalLink href="https://www.decorfacil.com/plantas-de-casas">
                    Fonte: https://www.decorfacil.com/plantas-de-casas/</ExternalLink> 
            </p>
        </Image>
        <p>Essa divisão cria espaços específicos, no que diz respeito à funcionalidade, à mobília, à decoração, aos frequentadores e aos horários de uso  e, de certa forma, ela também tem repercussões na organização do trabalho. Por exemplo, quando são os próprios habitantes que cuidam da limpeza, é comum se organizar uma tabela periódica de tarefas, determinando data, tarefa e responsável. Pensando ainda na divisão de trabalho, podemos considerar que durante nova pintura da casa, cada compartimento pode ser realizado por um profissional diferente, reduzindo com isso o tempo necessário para a manutenção.</p>
        <p>Ainda podemos acrescentar outra aplicação desse pilar do Pensamento Computacional, em um tópico importante na educação, o processo de avaliação. Para não sobrecarregar a conversa, vamos aplicar o exemplo no campo carnavalesco. Vamos falar em avaliação de escolas de sambas, nesse caso, considerando um julgamento, pois trata-se de um processo classificatório, sujeito a premiações (inclusive progressão) e penalidades (rebaixamento). O evento, no desfile mais tradicional, que é o do Grupo Especial, é transmitido para o mundo inteiro e faz o Rio de Janeiro  fervilhar de visitantes.</p>
        <p>Por ser uma das paixões do povo brasileiro, o desfile do Rio de Janeiro desperta muita atenção, emoção e, é claro, confusão. Além do mais, a produção de um desfile é dispendiosa, envolve o trabalho de muita gente e por tudo isso, envolve grandes questões sociais e econômicas. Não é uma atividade trivial fazer uma avaliação que premia algumas escolas, mas que também rebaixa outras. É preciso muito carinho e competência.                    </p>
        <Image src={IMGDecomposicao4} alt="Foto de um desfile de carnaval no Rio de Janeiro com a arquibancada lotada e na rua passando diversos carros alegórcos.">
            <p> 
                <strong>Figura 4: Desfile de Escola de Samba do Rio de Janeiro </strong><br/>
                <ExternalLink href="http://www.portaldarmc.com.br/noticias-brasil-e-mundo/2017/01/carnaval-2017-comecam-as-vendas-de-ingressos-para-o-desfile-no-rio-de-janeiro-das-escolas-de-samba-do-grupo-especial/">
                    Fonte: http://www.portaldarmc.com.br/noticias-brasil-e-mundo/2017/01/carnaval-2017-comecam-as-vendas-de-ingressos-para-o-desfile-no-rio-de-janeiro-das-escolas-de-samba-do-grupo-especial/</ExternalLink> 
            </p>
        </Image>
        <p>O desfile de uma escola de samba é considerado uma ópera, onde mais de 3 mil pessoas desfilam, cantando e sambando, agrupadas em diferentes setores (alas). Cada escola tem um enredo e um samba-enredo. O enredo é o mote para a concepção do carnavalesco, a partir do qual são elaboradas todas as fantasias, adereços, carros alegóricos e a apresentação da comissão de frente. É o enredo também que oferece o mote para a elaboração do samba enredo. A criação do samba enredo é um trabalho à parte, realizado pelos compositores da escola que, individualmente ou em pequenos grupos, compõem uma obra, letra e música, em um ritmo denominado samba de partido-alto. Algumas alas são tradicionais, como a Ala dos Compositores, a Ala das Baianas, a Ala dos Passistas e a comissão de frente.</p>
        <p>Os quesitos para o Carnaval 2018 - Série A, segundo o regulamento da LIERJ foram: Bateria; Samba-Enredo; Harmonia;  Evolução; Enredo; Alegoria e Adereços; Fantasias; Comissão de Frente; Mestre-Sala e Porta-Bandeira. Cada quesito é avaliado por 4 julgadores, que atribuem à escola uma nota de 9,0 (nove) a 10 (dez), em notas fracionadas com 1 casa decimal. No julgamento, a nota de cada quesito é determinada pela média aritmética das notas com valores intermediários, ou seja, a maior e a menor nota são excluídas, caso existam. Por exemplo, para um quesito com as notas 9,1; 9,6; 9,8 e 10 a média será a nota 9,7.</p>
    </div>
)

export default Aplicacoes