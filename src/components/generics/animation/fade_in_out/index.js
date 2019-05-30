import React, { Fragment } from 'react'
import './styles.css'

class AnimationFadeInOut extends React.Component {
   render() {
        return (
            <Fragment>
                <div className="animation-fade-in-out">
                    <div className="animation-container" style={{backgroundImage: "url("+this.props.src+")"}}>
                        <div className="animation-text">{this.props.text}</div>
                        <div className="animation-buttons">
                            {this.props.hasPreviousTalk ?
                                <Fragment>
                                    {this.props.hasNextTalk ?
                                        <Fragment>
                                            <div onClick={this.props.previousTalk} className="animation-button previous">{"<"}</div>
                                            <div onClick={this.props.nextTalk} className="animation-button next">{">"}</div>
                                        </Fragment>
                                        :
                                        <Fragment>
                                            <div onClick={this.props.previousTalk} className="animation-button last-previous">{"<"}</div>
                                            <div className="animation-button read-more">Leia Mais</div>
                                            <div onClick={this.props.finishTalk} className="animation-button ok-button">Ok!</div>
                                        </Fragment>
                                    }
                                </Fragment>
                                :
                                <div onClick={this.props.nextTalk} className="animation-button first-button">{"Próximo"}</div>
                            }
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default AnimationFadeInOut