import React from 'react';
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
      <div>
        {user.name} asks:
        <div><img src={avatar} alt={question.author} width="50px"/></div>
        <div>Would you rather</div>
        <div>{question.optionOne.text}</div>
        <button onClick={this.handleClick}>
          View Poll
        </button>
      </div>
    );
  }
}

function mapStateToProps ({ users }, props) {
  return { user: users[props.question.author] }
}

export default withRouter(connect(mapStateToProps)(Question))