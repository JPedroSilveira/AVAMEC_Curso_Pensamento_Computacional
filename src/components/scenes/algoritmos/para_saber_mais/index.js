import React, { Fragment } from 'react'
import YouTubePlayer from '../../../generics/youtube_player'

class ParaSaberMais extends React.Component {
    render() {
        return (
            <Fragment>
                <h2>Para saber mais</h2>
                <p>A seguir apresentamos a resolu&ccedil;&atilde;o de um problema mais complexo.</p>
                <h3>Ordenação de Cilindros</h3>
                <p>A ordena&ccedil;&atilde;o &eacute; um problema recorrente nas atividades t&eacute;cnicas, mas tamb&eacute;m nas cotidianas. Nos dias de hoje, em que temos uma grande quantidade de dados, coletados nas mais diversas opera&ccedil;&otilde;es realizadas nas redes digitais, essa &eacute; uma atividade fundamental. Existem muitas maneiras de fazer ordena&ccedil;&atilde;o, usando estrat&eacute;gias diferentes, cada uma requerendo uma certa quantidade de tempo para a sua realiza&ccedil;&atilde;o.</p>
                <p>No v&iacute;deo a seguir s&atilde;o apresentadas duas maneiras de realizar a ordena&ccedil;&atilde;o dos cilindros com pesos diferente, utilizando uma balan&ccedil;a com dois pratos e nenhum padr&atilde;o de medida.</p>
                <YouTubePlayer videoId="Yiq-M8-ZC-U"/>
                <h2>Desafios sobre a ordenação de cilindros:</h2>
                <p>1. Elabore um texto, usando as estruturas de linguagem para descri&ccedil;&atilde;o de algoritmos apresentadas neste m&oacute;dulo, para descrever o algoritmo desenvolvido pelo primeiro agente do v&iacute;deo (o menino).</p>
                <p>2. Elabore um texto, usando as estruturas de linguagem para descri&ccedil;&atilde;o de algoritmos apresentadas neste m&oacute;dulo, para descrever o algoritmo executado pelo segundo agente do v&iacute;deo (a menina).</p>
                <p>3. Compare o desempenho dos dois algoritmos. Comece apresentando uma argumenta&ccedil;&atilde;o sobre o desempenho de cada um dos dois algoritmos. </p>
            </Fragment>
        )
    }
}
export default ParaSaberMais
