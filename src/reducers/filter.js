import { CHANGE_FILTER } from '../types/index';

const filterReducer = (state = { category: 'All' }, action) => {
  switch (action.type) {
    case CHANGE_FILTER: return {
      ...state,
      category: action.category,
    };
    default: return state;
  }
};

export default filterReducer;
