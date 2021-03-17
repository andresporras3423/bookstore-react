import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      category: null,
      messages: ['', 'Book succesfully added', 'invalid book name'],
      classes: ['', 'text-success', 'text-danger'],
      status: 0,
    };
  }

  render() {
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Science Fiction', 'Economy'];
    const {
      title, category, status, messages, classes,
    } = this.state;
    const { handleCreateBook } = this.props;
    const handleChange = name => event => {
      this.setState({
        [name]: event.target.value,
      });
    };

    const handleSubmit = event => {
      event.preventDefault();
      if (title === '') {
        this.setState({ status: 2 });
        return;
      }
      handleCreateBook({
        id: Math.random(),
        title,
        category,
      });
      this.setState({
        title: '',
        category: 'Action',
        status: 1,
      });
    };

    return (
      <form className="form-group booksForm">
        <h1 className="title2">ADD NEW BOOK</h1>
        <div className="row2-form">
          <input
            type="text"
            className="form-control text-form"
            name="myinput"
            id="myinput"
            value={title}
            placeholder="Book title"
            onChange={handleChange('title')}
          />
          <select
            className="form-control text-form"
            value={category}
            onChange={handleChange('category')}
            name="myinput2"
            id="myinput2"
          >
            <option value="" disabled selected>Category</option>
            {
        categories.map(category => (
          <option value={category} key={nanoid()}>{category}</option>
        ))
      }
          </select>
          <input type="submit" value="ADD BOOK" className="btn btn-primary btn-book-form" onClick={handleSubmit} />
        </div>
        <span className={classes[status]}>{messages[status]}</span>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleCreateBook: nBook => {
    dispatch(createBook(nBook));
  },
});

BooksForm.propTypes = {
  handleCreateBook: PropTypes.func,
};

BooksForm.defaultProps = {
  handleCreateBook: null,
};

export default connect(null, mapDispatchToProps)(BooksForm);
