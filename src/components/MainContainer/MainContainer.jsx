import PropTypes from 'prop-types';
import s from './MainContainer.module.css';

export default function MainContainer({ children }) {
  return <div className={s.container}>{children}</div>;
}

MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
