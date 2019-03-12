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
        /*To-Do: Tratar erro na resposta do servidor.*/

        AvaMecApi.closeGetUnitConclusionData(this.callbackUnitConclusionData)
    }
}

export default BaseActivity