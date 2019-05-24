import React, { Fragment } from 'react'
import ReactPaginate from 'react-paginate'
import LocalStorageUtils from '../../../utils/localStorageUtils.js'
import PCenter from '../p_center'
import StrongL from '../strong_l'
import SmallFont from '../font/small'
import './styles.css'

class Pagination extends React.Component {
    constructor(props){
        super(props)

        let page = parseInt(LocalStorageUtils.getOpenPage())

        this.state = {
            availablePages: this.props.availablePages,
            page: page
        }
    }

    onPageChange = data => {
        let selectedPage = data.selected + 1
        LocalStorageUtils.setOpenPage(selectedPage)

        this.props.onPageChange()
    }

    render() {
        return (
            <Fragment>
                <div>
                    
                </div>
                <PCenter><SmallFont><StrongL>IR PARA OS SLIDE: </StrongL></SmallFont></PCenter>
                <ReactPaginate
                    disabledClassName={'disabled-page'}
                    previousLabel={'<'}
                    nextLabel={'>'}
                    breakLabel={'...'}
                    pageCount={this.state.availablePages}
                    initialPage={this.state.page - 1}
                    activeClassName={'selected-page'}
                    marginPagesDisplayed={this.state.availablePages}
                    pageRangeDisplayed={this.state.availablePages}
                    onPageChange={this.onPageChange}
                    containerClassName={'pagination'}
                />
            </Fragment>
        )
    }
}

export default Pagination

