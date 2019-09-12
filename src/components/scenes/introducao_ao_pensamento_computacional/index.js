import React, { Fragment } from 'react'
import UnitBase from '../../generics/unit_base'
import ContentContainer from '../../generics/content_container'
import UnitTitle from '../../generics/unit_title'
import Slide1 from './slide_1'
import Slide2 from './slide_2'
import Slide3 from './slide_3'
import FidipidesOne from '../../../images/content/introducao/talk-one.svg'
import FidipidesTwo from '../../../images/content/introducao/talk-two.svg'
import FidipidesThree from '../../../images/content/introducao/talk-three.svg'
import FidipidesFour from '../../../images/content/introducao/talk-four.svg'

/*ESTE COMPONENTE DEVE RECEBER COMO PROPRIEDADE O SEGUINTE ITEM:
    id: String, representa o id desta unidade
.*/
class IntroducaoAoPensamentoComputacional extends UnitBase {
    constructor(props) {
        super(props)

        this.state = {
            availablePages: 3,
            animation: FidipidesOne,
            talkCount: 4,
            currentTalk: 1,
            hasPreviousTalk: false,
            hasNextTalk: true,
            renderTalk: true,
            talkPage: "1"
        }
    }

    getCurrentTalk = () => {
        switch (this.state.currentTalk) {
            case 1:
                this.state.animation = FidipidesOne;
                break;
            case 2:
                this.state.animation = FidipidesTwo;
                break;
            case 3:
                this.state.animation = FidipidesThree;
                break;
            case 4:
                this.state.animation = FidipidesFour;
                break;
            default:
                return null
        }
    }

    renderUnitHeader = () => {
        if (this.state.openPage === "1") {
            return (
                <Fragment>
                    {this.renderHeader()}
                    <UnitTitle>INTRODUÇÃO</UnitTitle>
                </Fragment>
            )
        }
    }

    renderPage = () => {
        switch (this.state.openPage) {
            case "1":
                return (
                    <Slide1 />
                )
            case "2":
                return (
                    <Slide2 />
                )
            case "3":
                return (
                    <Slide3 />
                )
            default:
                return null
        }
    }

    render() {
        return (
            <Fragment>
                {this.renderTalk()}
                {this.renderUnitHeader()}
                <ContentContainer>
                    {this.renderPage()}
                </ContentContainer>
                {this.renderContextMenu()}
                {this.renderTopBar()}
                {this.renderPagination()}
            </Fragment>
        )
    }
}

export default IntroducaoAoPensamentoComputacional
