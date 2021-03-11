import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilter } from '../actions/index';

function CategoryFilter(props) {
  const { handleChangeFilter, category } = props;
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const changeFilter = event => {
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

const mapStateToProps = state => ({
  category: state.filter.category,
});

const mapDispatchToProps = dispatch => ({
  handleChangeFilter: category => {
    dispatch(changeFilter(category));
  },
});

CategoryFilter.propTypes = {
  handleChangeFilter: PropTypes.func,
  category: PropTypes.string,
};

CategoryFilter.defaultProps = {
  handleChangeFilter: null,
  category: 'All',
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFilter);
