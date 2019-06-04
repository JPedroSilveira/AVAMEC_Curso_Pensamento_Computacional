import React, {Fragment} from 'react'
import ReactHtmlParser from 'react-html-parser'
import FontLight from '../../font/light'
import FontDark from '../../font/dark'
import FontMedium from '../../font/medium'
import FontLarge from '../../font/large'
import FontSmall from '../../font/small'
import './styles.css'

class SimpleTalk extends React.Component {
    renderContent = () => {
        return (
            <div className="content">
                <div className="title">
                    <FontLarge><FontLight>{ReactHtmlParser(this.props.content.title)}</FontLight></FontLarge>
                </div>
                <div className="text">
                    <FontMedium><FontDark>{ReactHtmlParser(this.props.content.text)}</FontDark></FontMedium>
                </div>
            </div>
        )
    }

    renderButtons = () => {
        return (
            <div className="buttons-container">
                {this.props.hasPreviousTalk ?
                    <Fragment>
                        {this.props.hasNextTalk ?
                            <Fragment>
                                <div onClick={this.props.previousTalk} className="button previous-button"><FontLarge>{"<"}</FontLarge></div>
                                <div onClick={this.props.nextTalk} className="button next-button"><FontLarge>{">"}</FontLarge></div>
                            </Fragment>
                            :
                            <Fragment>
                                <div onClick={this.props.previousTalk} className="button last-previous"><FontLarge>{"<"}</FontLarge></div>
                                <div className="button read-more"><FontLarge>Leia Mais</FontLarge></div>
                                <div onClick={this.props.finishTalk} className="button ok-button"><FontLarge>Ok!</FontLarge></div>
                            </Fragment>
                        }
                    </Fragment>
                    :
                    <div onClick={this.props.nextTalk} className="button first-button"><FontLarge>Próximo</FontLarge></div>
                }
            </div>
        )
    }

    renderCloseButton = () => {
        return (
            <div onClick={this.props.finishTalk} className="close-button-container">
                <div><FontSmall>PULAR DIÁLOGO</FontSmall></div>
                <div className="close-button-underline"></div>
            </div>
        )
    }

    render() {
        return (
            <div className="main-container">
                <div className="master-container">
                    <div className="character-container" style={{ backgroundImage: "url(" + this.props.src + ")" }}>
                        {this.renderContent()}
                        {this.renderButtons()}
                        {this.renderCloseButton()}
                    </div>
                </div>
            </div>
        )
    }
}

export default SimpleTalk