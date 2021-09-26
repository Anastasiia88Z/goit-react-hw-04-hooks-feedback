import React, { useState } from 'react';
import MainContainer from './components/MainContainer/MainContainer';
import SectionTitle from './components/SectionTitle/SectionTitle';
import FeedbackOptions from './components/Feedback/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';

export default function App() {
  const [feedbacks, setFeedbacks] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleIncrement = option => {
    setFeedbacks(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return Object.values(feedbacks).reduce(
      (acc, feedback) => acc + feedback,
      0,
    );
  };

  const countPositiveFeedbackPercentage = total => {
    total = countTotalFeedback();
    return Math.round((feedbacks.good * 100) / total);
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage(total);
  const totalFeedback = total > 0;

  return (
    <MainContainer>
      <SectionTitle title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          handleIncrement={handleIncrement}
        />
      </SectionTitle>

      <SectionTitle title="Statistics">
        {totalFeedback && (
          <Statistics
            good={feedbacks.good}
            neutral={feedbacks.neutral}
            bad={feedbacks.bad}
            totalFeedback={totalFeedback}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}

        {!totalFeedback && <Notification message="No feedback given" />}
      </SectionTitle>
    </MainContainer>
  );
}
