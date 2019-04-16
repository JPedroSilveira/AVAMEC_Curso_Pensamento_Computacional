import React from "react"
import Unity, { UnityContent } from "react-unity-webgl"
import Image from "../../components/generics/image"
import Logo from "../../images/logo.png"
import LoaderBar from '../../components/generics/loader_bar'
import '../styles.css'

class ConceitosInterativos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            progress: 0,
            gameBoxClass: "mini-game-box-hidden"
        }

        this.unityContent = new UnityContent(
            "./mini_games/conceitos_interativos/Build/Introdução.json",
            "./mini_games/conceitos_interativos/Build/UnityLoader.js"
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

export default ConceitosInterativos
