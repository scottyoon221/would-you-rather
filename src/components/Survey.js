import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { handleSaveQuestionAnswer } from '../actions/shared';

class Survey extends React.Component {

  handleChange = (e) => {
    this.optionInput = e.target.value;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { authedUser, question } = this.props;
    // save vote
    this.props.dispatch(handleSaveQuestionAnswer({ authedUser, qid: question.id, answer: this.optionInput}));
    this.props.history.push(`/questions/${question.id}`);
  }

  render () {
    const { question, user } = this.props;
    const avatars = require.context('../assets', false);
    const avatar = avatars(user.avatarURL);
    return (
      <div class="container border">
        <form onSubmit={this.handleSubmit}>
          <div class="row border-bottom user-box">
            <div class="col-12">
              <b>{user.name} asks:</b>
            </div>
          </div>
          <div class="row question-box">
            <div class="col-4 border-right align-self-center text-center">
              <img src={avatar} class="avatar-circle-image" alt={question.author} />
            </div>
            <div class="col-8">
              <div class="would-you-rather"><b>Would you rather ...</b></div>
              <div>
                <label><input type="radio" name="question" value="optionOne" onChange={this.handleChange}/> {question.optionOne.text}</label>
              </div>
              <div>
                <label><input type="radio" name="question" value="optionTwo" onChange={this.handleChange} /> {question.optionTwo.text}</label>
              </div>
              <input type="submit" value="Submit" class="signin btn btn-primary" />
            </div>
          </div>
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