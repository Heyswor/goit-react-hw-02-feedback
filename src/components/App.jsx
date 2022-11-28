import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions ';
import { Statistics } from './Statistics/Statistics';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class App extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {};
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleClick = event => {
    const stateName = event.target.textContent;
    this.setState(prevState => {
      return { [stateName]: prevState[stateName] + 1 };
    });
  };

  countTotalFeedback = data => {
    return Object.values(data).reduce((a, b) => a + b, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Number.parseInt(
      (this.state.good / this.countTotalFeedback(this.state)) * 100
    );
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback(this.state);
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <FeedbackOptions
          onLeaveFeedback={this.handleClick}
          options={['good', 'neutral', 'bad']}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positivePercentage={positiveFeedbackPercentage}
        />
      </div>
    );
  }
}
