import { SAVE_QUESTION_ANSWER } from "../actions/questions";
import {
    RECEIVE_USERS,
    SAVE_USER_ANSWER,
    SAVE_NEW_QUESTION_USER
} from "../actions/users";

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case SAVE_USER_ANSWER:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.qid]: action.answer
                    }
                }
            }
        case SAVE_NEW_QUESTION_USER:
            return {
                ...state,
                [action.author]: {
                    ...state[action.author],
                    questions: state[action.author].questions.concat(action.qid)
                }
            }
        default:
            return state;
    }
}