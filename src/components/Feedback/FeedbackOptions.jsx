import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, handleIncrement }) {
  return options.map(option => (
    <button
      className={s.button}
      type="button"
      key={option}
      onClick={() => handleIncrement(option)}
    >
      {option}
    </button>
  ));
}

FeedbackOptions.propType = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};
