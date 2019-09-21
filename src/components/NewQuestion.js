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
      <div class="container">
        <form onSubmit={this.handleSubmit}>
          <div class="row border new-question-box">
            <div class="col-12 border-bottom text-center create-box">
              <b>Create New NewQuestion</b>
            </div>
            <div class="col-12">Complete the question:</div>
            <div class="col-12"><b>Would you rather ...</b></div>
            <div class="col-12 text-center input-text">
              <input class="form-control" type="text" name="Enter Option One Text Here" ref={(input) => this.optionOneInput = input} placeholder="Enter Option One Text Here!"/>
            </div>
            <div class="col-12 text-center or"><b>OR</b></div>
            <div class="col-12 text-center input-text">
              <input class="form-control" type="text" name="Enter Option Two Text Here" ref={(input) => this.optionTwoInput = input} placeholder="Enter Option Two Text Here"/>
            </div>
            <div class="col-12 text-center">
              <input type="submit" value="Submit" class="create-btn btn btn-primary" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps ({ authedUser }) {
  return { authedUser }
}

export default withRouter(connect(mapStateToProps)(NewQuestion));




