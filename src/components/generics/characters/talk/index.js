import React, {Fragment} from 'react'
import FontMedium from '../../font/medium'
import FontSmall from '../../font/small'
import Regular from '../../font/regular'
import './styles.css'

class CharacterTalk extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            characterContainerClass: "character-container"
        }

        if(props.animationGreen !== undefined && props.animationGreen){
            this.state.characterContainerClass ="character-container green-container"
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.animationGreen !== prevProps.animationGreen) {
            if (this.props.animationGreen !== undefined && this.props.animationGreen) {
                this.setState({
                    characterContainerClass: "character-container green-container"
                })
            } else if (this.state.characterContainerClass === "character-container green-container"){
                this.setState({
                    characterContainerClass: "character-container"
                })
            }
        }
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
                    <div className={this.state.characterContainerClass} style={{ backgroundImage: "url(" + this.props.src + ")" }}>
                        {this.renderButtons()}
                        {this.renderCloseButton()}
                    </div>
                </div>
            </div>
        )
    }
}

export default CharacterTalk