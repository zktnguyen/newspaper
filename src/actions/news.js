import api from '../api';

const GET_NEWS = 'GET_NEWS';

export const getNews = (query) => dispatch => 
  api.news.get(query).then(news => {
    const action = {
      type: GET_NEWS,
      payload: {
        news,
        query
      }
    };
    dispatch(action);
  });

export const actionTypes = {
  GET_NEWS
};