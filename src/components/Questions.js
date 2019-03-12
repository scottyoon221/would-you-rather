import React from 'react';
import Question from "./Question";


class Questions extends React.Component {
  // constructor (props) {
  //   super(props);

  // }

  render () {
    // const { match } = this.props;
    return (
      <div>
        <Question />
        <Question />
        <Question />
      </div>
    );
  }
}

export default Questions;