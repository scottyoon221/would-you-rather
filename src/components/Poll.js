import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Poll extends React.Component {
  render () {
    const { match } = this.props;
    // if question id does not exisits
    if (match.url.includes("*")) {
      return <Redirect from='*' to='/404' />
    }

    const { authedUser, user, question } = this.props;
    let avatars, avatar;
    let numOfVotesOne, numOfVotesTwo, totalVotes;
    let voteOne, voteTwo;

    if (!question) return null;
    avatars = require.context('../assets', false);
    avatar = avatars(user.avatarURL);
    numOfVotesOne = question.optionOne.votes.length;
    numOfVotesTwo = question.optionTwo.votes.length;
    totalVotes = numOfVotesOne + numOfVotesTwo;

    totalVotes !== 0 ? voteOne = (100 * numOfVotesOne / totalVotes).toFixed(1) : voteOne = 0;
    totalVotes !== 0 ? voteTwo = (100 * numOfVotesTwo / totalVotes).toFixed(1) : voteTwo = 0;
    return (
      <div>
        <div>
          Asked by {user.name}
        </div>
        <div>
            <div><img src={avatar} alt={question.author} width="50px"/></div>
          <div>
            <div>
              Results:
            </div>
            <div>
              <div>
                { question.optionOne.votes.includes(authedUser) ? <div>Your Vote</div> : null }
              </div>
              <div>Would you rather {question.optionOne.text}?</div>
              <div>{voteOne}%</div>
              <div>{numOfVotesOne} out of {totalVotes} votes</div>
            </div>
            <div>
              <div>
                { question.optionTwo.votes.includes(authedUser) ? <div>Your Vote</div> : null }
              </div>
              <div>Would you rather {question.optionTwo.text}?</div>
              <div>{voteTwo}%</div>
              <div>{numOfVotesTwo} out of {totalVotes} votes</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps ({ authedUser, users, questions }, { match }) {
  return {
          authedUser,
          user: questions[match.params.id] ? users[questions[match.params.id].author] : null,
          question: questions[match.params.id]
         }
}


export default connect(mapStateToProps)(Poll);
