import React, { Fragment } from 'react'

import ActivityConstants from '../../../../constants/activityConstants'
import ActivityState from '../../../../constants/activityState'
import AvaMecApiServices from '../../../../services/avaMecApiServices'
import BaseActivity from '../../activity/baseActivity'
import BasicButton from '../../buttons/basic_button'
import CenterBoxContainer from '../../center_box_container'
import Box from '../../box'
import Color from '../../../../constants/color'

import ReactHtmlParser from 'react-html-parser'

/*PROPS DESTA CLASSE DEVE CONTER UM OBJETO activity do tipo:
    activity: um objetivo com os atributos:
        unitId: String, representa o id da unidade em questão,
        problems: lista de objetos com os atributos:
            id: String única para cada problema,
            title: String,
            subtitle: String,
            text: String,
            maxAnswerLength: Número inteiro
.*/

class ProblemActivity extends BaseActivity {
    constructor(props) {
        super(props)

        this.validateProps()
        
        this.state = {
            activityState: ActivityState.EMPTY,
            apiLoadedAnswers: []
        }
    }

    componentDidMount(){
        this.getSavedAnswers()

        this.getUnitConclusionData()
    }

    validateProps = () => {
        if (this.props.activity === undefined) {
            throw Error("Property 'activity' can't be undefined!")
        } else {
            if (this.props.activity.unitId === undefined){
                throw Error("Property 'unitId' can't be undefined!")
            }
            if (this.props.activity.problems === undefined || this.props.activity.problems === []){
                throw Error("Property 'activity.problems' can't be undefined or empty!")
            } else {
                this.props.activity.problems.forEach((problem, index) => {
                    if (problem.id === undefined || problem.id === ""){
                        throw Error("Property 'activity[" + index +"].problem.id' can't be undefined or empty!")
                    }
                    if (problem.maxAnswerLength === undefined){
                        throw Error("Property 'activity[" + index + "].problem.maxAnswerLength' can't be undefined or empty!")
                    }
                })
            }
        } 
    }

    getGenericProblemId = (problem) => {
        return this.props.activity.unitId + ActivityConstants.SEPARADOR + problem.id
    }

    addToLoadedAnswers = (key) => {
        this.state.apiLoadedAnswers.push(key)
    }

    getSavedAnswers = () => {
        this.props.activity.problems.forEach(problem => {
            AvaMecApiServices.getGenericData(
                this.getGenericProblemId(problem),
                this.callbackGetSavedAnswers
            )
        })
    }

    callbackGetSavedAnswers = (info) => {
        let canUpdateAnswer = info.detail.status === 200
            && info.detail.data[0] !== undefined
            && !this.wasLoaded(info.detail.data[0].chave)

        if (canUpdateAnswer) {
            let data = info.detail.data[0]

            let savedProblem = JSON.parse(data.valor)

            let index = this.props.activity.problems.findIndex(problem => problem.id === savedProblem.id)

            this.props.activity.problems[index] = savedProblem

            this.addToLoadedAnswers(data.chave)

            this.forceUpdate()

            let shouldCloseApiListener = this.state.apiLoadedAnswers.length === this.state.activity.examplas.length

            if (shouldCloseApiListener) {
                AvaMecApiServices.closeGenericDataListener(this.callbackGetSavedAnswers)
            }
        }
    }

    wasLoaded = (key) => {
        return this.state.apiLoadedAnswers.find(loadedKey => loadedKey === key) !== undefined
    }
    
    saveAnswers = () => {
        this.state.activity.problems.forEach(problem => {
            this.AvaMecApiServices.saveGenericData(this.getGenericProblemId(problem), problem)
        })
    }

    onChangeAnswer = (maxAnswerLength, data) => {
        
        let index = this.props.activity.problems
            .findIndex(problem => problem.id === data.currentTarget.id)

        this.props.activity.problems[index].answer = data.currentTarget.value.substr(0, maxAnswerLength)

        this.forceUpdate()
    }

    renderTitle = (title) => {
        if (title !== undefined){
            return (<h2>{title}</h2>)
        } else if (this.props.activity.problems.length > 1) {
            return (<h2>PROBLEMAS</h2>)
        } else {
            return (<h2>PROBLEMA</h2>)
        }
    }

    renderProblems = (problems) => {
        return(
            <Fragment>
                {problems.map((problem, key) => {
                        return (
                            <CenterBoxContainer key={key}>
                                <Box backgroundColor={Color.PROBLEM_BOX_BG}>
                                    <strong>{problem.title}.</strong> {ReactHtmlParser(problem.text)}
                                    <br /><br />
                                    {ReactHtmlParser(problem.subtitle)}
                                    <textarea
                                        id={problem.id}
                                        value={problem.answer}
                                        onChange={this.onChangeAnswer.bind(this, problem.maxAnswerLength)}
                                        cols="120"
                                        rows={Math.round(problem.maxAnswerLength / ActivityConstants.NUMBER_OF_LETTERS_PER_LINE_TEXTBOX)} />
                                </Box>
                            </CenterBoxContainer>
                        )
                    })
                }
            </Fragment>
        )
    }

    renderSaveButton = () => {
        if (this.state.activityState !== ActivityState.ANSWERED){
            return (
                <BasicButton onClick={this.saveAnswers} centralize={true}>
                    SALVAR RESPOSTAS
                </BasicButton>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderTitle(this.props.activity.titulo)}
                {this.renderProblems(this.props.activity.problems)}
                {this.renderSaveButton()}
            </div>
        )
    }
}

export default ProblemActivity