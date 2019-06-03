import React, { Fragment } from 'react'
import CenterBoxContainer from '../../../generics/center_box_container'
import Box from '../../../generics/box'
import Color from '../../../../constants/color'
import Strong from '../../../generics/font/strong'

const Texto2 = () => (
    <Fragment>
        <p>Neste curso iremos tratar do que tem sido chamado os 4 Pilares do Pensamento Computacional, a saber: <Strong>Abstra&ccedil;&atilde;o</Strong>, <Strong>Decomposi&ccedil;&atilde;o</Strong>, <Strong>Reconhecimento de Padr&otilde;es</Strong> e <Strong>Algoritmos</Strong>. Antes de prosseguirmos, vamos examinar dois exemplos de problemas cujo processo de busca de solu&ccedil;&otilde;es pode beneficiar-se do Pensamento Computacional.</p>
        <p>No <Strong>Quadro 1</Strong> apresentamos uma situa&ccedil;&atilde;o que pode acontecer com qualquer pessoa que resolva fazer compras em um supermercado sem ter se organizado com anteced&ecirc;ncia e &ldquo;pensado computacionalmente&rdquo; sobre essa atividade.</p>
        <h2>Quadro 1</h2>
        <CenterBoxContainer>
            <Box backgroundColor={Color.GRAY_BOX}>
                <h3>Uma ida n&atilde;o planejada ao supermercado</h3>
                <p>O Sr. Jos&eacute; saiu do trabalho por volta das 19 horas. No caminho de casa, ao se aproximar de um supermercado, imaginou que talvez precisasse fazer algumas compras. Olhou o rel&oacute;gio e viu que ainda tinha um tempinho sobrando.</p>
                <p>Ap&oacute;s entrar no supermercado, lembrou que n&atilde;o tinha nada anotado e pensou, &ldquo;bom, algumas coisas eu tenho certeza que preciso&rdquo;. Andou ent&atilde;o ao longo de uns cinco corredores, em uma ordem aleat&oacute;ria, e pegou alguns itens que lembrou. Nisso veio a d&uacute;vida, &ldquo;talvez falte algo importante que eu n&atilde;o lembro, j&aacute; que estou aqui, &eacute; melhor procurar um pouco mais, certamente alguma coisa vir&aacute; &agrave; tona&rdquo;, pensou ele.</p>
                <p>De onde estava, o Sr. Jos&eacute; come&ccedil;ou a percorrer, para a direita, <Strong>todos</Strong> os corredores do supermercado, tentando identificar produtos que poderiam lhe fazer falta. Pegou um aqui, outro ali, o carrinho enchendo, o tempo passando e de repente nosso amigo percebeu que j&aacute; tinha passado uma hora, e isso j&aacute; estava indo al&eacute;m do tempo que tinha imaginado. Resolveu dirigir-se para o caixa. Entretanto, pensou, &ldquo;j&aacute; gastei muito tempo e n&atilde;o vi as demais prateleiras. Pode ser que algo importante tenha sido esquecido&rdquo; e assim resolveu continuar percorrendo os corredores do supermercado. Ao final, o Sr. Jos&eacute; dirigiu-se para o caixa, pagou e foi para casa com suas compras.</p>
                <p>Quando terminou de guardar as compras, j&aacute; eram 21h30 e ainda n&atilde;o havia jantado, sendo que pretendia trabalhar ainda um pouco depois do jantar. Sobre a mesa da cozinha, ficaram algumas compras que n&atilde;o conseguiu guardar na geladeira, por falta de espa&ccedil;o. Observou ainda que alguns itens importantes, at&eacute; mesmo imprescind&iacute;veis para o resto da semana, n&atilde;o haviam sido comprados, enquanto itens dos quais tinha uma boa quantidade em casa haviam sido comprados novamente, sem necessidade. Bom, o mais dif&iacute;cil mesmo ia ser descobrir onde guardar os perec&iacute;veis que n&atilde;o couberam no refrigerador.</p>
            </Box>
        </CenterBoxContainer>
        <p><Strong>Problema 1.</Strong> Elabore uma lista de sugest&otilde;es para o Sr. Jos&eacute;, para ele n&atilde;o incorrer nos problemas identificados ap&oacute;s sua visita ao supermercado (Quadro 1).</p>
    </Fragment>
)

export default Texto2
