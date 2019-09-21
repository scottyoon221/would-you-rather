import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Question extends React.Component {

  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    const { question } = this.props;
    this.props.history.push(`/questions/${question.id}`);
  }

  render () {
    const { question, user } = this.props;
    const avatars = require.context('../assets', false);
    const avatar = avatars(user.avatarURL);
    return (
      <Fragment>
        <div class="row border-bottom">
          <div class="col-12 user-box">
            <b>{user.name} asks:</b>
          </div>
        </div>
        <div class="row">
          <div class="col-4 border-right align-self-center text-center">
            <img class="avatar-circle-image" src={avatar} alt={question.author} />
          </div>
          <div class="col-8 question-box">
            <div class="row">
              <div class="col would-you-rather">
                <b>Would you rather</b>
              </div>
            </div>
            <div class="row">
              <div class="col question">
                {question.optionOne.text}
              </div>
            </div>
            <div class="row">
              <div class="col view-poll-btn">
                <button class="btn btn-primary" onClick={this.handleClick}>
                View Poll
                </button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps ({ users }, props) {
  return { user: users[props.question.author] }
}

export default withRouter(connect(mapStateToProps)(Question))