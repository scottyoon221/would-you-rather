import { ADD_QUESTION, ADD_VOTE_QUESTION } from '../actions/questions';

 export default function questions (state = {}, action) {
  switch(action.type) {
    case ADD_QUESTION :
      return {
        ...state,
        ...action.question
      }

    case ADD_VOTE_QUESTION :
      return {
        ...state,
        [action.qid] : {
          ...state[action.qid],
          [action.answer] : {
            ...state[action.qid][action.answer],
            votes : state[action.qid][action.answer].votes.concat(action.authedUser)
          }
        }
      }
    default :
      return state
  }
}