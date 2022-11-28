import PropTypes from 'prop-types';
import css from './Title.module.css';

export const Title = ({ title }) => {
  return <title>{title}</title>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
