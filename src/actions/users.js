export const RECEIVE_USERS = "RECEIVE_USERS";
export const SAVE_USER_ANSWER = "SAVE_USER_ANSWER";
export const SAVE_NEW_QUESTION_USER = "SAVE_NEW_QUESTION_USER";

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}

export function saveUserAnswer({ authedUser, qid, answer }) {
    return {
        type: SAVE_USER_ANSWER,
        authedUser,
        qid,
        answer,
    };
}

export function saveNewQuestionUser({author, id}) {
    return {
        type: SAVE_NEW_QUESTION_USER,
        author,
        qid: id,
    };
}