import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilter } from '../actions/index';

function CategoryFilter(props) {
  const { handleChangeFilter } = props;
  const [category, setCategory] = useState('All');
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const changeFilter = event => {
    setCategory(event.target.value);
    handleChangeFilter(event.target.value);
  };

  return (
    <select
      className="form-control"
      value={category}
      onChange={changeFilter}
    >
      {
        categories.map(category => (
          <option value={category} key={nanoid()}>{category}</option>
        ))
      }
    </select>
  );
}

const mapDispatchToProps = dispatch => ({
  handleChangeFilter: category => {
    dispatch(changeFilter(category));
  },
});

CategoryFilter.propTypes = {
  handleChangeFilter: PropTypes.func,
};

CategoryFilter.defaultProps = {
  handleChangeFilter: null,
};

export default connect(null, mapDispatchToProps)(CategoryFilter);
