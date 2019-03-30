import React, { Fragment } from 'react'

import Box from '../../../generics/box'
import BasicButton from '../../buttons/basic_button'
import AddButton from '../../buttons/add_button'
import DeleteButton from '../../buttons/delete_button'
import BaseActivity from '../baseActivity'
import CenterBoxContainer from '../../center_box_container'

import ActivityConstants from '../../../../constants/activityConstants'
import UnitState from '../../../../constants/unitState'

import AvaMecApiServices from '../../../../services/avaMecApiServices'

import AvaMecUtils from '../../../../utils/avaMecUtils'

import './styles.css'

/*PROPS DESTA CLASSE DEVE CONTER UM OBJETO atividade do tipo:
    activity: um objetivo com os atributos:
        id: String única para este dado genérico, sendo que deve ter no máximo o valor da constante ActivityConstants.MAX_LENGTH_ID de caracteres
        unitId: id da unidade em que se encontra a atividade, sendo que deve ter no máximo o valor da constante ActivityConstants.MAX_LENGTH_UNIT_ID de caracteres,
        statement: String,
        minExamplesAmount: Número inteiro,
        maxExamplesAmount: Número inteiro,
        questions: lista de objetos com os atributos:
            title: String,
            maxAnswerLength: Número inteiro sendo que:
                a soma de todos os tamanhos de todas as questões não pode passar o valor da constante ActivityConstants.MAX_ANSWER_LENGTH de caracteres,
.*/
class ComplementaryActivity extends BaseActivity {
    constructor(props) {
        super(props)

        this.validateProps()

        this.state = {
            unitState: UnitState.NOT_COMPLETED,
            answersAmount: 0,
            apiLoadedAnswers: [],
            activity: this.generateEmptyActivityData()
        }

        this.updateAnswersAmount() 

        this.getSavedAnswers()                                            

        this.getUnitConclusionData()
    }

    validateProps = () => {
        if(this.props.activity === undefined){
            throw Error("Property \"activity\" can't be undefined!")
        } else {
            if (this.props.activity.id === undefined || this.props.activity.id.length === 0 || 
                this.props.activity.id.length > ActivityConstants.MAX_LENGTH_ID) {
                throw Error("Property \"activity.id\" is invalid!")
            }

            if (this.props.activity.unitId === undefined || this.props.activity.unitId.length === 0 ||
                this.props.activity.unitId.length > ActivityConstants.MAX_LENGTH_UNIT_ID) {
                throw Error("Property \"activity.unitId\" is invalid!")
            }

            if (this.props.activity.minExamplesAmount === undefined ||
                this.props.activity.maxExamplesAmount === undefined) 
            {
                throw Error("Property \"activity.minExamplesAmount\" and/or \"activity.maxExamplesAmount\" is/are undefined!")
            } else if (this.props.activity.minExamplesAmount > this.props.activity.maxExamplesAmount){
                throw Error("Property \"activity.minExamplesAmount\" is greater than \"activity.maxExamplesAmount\"!")
            }

            if (this.props.activity.questions === undefined) {
                throw Error("Property \"activity.questions\" can't be undefined!")
            } else if (this.props.activity.questions.length === 0) {
                throw Error("Property \"activity.questions\" is empty!")
            } else {
                let asnwerLengthSum = 0
                this.props.activity.questions.forEach((question, index) => {
                    if (question.title === undefined || question.title === ""){
                        throw Error("Property \"question.title\" of index question " + index + " os list \"activity.questions\" is empty!")
                    }
                    if (question.maxAnswerLength === undefined || question.maxAnswerLength === 0) {
                        throw Error("Property \"question.maxAnswerLength\" of index question " + index + " of list \"activity.questions\" is empty!")
                    } else {
                        asnwerLengthSum += question.maxAnswerLength
                    }
                })

                if (asnwerLengthSum > ActivityConstants.MAX_ANSWER_LENGTH) {
                    throw Error("The sum of the answers max length of the questions exceeds the limit of " + ActivityConstants.MAX_ANSWER_LENGTH + " characters!")
                }
            }
        }
    }

