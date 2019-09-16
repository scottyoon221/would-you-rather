import { ADD_USERS, ADD_QUESTION_IN_USER, ADD_VOTE_USER } from '../actions/users';

 export default function users (state = {}, action) {
  switch(action.type) {
    case ADD_USERS :
      return {
        ...state,
        ...action.users
      }

    case ADD_QUESTION_IN_USER :
      return {
        ...state,
        [action.user.author] : {
          ...state[action.user.author],
          questions : state[action.user.author].questions.concat(action.user.id)
        }
      }

    case ADD_VOTE_USER :
      return {
        ...state,
        [action.authedUser] : {
          ...state[action.authedUser],
          answers : {
            ...state[action.authedUser].answers,
            [action.qid] : action.answer
          }
        }
      }
    default :
      return state
  }
}