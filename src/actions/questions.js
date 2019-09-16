export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_VOTE_QUESTION = 'ADD_VOTE_QUESTION'

export function addQuestions (question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

export function addVoteQuestion ({ authedUser, qid, answer }) {
  return {
    type: ADD_VOTE_QUESTION,
    authedUser,
    qid,
    answer
  }
}