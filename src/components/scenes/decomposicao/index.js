import React, { Fragment } from 'react'
import UnitBase from '../../generics/unit_base'
import UnitTitle from '../../generics/unit_title'
import ContentContainer from '../../generics/content_container'
import AplicacaoInterativa from './aplicacao_interativa'
import Conceituacao from './conceituacao'
import Aplicacoes from './aplicacoes'
import Recomendacoes from './recomendacoes'
import Problemas from './problemas'
import AtividadeAvaliativaUm from './atividade_avaliativa_um'
import AtividadeAvaliativaDois from './atividade_avaliativa_dois'
import AtividadeAvaliativaTres from './atividade_avaliativa_tres'
import CharacterTalk from '../../generics/characters/talk'
import FidipidesOne from '../../../images/fidipides/decomposicao/talk-one.svg'
import FidipidesTwo from '../../../images/fidipides/decomposicao/talk-two.svg'
import FidipidesThree from '../../../images/fidipides/decomposicao/talk-three.svg'
import FidipidesFour from '../../../images/fidipides/decomposicao/talk-four.svg'

/*ESTE COMPONENTE DEVE RECEBER COMO PROPRIEDADE O SEGUINTE ITEM:
    id: String, representa o id desta unidade
.*/
class Decomposicao extends UnitBase {
    constructor(props) {
        super(props)

        this.state = {
            availablePages: 8,
            animation: FidipidesOne,
            talkCount: 4,
            currentTalk: 1,
            hasPreviousTalk: false,
            hasNextTalk: true,
            renderTalk: true,
            talkPage: "1",
            contextMenuHidden: true,
            topBarHidden: true
        }
    }

    renderPage = () => {
        switch (this.state.openPage){
            case "1":
                return (
                    <Fragment>
                        {this.renderHeader()}
                        {this.renderTitle()}
                        
                    </Fragment>
                ) 
            case "2":
                return (
                    <AplicacaoInterativa />
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
                    <Problemas unitId={this.props.id} />
                )
            default:
                return null
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

    renderTitle = () => {
        return (<UnitTitle>DECOMPOSIÇÃO</UnitTitle>)
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
