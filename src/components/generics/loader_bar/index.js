import React from 'react'
import './styles.css'

class LoaderBar extends React.Component{
    render(){
        return(
            <div className="loader-bar">
                <div className="loaded" style={{ width: (this.props.progress * 100) + "%" }}></div>
                Carregando...
            </div>
        )
    }
}

export default LoaderBar