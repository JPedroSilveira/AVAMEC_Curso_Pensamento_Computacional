import React from 'react'
import { slide as BurgerMenu } from 'react-burger-menu'
import './styles.css'

class Menu extends React.Component {
    render() {
        return (
            <div className="container-menu">
                <BurgerMenu right width={'20%'}>
                    <h1 className="menu-title">MENU</h1>
                    <a id="apresentacao" className="menu-item" href="/">Apresentação</a>
                    <div className="linha-espaçamento"></div>
                    <a id="introducao" className="menu-item" href="/">Introdução</a>
                    <div className="linha-espaçamento"></div>
                    <a id="decomposicao" className="menu-item" href="/">Decomposição</a>
                    <div className="linha-espaçamento"></div>
                    <a id="abstracao" className="menu-item" href="/">Abstração</a>
                    <div className="linha-espaçamento"></div>
                    <a id="reconhecimento" className="menu-item" href="/">Reconhecimento de Padrões</a>
                    <div className="linha-espaçamento"></div>
                    <a id="algoritmos" className="menu-item" href="/">Algoritmos</a>
                    <div className="linha-espaçamento"></div>
                    <a id="habilidade" className="menu-item" href="/">Habilidade interdisciplinar</a>
                    <div className="linha-espaçamento"></div>
                    <a id="trabalho" className="menu-item" href="/">Trabalho cooperativo</a>
                </BurgerMenu>
            </div>
        )
    }
}

export default Menu