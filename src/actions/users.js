export const ADD_USERS = 'ADD_USERS'
export const ADD_QUESTION_IN_USER = 'ADD_QUESTION_IN_USER'
export const ADD_VOTE_USER = 'ADD_VOTE_USER'

export function addUsers (users) {
  return {
    type: ADD_USERS,
    users,
  }
}

export function addQuestionInUser (user) {
  return {
    type: ADD_QUESTION_IN_USER,
    user,
  }
}

export function addVoteUser({ authedUser, qid, answer }) {
  return {
    type: ADD_VOTE_USER,
    authedUser,
    qid,
    answer
  }
}