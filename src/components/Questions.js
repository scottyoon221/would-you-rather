import React from 'react';
import { connect } from 'react-redux';
import Question from './Question';


class Questions extends React.Component {
  render () {
    return (
      <div class="row border questions-box">
        {
          this.props.questions.length
          ? this.props.questions.map((question) => (
              <div class="col-12 border question-container" key={question.id}>
                <Question question={question}/>
              </div>
            ))
          : null
        }
      </div>
    );
  }
}

function mapStateToProps ({ questions }, props) {
  let authedUser = {id: 'tylermcginnis'}
  let answered = [];
  let unAnswered = [];

  // iterate each questions id
  for (let key in questions) {
    // isAnswered = false
    let isAnswered = false;
    // iterate each username from optionOne votes
    for (let i=0; i < questions[key].optionOne.votes.length; i++) {
      // !isAnswered && if username is same as auth user
      if (!isAnswered && questions[key].optionOne.votes[i] === authedUser.id) {
        // store question obj into answered array
        answered.push(questions[key]);
        // isAnswered = true
        isAnswered = true;
        break;
      }
    }
    if (!isAnswered) {
      // iterate each username from optionTwo votes
      for (let i=0; i < questions[key].optionTwo.votes.length; i++) {
        // !isAnswered && if username is same as auth user
        if (!isAnswered && questions[key].optionTwo.votes[i] === authedUser.id) {
          // store question obj into answered array
          answered.push(questions[key]);
          // isAnswered = true
          isAnswered = true;
          break;
        }
      }
    }
    // unanswered?
    if (!isAnswered) {
      // store it into unanswered
      unAnswered.push(questions[key]);
    }
  }
  return props.match.path.includes('/answered') ?
          { questions: answered } :
          { questions: unAnswered }
}

export default connect(mapStateToProps)(Questions)