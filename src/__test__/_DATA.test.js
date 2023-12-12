import { _saveQuestion, _saveQuestionAnswer } from "./_DATA";

describe("_saveQuestion", () => {
  it("show error message", async () => {
    await expect(_saveQuestion({})).rejects.toEqual(
      "You must provide both options."
    );
  });

  it("return created question", async () => {
    const author = "ParkJimin";
    const optionOneText = "BTS";
    const optionTwoText = "Bangtan Sonyeondan";
    const poll = { author, optionOneText, optionTwoText };
    const arrPoll = {
      author: author,
      optionOne: {
        text: optionOneText,
      },
      optionTwo: {
        text: optionTwoText,
      },
    };

    await expect(_saveQuestion(question)).resolves.toMatchObject(arrPoll);
  });
});

describe("_saveQuestionAnswer", () => {
  it("will return true when correct", async () => {
    const authedUser = "tylermcginnis";
    const questionId = "loxhs1bqm25b708cmbf3g";
    const answer = "optionTwo";
    const questionAnswer = { authedUser, questionId, answer };
    await expect(_saveQuestionAnswer(questionAnswer)).resolves.toBe(true);
  });

  it("show error message", async () => {
    await expect(_saveQuestionAnswer({})).rejects.toEqual(
      "You must provide authedUser, questionId, and answer"
    );
  });
});
