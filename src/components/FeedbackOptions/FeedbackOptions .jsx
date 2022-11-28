// import PropTypes from 'prop-types';
// import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {

  return (
    <div>
      <h2>Please leave feedback</h2>
      {options.map(elem => (
        <button key={elem} type="button" onClick={onLeaveFeedback}>
          {elem}
        </button>
      ))}
    </div>
  );
};
