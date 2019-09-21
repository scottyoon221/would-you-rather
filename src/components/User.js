import React, { Fragment } from 'react';

class User extends React.Component {
  render () {
    const { user } = this.props;
    const numOfAnswers = Object.keys(user.answers).length;
    const numOfQuestions = user.questions.length;
    const avatars = require.context('../assets', false);
    const avatar = avatars(this.props.user.avatarURL);
    return (
      <Fragment>
        <div class="col-3 border-right align-self-center text-center">
          <img class="avatar-circle-image" src={avatar} alt={user.name}/>
        </div>
        <div class="col-6 border-right">
          <div class="row">
            <div class="col-12">
              <b>{user.name}</b>
            </div>
          </div>
          <div class="row">
            <div class="col-10">Answer questions</div>
            <div class="col-2">{numOfAnswers}</div>
          </div>
          <div class="row">
            <div class="col-10">Created questions</div>
            <div class="col-2">{numOfQuestions}</div>
          </div>
        </div>
        <div class="col-3 border">
          <div class="row border score-box">
            <div class="col-12 border-bottom text-center header-col">
              <b>Score</b>
            </div>
            <div class="col-12 align-self-center text-center ">
              <div>
                {numOfAnswers + numOfQuestions}
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default User;

