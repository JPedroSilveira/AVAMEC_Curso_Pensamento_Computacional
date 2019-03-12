import React from 'react'
import avaMecApi from '../../../services/avaMecApi'
import BasicButton from '../../generics/basic_button'

import './styles.css'

class MudarUnidade extends React.Component {
    constructor(props){
        super(props)
        
        this.state = {
            hasNextUnit: false,
            hasPreviousUnit: false
        }

        avaMecApi.getIfNextUnitExist(this.props.unit, this.nextUnitCallback)
        avaMecApi.getIfPreviousUnitExist(this.props.unit, this.previousUnitCallback)
    }

    nextUnitCallback = (info) => {
        if (info.detail.status === 200) { 
            this.setState({
                hasNextUnit: info.detail.data
            })
        }
        /*To-Do: Tratar erro caso o serviço não retorne uma resposta com sucesso (200).*/

        avaMecApi.closeGetIfNextUnitExist(this.nextUnitCallback)
    }


    previousUnitCallback = (info) => {
        if (info.detail.status === 200) { 
            this.setState({
                hasPreviousUnit: info.detail.data
            })
        }
        
        avaMecApi.closeGetIfPreviousUnitExist(this.previousUnitCallback)
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
        avaMecApi.getUnitProgress(this.props.unit, this.nextUnitReturn)
    }

    nextUnitReturn = (info) => {
        if (info.detail.status === 200) {
            if (info.detail.data.unidade.permitePorcentagem) {
                if (String(info.detail.data.porcentagemConclusao) < "100"){
                    avaMecApi.saveUnitProgress(this.props.unit, 100)
                }
            }
        }

        avaMecApi.closeGetUnitProgress(this.nextUnitReturn)

        avaMecApi.getNextUnit()
    }

    previousUnit = () => {
        avaMecApi.getPreviousUnit(this.props.unit)
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

export default MudarUnidade

