import { getInitialData, saveQuestion, saveQuestionAnswer } from "../services/utils/service";

describe("saveQuestion", () => {
  it("save question", async () => {
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
});

describe("getInitialData", () => {
  it("get initial data", async () => {
    const { users, questions } = await getInitialData();
    expect(users).toBeDefined();
    expect(questions).toBeDefined();
  });
});

describe("saveQuestionAnswer", () => {
  it("save the answer for a question", async () => {
    const authUser = "sarahedo";
    const questionId = "6ni6ok3ym7mf1p33lnez";
    const answer = "optionTwo";
    const questionAnswer = await saveQuestionAnswer(
      authUser,
      questionId,
      answer
    );

    expect(questionAnswer).toBe(true);
  });

  it("show error message", async () => {
    await expect(saveQuestionAnswer()).rejects.toEqual(
      "Please provide authedUser, questionId, and answer"
    );
  });
});
