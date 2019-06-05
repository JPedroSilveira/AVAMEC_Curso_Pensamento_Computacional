import React, { Fragment } from 'react'
import UnitBase from '../../generics/unit_base'
import ContentContainer from '../../generics/content_container'
import Texto1 from './texto_1'
import Texto2 from './texto_2'
import Texto3 from './texto_3'
import Desafios from './desafios'
import AplicacaoInterativa from './aplicacao_interativa'
import Referencias from './referencias'
import CharacterTalk from '../../generics/characters/simple-talk'
import FidipidesOne from '../../../images/introducao_ao_pensamento_computacional/fidipides-one.svg'
import FidipidesTwo from '../../../images/introducao_ao_pensamento_computacional/fidipides-two.svg'
import FidipidesThree from '../../../images/introducao_ao_pensamento_computacional/fidipides-three.svg'
import FidipidesFour from '../../../images/introducao_ao_pensamento_computacional/fidipides-four.svg'

/*ESTE COMPONENTE DEVE RECEBER COMO PROPRIEDADE O SEGUINTE ITEM:
    id: String, representa o id desta unidade
.*/
class IntroducaoAoPensamentoComputacional extends UnitBase {
    constructor(props) {
        super(props)

        this.state = {
            availablePages: 5,
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
        return (<h1>1. Introdução ao Pensamento Computacional</h1>)
    }

    renderPage = () => {
        switch (this.state.openPage) {
            case "1":
                return (
                    <Texto1 />
                )
            case "2":
                return (
                    <Texto2 />
                )
            case "3":
                return (
                    <Texto3 />
                )
            case "4":
                return (
                    <AplicacaoInterativa />
                )
            case "5":
                return (
                    <Fragment>
                        <Desafios />
                        <Referencias />
                    </Fragment>
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
                    {this.renderTitle()}
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
