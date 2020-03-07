import {FETCH_CALS} from '../actions/types';
export default (state = {}, action) => {
  switch(action.type) {
    case FETCH_CALS:
      return action.payload;
    default:
      return state;
  }
};