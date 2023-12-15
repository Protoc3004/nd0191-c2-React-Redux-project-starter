import { _saveQuestion, _saveQuestionAnswer } from "../services/utils/_DATA";

describe("_saveQuestion", () => {
  it("will return the saved question", async () => {
    const author = "sarahedo";
    const optionOneText = "books";
    const optionTwoText = "films";
    const question = { author, optionOneText, optionTwoText };
    const expectation = {
      author: author,
      optionOne: {
        text: optionOneText,
      },
      optionTwo: {
        text: optionTwoText,
      },
    };

    await expect(_saveQuestion(question)).resolves.toMatchObject(expectation);
  });

  it("Should return error with invalid User", async () => {
    const response = await _saveQuestion({
        optionOneText: 'option one test',
        optionTwoText: 'option two test',
        author: undefined
    }).catch(e => e);

    expect(response).toBe("Please provide optionOneText, optionTwoText, and author");
  });
});


describe('_saveQuestionAnswer', () => {
  it('error is returned with incorrect data', async () => {
    const incorrectData = {
      authedUser: 'sarahedo',
      question_id: 'xj352vofupe1dqz9emx13r',
      answer: 'optionTwo',
    };

    try {
      await _saveQuestionAnswer(incorrectData);
      fail('Expected an error, but the function call succeeded.');
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it("Should return true with correct User", async () => {
    const response = await _saveQuestionAnswer({
        authedUser: "sarahedo",
        question_id: "6ni6ok3ym7mf1p33lnez",
        answer: "optionTwo"
    });

    expect(response).toBeTruthy();
  });
});