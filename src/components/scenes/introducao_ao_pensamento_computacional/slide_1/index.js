import React, { Fragment } from 'react'
import TextWithImageRight from '../../../generics/text/with-image-right'
import Image from '../../../generics/image'
import FidipidesPensando from '../../../../images/fidipides/fidipides-pensando.svg'
import IntroOne from '../../../../images/fidipides/intro-one.svg'
import Papiro from '../../../../images/content/papiro-one.svg'
import InfoOne from '../../../../images/fidipides/info-one.svg'

const Slide1 = () => (
    <Fragment>
        <TextWithImageRight height="490px" src={FidipidesPensando}>
            A aplicação prática de Pensamento Computacional pode ser observada tanto na resolução de problemas básicos do cotidiano, como o planejamento das compras de uma família, quanto na resolução de problemas mais complexos, tais como a concepção de um sistema escolar, a logística de uma rede de abastecimento, a elaboração de um sistema de prevenção e erradicação de epidemias ou o envio de uma nave espacial para a Lua.
        </TextWithImageRight>
        <Image marginBottom="50px" height="auto" width="auto" src={IntroOne}/>
        <Image marginBottom="50px" height="auto" width="auto" src={Papiro} />
        <Image marginBottom="50px" height="auto" width="auto" src={InfoOne} />
    </Fragment>
)

export default Slide1
