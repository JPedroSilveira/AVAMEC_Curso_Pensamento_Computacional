import React from 'react'
import ReactPaginate from 'react-paginate'
import LocalStorageUtils from '../../../utils/LocalStorageUtils'
import PaginationConstants from '../../../constants/paginationConstants'
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
            <ReactPaginate
                previousLabel={'<'}
                nextLabel={'>'}
                breakLabel={'...'}
                pageCount={this.state.availablePages}
                initialPage={this.state.page - 1}
                activeClassName={'selected-page'}
                marginPagesDisplayed={PaginationConstants.MARGIN_PAGES_DISPLAYED}
                pageRangeDisplayed={PaginationConstants.PAGE_RANGE_DISPLAYED}
                onPageChange={this.onPageChange}
                containerClassName={'pagination'}
            />
        )
    }
}

export default Pagination

