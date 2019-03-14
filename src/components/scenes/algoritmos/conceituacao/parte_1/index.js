import React from 'react'
import CenterBox from '../../../../generics/center_box'
import AlgorithmLevel from '../../../../generics/algorithm_level'
import AlgorithmBox from '../../../../generics/algorithm_box'


const ConceituacaoParte1 = () => (
    <div>
        <h2>CONCEITUAÇÃO</h2>
        <p>Habitamos um planeta repleto de diversidades, das quais podemos citar: solos, relevos, climas, acidentes geográficos, fauna e flora. Cada um desses elementos em si são, por sua vez,  repletos de outras diversidades. Além dos objetos naturais, ainda temos os artificiais, ou seja, aqueles construídos pelo homem. Vivemos pois, em espaços populados por objetos, naturais e artificiais (artefatos) de cores, tamanhos, constituição física, formas, comportamento e funcionalidades bem diferentes.</p>
        <p>Muitas atividades que fazemos, individualmente ou em grupo, são chamadas de rotinas. Desde quando acordamos até o deitar, realizamos em grande número desse tipo de atividade ao longo do dia. É bem verdade que não necessariamente as realizamos de forma igual todos os dias. Em geral as fazemos com ligeiras variações, em função das estações do ano, do dia da semana, de nossas ocupações etc. </p>
        <p>No quadro a seguir, apresentamos um algoritmo executado por uma grande quantidade de pessoas, em diferentes locais do planeta.</p>
        <CenterBox>
            <AlgorithmBox>
                <p className="title"><strong>Algoritmo 01 <br/> Iniciação - Do acordar até chegar no local de trabalho </strong> </p>
                <AlgorithmLevel showStyle>
                    <span className="textdarkgreen">Após o barulho do despertador:</span>
                    <AlgorithmLevel showStyle={true}>
                       <li>Despertar.</li>
                       <li>Calçar um chinelo.</li>
                       <li>Vestir uma roupa.</li>
                       <li>Escovar os dentes.</li>
                       <li>Tomar banho.</li>
                       <li>Trocar de roupa.</li>
                       <li>Ir à padaria.</li>
                       <li>Pegar os pães.</li>
                       <li>Pagar a conta.</li>
                       <li>Voltar para casa.</li>
                       <li>Fazer o café.</li>
                       <li>Escovar os dentes.</li>
                       <li>Fazer o desjejum.</li>
                       <li>Pegar a pasta de trabalho.</li>
                       <li>Sair de casa.</li>
                       <li>Pegar o veículo.</li>
                       <li>Deslocar-se para o trabalho.</li>
                    </AlgorithmLevel>
                </AlgorithmLevel>
            </AlgorithmBox>
        </CenterBox>
        <CenterBox>
            <h3>QUADRO 1: CONCEITUANDO ALGORITMO</h3>
        </CenterBox>
        <CenterBox>
            <div className="boxed quadro">
                <p>Esse é um exemplo de algo muito importante no campo da computação, um “Algoritmo”, ou seja, uma sequência finita de etapas (passos), para serem executadas por um agente, natural (os humanos) ou sintético (os computadores), em uma quantidade  finita de tempo. Isto implica que cada uma das suas etapas precisam ser executadas em um tempo finito. Estas duas propriedades são importante e precisam ser garantidas para que uma rotina possa ser chamada de algoritmo. Quantidade finita de passos e quantidade finita de tempo para a execução.</p>
            </div>
        </CenterBox>
        <br/>
        <p>Não se assuste, isso não faz de nós uma máquina, mas traz a evidência de que isso não é algo que apenas o pessoal da Ciência da Computação precisa conhecer. O <strong>Algoritmo 01</strong> é tão repetido por nós, que o executamos automaticamente, ou seja, sem refletir. Não é por acaso que, quando observamos alguém repetir uma sequência de etapas muito concentrado, dizemos “hoje ele/ela está no automático”.</p>
        <p>Você pode estar achando estranho ouvir dizer que essa sequência de etapas é um “algoritmo”, e que você realiza essa rotina (ou uma variação dela) todos os dias, cegamente, sem errar, de cor e salteado. Na verdade, você deve estar pensando que “apenas as máquinas agem assim, sem distração, sem olhar para o lado, sem dar uma paradinha”. Não é bem verdade, mas, façamos de conta que sim. Pense em uma pessoa que está executando a etapa <strong>"ir à padaria"</strong> e de repente encontra um amigo que lhe pede para subir um instante ao seu apartamento, pois ele precisa lhe entregar uma encomenda. Nesse momento, você segue o amigo, pega a encomenda e decide voltar em casa e deixar a encomenda, antes de continuar a execução do <strong>Algoritmo 01.</strong> Para sua surpresa, os computadores também podem exibir esse comportamento. Nesse momento, não é conveniente discutir isso, portanto, deixemos assim e, quando for oportuno, voltaremos ao caso.  O que importa é entender que você executa um algoritmo e que a execução só termina quando você conclui a última etapa. Se, por algum motivo, você precisa fazer alguma coisa durante a realização de uma etapa, isso não precisa atrapalhar a execução de sua rotina, basta lembrar onde você estava e depois seguir a partir desse ponto.</p>
    </div>
)

export default ConceituacaoParte1