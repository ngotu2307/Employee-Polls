import { _saveQuestion, _saveQuestionAnswer } from "./_DATA.js";

describe('_saveQuestion', () => {
    it('will return question match with expected fields', async () => {
        var mockQuestion = {
            optionOneText: "learn React need to learn JavaScript",
            optionTwoText: "learn React need to learn TypeScript",
            author: "ngotu",
        };
        var result = await _saveQuestion(mockQuestion);
        expect(result.author).toEqual(mockQuestion.author);
        expect(result.optionOne.text).toEqual(mockQuestion.optionOneText);
        expect(result.optionTwo.text).toEqual(mockQuestion.optionTwoText);
    });

    it('will return error with incorrect data is passed', async () => {
        var mockQuestion = {
            optionOneText: null,
            optionTwoText: "learn React need to learn TypeScript",
            author: "ngotu",
        };
        var result = _saveQuestion(mockQuestion);
        await expect(result).rejects.toEqual('Please provide optionOneText, optionTwoText, and author');
    });
})

describe('_saveQuestionAnswer', () => {
    it('will return saved question answer match with expected fields', async () => {
        var mockQuestionAnswer = {
            authedUser: "zoshikanlu",
            qid: "8xf0y6ziyjabvozdd253nd",
            answer: "optionOne",
        };
        var result = await _saveQuestionAnswer(mockQuestionAnswer);
        expect(result).toEqual(true);
    });

    it('will return error with incorrect data is passed', async () => {
        var mockQuestionAnswer = {
            authedUser: null,
            qid: "123456789",
            answer: "optionOne",
        };
        var result = _saveQuestionAnswer(mockQuestionAnswer);
        await expect(result).rejects.toEqual('Please provide authedUser, qid, and answer');
    });
})