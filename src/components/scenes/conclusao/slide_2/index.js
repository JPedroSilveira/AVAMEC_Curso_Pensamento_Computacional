import React, { Fragment } from 'react'
import StandardTextBox from '../../../generics/text/standard-box'
import Title from '../../../generics/title'
import ItalicFont from '../../../generics/font/italic'
import ExternalLink from '../../../generics/external_link'
import Monograph from '../../../../doc/monografia_pensamento_computacional.pdf'
import WingJComputationalThinking from '../../../../doc/WING_J-Computational_thinking.pdf'

const Slide2 = () => (
    <Fragment>
        <StandardTextBox marginBottom="100px" marginTop="100px">
            <Title>Referências Bibliográficas</Title>
            <p>JOHNSON, D.W. and JOHNSON, R. (1989) <ItalicFont>Cooperation and Competition: Theory and Research</ItalicFont>. Edina, MN: Interaction Book Company, 1989.</p>
            <p>PAPERT, S. <ItalicFont>Mindstorms: Children, Computers and Powerful Ideas</ItalicFont>. New York: Basic Books, 1980.</p>
            <p>PEREIRA, Vivian Lane Souto (2003). <ItalicFont>Um ambiente para Apoio ao Método JIGSAW de Aprendizagem Cooperativa</ItalicFont>. Dissertação de mestrado, Programa de Pós-graduação em Engenharia Elétrica, UFPE.</p>
            <p>POLYA, George. <ItalicFont>A Arte de Resolver Problemas: um novo aspecto do método Matemático</ItalicFont>. Rio de Janeiro: Editora Interciência, 1995.</p>
            <p>SLAVIN, Robert E. (1995) <ItalicFont>Cooperative Learning Theory, research and practice</ItalicFont>. Allyn & Bacon, 1995.</p>
            <p>VICARI, Rosa. et al. Pensamento Computacional – Revisão Bibliográfica. Monografia. Instituto de informática, UFRGS, 2019. Disponível <ExternalLink href={Monograph}>aqui</ExternalLink>.</p>
            <p>WING, J. <ItalicFont>Computational thinking</ItalicFont>. Communications of the. ACM 49, 3, March 2006. Tradução para o português disponível <ExternalLink href={WingJComputationalThinking}>aqui</ExternalLink>.</p>
        </StandardTextBox>
    </Fragment>
)

export default Slide2
