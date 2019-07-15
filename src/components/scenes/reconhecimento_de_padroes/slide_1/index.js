import React, { Fragment } from 'react'
import Image from '../../../generics/image'
import IntroOne from '../../../../images/content/introducao/intro-one.svg'
import GreekBar from '../../../../images/component/greek-bar.svg'
import MiniGameNames from '../../../../constants/miniGameNames'
import MiniGameLoader from '../../../generics/mini_game_loader'

class Slide1 extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            showGame: props.showGame
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.showGame !== prevProps.showGame) {
            this.setState({
                showGame: this.props.showGame
            })
        }
    }

    renderGame = () => {
        if(this.state.showGame){
            return (
                <MiniGameLoader miniGameName={MiniGameNames.PADROES} />
            )
        }
    }

    render(){
        return (
            <Fragment>
                <Image marginTop="50px" marginBottom="50px" height="auto" width="900px" src={IntroOne} />
                <Image marginBottom="10px" height="auto" width="100%" src={GreekBar} />
                {this.renderGame()}
                <Image marginTop="10px" marginBottom="50px" height="auto" width="100%" src={GreekBar} />
            </Fragment>
        )
    }
}

export default Slide1
