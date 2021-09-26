import PropTypes from 'prop-types';
import s from './SectionTitle.module.css';

export default function SectionTitle({ title, children }) {
  return (
    <section>
      <h1 className={s.title}>{title}</h1>
      {children}
    </section>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
