import React from 'react';

class User extends React.Component {
  render () {
    const { user } = this.props;
    const numOfAnswers = Object.keys(user.answers).length;
    const numOfQuestions = user.questions.length;
    const avatars = require.context('../assets', false);
    const avatar = avatars(this.props.user.avatarURL);
    return (
      <div>
        <div><img src={avatar} alt={user.name} width="50px"/></div>
        <div>{user.name}</div>
        <div>Answer questions</div>
        <div>{numOfAnswers}</div>
        <div>Created questions</div>
        <div>{numOfQuestions}</div>
        <div>Score</div>
        <div>{numOfAnswers + numOfQuestions}</div>
      </div>
    );
  }
}

export default User;

