import React from 'react'
import IDs from '../../../constants/ids'
import FontSmall from '../font/small'
import Strong from '../font/strong'
import Image from '../image'
import LeftButton from '../../../images/component/left-button.svg'
import RightButton from '../../../images/component/right-button.svg'
import LocalStorageUtils from '../../../utils/localStorageUtils'
import './styles.css'

//props.pagesCount = número de páginas da unidade
//props.unit = unidade atual
//props.openPage = página aberta atualmente
//props.hidden = informa se o menu de contexto deve ser exibido
//props.onPageChange = função para avançar página
class ContextMenu extends React.Component {
    constructor(props){
        super(props)
        window.addEventListener('scroll', this.onScroll)
        this.state = {
            contextMenuClass: props.hidden ? "context-menu-container-hidden" : "context-menu-container",
            page: parseInt(props.openPage)
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.hidden !== prevProps.hidden) {
            this.setState({
                contextMenuClass: this.props.hidden ? "context-menu-container-hidden" : "context-menu-container"
            })
        }
        if(this.props.openPage !== prevProps.openPage){
            this.setState({
                page: parseInt(this.props.openPage)
            })
        }
    }

    previousPage = () => {
        if(this.state.page > 1){
            LocalStorageUtils.setOpenPage(this.state.page - 1)

            this.props.onPageChange()

            this.setState({
                page: this.state.page - 1
            })
        }
    }

    nextPage = () => {
        if (this.state.page < this.props.pagesCount){
            LocalStorageUtils.setOpenPage(this.state.page + 1)

            this.props.onPageChange()

            this.setState({
                page: this.state.page + 1
            })
        }
    }

    goToPage = (page, event) => {
        if (page > 0 && page <= this.props.pagesCount) {
            LocalStorageUtils.setOpenPage(page)

            this.props.onPageChange()

            this.setState({
                page: page
            })
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
        } else if(this.isHidden() && !this.props.hidden){
            this.setState({
                contextMenuClass: "context-menu-container"
            })
        }
    }

    isHidden = () => {
        return this.state.contextMenuClass === "context-menu-container-hidden"
    }

    renderPageCircles = () => {
        const listPages = []

        for (let x = 1; x <= this.props.pagesCount; x++){
            if(this.isOpenPage(x)){
                listPages.push(<div key={x} className="page-circle page-circle-selected"></div>)
            } else {
                listPages.push(<div key={x} onClick={this.goToPage.bind(this, x)} className="page-circle"></div>)
            }
        }

        return (
            <div className="page-circle-container">
                {listPages}
            </div>
        )
    }

    renderExtraContentButton = () => {
        return (
            <div className="extra-content-button-container"></div>
        )
    }

    renderPageInfo = () => {
        return (
            <div className="page-info-container">
                <Image onClick={this.previousPage} width="1.8em" height="2em" className="page-info-button" src={LeftButton} alt="Voltar" />
                <div className="page-info-text"><Strong><FontSmall>SLIDE {this.state.page} DE {this.props.pagesCount}</FontSmall></Strong></div>
                <Image onClick={this.nextPage} width="1.8em" height="2em" className="page-info-button" src={RightButton} alt="Avançar" />
            </div>
        )
    }

    isOpenPage = (page) => {
        return page === this.state.page
    }

    render() {
        return (
            <div className={this.state.contextMenuClass}>
                {this.renderPageCircles()}
                {this.renderExtraContentButton()}
                {this.renderPageInfo()}
            </div>
        )
    }
}

export default ContextMenu