import React, { Fragment } from 'react'
import ReactPaginate from 'react-paginate'
import UnitServices from '../../../services/unitServices'
import AvaMecApiServices from '../../../services/avaMecApiServices'
import LocalStorageUtils from '../../../utils/localStorageUtils.js'
import Strong from '../font/strong'
import SmallFont from '../font/small'
import CenterBoxContainer from '../center_box_container'
import Image from '../image'
import LeftArrow from '../../../images/left-arrow.png'
import RightArrow from '../../../images/right-arrow.png'
import UpArrow from '../../../images/up-arrow.png'
import GreekColumn from '../../../images/greek-column.png'
import Padrao from '../../../images/padrao.png'
import IDs from '../../../constants/ids'
import './styles.css'

class Pagination extends React.Component {
    constructor(props){
        super(props)

        let page = parseInt(LocalStorageUtils.getOpenPage())

        this.state = {
            availablePages: this.props.availablePages,
            page: page,
            hasNextUnit: false,
            hasPreviousUnit: false
        }

        AvaMecApiServices.getIfNextUnitExist(this.props.unit, this.hasNextUnitCallback)
        AvaMecApiServices.getIfPreviousUnitExist(this.props.unit, this.hasPreviousUnitCallback)
    }

    hasNextUnitCallback = info => {
        if (info.detail.status === 200) {
            this.setState({
                hasNextUnit: info.detail.data
            })
        }

        AvaMecApiServices.closeGetIfNextUnitExistListener(this.hasNextUnitCallback)
    }

    hasPreviousUnitCallback = info => {
        if (info.detail.status === 200) {
            this.setState({
                hasPreviousUnit: info.detail.data
            })
        }

        AvaMecApiServices.closeGetIfPreviousUnitExistListener(this.hasPreviousUnitCallback)
    }

    nextUnit = () => {
        UnitServices.nextUnit(this.props.unit)
    }

    previousUnit = () => {
        UnitServices.previousUnit(this.props.unit)
    }

    onPageChange = data => {
        let selectedPage = data.selected + 1
        LocalStorageUtils.setOpenPage(selectedPage)

        this.props.onPageChange()

        this.setState({
            page: selectedPage
        })
    }

    nextPageOrUnit = () =>{
        if (this.state.page === this.state.availablePages && this.state.hasNextUnit){
            this.nextUnit()
        } else if(this.state.page !== this.state.availablePages) {
            LocalStorageUtils.setOpenPage(this.state.page + 1)

            this.props.onPageChange()

            this.setState({
                page: this.state.page + 1
            })
        }
    }

    previousPageOrUnit = () => {
        if (this.state.page === 1 && this.state.hasPreviousUnit){
            this.previousUnit();
        } else if(this.state.page !== 1){
            LocalStorageUtils.setOpenPage(this.state.page - 1)

            this.props.onPageChange()

            this.setState({
                page: this.state.page - 1
            })
        }
    }

    returnButton = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    render() {
        return (
            <Fragment>
                <div className="return-button-container">
                    <span className="return-button-text">VOLTAR PARA O TOPO</span>
                    <button onClick={this.returnButton} className="return-button"><Image width="3.5em" height="2.5em" src={UpArrow} alt="Retornar para o topo da página." /></button>
                </div>
                <div id={IDs.SLIDE_INFO_PAGINATION} className="slides-text-container">
                    <p><span className="slide-text">VOCÊ ESTÁ EM: </span></p>
                </div>
                <div style={{ backgroundImage: "url(" + Padrao + ")", backgroundRepeat: "repeat-x", backgroundSize: "contain"}}>
                    <CenterBoxContainer>
                        <div className="slide-box-container">
                            SLIDE {this.state.page} DE {this.state.availablePages}
                        </div>
                    </CenterBoxContainer>
                </div>
                <div className="pagination-container">
                    <CenterBoxContainer>
                        <div className="unit-box-container">
                        <div onClick={this.nextPageOrUnit} className="unit-box-item button-item">
                            <Image width="1.3em" height="1.7em" src={RightArrow} alt="Avançar" />
                        </div>
                        <div className="unit-box-bar"></div>
                        <div className="unit-box-item unit-box-text unit-text-one">
                            {this.state.page === this.state.availablePages ?
                                <Fragment>
                                    {this.state.hasNextUnit ?
                                        <span>PRÓXIMA UNIDADE</span>
                                        :
                                        <span>VOCÊ ESTÁ NA ÚLTIMA UNIDADE</span>
                                    }
                                </Fragment>
                                :
                                <span>SLIDE {this.state.page + 1}</span>
                            }
                        </div>
                        <div className="unit-box-item unit-box-text">
                            {this.state.page === 1 ?
                                <Fragment>
                                    {this.state.hasPreviousUnit ?
                                        <span>UNIDADE ANTERIOR</span>  
                                        :
                                        <span>VOCÊ ESTÁ NA PRIMEIRA UNIDADE</span>  
                                    }
                                </Fragment>
                                :
                                <span>SLIDE {this.state.page - 1}</span>
                            }
                        </div>
                        <div className="unit-box-bar"></div>
                        <div onClick={this.previousPageOrUnit} className="unit-box-item button-item">
                            <Image width="1.3em" height="1.7em" src={LeftArrow} alt="Voltar" />
                        </div>
                    </div>
                    </CenterBoxContainer>
                    <CenterBoxContainer>
                        <div className="greek-column-container">
                        <div className="greek-column-item">
                            <Image width="4em" height="8em" src={GreekColumn} alt="Greek column" />
                        </div>
                        <div className="greek-column-item"> 
                            <p className="greek-slide-text"><SmallFont><Strong>IR PARA OS SLIDE: </Strong></SmallFont></p>
                            <ReactPaginate
                                disabledClassName={'disabled-page'}
                                previousLabel={'<'}
                                nextLabel={'>'}
                                breakLabel={'...'}
                                pageCount={this.state.availablePages}
                                initialPage={this.state.page - 1}
                                forcePage={this.state.page - 1}
                                activeClassName={'selected-page'}
                                marginPagesDisplayed={this.state.availablePages}
                                pageRangeDisplayed={this.state.availablePages}
                                onPageChange={this.onPageChange}
                                containerClassName={'pagination'}
                            />
                        </div>
                        <div className="greek-column-item">
                            <Image width="4em" height="8em" src={GreekColumn} alt="Greek column" />
                        </div>
                    </div>
                    </CenterBoxContainer>
                </div>
            </Fragment>
        )
    }
}

export default Pagination

