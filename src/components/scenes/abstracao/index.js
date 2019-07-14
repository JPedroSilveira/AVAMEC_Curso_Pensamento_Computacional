import React, { Fragment } from 'react'
import UnitBase from '../../generics/unit_base'
import UnitTitle from '../../generics/unit_title'
import ContentContainer from '../../generics/content_container'

import CharacterTalk from '../../generics/characters/talk'
import FidipidesOne from '../../../images/content/abstracao/fidipides-one.svg'
import FidipidesTwo from '../../../images/content/abstracao/fidipides-two.svg'
import FidipidesThree from '../../../images/content/abstracao/fidipides-three.svg'
import FidipidesFour from '../../../images/content/abstracao/fidipides-four.svg'
import FidipidesFive from '../../../images/content/abstracao/fidipides-five.svg'

import Conceituacao from './conceituacao'
import AtividadeAvaliativaUm from './atividade_avaliativa_um'
import AtividadeAvaliativaDois from './atividade_avaliativa_dois'
import AtividadeAvaliativaTres from './atividade_avaliativa_tres'
import Aplicacoes from './aplicacoes'
import Problemas from './problemas'
import Recomendacoes from './recomendacoes'

/*ESTE COMPONENTE DEVE RECEBER COMO PROPRIEDADE O SEGUINTE ITEM:
    id: String, representa o id desta unidade
.*/
class Abstracao extends UnitBase {
    constructor(props) {
        super(props)
        
        this.state = {
            availablePages: 8,
            animation: FidipidesOne,
            animationGreen: false,
            talkCount: 5,
            currentTalk: 1,
            hasPreviousTalk: false,
            hasNextTalk: true,
            renderTalk: true,
            talkPage: "1",
            contextMenuHidden: false,
            topBarHidden: false,
            topBarShowEverything: true
        }
    }

    getCurrentTalk = () => {
        switch (this.state.currentTalk) {
            case 1:
                this.state.animation = FidipidesOne;
                this.state.animationGreen = false;
                break;
            case 2:
                this.state.animation = FidipidesTwo;
                this.state.animationGreen = false;
                break;
            case 3:
                this.state.animation = FidipidesThree;
                this.state.animationGreen = false;
                break;
            case 4:
                this.state.animation = FidipidesFour;
                this.state.animationGreen = true;
                break;
            case 5:
                this.state.animation = FidipidesFive;
                this.state.animationGreen = false;
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
                    src={this.state.animation}
                    animationGreen={this.state.animationGreen}>
                </CharacterTalk>
            )
        }
    }

    renderPage = () => {
        switch (this.state.openPage){
            case "1":
                return (
                    <Conceituacao />
                )
            case "2":
                return (
                    <Conceituacao />
                )
            case "3":
                return (
                    <AtividadeAvaliativaUm unitId={this.props.id} />
                )
            case "4":
                return (
                    <Aplicacoes />
                )
            case "5":
                return (
                    <AtividadeAvaliativaDois unitId={this.props.id} />
                )
            case "6":
                return (
                    <Recomendacoes />
                )
            case "7":
                return (
                    <AtividadeAvaliativaTres unitId={this.props.id} />
                )
            case "8":
                return (
                    <Problemas />
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

export default Abstracao