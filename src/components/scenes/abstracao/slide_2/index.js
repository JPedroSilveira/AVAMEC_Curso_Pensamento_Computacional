import React, { Fragment } from 'react'
import Image from '../../../generics/image'

import MiniGameNames from '../../../../constants/miniGameNames'
import MiniGameLoader from '../../../generics/mini_game_loader'

import TitleOne from '../../../../images/content/abstracao/title-one.svg'
import GreekBar from '../../../../images/component/greek-bar.svg'

const Slide2 = () => (
    <Fragment>
        <Image marginTop="100px" marginBottom="50px" height="auto" width="900px" src={TitleOne}/>
        <Image marginBottom="10px" height="auto" width="100%" src={GreekBar} />
        <MiniGameLoader miniGameName={MiniGameNames.ABSTRACAO} />
        <Image marginTop="10px" marginBottom="50px" height="auto" width="100%" src={GreekBar} />
    </Fragment>
)

export default Slide2
