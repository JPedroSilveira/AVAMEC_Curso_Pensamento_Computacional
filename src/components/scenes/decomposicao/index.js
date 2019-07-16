import React, { Fragment } from 'react'
import UnitBase from '../../generics/unit_base'
import UnitTitle from '../../generics/unit_title'
import ContentContainer from '../../generics/content_container'
import Slide1 from './slide_1'
import Slide2 from './slide_2'
import Slide3 from './slide_3'
import Slide4 from './slide_4'
import Slide5 from './slide_5'
import Slide6 from './slide_6'
import Slide7 from './slide_7'
import CharacterTalk from '../../generics/characters/talk'
import FidipidesOne from '../../../images/content/decomposicao/talk-one.svg'
import FidipidesTwo from '../../../images/content/decomposicao/talk-two.svg'
import FidipidesThree from '../../../images/content/decomposicao/talk-three.svg'
import FidipidesFour from '../../../images/content/decomposicao/talk-four.svg'

/*ESTE COMPONENTE DEVE RECEBER COMO PROPRIEDADE O SEGUINTE ITEM:
    id: String, representa o id desta unidade
.*/
class Decomposicao extends UnitBase {
    constructor(props) {
        super(props)

        this.state = {
            availablePages: 7,
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

    renderPage = () => {
        switch (this.state.openPage){
            case "1":
                return (
                    <Slide1/>
                ) 
            case "2":
                return (
                    <Slide2 />
                )
            case "3":
                return (
                    <Slide3 />
                )
            case "4":
                return (
                    <Slide4 unitId={this.props.id} />
                )
            case "5":
                return (
                    <Slide5 />
                )
            case "6":
                return (
                    <Slide6 unitId={this.props.id} />
                )
            case "7":
                return (
                    <Slide7 />
                )
            default:
                return null
        }
    }

    renderUnitHeader = () => {
        if(this.state.openPage === "1"){
            return (
                <Fragment>
                    {this.renderHeader()}
                    <UnitTitle>DECOMPOSIÇÃO</UnitTitle>
                </Fragment>        
            )
        }
    }

    renderTalk = () => {
        if (this.state.renderTalk && this.state.openPage === this.state.talkPage) {
            return (
                <CharacterTalk
                    hasPreviousTalk={this.state.hasPreviousTalk}
                    hasNextTalk={this.state.hasNextTalk}
                    previousTalk={this.previousTalk}
                    nextTalk={this.nextTalk}
                    finishTalk={this.finishTalk}
                    content={this.getCurrentTalk()}
                    src={this.state.animation}>
                </CharacterTalk>
            )
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

export default Decomposicao
