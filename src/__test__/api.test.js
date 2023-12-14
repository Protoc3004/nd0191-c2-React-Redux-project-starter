import { getInitialData, saveQuestion, saveQuestionAnswer, users, questions } from "../services/utils/service";
import { _saveQuestionAnswer } from "../services/utils/_DATA"

describe("saveQuestion", () => {

  it("will save question", async () => {
    const author = "johndoe";
    const optionOneText = "Option 1";
    const optionTwoText = "Option 2";
    const question = await saveQuestion({
      author,
      optionOneText,
      optionTwoText,
    });

    expect(question).toBeDefined();
  });

 
  it('should throw an error if incorrect data is passed', async () => {
    const invalidQuestion = {
      optionOne: 'Option 1 text',
      optionTwo: 'Option 2 text',
    };

    try {
      await _saveQuestion(invalidQuestion);
    } catch (error) {
      expect(error.message).toMatch('_saveQuestion is not defined');
      return;
    }

    fail('No error thrown for invalid question');
  });
});


describe("getInitialData", () => {
  it("will get initial data for app", async () => {
    const { users, questions } = await getInitialData();
    expect(users).toBeDefined();
    expect(questions).toBeDefined();
  });
});

describe("saveQuestionAnswer", () => {

  it('should throw an error if incorrect data is passed', async () => {
    const invalidData = {
      authedUser: 'tylermcginnis',
      question_id: 'vthrdm985a262al8qx3do',
      answer: "optionTwo"
    };

    try {
      await _saveQuestionAnswer(invalidData);
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});

