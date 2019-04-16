import React from "react"
import Unity, { UnityContent } from "react-unity-webgl"
import Image from "../image"
import Logo from "../../../images/logo.png"
import LoaderBar from '../loader_bar'
import './styles.css'

/*Recebe uma propriedade: props.miniGameUnitName que corresponde ao nome da pasta onde o jogo esta 
armazenado em ./public/mini-games/{miniGameUnitName}*/
class MiniGameLoader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            progress: 0,
            gameBoxClass: "mini-game-box-hidden"
        }

        this.unityContent = new UnityContent(
            "./mini-games/" + this.props.miniGameUnitName + "/" + this.props.miniGameUnitName + ".json",
            "./mini-games/" + this.props.miniGameUnitName + "/UnityLoader.js"
        );

        this.unityContent.on("progress", progress => {
            if (progress === 1){
                this.setState({
                    progress: progress,
                    gameBoxClass: "mini-game-box"
                })
            } else {
                this.setState({
                    progress: progress
                });
            }
        });
    }

    render() {
        return (
            <div className="mini-game-container">
                {this.state.progress !== 1 &&
                    <div className="mini-game-box loader-game">
                        <Image src={Logo} alt={"Carregamento do jogo em " + this.state.progress*100 + "%."}/>
                        <LoaderBar progress={this.state.progress}/>
                    </div>
                } 
                <div className={this.state.gameBoxClass}>
                    <Unity unityContent={this.unityContent} />
                </div>
            </div>
        )
    }
}

export default MiniGameLoader
