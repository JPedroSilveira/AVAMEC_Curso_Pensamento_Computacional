import React, { Fragment } from 'react'

import ListUtils from '../../../../utils/listUtils'

import AvaMecApiServices from '../../../../services/avaMecApiServices'

import ActivityConstants from '../../../../constants/activityConstants'
import ActivityState from '../../../../constants/activityState'
import UnitState from '../../../../constants/unitState' 
import QuestionState from '../../../../constants/questionState'
import OptionValues from '../../../../constants/optionValues.js'

import BaseActivity from '../baseActivity'

import BasicButton from '../../buttons/basic_button'
import AlgorithmLevel from '../../algorithm_level'
import CenterBoxContainer from '../../center_box_container'
import StatementAlgorithmBox from '../../statement_algorithm_box'
import InlineBox from '../../inline_box'
import ActivityOption from '../activity_option'
import InputRadioButton from '../../buttons/input_radio_button'
import GradeBox from '../../grade_box'
import Box from '../../box'
import Strong from '../../font/strong'
import Color from '../../../../constants/color'

import ReactHtmlParser from 'react-html-parser'

import LoadImage from '../../../../images/load-image.png'
import PressedLoadImage from '../../../../images/pressed-load-image.png'
import './styles.css'

import AvaMECApiConstants from '../../../../constants/avaMECApiConstants'
import YouTubePlayer from '../../youtube_player';

/*PROPS DESTA CLASSE DEVE CONTER UM OBJETIVO "atividade" DO TIPO:
    activity: um objetivo com os atributos:
        id: String única para este dado genérico, sendo que deve ter no máximo o valor da constante ActivityConstants.MAX_LENGTH_ID de caracteres
        unitId: String,
        questions: Lista de objetos com os atributos:
            id: String, //Deve ter no máximo o valor da constante MAX_CARACTERES_ID de caracteres
            title: String,
            statement: String,
            options: Lista de objetos com os atributos:
                value: '1' para verdadeira e '0' para falsa,
                key: String numérica,
                text: String,
                tip: String
.*/
const MAX_CARACTERES_ID = 250

class IntegralActivity extends BaseActivity {
    constructor(props) {
        super(props)

        this.validateProps()

        this.state = {
            activityState: ActivityState.EMPTY,
            grade: 0,
            selectedOptions: this.generateSelectedOptionsInitialData(), 
            unitState: UnitState.NOT_COMPLETED
        }
    }

    componentDidMount() {
        this.getSavedAnswer()

        this.getUnitConclusionData()
    }

    validateProps = () => {
        if (this.props.activity === undefined){
            throw Error("Property 'activity' can't be undefined!")
        } else {
            if (this.props.activity.unitId === undefined) {
                throw Error("Property 'activity.unitId' can't be undefined!")
            }

            if (this.props.activity.id === undefined) {
                throw Error("Property 'activity.id' can't be undefined!")
            } else if (this.props.activity.id.length > ActivityConstants.MAX_LENGTH_ID){
                throw Error("Property 'activity.id' length is greater than the limit of "+MAX_CARACTERES_ID+" characters!")
            }

            if (this.props.activity.questions === undefined || this.props.activity.questions.length === 0) {
                throw Error("Property 'activity.questions' can't be undefined or empty!")
            } else {
                this.props.activity.questions.forEach(question => {
                    if (question.id > ActivityConstants.MAX_LENGTH_ID){
                        throw Error("Property 'question.id' of 'activity.question' is greater than the limit of " + MAX_CARACTERES_ID + " characters!")
                    }
                    question.options.forEach(option => {
                        if (option.value === undefined){
                            throw Error("Property 'option.value' can't be undefined!")
                        }
                        if (option.key === undefined) {
                            throw Error("Property 'option.key' can't be undefined!")
                        }
                        if (option.text === undefined || option.text.length === 0) {
                            throw Error("Property 'option.text' can't be undefined or empty!")
                        }
                        if (option.tip === undefined) {
                            throw Error("Property 'option.tip' can't be undefined!")
                        }
                    })
                })
            }
        }
    }

