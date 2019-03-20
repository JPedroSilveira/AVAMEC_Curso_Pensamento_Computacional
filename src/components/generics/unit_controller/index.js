import React from 'react'
import AvaMecApi from '../../../services/avaMecApi.js'
import BasicButton from '../../generics/buttons/basic_button'

import './styles.css'

class UnitController extends React.Component {
    constructor(props){
        super(props)
        
        this.state = {
            hasNextUnit: false,
            hasPreviousUnit: false
        }

        AvaMecApi.getIfNextUnitExist(this.props.unit, this.hasNextUnitCallback)
        AvaMecApi.getIfPreviousUnitExist(this.props.unit, this.previousUnitCallback)
    }

    hasNextUnitCallback = info => {
        if (info.detail.status === 200) { 
            this.setState({
                hasNextUnit: info.detail.data
            })
        }

        AvaMecApi.closeGetIfNextUnitExistListener(this.hasNextUnitCallback)
    }

    previousUnitCallback = info => {
        if (info.detail.status === 200) { 
            this.setState({
                hasPreviousUnit: info.detail.data
            })
        }
        
        AvaMecApi.closeGetIfPreviousUnitExistListener(this.previousUnitCallback)
    }

    loadNextButton = () => {
        if (this.state.hasNextUnit){
            return (
                <BasicButton bigger={true} onClick={this.nextUnit}>
                    CONCLUIR E AVANÇAR PARA A PRÓXIMA UNIDADE
                </BasicButton>
            )
        }
    }

    loadPreviousButton = () => {
        if (this.state.hasPreviousUnit){
            return (
                <BasicButton onClick={this.previousUnit}>
                    VOLTAR PARA A UNIDADE ANTERIOR
                </BasicButton>
            )
        }
    }

    nextUnit = () => {
        AvaMecApi.getUnitConclusionData(this.props.unit, this.nextUnitCallback)
    }

    nextUnitCallback = info => {
        if (info.detail.status === 200) {
            if (info.detail.data.unidade.permitePorcentagem) {
                if (String(info.detail.data.porcentagemConclusao) < "100"){
                    AvaMecApi.saveUnitProgress(this.props.unit, 100)
                }
            }
        }

        AvaMecApi.closeGetUnitConclusionDataListener(this.nextUnitCallback)

        AvaMecApi.getNextUnit(this.props.unit)
    }

    previousUnit = () => {
        AvaMecApi.getPreviousUnit(this.props.unit)
    }

    render() {
        return (
            <div className="unit-controller-container">
                {this.loadPreviousButton()}
                {this.loadNextButton()}
            </div>
        )
    }
}

export default UnitController

