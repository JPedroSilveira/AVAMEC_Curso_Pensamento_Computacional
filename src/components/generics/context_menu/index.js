import React from 'react'
import IDs from '../../../constants/ids'
import './styles.css'

class ContextMenu extends React.Component {
    constructor(){
        super()
        window.onscroll = this.onScroll
        this.state = {
            contextMenuClass: "context-menu-container"
        }
    }

    onScroll = (event) => {
        //Distancia entre a posicao da rolagem e o topo
        const scrollTop = event.target.scrollingElement.scrollTop

        //Tamanho da pagina exibida ao usuario
        const clientHeight = event.target.scrollingElement.clientHeight

        //Distancia da paginacao fixa ao topo
        const paginationBaroffsetTop = document.getElementById(IDs.SLIDE_INFO_PAGINATION).offsetTop

        //Tamanho do elemento de paginacao
        const paginationBarHeight = document.getElementById(IDs.SLIDE_INFO_PAGINATION).clientHeight

        //Distancia do bottom da pagina exibida para o topo
        const scrollTopOfBottom = scrollTop + clientHeight

        //Distancia da paginacao para o topo com ajuste de tamanho
        const distanceToShowPagination = paginationBaroffsetTop + paginationBarHeight

        if (scrollTopOfBottom >= distanceToShowPagination){
            if (!this.isHidden()){
                this.setState({
                    contextMenuClass: "context-menu-container-hidden"
                })
            }
        } else if(this.isHidden()){
            this.setState({
                contextMenuClass: "context-menu-container"
            })
        }
    }

    isHidden = () => {
        return this.state.contextMenuClass === "context-menu-container-hidden"
    }

    render() {
        return (
            <div className={this.state.contextMenuClass}></div>
        )
    }
}

export default ContextMenu