    generateSelectedOptionsInitialData = () => {
        let selectedOptions = []

        this.props.activity.questions.forEach(question => {
            selectedOptions.push({
                questionId: question.id,
                key: "0",
                state: QuestionState.NOT_ANSWERED
            })
        })

        return selectedOptions
    }

    getSavedAnswer = () => {
        AvaMecApiServices.getActivity(this.props.activity.id, this.getSavedAnswerCallback)
    }

    getSavedAnswerCallback = (info) => {
        if (info.detail.status === 200) {
            let data = info.detail.data

            if (data.mapaAtributos.quantidadeRespostasResgistradas > 0) {   
                let selectedOptions = []

                this.props.activity.questions.forEach(question => {
                    let resposta = null
    
                    let respostas = data.questoesUsuario.find(questaoUsuario =>
                        questaoUsuario.questao.identificador === question.id
                    ).respostas

                    let hasAnswers = respostas !== undefined

                    if (hasAnswers) {

                        resposta = respostas.find(resposta =>
                            resposta.valor === AvaMECApiConstants.SELECTED_OPTION_VALUE
                        )

                        let hasSelectedOption = resposta !== undefined

                        if (hasSelectedOption){

                            let option = this.getOptionByQuestionIdAndKey(question.id, resposta.chave)

                            if (option.value === OptionValues.RIGHT) {
                                selectedOptions.push({
                                    questionId: question.id,
                                    key: resposta.chave,
                                    state: QuestionState.ANSWERED_RIGHT
                                })
                            } else {
                                selectedOptions.push({
                                    questionId: question.id,
                                    key: resposta.chave,
                                    state: QuestionState.ANSWERED_WRONG
                                })
                            }
                        } else { 
                            selectedOptions.push({
                                questionId: question.id,
                                key: null,
                                state: QuestionState.NOT_ANSWERED
                            })
                        }
                    }
                })

                this.setState({
                    activityState: ActivityState.ANSWERED,
                    grade: data.nota,
                    selectedOptions: selectedOptions
                })
            }
        } 

        this.shuffleOptions()

        AvaMecApiServices.closeGetActivity(this.getSavedAnswerCallback)
    }

    saveActivityAnswer = () => {
        let apiActivity = {
            "identificador": this.props.activity.id,
            "questoes": []
        }

        this.props.activity.questions.forEach(question => {
            let apiQuestion = {
                "identificador": question.id,
                "gabaritos": []
            }

            let selectedOption = this.getSelectedOptionByQuestionId(question.id)

            question.options.forEach(option => {
                let apiTemplate = {
                    "chave": option.key,
                    "valor": option.key === selectedOption.key ? 
                        AvaMECApiConstants.SELECTED_OPTION_VALUE : 
                        AvaMECApiConstants.NOT_SELECTED_OPTION_VALUE
                }

                apiQuestion.gabaritos.push(apiTemplate)
            })
            apiActivity.questoes.push(apiQuestion)
        })

        AvaMecApiServices.saveActivity(apiActivity, this.saveActivityCallback)
    }

    saveActivityCallback = info => {
        if (info.detail.status === 200) {
            this.setState({
                activityState: ActivityState.ANSWERED,
                grade: info.detail.data.notaAtividade
            })

            this.getUnitConclusionData()
            this.getSavedAnswer()
        }

        AvaMecApiServices.closeSaveActivity(this.saveActivityCallback)
    }

    onChangeSelectedOption = data => {
        if (this.state.unitState !== UnitState.COMPLETED && this.state.activityState !== ActivityState.ANSWERED) {
            let index = this.getIndexSelectedOptionByQuestionId(data.currentTarget.name)

            if (this.state.selectedOptions[index].state === QuestionState.NOT_ANSWERED) {
                this.state.selectedOptions[index].key = data.currentTarget.value

                this.forceUpdate()
            }
        }
    }

