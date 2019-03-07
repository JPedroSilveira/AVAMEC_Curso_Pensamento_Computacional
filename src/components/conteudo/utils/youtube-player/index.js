import React from 'react'
import YouTube from 'react-youtube'
import './styles.css'

/*ESTE COMPONENTE DEVE RECEBER COMO PROPRIEDADE O SEGUINTE ITEM:
    videoId: String, representa o id do video do YouTube 
*/
class YouTubePlayer extends React.Component {
    constructor(props){
        super(props)

        /*Define a classe inicial para o video*/
        this.state = {
            videoClass: "youtube-video",
            containerClass: "youtube-video-container"
        }
        
        /*Configura o player*/
        this.opts = {
            playerVars: { //Parametros de configuração do YouTube disponíveis em: https://developers.google.com/youtube/player_parameters
                controls: 1,
                disablekb: 1,
                iv_load_policy: 3,
                modestbranding: 1,
                rel: 0,
                fs: 1,
                showinfo: 0,
                start: 0
            }
        }

        /*Salva se o player deve realmente pausar*/
        this.shouldPause = false
    }

    render(){
        return (
            <YouTube
                videoId={this.props.videoId}
                id="SortingAlgorithmsVideo"
                className={this.state.videoClass}
                containerClassName={this.state.containerClass}
                opts={this.opts}
            />
        )
    }
}

export default YouTubePlayer