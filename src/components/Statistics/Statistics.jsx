import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <h2 className={css.statTitle}>Statistics</h2>
      <ul className={css.statList}>
        <li className={css.statItem}>Good: {good}</li>
        <li className={css.statItem}>Neutral: {neutral}</li>
        <li className={css.statItem}>Bad: {bad}</li>
        <li className={css.statItem}>Total: {total}</li>
        <li className={css.statItem}>
          Positive feedback: {total > 0 ? positivePercentage : 0}%
        </li>
      </ul>
    </div>
  );
};

Statistics.prototype = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
