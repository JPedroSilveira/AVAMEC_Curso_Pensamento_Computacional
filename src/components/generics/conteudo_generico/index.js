import React from 'react'
import AvaMecApi from '../../../services/avaMecApi'
import Pagination from '../pagination'
import UnitController from '../unit_controller'
import LocalStorageUtils from '../../../utils/localStorageUtils.js'
import './styles.css'

class ConteudoGenerico extends React.Component {
    componentDidMount() {
        this.setState({
            openPage: LocalStorageUtils.getOpenPage()
        })

        this.validateProperties()
    }

    validateProperties = () => {
        if(this.props.id === undefined || this.props.id === ""){
            throw Error("error in property \"id\"!")
        }
    }

    updatePage = () => {
        this.setState({
            openPage: LocalStorageUtils.getOpenPage()
        })

        /*PageUp on update*/
        window.scrollTo(0, 0)

        AvaMecApi.saveLastPage(this.props.id)
    }
    
    loadPagination = () => {
        return (
            <Pagination
                availablePages={this.state.availablePages}
                onPageChange={this.updatePage}
                unit={this.props.id} />
        )
    }

    loadUnitController = () => {
        return (
            <UnitController unit={this.props.id}/>        
        )
    }
}

export default ConteudoGenerico
