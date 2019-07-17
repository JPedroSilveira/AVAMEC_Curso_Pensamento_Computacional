import React, { Fragment } from 'react'
import UnitBase from '../../generics/unit_base'
import ContentContainer from '../../generics/content_container'
import UnitTitle from '../../generics/unit_title'
import Slide1 from './slide_1'
import Slide2 from './slide_2'

/*ESTE COMPONENTE DEVE RECEBER COMO PROPRIEDADE O SEGUINTE ITEM:
    id: String, representa o id desta unidade
.*/
class Conclusao extends UnitBase {
    constructor(props) {
        super(props)

        this.state = {
            availablePages: 2,
            renderTalk: false,
            talkPage: "NaN"
        }
    }

    renderUnitHeader = () => {
        if (this.state.openPage === "1") {
            return (
                <Fragment>
                    {this.renderHeader()}
                    <UnitTitle>CONCLUSÃO</UnitTitle>
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
            default:
                return null
        }
    }

    render() {
        return (
            <Fragment>
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

export default Conclusao
