import React from 'react'
import YouTube from 'react-youtube'
import './styles.css'

class YouTubePlayer extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            videoClass: "youtube-video",
            containerClass: "youtube-video-container"
        }

        //YouTube parameters available on: https://developers.google.com/youtube/player_parameters
        this.opts = {
            playerVars: { 
                controls: 1,
                disablekb: 1,
                iv_load_policy: 3,
                modestbranding: 1,
                rel: 0,
                fs: 1,
                showinfo: 0,
                start: 0,
                cc_load_policy: 1,
                hl: "pt"
            }
        }
    }

    render(){
        return (
            <YouTube
                videoId={this.props.videoId}
                id={this.props.videoId}
                className={this.state.videoClass}
                containerClassName={this.state.containerClass}
                opts={this.opts}
            />
        )
    }
}

export default YouTubePlayer