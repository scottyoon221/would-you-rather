import { getInitialData, _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA.js'
import { addUsers, addQuestionInUser, addVoteUser } from '../actions/users'
import { addQuestions, addVoteQuestion } from '../actions/questions'

export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(addUsers(users))
        dispatch(addQuestions(questions))
      })
  }
}

export function handleAddQuestion (question) {
  return (dispatch) => {
    return _saveQuestion(question)
      .then((question) => {
        dispatch(addQuestions({ [question.id] : question }))
        dispatch(addQuestionInUser({ id : question.id, author : question.author}));
      })
  }
}




export function handleSaveQuestionAnswer ({ authedUser, qid, answer }) {
  return (dispatch) => {
    return _saveQuestionAnswer({ authedUser, qid, answer })
      .then(() => {
        console.log('saved');
        dispatch(addVoteUser({ authedUser, qid, answer }))
        dispatch(addVoteQuestion({ authedUser, qid, answer }));
      })
  }
}