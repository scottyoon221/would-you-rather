import React from 'react';
import { connect } from 'react-redux';
import Survey from './Survey';

class RandomQuestion extends React.Component {
  render () {
    const { question } = this.props;
    return (
      <div>
        {
          question ?
            <Survey question={question}/>
            :
            'All answered'
        }
      </div>
    );
  }
}

function mapStateToProps ({ questions, authedUser }) {
  if (questions) {
    for (var key in questions) {
      if (questions[key].author !== authedUser && !questions[key].optionOne.votes.includes(authedUser) && !questions[key].optionTwo.votes.includes(authedUser)) {
        return { question : questions[key] };
      }
    }
    return { question : undefined }
  }
}

export default connect(mapStateToProps)(RandomQuestion)