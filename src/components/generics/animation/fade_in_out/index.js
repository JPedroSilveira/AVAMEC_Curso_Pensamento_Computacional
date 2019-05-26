import React, { Fragment } from 'react'
import './styles.css'

class AnimationFadeInOut extends React.Component {
   render() {
        return (
            <Fragment>
                <div className="animation-fade-in-out img">
                    <img className="animation-image" src={this.props.src} alt={this.props.alt}/>
                </div>
                <div className="animation-fade-in-out text">
                    {this.props.text}
                </div>
                <div className="animation-fade-in-out buttons">
                    {this.props.hasPreviousTalk ?
                        <Fragment>
                            {this.props.hasNextTalk ?
                                <Fragment>
                                    <div onClick={this.props.previousTalk} className="animation-button">{"<"}</div>
                                    <div onClick={this.props.nextTalk} className="animation-button">{">"}</div>
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
            </Fragment>
        )
    }
}

export default AnimationFadeInOut