import React from 'react'
import Iframe from 'react-iframe'
import './styles.css'

class MiniGame extends React.Component {
    render() {
        return (
            <div className="mini-game-container">
                <Iframe url={"./mini-games/" + this.props.miniGameName + "/index.html"}
                    width="920px"
                    height="600px"
                    id="miniGame"
                    display="initial"
                    position="relative"
                    frameBorder="0" />
            </div>
        )
    }
}
export default MiniGame
