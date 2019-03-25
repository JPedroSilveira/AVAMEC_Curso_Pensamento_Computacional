import React from 'react'
import CenterBoxContainer from '../../../generics/center_box_container'
import Box from '../../../generics/box'
import Color from '../../../../constants/color'
import ExternalLink from '../../../generics/external_link'

const Texto1 = () => (
    <div>
        <p>Em todas as áreas da atividade humana, nos deparamos com situações que apresentam problemas para os quais precisamos elaborar uma solução. O que em geral caracteriza um problema é a existência de um determinado objetivo que pretendemos alcançar, a partir de uma combinação adequada de recursos disponíveis. As situações podem ser bem simples e corriqueiras, como organizar um piquenique com a família em um determinado final de semana, de porte um pouco maior, como planejar a festa de final de ano da nossa escola, ou como elaborar  o planejamento anual de uma escola e, até mesmo, bem complexas, como  organizar o sistema escolar de um município. Esses problemas, regra geral, admitem mais de uma solução e, naturalmente, estamos interessados não apenas em uma solução qualquer, mas, sim, em uma boa solução</p>
        <p>Alguns exemplos interessantes:</p>
        <ul>
            <li>Preparar um sanduíche;</li>
            <li>Organizar e guardar a roupa da família , que acabou de sair da secadora:</li>
            <li>Planejar a mudança da família para uma nova cidade;</li>
            <li>Organizar a feira de ciências de sua escola;</li>
            <li>Organizar uma rede de abastecimento de alimentos;</li>
            <li>Organizar um evento esportivo, como por exemplo as olimpíadas.</li>
        </ul>
        <p>
            Antes de prosseguir, completamos a seção com um problema que há séculos entretém 
            crianças e adultos: 
            <strong> O fazendeiro, o lobo, a ovelha e a caixa de repolho. </strong>
        </p>
        <h2>QUADRO 1</h2>
        <CenterBoxContainer>
            <Box backgroundColor={Color.GRAY_BOX}>
                <h3>O FAZENDEIRO, O LOBO, A OVELHA E A CAIXA DE REPOLHO</h3>
                <p>
                    Um fazendeiro foi às compras à aldeia e lá comprou um <strong>lobo</strong>, 
                    uma <strong>caixa de repolho</strong> e uma <strong>ovelha</strong>. 
                    Na volta pra casa precisava atravessar um riacho, com todos os itens adquiridos e 
                    precisou alugar um barco. O que conseguiu era muito pequeno, o que não permitia 
                    que o fazendeiro atravessasse de uma só vez como todos os seus pertences. 
                    O barco só era capaz de suportar ele e mais um dos itens em cada viagem. 
                    Já estava pronto para começar a travessia, levando primeiramente o 
                    <strong> lobo</strong>, quando se deu conta que se deixasse a <strong>ovelha</strong> sozinha com 
                    a <strong>caixa de repolho</strong>, quando voltasse a <strong>caixa de repolho </strong> 
                    teria sido comida pela <strong>ovelha</strong>. Então pensou em levar primeiro o 
                    <strong> repolho</strong> e daí lembrou que a <strong>ovelha </strong> 
                    seria uma bela refeição para o<strong> lobo</strong>. 
                    Sentou um pouco e então começou a pensar como poderia fazer a travessia. 
                    Demorou um pouquinho, mas conseguiu. E você, quer tentar resolver o problema? 
                    Qual será uma possível sequência de travessias, idas e voltas do fazendeiro, 
                    que lhe permita transportar todas as suas compras, sem que nenhuma delas seja comida 
                    por seu predador?
                </p>
            </Box>
        </CenterBoxContainer>
        <p>Se quiser tentar um pouco, entre no endereço: <ExternalLink href="http://www.plastelina.net/game1.html">http://www.plastelina.net/game1.html</ExternalLink></p>
        <p>Se quiser ver uma animação, clique no endereço: <ExternalLink href="https://youtu.be/WmQCcBj_ROQ">https://youtu.be/WmQCcBj_ROQ</ExternalLink></p>
        <p>Para uma discussão pedagógica desse problema, recomendamos a leitura do texto “Piaget e nossa Inteligência” do professor Lino Macedo.</p>
        <p>Alguns problemas podem ser simples, enquanto outros são de natureza mais complexa. Os primeiros podem ser resolvidos diretamente, ou com o uso de estratégias simples e outros, mais complexos, podem requerer o uso de várias estratégias combinadas para sua solução.</p>
        <p>Independente dos elementos envolvidos nos problemas, por estarem em campos diferentes, podemos identificar um conjunto de estratégias similares, cuja aplicação isolada ou combinada pode contribuir para a resolução sistemática de problemas nos mais diversos âmbitos da atividade humana, sejam eles no transporte, na agricultura, na medicina, nas diversas engenharias, na logística e nas tarefas cotidianas. </p>
        <p> Apesar de existirem diferentes propostas para o agrupamento dessas estratégias, iremos tratar neste curso do que tem sido chamado os 4 pilares do Pensamento Computacional (<span className="span-referencia">referência</span>), a saber: a <strong>Abstração</strong>, a <strong>Decomposição</strong>, o <strong>Reconhecimento de Padrões</strong> e os <strong>Algoritmos</strong>.</p>
        <p>Na sequência de nosso curso exploraremos cada um desses pilares. </p>
    </div>
)

export default Texto1
