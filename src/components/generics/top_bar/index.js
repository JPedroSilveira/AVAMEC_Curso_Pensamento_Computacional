import React from 'react'
import UnitNameUtils from '../../../utils/unitNameUtils'
import FontSmall from '../font/small'
import Strong from '../font/strong'
import FontLight from '../font/light'
import './styles.css'

//props.hidden = indica se a barra deve ser exibida
//props.unit = indica o id da unidade
class TopBar extends React.Component {
    constructor(props){
        super(props)
        window.addEventListener('scroll', this.onScroll)
        this.state = {
            componentClass: "top-bar-container top-bar-container-hidden",
            componentContextMenuClass: "top-context-menu-container"
        }
    }
    componentDidUpdate(prevProps) {
        if (this.props.hidden !== prevProps.hidden) {
            this.setState({
                componentClass: this.props.hidden ? "top-bar-container top-bar-container-hidden" : "top-bar-container top-bar-container"
            })
        }
    }
    onScroll = (event) => {
        //Distancia entre a posicao da rolagem e o topo
        const scrollTop = event.target.scrollingElement.scrollTop

        //Tamanho da pagina exibida ao usuario
        const clientHeight = event.target.scrollingElement.clientHeight
        
        if (scrollTop > clientHeight*0.2) {
            if (this.isHidden() && !this.props.hidden) {
                this.setState({
                    componentContextMenuClass: "top-context-menu-container"
                })
            }
        } else if (!this.isHidden()) {
            this.setState({
                componentContextMenuClass: "top-context-menu-container top-context-menu-container-hidden"
            })
        }
    }
    isHidden = () => {
        return this.state.componentContextMenuClass === "top-context-menu-container top-context-menu-container-hidden"
    }
    render() {
        return (
            <div className={this.state.componentClass}>
                <div className="top-bar-line"></div>
                <div className={this.state.componentContextMenuClass}>
                    <div className="course-name"><FontLight><Strong><FontSmall>Pensamento Computacional</FontSmall></Strong></FontLight></div>
                    <div className="unit-name"><FontLight><Strong><FontSmall>{UnitNameUtils.getUnitName(this.props.unit)}</FontSmall></Strong></FontLight></div>
                </div>            
            </div>
        )
    }
}
export default TopBar