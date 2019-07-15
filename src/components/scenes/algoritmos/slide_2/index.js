import React, { Fragment } from 'react'
import Image from '../../../generics/image'
import IntroOne from '../../../../images/content/introducao/intro-one.svg'
import GreekBar from '../../../../images/component/greek-bar.svg'
import MiniGameNames from '../../../../constants/miniGameNames'
import MiniGameLoader from '../../../generics/mini_game_loader'

const Slide2 = () => (
    <Fragment>
        <Image marginTop="100px" marginBottom="50px" height="auto" width="900px" src={IntroOne} />
        <Image marginBottom="10px" height="auto" width="100%" src={GreekBar} />
        <MiniGameLoader miniGameName={MiniGameNames.ALGORITMOS} />
        <Image marginTop="10px" marginBottom="100px" height="auto" width="100%" src={GreekBar} />
    </Fragment>
)

export default Slide2
