import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { handleSaveQuestionAnswer } from '../actions/shared';

class Survey extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const { authedUser, question } = this.props;
    // save vote
    this.props.dispatch(handleSaveQuestionAnswer({ authedUser, qid: question.id, answer: this.optionInput.value}));
    this.props.history.push(`/questions/${question.id}`);
  }

  render () {
    const { question, user } = this.props;
    const avatars = require.context('../assets', false);
    const avatar = avatars(user.avatarURL);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {user.name} asks:
          <div><img src={avatar} alt={question.author} width="50px"/></div>
          <div>Would you rather ...</div>
          <div>
            <label><input type="radio" name="question" value="optionOne" ref={(input) => this.optionInput = input}/>{question.optionOne.text}</label>
          </div>
          <div>
            <label><input type="radio" name="question" value="optionTwo" ref={(input) => this.optionInput = input}/>{question.optionTwo.text}</label>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

function mapStateToProps ({ users, authedUser }, props) {
  return  { user: users[props.question.author],
            authedUser
          }
}

export default withRouter(connect(mapStateToProps)(Survey))