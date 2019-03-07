import React from 'react'

/*Itens do Drawer*/
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'

/*Itens do botão de menu*/
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

/*Outro itens utilizados*/
import ArrowForward from '@material-ui/icons/ArrowForward'
import Divider from '@material-ui/core/Divider'
import Logo from '../../images/logo.png'
import './styles.css'

const TIPO_SITUACAO_ATIVA = "ATIVO"

class Menu extends React.Component {

    constructor() {
        super()

        this.state = {
            aberto: false,
            unidades: []
        } 

        this.buscarUnidadesAPI()
    }

    /*Consulta a API do AvaMEC para buscar as unidades disponíveis*/
    buscarUnidadesAPI = () => {
        let API = new window.BridgeRestApi()

        window.addEventListener("evObtemDadosCurso", this.buscarUnidadeAPIResposta, false)

        API.obterDadosCurso()  
    }

    /*Trata a resposta da API para o método "buscarUnidadeAPI"*/
    buscarUnidadeAPIResposta = (evento) => {
        if (evento.detail.status === 200) {
            evento.detail.data.modulos.forEach(modulo => {
                modulo.unidades.forEach(unidade => {
                    if (unidade.situacao === TIPO_SITUACAO_ATIVA) {
                        this.state.unidades.push(unidade)
                    }
                })
            })
        }

        window.removeEventListener("evObtemDadosCurso", this.buscarUnidadeAPIResposta, false)
    }

    /*Atualiza o parâmetro de abertura do menu*/
    abrirMenu = (aberto) => () => {
        this.setState({
            aberto: aberto
        })
    }

    /*Carrega a lista de itens do menu conforme a lista "this.state.unidades"*/
    carregarListaUnidadesDrawer = () => {
        return (
            <div className="menu">
                <div className="titulo">
                    <img className="image" src={Logo} alt="Instituto de Informática da UFRGS"></img>
                </div>
                <List>
                    {this.state.unidades.map((unidade) => (
                        <div>
                            <div>
                                <ListItem id={unidade.identificador} 
                                        className="item" 
                                        button key={unidade.identificador} 
                                        onClick={this.mudarUnidade}>
                                    <ListItemIcon><ArrowForward /></ListItemIcon>
                                    <ListItemText primary={unidade.nome}/>
                                </ListItem>
                            </div>
                            <Divider />
                        </div>
                    ))}
                </List>
            </div>
        )
    }

    /*Carrega o drawer com a lista de unidades*/
    carregarDrawer = () => {
        return (
            <SwipeableDrawer
                anchor="right"
                open={this.state.aberto}
                onClose={this.abrirMenu(false)}
                onOpen={this.abrirMenu(true)}>
                <div
                    tabIndex={0}
                    role="button"
                    onClick={this.abrirMenu(false)}
                    onKeyDown={this.abrirMenu(false)}>
                    {this.carregarListaUnidadesDrawer()}
                </div>
            </SwipeableDrawer>
        )
    }

    /*Carrega o botão para abrir o menu*/
    carregarMenuButton = () => {
        return (
            <div className="menu-button">
                <IconButton color="inherit" aria-label="Menu" onClick={this.abrirMenu(true)}>
                    <MenuIcon className="menu-button-icon"/>
                </IconButton>
            </div>
        )
    }

    /*Requisita a troca de unidade para a API do AvaMEC*/
    mudarUnidade = (data) => {
        let API = new window.BridgeRestApi()

        API.obterUnidade(data.currentTarget.id)  
    }

    render() {
        return (
            <div>
                {this.carregarMenuButton()}
                {this.carregarDrawer()}
            </div>
        )
    }
}

export default Menu