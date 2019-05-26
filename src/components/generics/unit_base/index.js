import React from 'react'
import AvaMecApiServices from '../../../services/avaMecApiServices'
import Pagination from '../pagination'
import LocalStorageUtils from '../../../utils/localStorageUtils'
import './styles.css'

class UnitBase extends React.Component {
    componentDidMount() {
        this.setState({
            openPage: LocalStorageUtils.getOpenPage()
        })

        this.validateProperties()
    }

    validateProperties = () => {
        if(this.props.id === undefined || this.props.id === ""){
            throw Error("Error in property \"id\", this value can't be undefined or empty!")
        }
    }

    updatePage = () => {
        this.setState({
            openPage: LocalStorageUtils.getOpenPage()
        })

        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

        AvaMecApiServices.saveLastPage(this.props.id)
    }
    
    loadPagination = () => {
        if(this.state.availablePages > 1){
            return (
                <Pagination
                    availablePages={this.state.availablePages}
                    onPageChange={this.updatePage}
                    unit={this.props.id} />
            )
        }
    }
}

export default UnitBase
