import React, { Fragment } from 'react'
import StandardTextBox from '../../../generics/text/standard-box'
import ItalicFont from '../../../generics/font/italic'

const Slide1 = () => (
    <Fragment>
        <StandardTextBox marginBottom="100px" marginTop="50px">
            <p>Chegamos ao fim deste curso introdutório sobre Pensamento Computacional, em que foram discutidos seus quatro pilares fundamentais: Abstração, Decomposição, Reconhecimento de Padrões, e Algoritmos, bem como Pensamento Computacional e Cooperação e Interdisciplinaridade.</p>
            <p>Por ser um curso introdutório, o enfoque adotado foi o desenvolvimento do tema Pensamento Computacional sem a exigência de conhecimentos prévios sobre Computação e computadores, exceto os necessários para acessar e acompanhar o curso no AVA MEC.</p>
            <p>Vimos tanto Fidípides, o personagem da Grécia clássica, encontrar soluções para os problemas da sua época, valendo-se do Pensamento Computacional, sem o recurso de qualquer máquina, como examinamos soluções de problemas modernos com o mesmo enfoque, ou seja, usando Pensamento Computacional “desplugado” (<ItalicFont>unplugged</ItalicFont>).</p>
            <p>Mas em boa parte do mundo atual, as máquinas permeiam a vida das pessoas e com frequência o uso do Pensamento Computacional acontece com a utilização de computadores, ou seja, na modalidade “plugado” (<ItalicFont>plugged</ItalicFont>), o quê coloca necessidades e problemas específicos para as sociedades e os sistemas educacionais.</p>
            <p>Sobretudo a partir da segunda metade do século XX, emergiu mundialmente a preocupação em discutir o tema Pensamento Computacional e integrá-lo aos sistemas educacionais (Vicari et al. 2019), o que significa não somente inseri-lo nos currículos, como também preparar os professores para ensiná-lo e utilizá-lo, plugado ou desplugado.</p>
            <p>No Brasil, a BNCC incorporou em vários pontos questões relativas ao Pensamento Computacional (Vicari et al. 2019). Logo, a preparação de professores e de todo o sistema escolar para a implementação de suas diretrizes é tarefa imediata, importante e necessária.</p>
            <p>Esse curso insere-se nesse contexto e será seguido por outros que aprofundem a compreensão e as possibilidades de implementação do Pensamento Computacional na Educação Básica Brasileira.</p>
        </StandardTextBox>
    </Fragment>
)

export default Slide1
