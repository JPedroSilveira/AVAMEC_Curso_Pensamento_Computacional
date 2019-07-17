import React from 'react'
import Header from '../header'
import ContextMenu from '../context_menu'
import TopBar from '../top_bar'
import AvaMecApiServices from '../../../services/avaMecApiServices'
import Pagination from '../pagination'
import LocalStorageUtils from '../../../utils/localStorageUtils'
import CharacterTalk from '../characters/talk'
import './styles.css'

class UnitBase extends React.Component {

    componentDidMount() {
        let openPage = LocalStorageUtils.getOpenPage()
        if(this.state.renderTalk){
            this.setState({
                openPage: openPage,
                contextMenuHidden: openPage === this.state.talkPage,
                topBarHidden: openPage === this.state.talkPage,
                topBarShowEverything: openPage !== this.state.talkPage
            })
        } else {
            this.setState({
                openPage: openPage,
                topBarHidden: false
            })
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
    
    renderPagination = () => {
        return (
            <Pagination
                availablePages={this.state.availablePages}
                onPageChange={this.updatePage}
                openPage={this.state.openPage}
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
            <TopBar slide={this.state.openPage} lastSlide={this.state.availablePages} hidden={this.state.topBarHidden} showEverything={this.state.topBarShowEverything} unit={this.props.id} />
        )
    }

    renderTalk = () => {
        if (this.state.renderTalk && this.state.openPage === this.state.talkPage) {
            return (
                <CharacterTalk
                    hasPreviousTalk={this.state.hasPreviousTalk}
                    hasNextTalk={this.state.hasNextTalk}
                    previousTalk={this.previousTalk}
                    nextTalk={this.nextTalk}
                    finishTalk={this.finishTalk}
                    content={this.getCurrentTalk()}
                    src={this.state.animation}>
                </CharacterTalk>
            )
        }
    }

    nextTalk = () => {
        this.setState({
            currentTalk: this.state.currentTalk + 1,
            hasPreviousTalk: true,
            hasNextTalk: (this.state.currentTalk + 1) < this.state.talkCount
        })
    }

    previousTalk = () => {
        this.setState({
            currentTalk: this.state.currentTalk - 1,
            hasNextTalk: true,
            hasPreviousTalk: (this.state.currentTalk - 1) > 1
        })
    }

    finishTalk = () => {
        this.setState({
            renderTalk: false,
            contextMenuHidden: false,
            topBarHidden: false,
            currentTalk: 1,
            hasNextTalk: 2 < this.state.talkCount,
            hasPreviousTalk: false
        })
    }
}

export default UnitBase
