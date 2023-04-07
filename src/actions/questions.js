import { saveQuestionAnswerAPI, saveNewQuestionAPI } from "../utils/api";
import { saveUserAnswer, saveNewQuestionUser } from "./users";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";
export const SAVE_NEW_QUESTION = "SAVE_NEW_QUESTION";

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export function saveQuestionAnswer({ authedUser, qid, answer }) {
    return {
        type: SAVE_QUESTION_ANSWER,
        authedUser,
        qid,
        answer
    }
}

export function saveNewQuestion(question) {
    return {
        type: SAVE_NEW_QUESTION,
        question
    }
}

export function handerSaveQuestionAnswer(info) {
    return (dispatch) => {
        return saveQuestionAnswerAPI(info)
            .then(() => {
                dispatch(saveQuestionAnswer(info));
                dispatch(saveUserAnswer(info));
            })
            .catch((e) => {
                console.warn("Error in saveQuestionAnswerAPI: ", e);
                alert("There was an error when saving question answer!");
            })
    }
}

export function handerSaveNewQuestion(info) {
    return (dispatch) => {
        return saveNewQuestionAPI(info)
            .then((question) => {
                dispatch(saveNewQuestion(question));
                dispatch(saveNewQuestionUser(question));
            })
            .catch((e) => {
                console.warn("Error in saveNewQuestionAPI: ", e);
                alert("There was an error when saving new quesion!");
            })
    }
}