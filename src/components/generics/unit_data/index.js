import React from 'react'
import UnitDataServices from '../../../services/unitDataServices'
import AvaMecApiServices from '../../../services/avaMecApiServices'

import './styles.css'

class UnitData extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            unitState: undefined
        }

        this.validateProps()

        AvaMecApiServices.getUnitConclusionData(this.props.unitId, this.updateUnitDataCallback)
    }

    validateProps = () => {
        if(this.props.unitId === undefined){
            throw Error("Property 'unitId' can't be undefined")
        }
    }

    updateUnitDataCallback = eventReturn => {
        this.setState({
            unitState: UnitDataServices.getUnitStateFromCallback(eventReturn)
        })
    }

    render() {
        return (
            <div className="unit-data-container">
                Unidade {UnitDataServices.getUnitNameById(this.props.unitId)} {UnitDataServices.getUnitStateName(this.state.unitState)}
            </div>
        )
    }
}

export default UnitData