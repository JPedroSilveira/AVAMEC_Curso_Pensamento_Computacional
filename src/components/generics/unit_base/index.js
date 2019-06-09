import React from 'react'
import Header from '../header'
import ContextMenu from '../context_menu'
import TopBar from '../top_bar'
import AvaMecApiServices from '../../../services/avaMecApiServices'
import Pagination from '../pagination'
import LocalStorageUtils from '../../../utils/localStorageUtils'
import './styles.css'

class UnitBase extends React.Component {
    componentDidMount() {
        this.setState({
            openPage: LocalStorageUtils.getOpenPage()
        })

        this.validateProperties()
    }

    validateProperties = () => {
        if(this.props.id === undefined || this.props.id === ""){
            throw Error("Error in property \"id\", this value can't be undefined or empty!")
        }
    }

    updatePage = () => {
        const openPage = LocalStorageUtils.getOpenPage()
        const isTalkPage = openPage === this.state.talkPage
        const topBarShowEverything = openPage !== "1"
        
        this.setState({
            openPage: openPage,
            renderTalk: isTalkPage,
            contextMenuHidden: isTalkPage,
            topBarHidden: isTalkPage,
            topBarShowEverything: topBarShowEverything
        })

        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

        AvaMecApiServices.saveLastPage(this.props.id)
    }
    
    loadPagination = () => {
        return (
            <Pagination
                availablePages={this.state.availablePages}
                onPageChange={this.updatePage}
                unit={this.props.id} />
        )
    }

    renderContextMenu = () => {
        return (
            <ContextMenu
                pagesCount={this.state.availablePages}
                openPage={this.state.openPage}
                hidden={this.state.contextMenuHidden}
                onPageChange={this.updatePage}
                unit={this.props.id} />
        )
    }

    renderHeader = () => {
        return (
            <Header/>
        )
    }

    renderTopBar = () => {
        return (
            <TopBar hidden={this.state.topBarHidden} showEverything={this.state.topBarShowEverything} unit={this.props.id} />
        )
    }
}

export default UnitBase
