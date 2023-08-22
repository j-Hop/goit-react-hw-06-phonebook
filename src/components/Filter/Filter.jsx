import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ value, onChange }) => (
  <label className={css.filter}>
    <input
      className={css.input}
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};