    getIndexSelectedOptionByQuestionId = (questionId) => {
        return this.state.selectedOptions.findIndex(option => option.questionId === questionId)
    }

    getSelectedOptionByQuestionId = (questionId) => {
        return this.state.selectedOptions.find(option => option.questionId === questionId)
    }

    getOptionByQuestionIdAndKey = (questionId, key) => {
        let question = this.props.activity.questions.find(question =>
            question.id === questionId
        )

        return question.options.find(option => option.key === key)
    }

    shuffleOptions = () => {
        this.props.activity.questions.forEach(question => {
            let seletedOption = this.getSelectedOptionByQuestionId(question.id)

            if (seletedOption.state !== QuestionState.ANSWERED) {
                question.options = ListUtils.shuffle(question.options)
            }
        })

        this.forceUpdate()
    }

    isSelectedOption = (question, option) => {
        let index = this.getIndexSelectedOptionByQuestionId(question.id) 

        return this.state.selectedOptions[index].key === option.key
    }

    retry = () => {
        this.shuffleOptions()

        let selectedOptions = this.state.selectedOptions

        selectedOptions.forEach(selectedOption => {
            if (selectedOption.state === QuestionState.ANSWERED_WRONG) {
                selectedOption.key = null
                selectedOption.state = QuestionState.NOT_ANSWERED
            }
        })

        this.setState({
            activityState: ActivityState.RETRY,
            selectedOptions: selectedOptions
        })
    }

    renderOptions = (question) => {
        return (
            <Fragment>
                {question.options.map((option, key) => {
                    return (
                        <ActivityOption key={key}>
                            {this.renderOptionText(question, option)}
                            {this.renderOptionTip(question, option)}
                        </ActivityOption>
                    )
                })}
            </Fragment>
        )
    }

    renderOptionText = (question, option) => {
        let isSelectedOption = this.isSelectedOption(question, option)

        return (
            <InputRadioButton 
                text={option.text}
                radioName={question.id}
                radioValue={option.key}
                checked={isSelectedOption}
                onChange={this.onChangeSelectedOption}/>
        )
    }
    
    renderOptionTip = (question, option) => {
        let isSelectedOption = this.isSelectedOption(question, option)

        if (isSelectedOption){
    
            let indexSelectedOption = this.getIndexSelectedOptionByQuestionId(question.id)

            let selectedOption = this.state.selectedOptions[indexSelectedOption]
            
            if (selectedOption.state === QuestionState.ANSWERED_RIGHT) {
                return (
                    <Box backgroundColor={Color.HINT_RIGHT_BG}>
                        <Strong>Resposta Certa: </Strong>
                        {option.tip}
                    </Box>
                )
            } else if (selectedOption.state === QuestionState.ANSWERED_WRONG) {
                return (
                    <Box backgroundColor={Color.HINT_WRONG_BG}>
                        <Strong>Resposta Errada: </Strong>
                        {option.tip}
                    </Box>
                )
            }
        }
    }

    renderQuestions = () => {
        return (
            <Fragment>
                {this.props.activity.questions.map((question, key) => {
                    return (
                        <div key={key}>
                            {this.renderActivityStatement(question)}
                            {this.renderVideo(question)}
                            <InlineBox>
                                {this.renderOptions(question)}
                            </InlineBox>
                        </div>
                    )
                })}
            </Fragment>
        )
    }

    renderVideo = (question) => {
        if (question.videoID !== undefined){
            return (
                <Fragment>
                     <br /><YouTubePlayer videoId={question.videoID} /><br />
                </Fragment>
            )
        }
    }

    renderActivityStatement = (question) => {
        if (question.algorithm){
            return (
                <div>
                    {this.renderAlgorithmStatement(question)}
                    {question.statement !== undefined && question.statement !== "" &&
                        <Fragment>{ReactHtmlParser(question.statement)}</Fragment>
                    }
                </div>
            )
        } else {
            return (
                <Fragment>
                    {question.title !== undefined && question.title !== "" && 
                        <p>{ReactHtmlParser(question.title)}</p>
                    }
                    {question.statement !== undefined && question.statement !== "" && 
                        <div className="question-statement">
                            {ReactHtmlParser(question.statement)}
                        </div>
                    }
                </Fragment>
            )
        }
    }

