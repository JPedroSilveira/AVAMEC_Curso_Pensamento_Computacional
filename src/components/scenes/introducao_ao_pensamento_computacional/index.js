import React, { Fragment } from 'react'
import UnitBase from '../../generics/unit_base'
import ContentContainer from '../../generics/content_container'
import UnitTitle from '../../generics/unit_title'
import Slide1 from './slide_1'
import Slide2 from './slide_2'
import Slide3 from './slide_3'
import CharacterTalk from '../../generics/characters/simple-talk'
import FidipidesOne from '../../../images/fidipides/fidipides-one.svg'
import FidipidesTwo from '../../../images/fidipides/fidipides-two.svg'
import FidipidesThree from '../../../images/fidipides/fidipides-three.svg'
import FidipidesFour from '../../../images/fidipides/fidipides-four.svg'

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
            talkPage: "1",
            contextMenuHidden: true,
            topBarHidden: true
        }
    }

    renderTitle = () => {
        return (<UnitTitle>INTRODUÇÃO</UnitTitle>)
    }

    renderPage = () => {
        switch (this.state.openPage) {
            case "1":
                return (
                    <Fragment>
                        {this.renderHeader()}
                        {this.renderTitle()}
                        <Slide1 />
                    </Fragment>
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

    nextTalk = () => {
        this.setState({
            currentTalk: this.state.currentTalk + 1,
            hasPreviousTalk: true,
            hasNextTalk: (this.state.currentTalk + 1) < this.state.talkCount
        })
    }

    previousTalk = () => {
        this.setState({
            currentTalk: this.state.currentTalk - 1,
            hasNextTalk: true,
            hasPreviousTalk: (this.state.currentTalk - 1) > 1
        })
    }

    finishTalk = () => {
        this.setState({
            renderTalk: false,
            contextMenuHidden: false,
            topBarHidden: false
        })
    }

    getCurrentTalk = () => {
        switch (this.state.currentTalk) {
            case 1:
                this.state.animation = FidipidesOne;
                return {
                    title: "Γεια σου!",
                    text: "Isso quer dizer olá, em grego! Meu nome é Fidípedes, hoje vou encarar a missão mais importante da minha vida! Preciso avisar em Atenas que os Persas estão fugindo daqui de Maratona, antes que eles cheguem lá e peguem eles desprevenidos!"
                }
            case 2:
                this.state.animation = FidipidesTwo;
                return {
                    text: "Não imagino que será fácil, vou precisar de tecnologia para apoiar minha solução de problemas, e quando se vive em 490 a.C. não temos muitos recursos, precisamos evitar o desperdício."
                }
            case 3:
                this.state.animation = FidipidesThree;
                return {
                    text: "Vamos resolver os desafios dessa jornada com o que vocês chamam de Pensamento Computacional, e antes que pergunte, não, não sei o que é um computador."
                }
            case 4:
                this.state.animation = FidipidesFour;
                return {
                    text: "Pensamento Computacional pode ser visto como sendo um processo de pensamento para encontrar e especificar soluções para problemas, não necessariamente usando uma máquina e usamos isso todo o dia como quando decidimos o que vamos fazer durante um dia, ou nesse caso que vamos enfrentar essa incrível jornada até Atenas."
                }
            default:
                return null
        }
    }

    renderTalk = () => {
        if (this.state.renderTalk && this.state.openPage === this.state.talkPage){
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
                {this.loadPagination()}
            </Fragment>
        )
    }
}

export default IntroducaoAoPensamentoComputacional
