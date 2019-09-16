import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { handleAddQuestion } from '../actions/shared';

class NewQuestion extends React.Component {
  constructor (props) {
    super(props);
    this.optionOneInput = '';
    this.optionTwoInput = '';
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let question = {
      optionOneText : this.optionOneInput.value,
      optionTwoText : this.optionTwoInput.value,
      author        : this.props.authedUser
    };
    this.props.dispatch(handleAddQuestion(question));
    this.props.history.push(`/home`);
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>Create New NewQuestion</div>
        <div>Complete the question:</div>
        <div>Would you rather ...</div>
        <input type="text" name="Enter Option One Text Here" ref={(input) => this.optionOneInput = input}/>
        <div>OR</div>
        <input type="text" name="Enter Option Two Text Here" ref={(input) => this.optionTwoInput = input}/>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

function mapStateToProps ({ authedUser }) {
  return { authedUser }
}

export default withRouter(connect(mapStateToProps)(NewQuestion));




