import React, {Fragment} from 'react'

/*ESTE COMPONENTE DEVE RECEBER COMO PROPRIEDADE O SEGUINTE ITEM:
    unitId: String, representa o id da unidade em que a atividade se encontra
.*/
class Problemas extends React.Component{
    render() {
        return (
            <Fragment>
                <p><strong>Problema 1.</strong> Descreva a constru&ccedil;&atilde;o de um c&iacute;rculo, dividido em 8 partes  iguais, usando um compasso, uma r&eacute;gua e um l&aacute;pis.</p>
                <p><strong>Problema 2.</strong> Descreva o algoritmo para determina&ccedil;&atilde;o do m&aacute;ximo divisor  comum entre dois n&uacute;meros.</p>
                <p><strong>Problema 3.</strong> Descreva a prepara&ccedil;&atilde;o de uma sopa de legumes. Considere  seus ingredientes prediletos.</p>
                <p><strong>Problema 4.</strong>  Apresente uma situa&ccedil;&atilde;o-problema, preferencialmente de  sua &aacute;rea de interesse, nas quais voc&ecirc; identifica a possibilidade de  utiliza&ccedil;&atilde;o do pilar &ldquo;algoritmo&rdquo; do pensamento computacional, para apoiar  a elabora&ccedil;&atilde;o de solu&ccedil;&otilde;es.</p>
            </Fragment>
        )
    }
}

export default Problemas