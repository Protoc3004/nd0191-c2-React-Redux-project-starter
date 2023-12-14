import { _saveQuestion, _saveQuestionAnswer } from "../services/utils/_DATA";

describe("_saveQuestion", () => {
  jest.setTimeout(10000);

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
});


describe('_saveQuestionAnswer', () => {
  test('error is returned with incorrect data', async () => {
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
});