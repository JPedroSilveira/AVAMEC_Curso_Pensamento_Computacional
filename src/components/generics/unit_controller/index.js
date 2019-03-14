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

        AvaMecApi.getIfNextUnitExist(this.props.unit, this.nextUnitCallback)
        AvaMecApi.getIfPreviousUnitExist(this.props.unit, this.previousUnitCallback)
    }

    nextUnitCallback = info => {
        if (info.detail.status === 200) { 
            this.setState({
                hasNextUnit: info.detail.data
            })
        }
        /*To-Do: Tratar erro caso o serviço não retorne uma resposta com sucesso (200).*/

        AvaMecApi.closeGetIfNextUnitExistListener(this.nextUnitCallback)
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
                <BasicButton onClick={this.nextUnit}>
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

        AvaMecApi.closeGetUnitConclusionDataListener(this.nextUnitReturn)

        AvaMecApi.getNextUnit()
    }

    previousUnit = () => {
        AvaMecApi.getPreviousUnit(this.props.unit)
    }

    render() {
        return (
            <div className="container">
                {this.loadPreviousButton()}
                {this.loadNextButton()}
            </div>
        )
    }
}

export default UnitController

