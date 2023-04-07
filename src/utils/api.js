import {
  _getUsers,
  _getQuestions,
  _saveQuestionAnswer,
  _saveQuestion
} from './_DATA.js'

export function getInitialData () {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, questions]) => ({
    users,
    questions,
  }))
}

export function saveQuestionAnswerAPI(info) {
  return _saveQuestionAnswer(info);
}

export function saveNewQuestionAPI(info) {
  return _saveQuestion(info);
}