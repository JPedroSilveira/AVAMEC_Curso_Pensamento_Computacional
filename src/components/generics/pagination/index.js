import React, { Fragment } from 'react'
import ReactPaginate from 'react-paginate'
import UnitServices from '../../../services/unitServices'
import AvaMecApiServices from '../../../services/avaMecApiServices'
import LocalStorageUtils from '../../../utils/localStorageUtils.js'
import Strong from '../font/strong'
import Regular from '../font/regular'
import SmallFont from '../font/small'
import MediumFont from '../font/medium' 
import FontLight from '../font/light'
import FontLightBlue from '../font/light-blue'
import Image from '../image'
import UpArrow from '../../../images/component/up-arrow.svg'
import GreekColumn from '../../../images/component/greek-column.svg'
import Padrao from '../../../images/padrao.png'
import IDs from '../../../constants/ids'
import './styles.css'
import FontMedium from '../font/medium';
import FontSmall from '../font/small';

class Pagination extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            availablePages: this.props.availablePages,
            page: this.props.openPage,
            hasNextUnit: false,
            hasPreviousUnit: false
        }

        AvaMecApiServices.getIfNextUnitExist(this.props.unit, this.hasNextUnitCallback)
        AvaMecApiServices.getIfPreviousUnitExist(this.props.unit, this.hasPreviousUnitCallback)
    }

    componentDidUpdate(prevProps) {
        if (this.props.openPage !== prevProps.openPage) {
            this.setState({
                page: parseInt(this.props.openPage)
            })
        }
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
        if(!isNaN(data.selected)){
            let selectedPage = data.selected + 1
            LocalStorageUtils.setOpenPage(selectedPage)

            this.props.onPageChange()

            this.setState({
                page: selectedPage
            })
        }
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
                <div className="pagination-top-container">
                    <div className="pagination-top-sub-container">
                        <div className="return-button-container">
                            <div className="return-button-sub-container">
                                <Strong><FontSmall><FontLightBlue>VOLTAR PARA O TOPO</FontLightBlue></FontSmall></Strong>
                                <Image className="return-button" backgroundColor="#ffffff" onClick={this.returnButton} width="60px" height="6d0px" src={UpArrow} alt="Retornar para o topo da página." />     
                            </div>
                        </div>
                        <div id={IDs.SLIDE_INFO_PAGINATION} className="slides-text-container">
                            <Strong><FontSmall><FontLightBlue>VOCÊ ESTÁ EM: </FontLightBlue></FontSmall></Strong>
                        </div>
                    </div>
                </div>
                <div className="slide-info-container">
                    <div className="slide-info-sub-container" style={{ backgroundImage: "url(" + Padrao + ")", backgroundRepeat: "repeat-x", backgroundSize: "contain" }}>
                        <div className="slide-info-box-container">
                            <Strong><FontMedium><FontLightBlue>SLIDE {this.state.page} DE {this.state.availablePages}</FontLightBlue></FontMedium></Strong>
                        </div>
                    </div>
                </div>
                <div className="pagination-container">
                    <div className="pagination-sub-container">
                        <div className="unit-box-container">
                            <div onClick={this.previousPageOrUnit} className="button-item">
                                <Regular>{"<"}</Regular>
                            </div>
                            <div className="unit-box-bar"></div>
                            <div className="unit-text">
                                <div className="unit-text-right">
                                    {this.state.page === 1 ?
                                        <Fragment>
                                            {this.state.hasPreviousUnit ?
                                                <MediumFont><Strong><FontLight>UNIDADE ANTERIOR</FontLight></Strong></MediumFont>
                                                :
                                                <MediumFont><Strong><FontLight>VOCÊ ESTÁ NA PRIMEIRA UNIDADE</FontLight></Strong></MediumFont>
                                        }
                                        </Fragment>
                                        :
                                        <MediumFont><Strong><FontLight>SLIDE {this.state.page - 1}</FontLight></Strong></MediumFont>
                                }
                                </div>
                                <div className="unit-text-left">
                                    {this.state.page === this.state.availablePages ?
                                        <Fragment>
                                            {this.state.hasNextUnit ?
                                                <MediumFont><Strong><FontLight>PRÓXIMA UNIDADE</FontLight></Strong></MediumFont>
                                                :
                                                <MediumFont><Strong><FontLight>VOCÊ ESTÁ NA ÚLTIMA UNIDADE</FontLight></Strong></MediumFont>
                                            }
                                        </Fragment>
                                        :
                                        <MediumFont><Strong><FontLight>SLIDE {this.state.page + 1}</FontLight></Strong></MediumFont>
                                    }
                                </div>
                            </div>
                            <div className="unit-box-bar"></div>
                            <div onClick={this.nextPageOrUnit} className="button-item">
                                <Regular>{">"}</Regular>
                            </div>
                        </div>
                    </div>
                    <div className="pagination-sub-container">
                        <div className="pagination-second-container">
                            <div className="greek-first-column">
                                <Image backgroundColor="#f4f3f3" width="auto" height="190px" src={GreekColumn} alt="Greek column" />
                            </div>
                            <div className="page-control-container"> 
                                <p className="greek-slide-text"><FontLightBlue><SmallFont><Strong>IR PARA O SLIDE: </Strong></SmallFont></FontLightBlue></p>
                                <ReactPaginate
                                    pageRangeDisplayed={2}
                                    marginPagesDisplayed={2}
                                    disabledClassName={'disabled-page'}
                                    previousLabel={'<'}
                                    nextLabel={'>'}
                                    breakLabel={'...'}
                                    pageCount={this.state.availablePages}
                                    initialPage={this.state.page - 1}
                                    forcePage={this.state.page - 1}
                                    activeClassName={'selected-page'}
                                    onPageChange={this.onPageChange}
                                    containerClassName={'pagination'}
                                />
                            </div>
                            <div className="greek-second-column">
                                <Image backgroundColor="#f4f3f3" width="auto" height="190px" src={GreekColumn} alt="Greek column" />
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Pagination

