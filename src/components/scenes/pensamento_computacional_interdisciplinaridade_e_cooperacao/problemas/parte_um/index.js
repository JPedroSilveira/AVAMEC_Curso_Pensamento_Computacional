import React, { Fragment } from 'react'

/*ESTE COMPONENTE DEVE RECEBER COMO PROPRIEDADE O SEGUINTE ITEM:
    unitId: String, representa o id da unidade em que a atividade se encontra
.*/
class ProblemasParteUm extends React.Component {
    render() {
        return (
            <Fragment>
                <p><strong>Problema 1.</strong> Procure identificar os pilares do Pensamento Computacional que est&atilde;o presentes no cen&aacute;rio proposto na Atividade Avaliativa A1, referente &agrave; campanha de esclarecimentos sobre cuidados na compra de alimentos.</p>
                <p><strong>Problema 2.</strong> Elaborar um plano de alimenta&ccedil;&atilde;o para algu&eacute;m que deseja perder peso, a partir de seus dados, destacando as diferentes disciplinas envolvidas. Procure refletir sobre quais pilares do Pensamento Computacional foram utilizados na elabora&ccedil;&atilde;o desse plano.</p>
                <p><strong>Problema 3.</strong> Elabora&ccedil;&atilde;o de um Projeto Escolar Interdisciplinar, partindo do bairro onde a escola est&aacute; localizada, e planejando a explora&ccedil;&atilde;o do bairro segundo seu surgimento, quais s&atilde;o os fundadores, quais os pontos de destaque, suas institui&ccedil;&otilde;es, sua economia, geografia, sua cultura, etc. Procure refletir sobre quais pilares do Pensamento Computacional foram utilizados na elabora&ccedil;&atilde;o desse projeto.</p>    
            </Fragment>
        )
    }
}

export default ProblemasParteUm