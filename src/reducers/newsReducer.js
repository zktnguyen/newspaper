import { actionTypes } from '../actions/news';

export default function(state = {}, action) {
  switch(action.type) {
    case actionTypes.GET_NEWS:
      if (action.payload !== undefined) {
        return {...state, [action.payload.query] : [...action.payload.news.slice(0,5)] };
      }
      return state;
    default:
      return state;
  }
}