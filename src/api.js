import axios from 'axios';

const apiKey = 'b4b13a84220748aeb22674d626bb042d';

export default {
  news: {
    get: query => axios.get(`https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&apiKey=${apiKey}`).then(res => res.data.articles)
  }
}