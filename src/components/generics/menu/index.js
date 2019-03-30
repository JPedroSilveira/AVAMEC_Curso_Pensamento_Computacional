import React from 'react'
import AvaMecApiServices from '../../../services/avaMecApi.js'
import avaMecConstants from '../../../constants/avaMECApiConstants'

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ArrowForward from '@material-ui/icons/ArrowForward'
import Divider from '@material-ui/core/Divider'
import Logo from '../../../images/logo.png'
import './styles.css'

class Menu extends React.Component {

    constructor() {
        super()

        this.state = {
            open: false,
            units: []
        } 

        AvaMecApiServices.getCourseData(this.getCourseDataReturn)
    }

    getCourseDataReturn = eventReturn => {
        if (eventReturn.detail.status === 200) {
            eventReturn.detail.data.modulos.forEach(modulo => {
                modulo.unidades.forEach(unidade => {
                    if (unidade.situacao === avaMecConstants.TIPO_SITUACAO_ATIVA) {
                        this.state.units.push(unidade)
                    }
                })
            })
        }

        AvaMecApiServices.closeGetCourseDataListener(this.getCourseDataReturn)

        this.forceUpdate()
    }

    openMenu = () => {
        if(!this.state.open){
            this.setState({
                open: true
            })
        }
    }

    closeMenu = () => {
        if (this.state.open){
            this.setState({
                open: false
            })
        } 
    }

    loadUnitsList = () => {
        return (
            <div className="menu">
                <div className="header">
                    <img className="image" src={Logo} alt="Instituto de Informática da UFRGS"></img>
                </div>
                <List>
                    {this.state.units.map((unit) => (
                        <div>
                            <div>
                                <ListItem 
                                id={unit.identificador} 
                                className="item" 
                                button key={unit.identificador} 
                                onClick={this.changeUnit}>
                                    <ListItemIcon><ArrowForward/></ListItemIcon>
                                    <ListItemText primary={unit.nome}/>
                                </ListItem>
                            </div>
                            <Divider/>
                        </div>
                    ))}
                </List>
            </div>
        )
    }

    loadDrawer = () => {
        return (
            <SwipeableDrawer
                anchor="right"
                open={this.state.open}
                onClose={this.closeMenu}
                onOpen={this.openMenu}>
                <div
                    tabIndex={0}
                    role="button"
                    onClick={this.closeMenu}
                    onKeyDown={this.closeMenu}>
                    {this.loadUnitsList()}
                </div>
            </SwipeableDrawer>
        )
    }

    loadMenuButton = () => {
        return (
            <div className="menu-button" onClick={this.openMenu}>
                <IconButton color="inherit" aria-label="Menu">
                    <MenuIcon className="menu-button-icon"/>
                </IconButton>
            </div>
        )
    }

    changeUnit = data => {
        AvaMecApiServices.changeUnit(data.currentTarget.id)
    }

    render() {
        return (
            <div>
                {this.loadMenuButton()}
                {this.loadDrawer()}
            </div>
        )
    }
}

export default Menu