    getSavedAnswers = () => {
        this.state.activity.examples.forEach(example => {
            AvaMAvaMecApiServicesecApi.getGenericData(
                this.getGenericId(example.number), 
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

            let savedExample = JSON.parse(data.valor)

            let index = this.getExampleIndexByNumber(savedExample.number)
            
            this.state.activity.examples[index] = savedExample

            this.addToLoadedAnswers(data.chave)

            this.updateAnswersAmount()

            let shouldCloseApiListener = this.state.apiLoadedAnswers.length === this.state.activity.examples.length

            if (shouldCloseApiListener) {
                AvaMecApiServices.closeGenericDataListener(this.callbackGetSavedAnswers)
            }
        }
    }

    saveAnswers = () => {
        this.state.activity.examples.forEach(example => {
            AvaMecApiServices.saveGenericData(this.getGenericId(example.number), example)
        })
    }

    getGenericId = (number) => {
        return AvaMecUtils.getGenericId(
            this.props.activity.unitId,
            this.props.activity.id,
            number
        )
    }

    addToLoadedAnswers = (key) => {
        this.state.apiLoadedAnswers.push(key)
    }

    wasLoaded = (key) => {
        return this.state.apiLoadedAnswers.find(loadedKey => loadedKey === key) !== undefined
    }

    generateEmptyActivityData = () => {
        return {
            id: this.props.activity.id,
            statement: this.props.activity.statement,
            minExamplesAmount: this.props.activity.minExamplesAmount,
            maxExamplesAmount: this.props.activity.maxExamplesAmount,
            examples: this.generateEmptyExamples()
        }
    }

    generateEmptyExamples = () => {
        let examples = []

        for (let x = 1; x <= this.props.activity.maxExamplesAmount; x++){
            examples.push({
                number: x, 
                show: x <= this.props.activity.minExamplesAmount,
                questions: this.generateEmptyQuestions()
            })
        }

        return examples
    }

    generateEmptyQuestions = () => {
        let questions = []

        this.props.activity.questions.forEach((question, index) => {
            questions.push({
                id: index,
                answer: "",
                title: question.title,
                maxAnswerLength: question.maxAnswerLength
            })
        })

        return questions
    }

    updateAnswersAmount = () => {
        this.setState({
            answersAmount: this.state.activity.examples.filter(example => example.show).length
        })
    }

    onClickAdd = () => {
        let index = this.state.activity.examples.findIndex(example => !example.show)

        let existsHiddenExample = index !== -1 

        if (existsHiddenExample) {
            this.state.activity.examples[index].show = true
            this.state.activity.examples[index].number = this.state.answersAmount + 1

            this.updateAnswersAmount()
        }
    }

    onClickDelete = data => {
        let index = this.getExampleIndexByNumber(parseInt(data.currentTarget.id))

        this.state.activity.examples[index].show = false

        this.state.activity.examples[index].questions = this.generateEmptyQuestions()

        this.sortExamples()

        this.updateAnswersAmount()

        this.saveAnswers()
    }

    sortExamples = () => {
        this.state.activity.examples
            .sort(example => !example.show)
            .forEach((example, index) => {
                example.number = index + 1
            })
    }

    onChangeAnswer = (maxLength, number, questionId, data) => {
        let activity = this.state.activity

        let index = this.getExampleIndexByNumber(number)

        activity.examples[index]
            .questions[questionId]
            .answer = data.currentTarget.value.substr(0, maxLength) 

        this.setState({
            activity: activity
        })
    }

    getExampleIndexByNumber = number => {
        return this.state.activity.examples.findIndex(example => example.number === number)
    }

    renderAddButton = () => {
        let canAddNewExample = !this.state.completeUnit 
            && this.state.answersAmount < this.state.activity.maxExamplesAmount
        
        if (canAddNewExample){
            return (
                <AddButton onClick={this.onClickAdd}/>
            )
        }   
    }

    renderDeleteButton = (example) => {
        let canDelete = !this.state.completeUnit
            && this.state.answersAmount > this.state.activity.minExamplesAmount

        if (canDelete){
            return (
                <DeleteButton id={example.number} onClick={this.onClickDelete.bind(example.number)}/>
            )
        }
    }

    renderSaveButton = () => {
        if (!this.state.completeUnit && this.state.answersAmount > 0){
            return (
                <BasicButton onClick={this.saveAnswers} centralize={true}>
                    SALVAR RESPOSTAS
                </BasicButton>
            )
        }
    }

    renderQuestion = (number, question, key) => {
        return (
            <p key={key}>
                {question.title}:
                <textarea
                    id={number}
                    value={question.answer}
                    onChange={this.onChangeAnswer.bind(this, question.maxAnswerLength, number, question.id)}
                    cols="30"
                    rows={Math.round(question.maxAnswerLength/ActivityConstants.NUMBER_OF_LETTERS_PER_LINE_TEXTBOX)}
                /><br/>
            </p>
        )
    }

    renderQuestions = (number, questions) => {
        return (
            <Fragment>
                {questions.map((question, key) => {
                    return (this.renderQuestion(number, question, key) )
                })}
            </Fragment>
        )
    }

    renderExample = (example, key) => {
        if(example.show) {
            return (
                <CenterBoxContainer key={key}>
                    <Box className="algorithms">
                        {this.renderDeleteButton(example)}
                        <h4>EXEMPLO {example.number}</h4>
                        {this.renderQuestions(example.number, example.questions)}
                    </Box>
                </CenterBoxContainer>
            )
        }
    }

    renderExamples = () => {
        return(
            <div>
                {this.state.activity.examples.map((example, key) => {
                    return (this.renderExample(example, key) )
                })}
            </div>
        )
    }

    render(){
        return(
            <div className="complementary-activity-container">
                <h2>ATIVIDADE COMPLEMENTAR</h2>
                <p>
                    {this.state.activity.statement} <br /> 
                    Pressione o botão "+" para salvar uma resposta e a "lixeira" para remover uma resposta.
                </p>
                {this.renderExamples()}
                {this.renderAddButton()}
                {this.renderSaveButton()}
            </div>
        )
    }
}

export default ComplementaryActivity