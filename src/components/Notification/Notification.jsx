import PropTypes from 'prop-types';
import s from './Notification.module.css';

export default function Notification({ message }) {
  return <span className={s.text}>{message}</span>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
