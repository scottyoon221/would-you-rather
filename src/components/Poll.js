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
      <div class="container border">
        <div class="row border-bottom user-box">
          <b>Asked by {user.name}</b>
        </div>
        <div class="row poll-box">
          <div class="col-4 border-right align-self-center text-center">
            <img src={avatar} class="avatar-circle-image" alt={question.author}/>
          </div>
          <div class="col-8">
            <div>
              <b>Results:</b>
            </div>
            <div class={`vote-box border ${question.optionOne.votes.includes(authedUser) ? 'your-vote-box': null}`}>
              <div>
                { question.optionOne.votes.includes(authedUser) ? <div class="your-vote-sticker"><b>Your Vote</b></div> : null }
              </div>
              <div>Would you rather {question.optionOne.text}?</div>
              <div class="progress">
                <div class="progress-bar" role="progressbar" style={{width: `${voteOne}%`}} aria-valuenow={voteOne} aria-valuemin="0" aria-valuemax="100">{voteOne}%</div>
              </div>
              <div class="text-center"><b>{numOfVotesOne} out of {totalVotes} votes</b></div>
            </div>
            <div class={`vote-box border ${question.optionTwo.votes.includes(authedUser) ? 'your-vote-box': null}`}>
              <div>
                {
                  question.optionTwo.votes.includes(authedUser) ? <div class="your-vote-sticker"><b>Your Vote</b></div> : null
                }
              </div>
              <div>Would you rather {question.optionTwo.text}?</div>
              <div class="progress">
                <div class="progress-bar" role="progressbar" style={{width: `${voteTwo}%`}} aria-valuenow={voteTwo} aria-valuemin="0" aria-valuemax="100">{voteTwo}%</div>
              </div>
              <div class="text-center"><b>{numOfVotesTwo} out of {totalVotes} votes</b></div>
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
