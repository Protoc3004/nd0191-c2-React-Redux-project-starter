let users = {
    sarahedo: {
        id: 'sarahedo',
        name: 'Sarah Edo',
        avatarURL: 'data:image/jpeg;base64,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',
        answers: {
            "8xf0y6ziyjabvozdd253nd": 'optionOne',
            "6ni6ok3ym7mf1p33lnez": 'optionTwo',
            "am8ehyc8byjqgar0jgpub9": 'optionTwo',
            "loxhs1bqm25b708cmbf3g": 'optionTwo'
        },
        questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
    },
    tylermcginnis: {
        id: 'tylermcginnis',
        name: 'Tyler McGinnis',
        avatarURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT--Av6tneLKfUjxygTAYyjuNueOYOdCgl3hA&usqp=CAU',
        answers: {
            "vthrdm985a262al8qx3do": 'optionOne',
            "xj352vofupe1dqz9emx13r": 'optionTwo',
        },
        questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
    },
    johndoe: {
        id: 'johndoe',
        name: 'John Doe',
        avatarURL: 'data:image/jpeg;base64,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',
        answers: {
            "xj352vofupe1dqz9emx13r": 'optionOne',
            "vthrdm985a262al8qx3do": 'optionTwo',
            "6ni6ok3ym7mf1p33lnez": 'optionTwo'
        },
        questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
    }
}

let questions = {
    "8xf0y6ziyjabvozdd253nd": {
        id: '8xf0y6ziyjabvozdd253nd',
        author: 'sarahedo',
        timestamp: 1467166872634,
        optionOne: {
            votes: ['sarahedo'],
            text: 'have horrible short term memory',
        },
        optionTwo: {
            votes: [],
            text: 'have horrible long term memory'
        }
    },
    "6ni6ok3ym7mf1p33lnez": {
        id: '6ni6ok3ym7mf1p33lnez',
        author: 'johndoe',
        timestamp: 1468479767190,
        optionOne: {
            votes: [],
            text: 'become a superhero',
        },
        optionTwo: {
            votes: ['johndoe', 'sarahedo'],
            text: 'become a supervillain'
        }
    },
    "am8ehyc8byjqgar0jgpub9": {
        id: 'am8ehyc8byjqgar0jgpub9',
        author: 'sarahedo',
        timestamp: 1488579767190,
        optionOne: {
            votes: [],
            text: 'be telekinetic',
        },
        optionTwo: {
            votes: ['sarahedo'],
            text: 'be telepathic'
        }
    },
    "loxhs1bqm25b708cmbf3g": {
        id: 'loxhs1bqm25b708cmbf3g',
        author: 'tylermcginnis',
        timestamp: 1482579767190,
        optionOne: {
            votes: [],
            text: 'be a front-end developer',
        },
        optionTwo: {
            votes: ['sarahedo'],
            text: 'be a back-end developer'
        }
    },
    "vthrdm985a262al8qx3do": {
        id: 'vthrdm985a262al8qx3do',
        author: 'tylermcginnis',
        timestamp: 1489579767190,
        optionOne: {
            votes: ['tylermcginnis'],
            text: 'find $50 yourself',
        },
        optionTwo: {
            votes: ['johndoe'],
            text: 'have your best friend find $500'
        }
    },
    "xj352vofupe1dqz9emx13r": {
        id: 'xj352vofupe1dqz9emx13r',
        author: 'johndoe',
        timestamp: 1493579767190,
        optionOne: {
            votes: ['johndoe'],
            text: 'write JavaScript',
        },
        optionTwo: {
            votes: ['tylermcginnis'],
            text: 'write Swift'
        }
    },
}

function generateUID() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function _getUsers() {
    return new Promise((res, rej) => {
        setTimeout(() => res({ ...users }), 1000)
    })
}

export function _getQuestions() {
    return new Promise((res, rej) => {
        setTimeout(() => res({ ...questions }), 1000)
    })
}

function formatQuestion({ optionOneText, optionTwoText, author }) {
    return {
        id: generateUID(),
        timestamp: Date.now(),
        author,
        optionOne: {
            votes: [],
            text: optionOneText,
        },
        optionTwo: {
            votes: [],
            text: optionTwoText,
        }
    }
}

export function _saveQuestion (question) {
    return new Promise((resolve, reject) => {
      if (!question.optionOneText || !question.optionTwoText || !question.author) {
        reject("Please provide optionOneText, optionTwoText, and author");
      }
  
      const formattedQuestion = formatQuestion(question)
      console.log('formattedQuestion', formattedQuestion)
      setTimeout(() => {
        questions = {
          ...questions,
          [formattedQuestion.id]: formattedQuestion
        }
  
        resolve(formattedQuestion)
      }, 1000)
    })
  }

export function _saveQuestionAnswer({ authedUser, question_id, answer }) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            users = {
                ...users,
                [authedUser]: {
                    ...users[authedUser],
                    answers: {
                        ...users[authedUser].answers,
                        [question_id]: answer
                    }
                }
            }

            questions = {
                ...questions,
                [question_id]: {
                    ...questions[question_id],
                    [answer]: {
                        ...questions[question_id][answer],
                        votes: questions[question_id][answer].votes.concat([authedUser])
                    }
                }
            }

            res(true)
        }, 500)
    })
}