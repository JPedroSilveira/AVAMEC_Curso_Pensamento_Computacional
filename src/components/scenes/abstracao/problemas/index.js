import React, { Fragment } from 'react'
import Strong from '../../../generics/font/strong'

/*ESTE COMPONENTE DEVE RECEBER COMO PROPRIEDADE O SEGUINTE ITEM:
    unitId: String, representa o id da unidade em que a atividade se encontra
.*/
class Problemas extends React.Component {
    render() {
        return (
            <Fragment>
                <p><Strong>Problema 1.</Strong> Imagine que voc&ecirc; &eacute; o gerente de um supermercado, ou simplesmente o  encarregado pelo sal&atilde;o de vendas. Como voc&ecirc; poderia organizar os produtos de um  supermercado para facilitar a vida dos clientes ao tentar encontrar os itens de suas  listas de compras? Imagine o que aconteceria aos clientes de seu supermercado se  tiverem que fazer suas compras em uma loja na qual os produtos est&atilde;o dispersos, sem  qualquer agrupamento para facilitar a localiza&ccedil;&atilde;o?</p>
                <p><Strong>Problema 2.</Strong> Imagine que voc&ecirc; &eacute; o diretor de uma escola e que precisa organizar o  trabalho da equipe de apoio. Quais os grandes grupos de atividades que voc&ecirc; consegue  destacar para garantir o funcionamento de sua escola?</p>
                <p><Strong>Problema 3.</Strong> Construa uma situa&ccedil;&atilde;o-problema, preferencialmente de sua &aacute;rea de  interesse, onde voc&ecirc; identifica a possibilidade de utiliza&ccedil;&atilde;o deste pilar do pensamento  computacional, para apoiar a elabora&ccedil;&atilde;o de solu&ccedil;&otilde;es.</p>
            </Fragment>
        )
    }
}

export default Problemas