    renderAlgorithmStatement = (question) => {
        return (
            <CenterBoxContainer>
                <StatementAlgorithmBox title={question.title}>
                    {this.renderPreInstructions(question.preInstructions)}
                    {this.renderInstructions(question.instructions, true)}
                </StatementAlgorithmBox>
            </CenterBoxContainer>
        )
    }

    renderPreInstructions = (preInstructions) => {
        if (preInstructions !== undefined && preInstructions !== ""){
            return (
                <Fragment className="textdarkgreen">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ReactHtmlParser(preInstructions)}
                </Fragment>
            )
        }
    }
    
    renderInstructions = (instructions, first) => {
        if (instructions !== undefined && instructions.length > 0){
            return (
                <AlgorithmLevel showStyle={first} child={!first}>
                    {instructions.map((instruction, key) => {
                        return this.renderInstruction(instruction, key)
                    })}
                </AlgorithmLevel>
            )
        }
    }

    renderInstruction = (instruction, key) => {
        return (
            <li key={key}>
                {ReactHtmlParser(instruction.text)}
                {this.renderInstructions(instruction.instructions, false)}
            </li>
        )
    }

    renderTitle = () => {
        return (
            <Fragment>
                {this.props.activity.questions.length > 1 ?
                    <h3>ATIVIDADES AVALIATIVAS</h3> : <h3>ATIVIDADE AVALIATIVA</h3>
                }
                {this.props.activity.statement !== undefined && this.props.activity.statement.length > 0 &&
                    <div className="activity-statement">
                        <p>{ReactHtmlParser(this.props.activity.statement)}</p>
                    </div>
                }
            </Fragment>
        )
    }

    renderGrade = () => {
        if (this.state.activityState === ActivityState.ANSWERED) {
            return (
                <GradeBox value={this.state.grade}/>
            )
        }
    }

    renderSendButton = () => {   
        if(this.state.activityState !== ActivityState.ANSWERED) {
            if (this.state.unitState !== UnitState.COMPLETED) {
                return (
                    <BasicButton onClick={this.saveActivityAnswer}>
                        ENVIAR RESPOSTAS
                    </BasicButton>
                )
            } else {
                return (
                    <BasicButton disabled={true}>
                        UNIDADE CONCLUÍDA
                    </BasicButton>
                )
            }
        }
    }

    renderRetryButton = () => {
        if (this.state.activityState === ActivityState.ANSWERED) {
            let hasWrongOrEmptyOption = this.state.selectedOptions
                .some(selectedOption => selectedOption.state === QuestionState.ANSWERED_WRONG
                        || selectedOption.state === QuestionState.NOT_ANSWERED)
            if (hasWrongOrEmptyOption) {
                if(this.state.unitState === UnitState.COMPLETED){
                    return (
                        <BasicButton disabled={true}>
                            UNIDADE CONCLUÍDA
                        </BasicButton>
                    )
                } else {
                    return (
                        <BasicButton
                            onClick={this.retry}
                            onMouseOver={e => e.currentTarget.firstChild.src = PressedLoadImage}
                            onMouseOut={e => e.currentTarget.firstChild.src = LoadImage}>
                            <img src={LoadImage} alt="Clique para tentar responder novamente ao questionário." />
                            TENTAR NOVAMENTE
                        </BasicButton>
                    )
                }
                
            }
        }
    }

    render() {
        return (
            <div className="container-integral-activity">
                {this.renderTitle()}

                {this.renderQuestions()}<br/>

                {this.renderGrade()}

                {this.renderSendButton()}

                {this.renderRetryButton()}
            </div>
        )
    }
}

export default IntegralActivity
