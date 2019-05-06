import React from 'react'
import AvaMecApiServices from '../../../services/avaMecApiServices'
import UnitState from '../../../constants/unitState'

class BaseActivity extends React.Component {

    getUnitConclusionData = () => {
        AvaMecApiServices.getUnitConclusionData(this.props.activity.unitId, this.callbackUnitConclusionData)
    }

    callbackUnitConclusionData = info => {
        if (info.detail.status === 200) {
            if (info.detail.data.concluido) {
                this.setState({
                    unitState: UnitState.COMPLETED
                })
            }
        }
        
        AvaMecApiServices.closeGetUnitConclusionDataListener(this.callbackUnitConclusionData)
    }
}

export default BaseActivity