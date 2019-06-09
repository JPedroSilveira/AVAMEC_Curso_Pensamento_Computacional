import React, {Fragment} from 'react'
import ReactHtmlParser from 'react-html-parser'
import FontLight from '../../font/light'
import FontDark from '../../font/dark'
import FontMedium from '../../font/medium'
import FontLarge from '../../font/large'
import FontSmall from '../../font/small'
import Regular from '../../font/regular'
import './styles.css'

class SimpleTalk extends React.Component {
    renderContent = () => {
        return (
            <div className="content">
                <div className="title">
                    <Regular><FontLarge><FontLight>{ReactHtmlParser(this.props.content.title)}</FontLight></FontLarge></Regular>
                </div>
                <div className="text">
                    <Regular><FontMedium><FontDark>{ReactHtmlParser(this.props.content.text)}</FontDark></FontMedium></Regular>
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
                                <div onClick={this.props.previousTalk} className="button previous-button"><Regular><FontMedium>{"<"}</FontMedium></Regular></div>
                                <div onClick={this.props.nextTalk} className="button next-button"><Regular><FontMedium>{">"}</FontMedium></Regular></div>
                            </Fragment>
                            :
                            <Fragment>
                                <div onClick={this.props.previousTalk} className="button last-previous"><Regular><FontMedium>{"<"}</FontMedium></Regular></div>
                                <div className="button read-more"><Regular><FontMedium>Leia Mais</FontMedium></Regular></div>
                                <div onClick={this.props.finishTalk} className="button ok-button"><Regular><FontMedium>Ok!</FontMedium></Regular></div>
                            </Fragment>
                        }
                    </Fragment>
                    :
                    <div onClick={this.props.nextTalk} className="button first-button"><Regular><FontMedium>Próximo</FontMedium></Regular></div>
                }
            </div>
        )
    }

    renderCloseButton = () => {
        return (
            <div onClick={this.props.finishTalk} className="close-button-container">
                <div><Regular><FontSmall>PULAR DIÁLOGO</FontSmall></Regular></div>
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