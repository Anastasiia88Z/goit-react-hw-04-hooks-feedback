import React, { Component } from 'react';

import MainContainer from './components/MainContainer/MainContainer';
import SectionTitle from './components/SectionTitle/SectionTitle';
import FeedbackOptions from './components/Feedback/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good * 100) / this.countTotalFeedback());
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback() > 0;
    const options = Object.keys(this.state);

    return (
      <MainContainer>
        <SectionTitle title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleIncrement}
          />
        </SectionTitle>

        <SectionTitle title="Statistics">
          {totalFeedback && (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}

          {!totalFeedback && <Notification message="No feedback given" />}
        </SectionTitle>
      </MainContainer>
    );
  }
}

export default App;
