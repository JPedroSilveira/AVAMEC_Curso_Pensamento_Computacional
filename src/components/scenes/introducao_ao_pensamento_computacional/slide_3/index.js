import React, { Fragment } from 'react'
import Image from '../../../generics/image'

import IntroThree from '../../../../images/content/introducao/intro-three.svg'
import Pilares from '../../../../images/content/introducao/pilares.svg'
import InfoTwo from '../../../../images/content/introducao/info-two.svg' 

const Slide3 = () => (
    <Fragment>
        <Image marginTop="100px" marginBottom="50px" height="auto" width="900px" src={IntroThree}/>
        <Image marginBottom="50px" height="auto" width="700px" src={Pilares} />
        <Image marginBottom="50px" height="auto" width="700px" src={InfoTwo} />
    </Fragment>
)

export default Slide3
