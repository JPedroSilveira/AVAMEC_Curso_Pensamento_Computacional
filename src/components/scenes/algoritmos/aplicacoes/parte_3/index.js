import React, { Fragment } from 'react'
import Title from '../../../../generics/title'
import CenterBoxContainer from '../../../../generics/center_box_container'
import AlgorithmLevel from '../../../../generics/algorithm_level'
import AlgorithmBox from '../../../../generics/algorithm_box'
import CenterText from '../../../../generics/center_text'
import Strong from '../../../../generics/font/strong'

const AplicacoesParte3 = () => (
    <Fragment>
        <h3>Uma experiência escolar em tempo de Cultura Digital</h3>
        <p>Professores diariamente precisam propor atividades para seus alunos, buscando apoi&aacute;-los na constru&ccedil;&atilde;o de conhecimento sobre determinados assuntos. No caso a seguir, estamos supondo que os alunos tenham acesso a computadores e Internet, seja no laborat&oacute;rio de Inform&aacute;tica da escola ou mesmo em suas resid&ecirc;ncias. Assim, estamos considerando a possibilidade do uso de editor de texto, consultas &agrave; Internet e troca de mensagens por email.</p>
        <CenterBoxContainer>
            <AlgorithmBox>
                <Title>Algoritmo 10 – Explorando um tema na sala de aula</Title><br />
                <p className="textblue"><CenterText>(uma experiência de aprendizagem cooperativa na cultura digital)</CenterText></p>
                <AlgorithmLevel>
                    <span className="textdarkgreen"><Strong>Pré condições</Strong>: sentados em suas mesas, dispostas em círculo, os alunos recebem um texto selecionado pelo(a) professor(a).</span>
                    <AlgorithmLevel showStyle={true}>
                        <li>Ler o texto atentamente;</li>
                        <li>Elaborar e registrar, em uma folha com seu nome, 2 questões sobre o texto lido;</li>
                        <li>Passar as suas questões para o colega que está à sua esquerda;</li>
                        <li>Receber a lista de questões que lhe foi passada pelo colega que está à sua direita;</li>
                        <li>Responder uma das questões;</li>
                        <li>Passar a lista para o colega que está à sua esquerda;</li>
                        <li>Receber uma nova lista que lhe foi passada pelo colega que está à sua direita;</li>
                        <li>Responder uma das questões ainda não respondidas;</li>
                        <li>Entregar a lista que está em suas mãos ao colega que a escreveu;</li>
                        <li>Em casa, digitar a sua questão e as respostas recebidas e compartilhá-lhas por email com o professor;</li>
                        <li>Fazer pesquisas nos livros e na Internet e escrever um pequeno texto com as respostas às suas perguntas e enviar por email para todos os colegas e para o professor.</li>
                    </AlgorithmLevel>
                    <span className="textdarkgreen">Posteriormente o professor fará uma compilação das perguntas e respostas e distribuirá para todos os alunos. Em outro momento presencial, a turma discutirá sobre as questões que surgiram e as diferentes respostas, para consolidar as aprendizagens.</span><br />
                </AlgorithmLevel>
            </AlgorithmBox>
        </CenterBoxContainer>
    </Fragment>
)

export default AplicacoesParte3