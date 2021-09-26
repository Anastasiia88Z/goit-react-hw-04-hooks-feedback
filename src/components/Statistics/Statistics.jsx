import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics(props) {
  const { good, neutral, bad, total, positivePercentage } = props;

  return (
    <ul className={s.statistics}>
      <li className={s.data}>Good: {good}</li>
      <li className={s.data}>Neutral: {neutral}</li>
      <li className={s.data}>Bad: {bad}</li>
      <li className={s.data}>Total: {total} </li>
      <li className={s.data}>Positive feedback: {positivePercentage} %</li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number,
};
