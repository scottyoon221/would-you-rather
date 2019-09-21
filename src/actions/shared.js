import { getInitialData, _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA.js';
import { addUsers, addQuestionInUser, addVoteUser } from '../actions/users';
import { addQuestions, addVoteQuestion } from '../actions/questions';
import { showLoading, hideLoading } from 'react-redux-loading';

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(addUsers(users));
        dispatch(addQuestions(questions));
        dispatch(hideLoading());
      })
  }
}

export function handleAddQuestion (question) {
  return (dispatch) => {
    return _saveQuestion(question)
      .then((question) => {
        dispatch(addQuestions({ [question.id] : question }));
        dispatch(addQuestionInUser({ id : question.id, author : question.author}));
      })
  }
}

export function handleSaveQuestionAnswer ({ authedUser, qid, answer }) {
  return (dispatch) => {
    return _saveQuestionAnswer({ authedUser, qid, answer })
      .then(() => {
        dispatch(addVoteUser({ authedUser, qid, answer }));
        dispatch(addVoteQuestion({ authedUser, qid, answer }));
      })
  }
}