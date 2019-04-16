import React from 'react'
import Iframe from 'react-iframe'
import '../styles.css'

class ConceitosInterativos extends React.Component {
    render() {
        return (
            <div className="game-container">
                <Iframe url="./mini_games/conceitos_interativos/index.html"
                    width="1000px"
                    height="600px"
                    id="ConceitosInterativos"
                    className="game-iframe"
                    display="initial"
                    position="relative" />
            </div>
        )
    }
}

export default ConceitosInterativos