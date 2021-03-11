import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function CategoryFilter(props) {
  const { handleFilterChange, category } = props;
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const changeFilter = event => {
    handleFilterChange(event.target.value);
  };

  return (
    <div className="select-filter">
      <span>Filter by category:</span>
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
    </div>
  );
}

const mapStateToProps = state => ({
  category: state.filter.category,
});

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func,
  category: PropTypes.string,
};

CategoryFilter.defaultProps = {
  handleFilterChange: null,
  category: 'All',
};

export default connect(mapStateToProps)(CategoryFilter);
