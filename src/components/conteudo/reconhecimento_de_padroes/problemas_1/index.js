import React from 'react'
import Tangram1 from '../../../../images/tangram1.png'
import Tangram2 from '../../../../images/tangram2.jpg'

const Problemas = () => (
    <div>
        <h2>Problemas:</h2>
        <h2>Resolvendo um Quebra-cabeça</h2>
        <p>Um tipo de quebra cabeça bastante famoso é o Tangram. O Tangram é formado por uma coleção de 7 peças geométricas, obtidas por um processo específico, a partir da subdivisão de um quadrado. São 5 triângulos, 1 quadrado e 1 paralelogramo.</p>
        <div className="imagem-centralizada">
            <img src={Tangram1} alt="Tangram montado com sete peças coloridas em formato de lozango."/>
            <p><strong>Figura 01: Um Tangram de 7 peças, coloridas</strong></p>
        </div>
        <p>Existe grande variedade de figuras que podem ser formadas com estas 7 peças. Uma questão central que se coloca é a cobertura de uma determinada figura com as peças de um Tangram.</p>
        <h4>Problema 1:</h4>
        <p>Elabore um algoritmo para produzir as peças de um Tangran a partir de uma folha de papel em forma de quadrado.</p>
        <h4>Problema 2:</h4>
        <p>Fazer a cobertura de uma imagem com as peças de um Tangram, conforme o molde na imagem a seguir.</p>
        <div className="imagem-centralizada">
            <img src={Tangram2} alt="Tangram desmontado feito com sete peças coloridas."/>
            <p><strong>Figura 02: Proposta para cobertura de um fundo com as peças de um Tangram: <br />(Fazer online no <a href="https://rachacuca.com.br/raciocinio/tangram/1/" target="_blank" rel="nofollow noopener noreferrer">site</a>, salvar a imagem em arquivo de postar no site do PC)</strong></p>
        </div>
    </div>
)

export default Problemas