import React from 'react'
import AvaMecApi from '../../../services/avaMecApi'

class BaseActivity extends React.Component {

    getUnitConclusionData = () => {
        AvaMecApi.getUnitConclusionData(this.callbackUnitConclusionData)
    }

    callbackUnitConclusionData = info => {
        if (info.detail.status === 200) {
            if (info.detail.data.concluido) {
                this.setState({
                    unitComplete: true
                })
            }
        }
        
        AvaMecApi.closeGetUnitConclusionDataListener(this.callbackUnitConclusionData)
    }
}

export default BaseActivity