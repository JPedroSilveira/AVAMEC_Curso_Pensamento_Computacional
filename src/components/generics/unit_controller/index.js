import React from 'react'
import AvaMecApiServices from '../../../services/avaMecApiServices'
import BasicButton from '../../generics/buttons/basic_button'

import './styles.css'

class UnitController extends React.Component {
    constructor(props){
        super(props)
        
        this.state = {
            hasNextUnit: false,
            hasPreviousUnit: false
        }

        AvaMecApiServices.getIfNextUnitExist(this.props.unit, this.hasNextUnitCallback)
        AvaMecApiServices.getIfPreviousUnitExist(this.props.unit, this.previousUnitCallback)
    }

    hasNextUnitCallback = info => {
        if (info.detail.status === 200) { 
            this.setState({
                hasNextUnit: info.detail.data
            })
        }

        AvaMecApiServices.closeGetIfNextUnitExistListener(this.hasNextUnitCallback)
    }

    previousUnitCallback = info => {
        if (info.detail.status === 200) { 
            this.setState({
                hasPreviousUnit: info.detail.data
            })
        }
        
        AvaMecApiServices.closeGetIfPreviousUnitExistListener(this.previousUnitCallback)
    }

    renderNextButton = () => {
        if (this.state.hasNextUnit){
            return (
                <BasicButton bigger={true} marginLeft={true} onClick={this.nextUnit}>
                    AVANÇAR PARA A PRÓXIMA UNIDADE
                </BasicButton>
            )
        }
    }

    renderPreviousButton = () => {
        if (this.state.hasPreviousUnit){
            return (
                <BasicButton bigger={true} marginRight={true} onClick={this.previousUnit}>
                    VOLTAR PARA A UNIDADE ANTERIOR
                </BasicButton>
            )
        }
    }

    nextUnit = () => {
        AvaMecApiServices.getUnitConclusionData(this.props.unit, this.nextUnitCallback)
    }

    nextUnitCallback = info => {
        if (info.detail.status === 200) {
            if (info.detail.data.unidade.permitePorcentagem) {
                if (String(info.detail.data.porcentagemConclusao) < "100"){
                    AvaMecApiServices.saveUnitProgress(this.props.unit, 100)
                }
            }
        }

        AvaMecApiServices.closeGetUnitConclusionDataListener(this.nextUnitCallback)
        
        AvaMecApiServices.getNextUnit(this.props.unit)
    }

    previousUnit = () => {
        AvaMecApiServices.getPreviousUnit(this.props.unit)
    }

    render() {
        return (
            <div className="unit-controller-container">
                {this.renderPreviousButton()}
                {this.renderNextButton()}
            </div>
        )
    }
}

export default UnitController

